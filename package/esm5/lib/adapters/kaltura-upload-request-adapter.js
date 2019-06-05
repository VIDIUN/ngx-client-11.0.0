/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { buildUrl, createEndpoint, prepareParameters } from './utils';
import { Observable } from 'rxjs';
import { KalturaClientException } from '../api/kaltura-client-exception';
import { KalturaAPIException } from '../api/kaltura-api-exception';
import { environment } from '../environment';
/**
 * @record
 */
function UploadByChunksData() { }
/** @type {?} */
UploadByChunksData.prototype.enabled;
/** @type {?} */
UploadByChunksData.prototype.resume;
/** @type {?} */
UploadByChunksData.prototype.resumeAt;
/** @type {?} */
UploadByChunksData.prototype.finalChunk;
var KalturaUploadRequestAdapter = /** @class */ (function () {
    function KalturaUploadRequestAdapter(clientOptions, defaultRequestOptions) {
        this.clientOptions = clientOptions;
        this.defaultRequestOptions = defaultRequestOptions;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    KalturaUploadRequestAdapter.prototype._chunkUploadSupported = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var supportedByBrowser = ((typeof (File) !== 'undefined')
            &&
                (typeof (Blob) !== 'undefined')
            &&
                (typeof (FileList) !== 'undefined')
            &&
                (!!(/** @type {?} */ (Blob.prototype))['webkitSlice'] || !!(/** @type {?} */ (Blob.prototype))['mozSlice'] || !!(/** @type {?} */ (Blob.prototype)).slice || false));
        /** @type {?} */
        var supportedByRequest = request.supportChunkUpload();
        /** @type {?} */
        var enabledInClient = !this.clientOptions.chunkFileDisabled;
        return enabledInClient && supportedByBrowser && supportedByRequest;
    };
    /**
     * @param {?} request
     * @return {?}
     */
    KalturaUploadRequestAdapter.prototype.transmit = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        return Observable.create(function (observer) {
            /** @type {?} */
            var uploadedFileSize = !isNaN(request.uploadedFileSize) && isFinite(request.uploadedFileSize) && request.uploadedFileSize > 0 ? request.uploadedFileSize : 0;
            /** @type {?} */
            var data = {
                enabled: _this._chunkUploadSupported(request),
                resume: !!uploadedFileSize,
                finalChunk: false,
                resumeAt: uploadedFileSize
            };
            /** @type {?} */
            var requestSubscription;
            /** @type {?} */
            var handleChunkUploadError = function (reason) {
                requestSubscription = null;
                observer.error(reason);
            };
            /** @type {?} */
            var handleChunkUploadSuccess = function (result) {
                if (!data.enabled || data.finalChunk) {
                    requestSubscription = null;
                    try {
                        /** @type {?} */
                        var response = request.handleResponse(result);
                        if (response.error) {
                            observer.error(response.error);
                        }
                        else {
                            observer.next(response.result);
                            observer.complete();
                        }
                    }
                    catch (error) {
                        if (error instanceof KalturaClientException || error instanceof KalturaAPIException) {
                            observer.error(error);
                        }
                        else {
                            /** @type {?} */
                            var errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
                            observer.error(new KalturaClientException('client::response-unknown-error', errorMessage || 'Failed to parse response'));
                        }
                    }
                }
                else {
                    requestSubscription = _this._chunkUpload(request, data).subscribe(handleChunkUploadSuccess, handleChunkUploadError);
                }
            };
            requestSubscription = _this._chunkUpload(request, data)
                .subscribe(handleChunkUploadSuccess, handleChunkUploadError);
            return function () {
                if (requestSubscription) {
                    requestSubscription.unsubscribe();
                    requestSubscription = null;
                }
            };
        });
    };
    /**
     * @param {?} filePropertyName
     * @param {?} fileName
     * @param {?} fileChunk
     * @return {?}
     */
    KalturaUploadRequestAdapter.prototype._getFormData = /**
     * @param {?} filePropertyName
     * @param {?} fileName
     * @param {?} fileChunk
     * @return {?}
     */
    function (filePropertyName, fileName, fileChunk) {
        /** @type {?} */
        var result = new FormData();
        result.append("Filename", fileName);
        result.append(filePropertyName, fileChunk, fileName);
        return result;
    };
    /**
     * @param {?} response
     * @return {?}
     */
    KalturaUploadRequestAdapter.prototype._unwrapResponse = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (environment.response.nestedResponse) {
            if (response && response.hasOwnProperty('result')) {
                if (response.result.hasOwnProperty('error')) {
                    return response.result.error;
                }
                else {
                    return response.result;
                }
            }
            else if (response && response.hasOwnProperty('error')) {
                return response.error;
            }
        }
        return response;
    };
    /**
     * @param {?} request
     * @param {?} uploadChunkData
     * @return {?}
     */
    KalturaUploadRequestAdapter.prototype._chunkUpload = /**
     * @param {?} request
     * @param {?} uploadChunkData
     * @return {?}
     */
    function (request, uploadChunkData) {
        var _this = this;
        return Observable.create(function (observer) {
            /** @type {?} */
            var parameters = prepareParameters(request, _this.clientOptions, _this.defaultRequestOptions);
            /** @type {?} */
            var isComplete = false;
            var _a = request.getFileInfo(), propertyName = _a.propertyName, file = _a.file;
            /** @type {?} */
            var data = _this._getFormData(propertyName, file.name, file);
            /** @type {?} */
            var fileStart = 0;
            /** @type {?} */
            var actualChunkFileSize = null;
            if (uploadChunkData.enabled) {
                /** @type {?} */
                var userChunkFileSize = _this.clientOptions ? _this.clientOptions.chunkFileSize : null;
                if (userChunkFileSize && Number.isFinite(userChunkFileSize) && !Number.isNaN(userChunkFileSize)) {
                    if (actualChunkFileSize < 1e6) {
                        console.warn("user requested for invalid upload chunk size '" + userChunkFileSize + "'. minimal value 1Mb. using minimal value 1Mb instead");
                        actualChunkFileSize = 1e6;
                    }
                    else {
                        console.log("using user requetsed chunk size '" + userChunkFileSize + "'");
                        actualChunkFileSize = userChunkFileSize;
                    }
                }
                else {
                    console.log("using default chunk size 5Mb");
                    actualChunkFileSize = 5e6; // default
                }
                uploadChunkData.finalChunk = (file.size - uploadChunkData.resumeAt) <= actualChunkFileSize;
                fileStart = uploadChunkData.resumeAt;
                /** @type {?} */
                var fileEnd = uploadChunkData.finalChunk ? file.size : fileStart + actualChunkFileSize;
                data = _this._getFormData(propertyName, file.name, file.slice(fileStart, fileEnd, file.type));
                parameters.resume = uploadChunkData.resume;
                parameters.resumeAt = uploadChunkData.resumeAt;
                parameters.finalChunk = uploadChunkData.finalChunk;
            }
            else {
                console.log("chunk upload not supported by browser or by request. Uploading the file as-is");
            }
            /** @type {?} */
            var endpointUrl = createEndpoint(request, _this.clientOptions, parameters['service'], parameters['action']);
            delete parameters['service'];
            delete parameters['action'];
            endpointUrl = buildUrl(endpointUrl, parameters);
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (isComplete) {
                        return;
                    }
                    isComplete = true;
                    /** @type {?} */
                    var resp = void 0;
                    try {
                        if (xhr.status === 200) {
                            resp = _this._unwrapResponse(JSON.parse(xhr.response));
                            if (resp && resp.objectType === 'KalturaAPIException') {
                                resp = new KalturaAPIException(resp.message, resp.code, resp.args);
                            }
                        }
                        else {
                            resp = new KalturaClientException('client::upload-failure', xhr.responseText || 'failed to upload file');
                        }
                    }
                    catch (e) {
                        resp = new KalturaClientException('client::upload-failure', e.message || 'failed to upload file');
                    }
                    if (resp instanceof Error) {
                        observer.error(resp);
                    }
                    else {
                        if (uploadChunkData.enabled) {
                            if (typeof resp.uploadedFileSize === "undefined" || resp.uploadedFileSize === null) {
                                observer.error(new KalturaClientException('client::upload-failure', "uploaded chunk of file failed, expected response with property 'uploadedFileSize'"));
                                return;
                            }
                            else if (!uploadChunkData.finalChunk) {
                                uploadChunkData.resumeAt = Number(resp.uploadedFileSize);
                                uploadChunkData.resume = true;
                            }
                        }
                        observer.next(resp);
                        observer.complete();
                    }
                }
            };
            /** @type {?} */
            var progressCallback = request._getProgressCallback();
            if (progressCallback) {
                xhr.upload.addEventListener("progress", function (e) {
                    if (e.lengthComputable) {
                        progressCallback.apply(request, [e.loaded + fileStart, file.size]);
                    }
                    else {
                        // Unable to compute progress information since the total size is unknown
                    }
                }, false);
            }
            xhr.open("POST", endpointUrl);
            xhr.send(data);
            return function () {
                if (!isComplete) {
                    isComplete = true;
                    xhr.abort();
                }
            };
        });
    };
    return KalturaUploadRequestAdapter;
}());
export { KalturaUploadRequestAdapter };
if (false) {
    /** @type {?} */
    KalturaUploadRequestAdapter.prototype.clientOptions;
    /** @type {?} */
    KalturaUploadRequestAdapter.prototype.defaultRequestOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS11cGxvYWQtcmVxdWVzdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FkYXB0ZXJzL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEUsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBUTdDLElBQUE7SUF1QkkscUNBQW1CLGFBQW1DLEVBQVMscUJBQTRDO1FBQXhGLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUFTLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FHMUc7Ozs7O0lBekJPLDJEQUFxQjs7OztjQUFDLE9BQWtDOztRQU81RCxJQUFNLGtCQUFrQixHQUFHLENBQ3ZCLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRTlCLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRTlCLENBQUMsT0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRWxDLENBQUMsQ0FBQyxDQUFDLG1CQUFNLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFDLENB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Q0FBQyxVQUFVLEVBQUUsVUFBQSxDQUFDO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3RFO29CQUFDLElBQUksQ0FBQyxDQUFDOztxQkFFUDtpQkFDSixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2I7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWYsTUFBTSxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDZCxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Y7YUFDSixDQUFDO1NBQ0wsQ0FBQyxDQUFDOztzQ0E3T1g7SUErT0MsQ0FBQTtBQWhPRCx1Q0FnT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcbmltcG9ydCB7IGJ1aWxkVXJsLCBjcmVhdGVFbmRwb2ludCwgcHJlcGFyZVBhcmFtZXRlcnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UgYXMgSVN1YnNjcmlwdGlvbiAsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtY2xpZW50LWV4Y2VwdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudE9wdGlvbnMgfSBmcm9tICcuLi9rYWx0dXJhLWNsaWVudC1vcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFBUElFeGNlcHRpb24gfSBmcm9tICcuLi9hcGkva2FsdHVyYS1hcGktZXhjZXB0aW9uJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG5pbnRlcmZhY2UgVXBsb2FkQnlDaHVua3NEYXRhIHtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIHJlc3VtZTogYm9vbGVhbjtcbiAgICByZXN1bWVBdDogbnVtYmVyO1xuICAgIGZpbmFsQ2h1bms6IGJvb2xlYW47XG59XG5leHBvcnQgY2xhc3MgS2FsdHVyYVVwbG9hZFJlcXVlc3RBZGFwdGVyIHtcbiAgICBwcml2YXRlIF9jaHVua1VwbG9hZFN1cHBvcnRlZChyZXF1ZXN0OiBLYWx0dXJhVXBsb2FkUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFNVUFBPUlRFRCBCWSBCUk9XU0VSP1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVzZSBmZWF0dXJlcyBhcmUgc3VwcG9ydCBieSB0aGUgYnJvd3NlcjpcbiAgICAgICAgLy8gLSBGaWxlIG9iamVjdCB0eXBlXG4gICAgICAgIC8vIC0gQmxvYiBvYmplY3QgdHlwZVxuICAgICAgICAvLyAtIEZpbGVMaXN0IG9iamVjdCB0eXBlXG4gICAgICAgIC8vIC0gc2xpY2luZyBmaWxlc1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRCeUJyb3dzZXIgPSAoXG4gICAgICAgICAgICAodHlwZW9mKEZpbGUpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodHlwZW9mKEJsb2IpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodHlwZW9mKEZpbGVMaXN0KSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKCEhKDxhbnk+QmxvYi5wcm90b3R5cGUpWyd3ZWJraXRTbGljZSddIHx8ICEhKDxhbnk+QmxvYi5wcm90b3R5cGUpWydtb3pTbGljZSddIHx8ICEhKDxhbnk+QmxvYi5wcm90b3R5cGUpLnNsaWNlIHx8IGZhbHNlKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRCeVJlcXVlc3QgPSByZXF1ZXN0LnN1cHBvcnRDaHVua1VwbG9hZCgpO1xuICAgICAgICBjb25zdCBlbmFibGVkSW5DbGllbnQgPSAhdGhpcy5jbGllbnRPcHRpb25zLmNodW5rRmlsZURpc2FibGVkO1xuXG4gICAgICAgIHJldHVybiBlbmFibGVkSW5DbGllbnQgJiYgc3VwcG9ydGVkQnlCcm93c2VyICYmIHN1cHBvcnRlZEJ5UmVxdWVzdDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xpZW50T3B0aW9uczogS2FsdHVyYUNsaWVudE9wdGlvbnMsIHB1YmxpYyBkZWZhdWx0UmVxdWVzdE9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucylcbiAgICB7XG5cbiAgICB9XG5cbiAgICB0cmFuc21pdChyZXF1ZXN0OiBLYWx0dXJhVXBsb2FkUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVkRmlsZVNpemUgPSAhaXNOYU4ocmVxdWVzdC51cGxvYWRlZEZpbGVTaXplKSAmJiBpc0Zpbml0ZShyZXF1ZXN0LnVwbG9hZGVkRmlsZVNpemUpICYmIHJlcXVlc3QudXBsb2FkZWRGaWxlU2l6ZSA+IDAgPyByZXF1ZXN0LnVwbG9hZGVkRmlsZVNpemUgOiAwO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogVXBsb2FkQnlDaHVua3NEYXRhID0ge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NodW5rVXBsb2FkU3VwcG9ydGVkKHJlcXVlc3QpLFxuICAgICAgICAgICAgICAgIHJlc3VtZTogISF1cGxvYWRlZEZpbGVTaXplLFxuICAgICAgICAgICAgICAgIGZpbmFsQ2h1bms6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VtZUF0OiB1cGxvYWRlZEZpbGVTaXplXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFN1YnNjcmlwdGlvbjogSVN1YnNjcmlwdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2h1bmtVcGxvYWRFcnJvciA9IHJlYXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVhc29uKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUNodW5rVXBsb2FkU3VjY2VzcyA9IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVuYWJsZWQgfHwgZGF0YS5maW5hbENodW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RTdWJzY3JpcHRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuaGFuZGxlUmVzcG9uc2UocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEthbHR1cmFDbGllbnRFeGNlcHRpb24gfHwgZXJyb3IgaW5zdGFuY2VvZiBLYWx0dXJhQVBJRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6cmVzcG9uc2UtdW5rbm93bi1lcnJvcicsIGVycm9yTWVzc2FnZSB8fCAnRmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RTdWJzY3JpcHRpb24gPSB0aGlzLl9jaHVua1VwbG9hZChyZXF1ZXN0LCBkYXRhKS5zdWJzY3JpYmUoaGFuZGxlQ2h1bmtVcGxvYWRTdWNjZXNzLCBoYW5kbGVDaHVua1VwbG9hZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXF1ZXN0U3Vic2NyaXB0aW9uID0gdGhpcy5fY2h1bmtVcGxvYWQocmVxdWVzdCwgZGF0YSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGhhbmRsZUNodW5rVXBsb2FkU3VjY2VzcywgaGFuZGxlQ2h1bmtVcGxvYWRFcnJvcik7XG5cblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEZvcm1EYXRhKGZpbGVQcm9wZXJ0eU5hbWU6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgZmlsZUNodW5rOiBGaWxlIHwgQmxvYik6IEZvcm1EYXRhIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIHJlc3VsdC5hcHBlbmQoXCJGaWxlbmFtZVwiLCBmaWxlTmFtZSk7XG4gICAgICAgIHJlc3VsdC5hcHBlbmQoZmlsZVByb3BlcnR5TmFtZSwgZmlsZUNodW5rLCBmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdW53cmFwUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbnZpcm9ubWVudC5yZXNwb25zZS5uZXN0ZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdyZXN1bHQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdC5lcnJvcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2h1bmtVcGxvYWQocmVxdWVzdDogS2FsdHVyYVVwbG9hZFJlcXVlc3Q8YW55PiwgdXBsb2FkQ2h1bmtEYXRhOiBVcGxvYWRCeUNodW5rc0RhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHByZXBhcmVQYXJhbWV0ZXJzKHJlcXVlc3QsIHRoaXMuY2xpZW50T3B0aW9ucywgdGhpcy5kZWZhdWx0UmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3Qge3Byb3BlcnR5TmFtZSwgZmlsZX0gPSByZXF1ZXN0LmdldEZpbGVJbmZvKCk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2dldEZvcm1EYXRhKHByb3BlcnR5TmFtZSwgZmlsZS5uYW1lLCBmaWxlKTtcblxuICAgICAgICAgICAgbGV0IGZpbGVTdGFydCA9IDA7XG4gICAgICAgICAgICBsZXQgYWN0dWFsQ2h1bmtGaWxlU2l6ZTogbnVtYmVyID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHVwbG9hZENodW5rRGF0YS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckNodW5rRmlsZVNpemUgPSB0aGlzLmNsaWVudE9wdGlvbnMgPyB0aGlzLmNsaWVudE9wdGlvbnMuY2h1bmtGaWxlU2l6ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlckNodW5rRmlsZVNpemUgJiYgTnVtYmVyLmlzRmluaXRlKHVzZXJDaHVua0ZpbGVTaXplKSAmJiAhTnVtYmVyLmlzTmFOKHVzZXJDaHVua0ZpbGVTaXplKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0dWFsQ2h1bmtGaWxlU2l6ZSA8IDFlNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGB1c2VyIHJlcXVlc3RlZCBmb3IgaW52YWxpZCB1cGxvYWQgY2h1bmsgc2l6ZSAnJHt1c2VyQ2h1bmtGaWxlU2l6ZX0nLiBtaW5pbWFsIHZhbHVlIDFNYi4gdXNpbmcgbWluaW1hbCB2YWx1ZSAxTWIgaW5zdGVhZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ2h1bmtGaWxlU2l6ZSA9IDFlNjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2luZyB1c2VyIHJlcXVldHNlZCBjaHVuayBzaXplICcke3VzZXJDaHVua0ZpbGVTaXplfSdgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbENodW5rRmlsZVNpemUgPSB1c2VyQ2h1bmtGaWxlU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2luZyBkZWZhdWx0IGNodW5rIHNpemUgNU1iYCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbENodW5rRmlsZVNpemUgPSA1ZTY7IC8vIGRlZmF1bHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGxvYWRDaHVua0RhdGEuZmluYWxDaHVuayA9IChmaWxlLnNpemUgLSB1cGxvYWRDaHVua0RhdGEucmVzdW1lQXQpIDw9IGFjdHVhbENodW5rRmlsZVNpemU7XG5cbiAgICAgICAgICAgICAgICBmaWxlU3RhcnQgPSB1cGxvYWRDaHVua0RhdGEucmVzdW1lQXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUVuZCA9IHVwbG9hZENodW5rRGF0YS5maW5hbENodW5rID8gZmlsZS5zaXplIDogZmlsZVN0YXJ0ICsgYWN0dWFsQ2h1bmtGaWxlU2l6ZTtcblxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9nZXRGb3JtRGF0YShwcm9wZXJ0eU5hbWUsIGZpbGUubmFtZSwgZmlsZS5zbGljZShmaWxlU3RhcnQsIGZpbGVFbmQsIGZpbGUudHlwZSkpO1xuXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5yZXN1bWUgPSB1cGxvYWRDaHVua0RhdGEucmVzdW1lO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucmVzdW1lQXQgPSB1cGxvYWRDaHVua0RhdGEucmVzdW1lQXQ7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5maW5hbENodW5rID0gdXBsb2FkQ2h1bmtEYXRhLmZpbmFsQ2h1bms7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjaHVuayB1cGxvYWQgbm90IHN1cHBvcnRlZCBieSBicm93c2VyIG9yIGJ5IHJlcXVlc3QuIFVwbG9hZGluZyB0aGUgZmlsZSBhcy1pc2ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnRVcmwgPSBjcmVhdGVFbmRwb2ludChyZXF1ZXN0LCB0aGlzLmNsaWVudE9wdGlvbnMsIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXSwgcGFyYW1ldGVyc1snYWN0aW9uJ10pO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbWV0ZXJzWydhY3Rpb24nXTtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsID0gYnVpbGRVcmwoZW5kcG9pbnRVcmwsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3A7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwID0gdGhpcy5fdW53cmFwUmVzcG9uc2UoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3Aub2JqZWN0VHlwZSA9PT0gJ0thbHR1cmFBUElFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AgPSBuZXcgS2FsdHVyYUFQSUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AuYXJnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcCA9IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnVwbG9hZC1mYWlsdXJlJywgeGhyLnJlc3BvbnNlVGV4dCB8fCAnZmFpbGVkIHRvIHVwbG9hZCBmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AgPSBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50Ojp1cGxvYWQtZmFpbHVyZScsIGUubWVzc2FnZSB8fCAnZmFpbGVkIHRvIHVwbG9hZCBmaWxlJylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwbG9hZENodW5rRGF0YS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwLnVwbG9hZGVkRmlsZVNpemUgPT09IFwidW5kZWZpbmVkXCIgfHwgcmVzcC51cGxvYWRlZEZpbGVTaXplID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnVwbG9hZC1mYWlsdXJlJywgYHVwbG9hZGVkIGNodW5rIG9mIGZpbGUgZmFpbGVkLCBleHBlY3RlZCByZXNwb25zZSB3aXRoIHByb3BlcnR5ICd1cGxvYWRlZEZpbGVTaXplJ2ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXVwbG9hZENodW5rRGF0YS5maW5hbENodW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZENodW5rRGF0YS5yZXN1bWVBdCA9IE51bWJlcihyZXNwLnVwbG9hZGVkRmlsZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRDaHVua0RhdGEucmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IHJlcXVlc3QuX2dldFByb2dyZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2suYXBwbHkocmVxdWVzdCwgW2UubG9hZGVkICsgZmlsZVN0YXJ0LCBmaWxlLnNpemVdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuYWJsZSB0byBjb21wdXRlIHByb2dyZXNzIGluZm9ybWF0aW9uIHNpbmNlIHRoZSB0b3RhbCBzaXplIGlzIHVua25vd25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIGVuZHBvaW50VXJsKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19