/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequestBase } from "./kaltura-request-base";
import { KalturaMultiResponse } from "./kaltura-multi-response";
import { KalturaAPIException } from "./kaltura-api-exception";
import { environment } from '../environment';
var KalturaMultiRequest = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMultiRequest, _super);
    function KalturaMultiRequest() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, {}) || this;
        _this.requests = [];
        _this.requests = args;
        return _this;
    }
    /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    KalturaMultiRequest.prototype.buildRequest = /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    function (defaultRequestOptions) {
        /** @type {?} */
        var result = _super.prototype.toRequestObject.call(this);
        for (var i = 0, length_1 = this.requests.length; i < length_1; i++) {
            result[i] = this.requests[i].buildRequest(defaultRequestOptions);
        }
        return result;
    };
    /**
     * @return {?}
     */
    KalturaMultiRequest.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { default: 'multirequest', type: 'c' }
        });
        return result;
    };
    /**
     * @param {?} response
     * @return {?}
     */
    KalturaMultiRequest.prototype._unwrapResponse = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (environment.response.nestedResponse) {
            if (response && response.hasOwnProperty('result')) {
                return response.result;
            }
            else if (response && response.hasOwnProperty('error')) {
                return response.error;
            }
        }
        return response;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    KalturaMultiRequest.prototype.setCompletion = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.callback = callback;
        return this;
    };
    /**
     * @param {?} responses
     * @return {?}
     */
    KalturaMultiRequest.prototype.handleResponse = /**
     * @param {?} responses
     * @return {?}
     */
    function (responses) {
        /** @type {?} */
        var kalturaResponses = [];
        /** @type {?} */
        var unwrappedResponse = this._unwrapResponse(responses);
        /** @type {?} */
        var responseObject = null;
        if (!unwrappedResponse || !(unwrappedResponse instanceof Array) || unwrappedResponse.length !== this.requests.length) {
            /** @type {?} */
            var response = new KalturaAPIException("server response is invalid, expected array of " + this.requests.length, 'client::response_type_error', null);
            for (var i = 0, len = this.requests.length; i < len; i++) {
                kalturaResponses.push(this.requests[i].handleResponse(response));
            }
        }
        else {
            for (var i = 0, len = this.requests.length; i < len; i++) {
                /** @type {?} */
                var serverResponse = unwrappedResponse[i];
                kalturaResponses.push(this.requests[i].handleResponse(serverResponse));
            }
            if (this.callback) {
                try {
                    this.callback(new KalturaMultiResponse(kalturaResponses));
                }
                catch (ex) {
                    // do nothing by design
                }
            }
        }
        return new KalturaMultiResponse(kalturaResponses);
    };
    return KalturaMultiRequest;
}(KalturaRequestBase));
export { KalturaMultiRequest };
if (false) {
    /** @type {?} */
    KalturaMultiRequest.prototype.callback;
    /** @type {?} */
    KalturaMultiRequest.prototype.requests;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS9rYWx0dXJhLW11bHRpLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsSUFBQTtJQUF5QywrQ0FBa0I7SUFNdkQ7UUFBWSxjQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIseUJBQThCOztRQUExQyxZQUNJLGtCQUFNLEVBQUUsQ0FBQyxTQUVaO3lCQUxpQyxFQUFFO1FBSWhDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztLQUN4Qjs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEscUJBQTRDOztRQUNyRCxJQUFNLE1BQU0sR0FBRyxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUV2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNwRTtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFN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Q0FBQztLQUNyRDs4QkEzRkw7RUFXeUMsa0JBQWtCLEVBaUYxRCxDQUFBO0FBakZELCtCQWlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFSZXNwb25zZSB9IGZyb20gXCIuL2thbHR1cmEtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0IH0gZnJvbSBcIi4va2FsdHVyYS1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdEJhc2UgfSBmcm9tIFwiLi9rYWx0dXJhLXJlcXVlc3QtYmFzZVwiO1xuXG5pbXBvcnQgeyBLYWx0dXJhTXVsdGlSZXNwb25zZSB9IGZyb20gXCIuL2thbHR1cmEtbXVsdGktcmVzcG9uc2VcIjtcbmltcG9ydCB7IEthbHR1cmFBUElFeGNlcHRpb24gfSBmcm9tIFwiLi9rYWx0dXJhLWFwaS1leGNlcHRpb25cIjtcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTXVsdGlSZXF1ZXN0IGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RCYXNlIHtcblxuICAgIHByb3RlY3RlZCBjYWxsYmFjazogKHJlc3BvbnNlOiBLYWx0dXJhTXVsdGlSZXNwb25zZSkgPT4gdm9pZDtcblxuICAgIHJlcXVlc3RzOiBLYWx0dXJhUmVxdWVzdDxhbnk+W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IEthbHR1cmFSZXF1ZXN0PGFueT5bXSkge1xuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIHRoaXMucmVxdWVzdHMgPSBhcmdzO1xuICAgIH1cblxuICAgIGJ1aWxkUmVxdWVzdChkZWZhdWx0UmVxdWVzdE9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyk6IHt9IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIudG9SZXF1ZXN0T2JqZWN0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRoaXMucmVxdWVzdHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHRoaXMucmVxdWVzdHNbaV0uYnVpbGRSZXF1ZXN0KGRlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyBkZWZhdWx0IDogJ211bHRpcmVxdWVzdCcsIHR5cGUgOiAnYycgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF91bndyYXBSZXNwb25zZShyZXNwb25zZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVudmlyb25tZW50LnJlc3BvbnNlLm5lc3RlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3Jlc3VsdCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgc2V0Q29tcGxldGlvbihjYWxsYmFjazogKHJlc3BvbnNlOiBLYWx0dXJhTXVsdGlSZXNwb25zZSkgPT4gdm9pZCk6IEthbHR1cmFNdWx0aVJlcXVlc3Qge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlczogYW55KTogS2FsdHVyYU11bHRpUmVzcG9uc2Uge1xuICAgICAgICBjb25zdCBrYWx0dXJhUmVzcG9uc2VzOiBLYWx0dXJhUmVzcG9uc2U8YW55PltdID0gW107XG5cbiAgICAgICAgY29uc3QgdW53cmFwcGVkUmVzcG9uc2UgPSB0aGlzLl91bndyYXBSZXNwb25zZShyZXNwb25zZXMpO1xuICAgICAgICBsZXQgcmVzcG9uc2VPYmplY3QgPSBudWxsO1xuXG4gICAgICAgIGlmICghdW53cmFwcGVkUmVzcG9uc2UgfHwgISh1bndyYXBwZWRSZXNwb25zZSBpbnN0YW5jZW9mIEFycmF5KSB8fCB1bndyYXBwZWRSZXNwb25zZS5sZW5ndGggIT09IHRoaXMucmVxdWVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IG5ldyBLYWx0dXJhQVBJRXhjZXB0aW9uKGBzZXJ2ZXIgcmVzcG9uc2UgaXMgaW52YWxpZCwgZXhwZWN0ZWQgYXJyYXkgb2YgJHt0aGlzLnJlcXVlc3RzLmxlbmd0aH1gLCAnY2xpZW50OjpyZXNwb25zZV90eXBlX2Vycm9yJywgbnVsbCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5yZXF1ZXN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGthbHR1cmFSZXNwb25zZXMucHVzaCh0aGlzLnJlcXVlc3RzW2ldLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnJlcXVlc3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSB1bndyYXBwZWRSZXNwb25zZVtpXTtcbiAgICAgICAgICAgICAgICBrYWx0dXJhUmVzcG9uc2VzLnB1c2godGhpcy5yZXF1ZXN0c1tpXS5oYW5kbGVSZXNwb25zZShzZXJ2ZXJSZXNwb25zZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sobmV3IEthbHR1cmFNdWx0aVJlc3BvbnNlKGthbHR1cmFSZXNwb25zZXMpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nIGJ5IGRlc2lnblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgS2FsdHVyYU11bHRpUmVzcG9uc2Uoa2FsdHVyYVJlc3BvbnNlcyk7XG4gICAgfVxufVxuIl19