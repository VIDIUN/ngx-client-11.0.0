/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaResponse } from "./kaltura-response";
import { KalturaRequestBase } from "./kaltura-request-base";
import { KalturaAPIException } from './kaltura-api-exception';
import { KalturaRequestOptions } from './kaltura-request-options';
import { environment } from '../environment';
/**
 * @record
 */
export function KalturaRequestArgs() { }
/**
 * @abstract
 * @template T
 */
export class KalturaRequest extends KalturaRequestBase {
    /**
     * @param {?} data
     * @param {?} __1
     */
    constructor(data, { responseType, responseSubType, responseConstructor }) {
        super(data);
        this.responseSubType = responseSubType;
        this.responseType = responseType;
        this._responseConstructor = responseConstructor;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    setCompletion(callback) {
        this.callback = callback;
        return this;
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
     * @param {?} response
     * @return {?}
     */
    handleResponse(response) {
        /** @type {?} */
        let responseResult;
        /** @type {?} */
        let responseError;
        try {
            /** @type {?} */
            const unwrappedResponse = this._unwrapResponse(response);
            /** @type {?} */
            let responseObject = null;
            if (unwrappedResponse) {
                if (unwrappedResponse instanceof KalturaAPIException) {
                    // handle situation when multi request propagated actual api exception object.
                    responseObject = unwrappedResponse;
                }
                else if (unwrappedResponse.objectType === 'KalturaAPIException') {
                    responseObject = new KalturaAPIException(unwrappedResponse.message, unwrappedResponse.code, unwrappedResponse.args);
                }
                else {
                    responseObject = super._parseResponseProperty("", {
                        type: this.responseType,
                        subType: this.responseSubType
                    }, unwrappedResponse);
                }
            }
            if (!responseObject && this.responseType !== 'v') {
                responseError = new KalturaAPIException(`server response is undefined, expected '${this.responseType} / ${this.responseSubType}'`, 'client::response_type_error', null);
            }
            else if (responseObject instanceof KalturaAPIException) {
                // got exception from library
                responseError = responseObject;
            }
            else {
                responseResult = responseObject;
            }
        }
        catch (ex) {
            responseError = new KalturaAPIException(ex.message, 'client::general_error', null);
        }
        /** @type {?} */
        const result = new KalturaResponse(responseResult, responseError);
        if (this.callback) {
            try {
                this.callback(result);
            }
            catch (ex) {
                // do nothing by design
            }
        }
        return result;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    setRequestOptions(arg) {
        this.__requestOptions__ = arg instanceof KalturaRequestOptions ? arg : new KalturaRequestOptions(arg);
        return this;
    }
    /**
     * @return {?}
     */
    getRequestOptions() {
        return this.__requestOptions__;
    }
    /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    buildRequest(defaultRequestOptions) {
        /** @type {?} */
        const requestOptionsObject = this.__requestOptions__ ? this.__requestOptions__.toRequestObject() : {};
        /** @type {?} */
        const defaultRequestOptionsObject = defaultRequestOptions ? defaultRequestOptions.toRequestObject() : {};
        return Object.assign({}, defaultRequestOptionsObject, requestOptionsObject, this.toRequestObject());
    }
}
if (false) {
    /** @type {?} */
    KalturaRequest.prototype.__requestOptions__;
    /** @type {?} */
    KalturaRequest.prototype.callback;
    /** @type {?} */
    KalturaRequest.prototype.responseType;
    /** @type {?} */
    KalturaRequest.prototype.responseSubType;
    /** @type {?} */
    KalturaRequest.prototype._responseConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS9rYWx0dXJhLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLDJCQUEyQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBUTdDLE1BQU0scUJBQWtDLFNBQVEsa0JBQWtCOzs7OztJQVE5RCxZQUFZLElBQTZCLEVBQUUsRUFBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUE0RztRQUN0TSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7S0FDbkQ7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWdEO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBYTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxFQUFFLENBQUMsQ0FBQyxRQUFR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QUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEcsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmOzs7O0lBRUQsaUJBQWlCO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztLQUNsQzs7Ozs7SUFFRCxZQUFZLENBQUMscUJBQTRDOztRQUNyRCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ3RHLE1BQU0sMkJBQTJCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFekcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2hCLEVBQUUsRUFDRiwyQkFBMkIsRUFDM0Isb0JBQW9CLEVBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDekIsQ0FBQztLQUNMO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2UgfSBmcm9tIFwiLi9rYWx0dXJhLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdEJhc2UsIEthbHR1cmFSZXF1ZXN0QmFzZUFyZ3MgfSBmcm9tIFwiLi9rYWx0dXJhLXJlcXVlc3QtYmFzZVwiO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gJy4va2FsdHVyYS1hcGktZXhjZXB0aW9uJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlIH0gZnJvbSAnLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0T3B0aW9ucywgS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyB9IGZyb20gJy4va2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcXVlc3RBcmdzIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RCYXNlQXJnc1xue1xuXG59XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEthbHR1cmFSZXF1ZXN0PFQ+IGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RCYXNlIHtcblxuICAgIHByaXZhdGUgX19yZXF1ZXN0T3B0aW9uc19fOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIGNhbGxiYWNrOiAocmVzcG9uc2U6IEthbHR1cmFSZXNwb25zZTxUPikgPT4gdm9pZDtcbiAgICBwcml2YXRlIHJlc3BvbnNlVHlwZSA6IHN0cmluZztcbiAgICBwcml2YXRlIHJlc3BvbnNlU3ViVHlwZSA6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX3Jlc3BvbnNlQ29uc3RydWN0b3IgOiB7IG5ldygpIDogS2FsdHVyYU9iamVjdEJhc2V9OyAvLyBOT1RJQ0U6IHRoaXMgcHJvcGVydHkgaXMgbm90IHVzZWQgZGlyZWN0bHkuIEl0IGlzIGhlcmUgdG8gZm9yY2UgaW1wb3J0IG9mIHRoYXQgdHlwZSBmb3IgYnVuZGxpbmcgaXNzdWVzLlxuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEthbHR1cmFSZXF1ZXN0QmFzZUFyZ3MsIHtyZXNwb25zZVR5cGUsIHJlc3BvbnNlU3ViVHlwZSwgcmVzcG9uc2VDb25zdHJ1Y3Rvcn0gOiB7cmVzcG9uc2VUeXBlIDogc3RyaW5nLCByZXNwb25zZVN1YlR5cGU/IDogc3RyaW5nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogeyBuZXcoKSA6IEthbHR1cmFPYmplY3RCYXNlfSAgfSApIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VTdWJUeXBlID0gcmVzcG9uc2VTdWJUeXBlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VDb25zdHJ1Y3RvciA9IHJlc3BvbnNlQ29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgc2V0Q29tcGxldGlvbihjYWxsYmFjazogKHJlc3BvbnNlOiBLYWx0dXJhUmVzcG9uc2U8VD4pID0+IHZvaWQpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF91bndyYXBSZXNwb25zZShyZXNwb25zZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVudmlyb25tZW50LnJlc3BvbnNlLm5lc3RlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3Jlc3VsdCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0LmVycm9yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogYW55KTogS2FsdHVyYVJlc3BvbnNlPFQ+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlUmVzdWx0OiBhbnk7XG4gICAgICAgIGxldCByZXNwb25zZUVycm9yOiBhbnk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVud3JhcHBlZFJlc3BvbnNlID0gdGhpcy5fdW53cmFwUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlT2JqZWN0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHVud3JhcHBlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVud3JhcHBlZFJlc3BvbnNlIGluc3RhbmNlb2YgS2FsdHVyYUFQSUV4Y2VwdGlvbilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzaXR1YXRpb24gd2hlbiBtdWx0aSByZXF1ZXN0IHByb3BhZ2F0ZWQgYWN0dWFsIGFwaSBleGNlcHRpb24gb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9iamVjdCA9IHVud3JhcHBlZFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmICh1bndyYXBwZWRSZXNwb25zZS5vYmplY3RUeXBlID09PSAnS2FsdHVyYUFQSUV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPYmplY3QgPSBuZXcgS2FsdHVyYUFQSUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHVud3JhcHBlZFJlc3BvbnNlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bndyYXBwZWRSZXNwb25zZS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW53cmFwcGVkUmVzcG9uc2UuYXJnc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JqZWN0ID0gc3VwZXIuX3BhcnNlUmVzcG9uc2VQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogdGhpcy5yZXNwb25zZVN1YlR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1bndyYXBwZWRSZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZU9iamVjdCAmJiB0aGlzLnJlc3BvbnNlVHlwZSAhPT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VFcnJvciA9IG5ldyBLYWx0dXJhQVBJRXhjZXB0aW9uKGBzZXJ2ZXIgcmVzcG9uc2UgaXMgdW5kZWZpbmVkLCBleHBlY3RlZCAnJHt0aGlzLnJlc3BvbnNlVHlwZX0gLyAke3RoaXMucmVzcG9uc2VTdWJUeXBlfSdgLCAnY2xpZW50OjpyZXNwb25zZV90eXBlX2Vycm9yJywgbnVsbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlT2JqZWN0IGluc3RhbmNlb2YgS2FsdHVyYUFQSUV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGdvdCBleGNlcHRpb24gZnJvbSBsaWJyYXJ5XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VFcnJvciA9IHJlc3BvbnNlT2JqZWN0O1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlUmVzdWx0ID0gcmVzcG9uc2VPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXNwb25zZUVycm9yID0gbmV3IEthbHR1cmFBUElFeGNlcHRpb24oZXgubWVzc2FnZSwgJ2NsaWVudDo6Z2VuZXJhbF9lcnJvcicsIG51bGwpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgS2FsdHVyYVJlc3BvbnNlPFQ+KHJlc3BvbnNlUmVzdWx0LCByZXNwb25zZUVycm9yKTtcblxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgYnkgZGVzaWduXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHNldFJlcXVlc3RPcHRpb25zKG9wdGlvbkFyZ3M6IEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MpOiB0aGlzO1xuICAgIHNldFJlcXVlc3RPcHRpb25zKG9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyk6IHRoaXM7XG4gICAgc2V0UmVxdWVzdE9wdGlvbnMoYXJnOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzIHwgS2FsdHVyYVJlcXVlc3RPcHRpb25zKTogdGhpcyB7XG4gICAgICAgIHRoaXMuX19yZXF1ZXN0T3B0aW9uc19fID0gYXJnIGluc3RhbmNlb2YgS2FsdHVyYVJlcXVlc3RPcHRpb25zID8gYXJnIDogbmV3IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyhhcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0T3B0aW9ucygpOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3JlcXVlc3RPcHRpb25zX187XG4gICAgfVxuXG4gICAgYnVpbGRSZXF1ZXN0KGRlZmF1bHRSZXF1ZXN0T3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zKToge30ge1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9uc09iamVjdCA9IHRoaXMuX19yZXF1ZXN0T3B0aW9uc19fID8gdGhpcy5fX3JlcXVlc3RPcHRpb25zX18udG9SZXF1ZXN0T2JqZWN0KCkgOiB7fTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFJlcXVlc3RPcHRpb25zT2JqZWN0ID0gZGVmYXVsdFJlcXVlc3RPcHRpb25zID8gZGVmYXVsdFJlcXVlc3RPcHRpb25zLnRvUmVxdWVzdE9iamVjdCgpIDoge307XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRSZXF1ZXN0T3B0aW9uc09iamVjdCxcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zT2JqZWN0LFxuICAgICAgICAgICAgdGhpcy50b1JlcXVlc3RPYmplY3QoKVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==