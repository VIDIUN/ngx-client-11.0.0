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
export class KalturaUploadRequestAdapter {
    /**
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     */
    constructor(clientOptions, defaultRequestOptions) {
        this.clientOptions = clientOptions;
        this.defaultRequestOptions = defaultRequestOptions;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    _chunkUploadSupported(request) {
        /** @type {?} */
        const supportedByBrowser = ((typeof (File) !== 'undefined')
            &&
                (typeof (Blob) !== 'undefined')
            &&
                (typeof (FileList) !== 'undefined')
            &&
                (!!(/** @type {?} */ (Blob.prototype))['webkitSlice'] || !!(/** @type {?} */ (Blob.prototype))['mozSlice'] || !!(/** @type {?} */ (Blob.prototype)).slice || false));
        /** @type {?} */
        const supportedByRequest = request.supportChunkUpload();
        /** @type {?} */
        const enabledInClient = !this.clientOptions.chunkFileDisabled;
        return enabledInClient && supportedByBrowser && supportedByRequest;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    transmit(request) {
        return Observable.create(observer => {
            /** @type {?} */
            const uploadedFileSize = !isNaN(request.uploadedFileSize) && isFinite(request.uploadedFileSize) && request.uploadedFileSize > 0 ? request.uploadedFileSize : 0;
            /** @type {?} */
            const data = {
                enabled: this._chunkUploadSupported(request),
                resume: !!uploadedFileSize,
                finalChunk: false,
                resumeAt: uploadedFileSize
            };
            /** @type {?} */
            let requestSubscription;
            /** @type {?} */
            const handleChunkUploadError = reason => {
                requestSubscription = null;
                observer.error(reason);
            };
            /** @type {?} */
            const handleChunkUploadSuccess = result => {
                if (!data.enabled || data.finalChunk) {
                    requestSubscription = null;
                    try {
                        /** @type {?} */
                        const response = request.handleResponse(result);
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
                            const errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
                            observer.error(new KalturaClientException('client::response-unknown-error', errorMessage || 'Failed to parse response'));
                        }
                    }
                }
                else {
                    requestSubscription = this._chunkUpload(request, data).subscribe(handleChunkUploadSuccess, handleChunkUploadError);
                }
            };
            requestSubscription = this._chunkUpload(request, data)
                .subscribe(handleChunkUploadSuccess, handleChunkUploadError);
            return () => {
                if (requestSubscription) {
                    requestSubscription.unsubscribe();
                    requestSubscription = null;
                }
            };
        });
    }
    /**
     * @param {?} filePropertyName
     * @param {?} fileName
     * @param {?} fileChunk
     * @return {?}
     */
    _getFormData(filePropertyName, fileName, fileChunk) {
        /** @type {?} */
        const result = new FormData();
        result.append("Filename", fileName);
        result.append(filePropertyName, fileChunk, fileName);
        return result;
    }
    /**
     * @param {?} response
     * @return {?}
     */
    _unwrapResponse(response) {
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
    }
    /**
     * @param {?} request
     * @param {?} uploadChunkData
     * @return {?}
     */
    _chunkUpload(request, uploadChunkData) {
        return Observable.create(observer => {
            /** @type {?} */
            const parameters = prepareParameters(request, this.clientOptions, this.defaultRequestOptions);
            /** @type {?} */
            let isComplete = false;
            const { propertyName, file } = request.getFileInfo();
            /** @type {?} */
            let data = this._getFormData(propertyName, file.name, file);
            /** @type {?} */
            let fileStart = 0;
            /** @type {?} */
            let actualChunkFileSize = null;
            if (uploadChunkData.enabled) {
                /** @type {?} */
                const userChunkFileSize = this.clientOptions ? this.clientOptions.chunkFileSize : null;
                if (userChunkFileSize && Number.isFinite(userChunkFileSize) && !Number.isNaN(userChunkFileSize)) {
                    if (actualChunkFileSize < 1e6) {
                        console.warn(`user requested for invalid upload chunk size '${userChunkFileSize}'. minimal value 1Mb. using minimal value 1Mb instead`);
                        actualChunkFileSize = 1e6;
                    }
                    else {
                        console.log(`using user requetsed chunk size '${userChunkFileSize}'`);
                        actualChunkFileSize = userChunkFileSize;
                    }
                }
                else {
                    console.log(`using default chunk size 5Mb`);
                    actualChunkFileSize = 5e6; // default
                }
                uploadChunkData.finalChunk = (file.size - uploadChunkData.resumeAt) <= actualChunkFileSize;
                fileStart = uploadChunkData.resumeAt;
                /** @type {?} */
                const fileEnd = uploadChunkData.finalChunk ? file.size : fileStart + actualChunkFileSize;
                data = this._getFormData(propertyName, file.name, file.slice(fileStart, fileEnd, file.type));
                parameters.resume = uploadChunkData.resume;
                parameters.resumeAt = uploadChunkData.resumeAt;
                parameters.finalChunk = uploadChunkData.finalChunk;
            }
            else {
                console.log(`chunk upload not supported by browser or by request. Uploading the file as-is`);
            }
            /** @type {?} */
            let endpointUrl = createEndpoint(request, this.clientOptions, parameters['service'], parameters['action']);
            delete parameters['service'];
            delete parameters['action'];
            endpointUrl = buildUrl(endpointUrl, parameters);
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (isComplete) {
                        return;
                    }
                    isComplete = true;
                    /** @type {?} */
                    let resp;
                    try {
                        if (xhr.status === 200) {
                            resp = this._unwrapResponse(JSON.parse(xhr.response));
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
                                observer.error(new KalturaClientException('client::upload-failure', `uploaded chunk of file failed, expected response with property 'uploadedFileSize'`));
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
            const progressCallback = request._getProgressCallback();
            if (progressCallback) {
                xhr.upload.addEventListener("progress", e => {
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
            return () => {
                if (!isComplete) {
                    isComplete = true;
                    xhr.abort();
                }
            };
        });
    }
}
if (false) {
    /** @type {?} */
    KalturaUploadRequestAdapter.prototype.clientOptions;
    /** @type {?} */
    KalturaUploadRequestAdapter.prototype.defaultRequestOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS11cGxvYWQtcmVxdWVzdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FkYXB0ZXJzL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEUsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBUTdDLE1BQU07Ozs7O0lBdUJGLFlBQW1CLGFBQW1DLEVBQVMscUJBQTRDO1FBQXhGLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUFTLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FHMUc7Ozs7O0lBekJPLHFCQUFxQixDQUFDLE9BQWtDOztRQU81RCxNQUFNLGtCQUFrQixHQUFHLENBQ3ZCLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRTlCLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRTlCLENBQUMsT0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFdBQVcsQ0FBQzs7Z0JBRWxDLENBQUMsQ0FBQyxDQUFDLG1CQUFNLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFDLENB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Z0JBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUN4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3RFO29CQUFDLElBQUksQ0FBQyxDQUFDOztxQkFFUDtpQkFDSixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2I7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWYsTUFBTSxDQUFDLEdBQUcsRUFBRTtnQkFDUixFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDbEIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNmO2FBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQzs7Q0FFViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuaW1wb3J0IHsgYnVpbGRVcmwsIGNyZWF0ZUVuZHBvaW50LCBwcmVwYXJlUGFyYW1ldGVycyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTGlrZSBhcyBJU3Vic2NyaXB0aW9uICwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnRFeGNlcHRpb24gfSBmcm9tICcuLi9hcGkva2FsdHVyYS1jbGllbnQtZXhjZXB0aW9uJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLXJlcXVlc3Qtb3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhQ2xpZW50T3B0aW9ucyB9IGZyb20gJy4uL2thbHR1cmEtY2xpZW50LW9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWFwaS1leGNlcHRpb24nO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5cbmludGVyZmFjZSBVcGxvYWRCeUNodW5rc0RhdGEge1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgcmVzdW1lOiBib29sZWFuO1xuICAgIHJlc3VtZUF0OiBudW1iZXI7XG4gICAgZmluYWxDaHVuazogYm9vbGVhbjtcbn1cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFkYXB0ZXIge1xuICAgIHByaXZhdGUgX2NodW5rVXBsb2FkU3VwcG9ydGVkKHJlcXVlc3Q6IEthbHR1cmFVcGxvYWRSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgLy8gU1VQUE9SVEVEIEJZIEJST1dTRVI/XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXNlIGZlYXR1cmVzIGFyZSBzdXBwb3J0IGJ5IHRoZSBicm93c2VyOlxuICAgICAgICAvLyAtIEZpbGUgb2JqZWN0IHR5cGVcbiAgICAgICAgLy8gLSBCbG9iIG9iamVjdCB0eXBlXG4gICAgICAgIC8vIC0gRmlsZUxpc3Qgb2JqZWN0IHR5cGVcbiAgICAgICAgLy8gLSBzbGljaW5nIGZpbGVzXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJ5QnJvd3NlciA9IChcbiAgICAgICAgICAgICh0eXBlb2YoRmlsZSkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh0eXBlb2YoQmxvYikgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh0eXBlb2YoRmlsZUxpc3QpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoISEoPGFueT5CbG9iLnByb3RvdHlwZSlbJ3dlYmtpdFNsaWNlJ10gfHwgISEoPGFueT5CbG9iLnByb3RvdHlwZSlbJ21velNsaWNlJ10gfHwgISEoPGFueT5CbG9iLnByb3RvdHlwZSkuc2xpY2UgfHwgZmFsc2UpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJ5UmVxdWVzdCA9IHJlcXVlc3Quc3VwcG9ydENodW5rVXBsb2FkKCk7XG4gICAgICAgIGNvbnN0IGVuYWJsZWRJbkNsaWVudCA9ICF0aGlzLmNsaWVudE9wdGlvbnMuY2h1bmtGaWxlRGlzYWJsZWQ7XG5cbiAgICAgICAgcmV0dXJuIGVuYWJsZWRJbkNsaWVudCAmJiBzdXBwb3J0ZWRCeUJyb3dzZXIgJiYgc3VwcG9ydGVkQnlSZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjbGllbnRPcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucywgcHVibGljIGRlZmF1bHRSZXF1ZXN0T3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zKVxuICAgIHtcblxuICAgIH1cblxuICAgIHRyYW5zbWl0KHJlcXVlc3Q6IEthbHR1cmFVcGxvYWRSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBsb2FkZWRGaWxlU2l6ZSA9ICFpc05hTihyZXF1ZXN0LnVwbG9hZGVkRmlsZVNpemUpICYmIGlzRmluaXRlKHJlcXVlc3QudXBsb2FkZWRGaWxlU2l6ZSkgJiYgcmVxdWVzdC51cGxvYWRlZEZpbGVTaXplID4gMCA/IHJlcXVlc3QudXBsb2FkZWRGaWxlU2l6ZSA6IDA7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBVcGxvYWRCeUNodW5rc0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5fY2h1bmtVcGxvYWRTdXBwb3J0ZWQocmVxdWVzdCksXG4gICAgICAgICAgICAgICAgcmVzdW1lOiAhIXVwbG9hZGVkRmlsZVNpemUsXG4gICAgICAgICAgICAgICAgZmluYWxDaHVuazogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzdW1lQXQ6IHVwbG9hZGVkRmlsZVNpemVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCByZXF1ZXN0U3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDaHVua1VwbG9hZEVycm9yID0gcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihyZWFzb24pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2h1bmtVcGxvYWRTdWNjZXNzID0gcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZW5hYmxlZCB8fCBkYXRhLmZpbmFsQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5oYW5kbGVSZXNwb25zZShyZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihyZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcG9uc2UucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB8fCBlcnJvciBpbnN0YW5jZW9mIEthbHR1cmFBUElFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjpyZXNwb25zZS11bmtub3duLWVycm9yJywgZXJyb3JNZXNzYWdlIHx8ICdGYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFN1YnNjcmlwdGlvbiA9IHRoaXMuX2NodW5rVXBsb2FkKHJlcXVlc3QsIGRhdGEpLnN1YnNjcmliZShoYW5kbGVDaHVua1VwbG9hZFN1Y2Nlc3MsIGhhbmRsZUNodW5rVXBsb2FkRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcXVlc3RTdWJzY3JpcHRpb24gPSB0aGlzLl9jaHVua1VwbG9hZChyZXF1ZXN0LCBkYXRhKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoaGFuZGxlQ2h1bmtVcGxvYWRTdWNjZXNzLCBoYW5kbGVDaHVua1VwbG9hZEVycm9yKTtcblxuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Rm9ybURhdGEoZmlsZVByb3BlcnR5TmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBmaWxlQ2h1bms6IEZpbGUgfCBCbG9iKTogRm9ybURhdGEge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZChcIkZpbGVuYW1lXCIsIGZpbGVOYW1lKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZChmaWxlUHJvcGVydHlOYW1lLCBmaWxlQ2h1bmssIGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91bndyYXBSZXNwb25zZShyZXNwb25zZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVudmlyb25tZW50LnJlc3BvbnNlLm5lc3RlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3Jlc3VsdCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0LmVycm9yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaHVua1VwbG9hZChyZXF1ZXN0OiBLYWx0dXJhVXBsb2FkUmVxdWVzdDxhbnk+LCB1cGxvYWRDaHVua0RhdGE6IFVwbG9hZEJ5Q2h1bmtzRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gcHJlcGFyZVBhcmFtZXRlcnMocmVxdWVzdCwgdGhpcy5jbGllbnRPcHRpb25zLCB0aGlzLmRlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCB7cHJvcGVydHlOYW1lLCBmaWxlfSA9IHJlcXVlc3QuZ2V0RmlsZUluZm8oKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5fZ2V0Rm9ybURhdGEocHJvcGVydHlOYW1lLCBmaWxlLm5hbWUsIGZpbGUpO1xuXG4gICAgICAgICAgICBsZXQgZmlsZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGxldCBhY3R1YWxDaHVua0ZpbGVTaXplOiBudW1iZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAodXBsb2FkQ2h1bmtEYXRhLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQ2h1bmtGaWxlU2l6ZSA9IHRoaXMuY2xpZW50T3B0aW9ucyA/IHRoaXMuY2xpZW50T3B0aW9ucy5jaHVua0ZpbGVTaXplIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh1c2VyQ2h1bmtGaWxlU2l6ZSAmJiBOdW1iZXIuaXNGaW5pdGUodXNlckNodW5rRmlsZVNpemUpICYmICFOdW1iZXIuaXNOYU4odXNlckNodW5rRmlsZVNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3R1YWxDaHVua0ZpbGVTaXplIDwgMWU2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHVzZXIgcmVxdWVzdGVkIGZvciBpbnZhbGlkIHVwbG9hZCBjaHVuayBzaXplICcke3VzZXJDaHVua0ZpbGVTaXplfScuIG1pbmltYWwgdmFsdWUgMU1iLiB1c2luZyBtaW5pbWFsIHZhbHVlIDFNYiBpbnN0ZWFkYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWxDaHVua0ZpbGVTaXplID0gMWU2O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVzaW5nIHVzZXIgcmVxdWV0c2VkIGNodW5rIHNpemUgJyR7dXNlckNodW5rRmlsZVNpemV9J2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ2h1bmtGaWxlU2l6ZSA9IHVzZXJDaHVua0ZpbGVTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVzaW5nIGRlZmF1bHQgY2h1bmsgc2l6ZSA1TWJgKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsQ2h1bmtGaWxlU2l6ZSA9IDVlNjsgLy8gZGVmYXVsdFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwbG9hZENodW5rRGF0YS5maW5hbENodW5rID0gKGZpbGUuc2l6ZSAtIHVwbG9hZENodW5rRGF0YS5yZXN1bWVBdCkgPD0gYWN0dWFsQ2h1bmtGaWxlU2l6ZTtcblxuICAgICAgICAgICAgICAgIGZpbGVTdGFydCA9IHVwbG9hZENodW5rRGF0YS5yZXN1bWVBdDtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRW5kID0gdXBsb2FkQ2h1bmtEYXRhLmZpbmFsQ2h1bmsgPyBmaWxlLnNpemUgOiBmaWxlU3RhcnQgKyBhY3R1YWxDaHVua0ZpbGVTaXplO1xuXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2dldEZvcm1EYXRhKHByb3BlcnR5TmFtZSwgZmlsZS5uYW1lLCBmaWxlLnNsaWNlKGZpbGVTdGFydCwgZmlsZUVuZCwgZmlsZS50eXBlKSk7XG5cbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnJlc3VtZSA9IHVwbG9hZENodW5rRGF0YS5yZXN1bWU7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5yZXN1bWVBdCA9IHVwbG9hZENodW5rRGF0YS5yZXN1bWVBdDtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmZpbmFsQ2h1bmsgPSB1cGxvYWRDaHVua0RhdGEuZmluYWxDaHVuaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGNodW5rIHVwbG9hZCBub3Qgc3VwcG9ydGVkIGJ5IGJyb3dzZXIgb3IgYnkgcmVxdWVzdC4gVXBsb2FkaW5nIHRoZSBmaWxlIGFzLWlzYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBlbmRwb2ludFVybCA9IGNyZWF0ZUVuZHBvaW50KHJlcXVlc3QsIHRoaXMuY2xpZW50T3B0aW9ucywgcGFyYW1ldGVyc1snc2VydmljZSddLCBwYXJhbWV0ZXJzWydhY3Rpb24nXSk7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1snc2VydmljZSddO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ2FjdGlvbiddO1xuICAgICAgICAgICAgZW5kcG9pbnRVcmwgPSBidWlsZFVybChlbmRwb2ludFVybCwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcDtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AgPSB0aGlzLl91bndyYXBSZXNwb25zZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5vYmplY3RUeXBlID09PSAnS2FsdHVyYUFQSUV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcCA9IG5ldyBLYWx0dXJhQVBJRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC5hcmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwID0gbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6dXBsb2FkLWZhaWx1cmUnLCB4aHIucmVzcG9uc2VUZXh0IHx8ICdmYWlsZWQgdG8gdXBsb2FkIGZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcCA9IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnVwbG9hZC1mYWlsdXJlJywgZS5tZXNzYWdlIHx8ICdmYWlsZWQgdG8gdXBsb2FkIGZpbGUnKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBsb2FkQ2h1bmtEYXRhLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3AudXBsb2FkZWRGaWxlU2l6ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCByZXNwLnVwbG9hZGVkRmlsZVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6dXBsb2FkLWZhaWx1cmUnLCBgdXBsb2FkZWQgY2h1bmsgb2YgZmlsZSBmYWlsZWQsIGV4cGVjdGVkIHJlc3BvbnNlIHdpdGggcHJvcGVydHkgJ3VwbG9hZGVkRmlsZVNpemUnYCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdXBsb2FkQ2h1bmtEYXRhLmZpbmFsQ2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkQ2h1bmtEYXRhLnJlc3VtZUF0ID0gTnVtYmVyKHJlc3AudXBsb2FkZWRGaWxlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZENodW5rRGF0YS5yZXN1bWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0NhbGxiYWNrID0gcmVxdWVzdC5fZ2V0UHJvZ3Jlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjay5hcHBseShyZXF1ZXN0LCBbZS5sb2FkZWQgKyBmaWxlU3RhcnQsIGZpbGUuc2l6ZV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5hYmxlIHRvIGNvbXB1dGUgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gc2luY2UgdGhlIHRvdGFsIHNpemUgaXMgdW5rbm93blxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgZW5kcG9pbnRVcmwpO1xuICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=