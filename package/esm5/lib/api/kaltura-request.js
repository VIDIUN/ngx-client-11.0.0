/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @abstract
 * @template T
 */
KalturaRequest = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRequest, _super);
    function KalturaRequest(data, _a) {
        var responseType = _a.responseType, responseSubType = _a.responseSubType, responseConstructor = _a.responseConstructor;
        var _this = _super.call(this, data) || this;
        _this.responseSubType = responseSubType;
        _this.responseType = responseType;
        _this._responseConstructor = responseConstructor;
        return _this;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    KalturaRequest.prototype.setCompletion = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.callback = callback;
        return this;
    };
    /**
     * @param {?} response
     * @return {?}
     */
    KalturaRequest.prototype._unwrapResponse = /**
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
     * @param {?} response
     * @return {?}
     */
    KalturaRequest.prototype.handleResponse = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        /** @type {?} */
        var responseResult;
        /** @type {?} */
        var responseError;
        try {
            /** @type {?} */
            var unwrappedResponse = this._unwrapResponse(response);
            /** @type {?} */
            var responseObject = null;
            if (unwrappedResponse) {
                if (unwrappedResponse instanceof KalturaAPIException) {
                    // handle situation when multi request propagated actual api exception object.
                    responseObject = unwrappedResponse;
                }
                else if (unwrappedResponse.objectType === 'KalturaAPIException') {
                    responseObject = new KalturaAPIException(unwrappedResponse.message, unwrappedResponse.code, unwrappedResponse.args);
                }
                else {
                    responseObject = _super.prototype._parseResponseProperty.call(this, "", {
                        type: this.responseType,
                        subType: this.responseSubType
                    }, unwrappedResponse);
                }
            }
            if (!responseObject && this.responseType !== 'v') {
                responseError = new KalturaAPIException("server response is undefined, expected '" + this.responseType + " / " + this.responseSubType + "'", 'client::response_type_error', null);
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
        var result = new KalturaResponse(responseResult, responseError);
        if (this.callback) {
            try {
                this.callback(result);
            }
            catch (ex) {
                // do nothing by design
            }
        }
        return result;
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    KalturaRequest.prototype.setRequestOptions = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        this.__requestOptions__ = arg instanceof KalturaRequestOptions ? arg : new KalturaRequestOptions(arg);
        return this;
    };
    /**
     * @return {?}
     */
    KalturaRequest.prototype.getRequestOptions = /**
     * @return {?}
     */
    function () {
        return this.__requestOptions__;
    };
    /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    KalturaRequest.prototype.buildRequest = /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    function (defaultRequestOptions) {
        /** @type {?} */
        var requestOptionsObject = this.__requestOptions__ ? this.__requestOptions__.toRequestObject() : {};
        /** @type {?} */
        var defaultRequestOptionsObject = defaultRequestOptions ? defaultRequestOptions.toRequestObject() : {};
        return Object.assign({}, defaultRequestOptionsObject, requestOptionsObject, this.toRequestObject());
    };
    return KalturaRequest;
}(KalturaRequestBase));
/**
 * @abstract
 * @template T
 */
export { KalturaRequest };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS9rYWx0dXJhLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVE3Qzs7OztBQUFBO0lBQWdELDBDQUFrQjtJQVE5RCx3QkFBWSxJQUE2QixFQUFFLEVBQStKO1lBQTlKLDhCQUFZLEVBQUUsb0NBQWUsRUFBRSw0Q0FBbUI7UUFBOUYsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtRQUhHLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQzs7S0FDbkQ7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLFFBQWdEO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjs7Ozs7SUFFTyx3Q0FBZTs7OztjQUFDLFFBQWE7UUFDakMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsRUFBRSxD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QUFrQixHQUFHLEdBQUcsWUFBWSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjs7OztJQUVELDBDQUFpQjs7O0lBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztLQUNsQzs7Ozs7SUFFRCxxQ0FBWTs7OztJQUFaLFVBQWEscUJBQTRDOztRQUNyRCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ3RHLElBQU0sMkJBQTJCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFekcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2hCLEVBQUUsRUFDRiwyQkFBMkIsRUFDM0Isb0JBQW9CLEVBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDekIsQ0FBQztLQUNMO3lCQS9ITDtFQWFnRCxrQkFBa0IsRUFtSGpFLENBQUE7Ozs7O0FBbkhELDBCQW1IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFSZXNwb25zZSB9IGZyb20gXCIuL2thbHR1cmEtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0QmFzZSwgS2FsdHVyYVJlcXVlc3RCYXNlQXJncyB9IGZyb20gXCIuL2thbHR1cmEtcmVxdWVzdC1iYXNlXCI7XG5pbXBvcnQgeyBLYWx0dXJhQVBJRXhjZXB0aW9uIH0gZnJvbSAnLi9rYWx0dXJhLWFwaS1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UgfSBmcm9tICcuL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3RPcHRpb25zLCBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnLi9rYWx0dXJhLXJlcXVlc3Qtb3B0aW9ucyc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVxdWVzdEFyZ3MgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEJhc2VBcmdzXG57XG5cbn1cblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgS2FsdHVyYVJlcXVlc3Q8VD4gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEJhc2Uge1xuXG4gICAgcHJpdmF0ZSBfX3JlcXVlc3RPcHRpb25zX186IEthbHR1cmFSZXF1ZXN0T3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgY2FsbGJhY2s6IChyZXNwb25zZTogS2FsdHVyYVJlc3BvbnNlPFQ+KSA9PiB2b2lkO1xuICAgIHByaXZhdGUgcmVzcG9uc2VUeXBlIDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVzcG9uc2VTdWJUeXBlIDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBfcmVzcG9uc2VDb25zdHJ1Y3RvciA6IHsgbmV3KCkgOiBLYWx0dXJhT2JqZWN0QmFzZX07IC8vIE5PVElDRTogdGhpcyBwcm9wZXJ0eSBpcyBub3QgdXNlZCBkaXJlY3RseS4gSXQgaXMgaGVyZSB0byBmb3JjZSBpbXBvcnQgb2YgdGhhdCB0eXBlIGZvciBidW5kbGluZyBpc3N1ZXMuXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogS2FsdHVyYVJlcXVlc3RCYXNlQXJncywge3Jlc3BvbnNlVHlwZSwgcmVzcG9uc2VTdWJUeXBlLCByZXNwb25zZUNvbnN0cnVjdG9yfSA6IHtyZXNwb25zZVR5cGUgOiBzdHJpbmcsIHJlc3BvbnNlU3ViVHlwZT8gOiBzdHJpbmcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiB7IG5ldygpIDogS2FsdHVyYU9iamVjdEJhc2V9ICB9ICkge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZVN1YlR5cGUgPSByZXNwb25zZVN1YlR5cGU7XG4gICAgICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgICAgICB0aGlzLl9yZXNwb25zZUNvbnN0cnVjdG9yID0gcmVzcG9uc2VDb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBzZXRDb21wbGV0aW9uKGNhbGxiYWNrOiAocmVzcG9uc2U6IEthbHR1cmFSZXNwb25zZTxUPikgPT4gdm9pZCk6IHRoaXMge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Vud3JhcFJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnQucmVzcG9uc2UubmVzdGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgncmVzdWx0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBLYWx0dXJhUmVzcG9uc2U8VD4ge1xuICAgICAgICBsZXQgcmVzcG9uc2VSZXN1bHQ6IGFueTtcbiAgICAgICAgbGV0IHJlc3BvbnNlRXJyb3I6IGFueTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdW53cmFwcGVkUmVzcG9uc2UgPSB0aGlzLl91bndyYXBSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VPYmplY3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAodW53cmFwcGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodW53cmFwcGVkUmVzcG9uc2UgaW5zdGFuY2VvZiBLYWx0dXJhQVBJRXhjZXB0aW9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHNpdHVhdGlvbiB3aGVuIG11bHRpIHJlcXVlc3QgcHJvcGFnYXRlZCBhY3R1YWwgYXBpIGV4Y2VwdGlvbiBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JqZWN0ID0gdW53cmFwcGVkUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKHVud3JhcHBlZFJlc3BvbnNlLm9iamVjdFR5cGUgPT09ICdLYWx0dXJhQVBJRXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9iamVjdCA9IG5ldyBLYWx0dXJhQVBJRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdW53cmFwcGVkUmVzcG9uc2UubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVud3JhcHBlZFJlc3BvbnNlLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bndyYXBwZWRSZXNwb25zZS5hcmdzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPYmplY3QgPSBzdXBlci5fcGFyc2VSZXNwb25zZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlOiB0aGlzLnJlc3BvbnNlU3ViVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVud3JhcHBlZFJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlT2JqZWN0ICYmIHRoaXMucmVzcG9uc2VUeXBlICE9PSAndicpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZUVycm9yID0gbmV3IEthbHR1cmFBUElFeGNlcHRpb24oYHNlcnZlciByZXNwb25zZSBpcyB1bmRlZmluZWQsIGV4cGVjdGVkICcke3RoaXMucmVzcG9uc2VUeXBlfSAvICR7dGhpcy5yZXNwb25zZVN1YlR5cGV9J2AsICdjbGllbnQ6OnJlc3BvbnNlX3R5cGVfZXJyb3InLCBudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VPYmplY3QgaW5zdGFuY2VvZiBLYWx0dXJhQVBJRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gZ290IGV4Y2VwdGlvbiBmcm9tIGxpYnJhcnlcbiAgICAgICAgICAgICAgICByZXNwb25zZUVycm9yID0gcmVzcG9uc2VPYmplY3Q7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VSZXN1bHQgPSByZXNwb25zZU9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlRXJyb3IgPSBuZXcgS2FsdHVyYUFQSUV4Y2VwdGlvbihleC5tZXNzYWdlLCAnY2xpZW50OjpnZW5lcmFsX2Vycm9yJywgbnVsbCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBLYWx0dXJhUmVzcG9uc2U8VD4ocmVzcG9uc2VSZXN1bHQsIHJlc3BvbnNlRXJyb3IpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZyBieSBkZXNpZ25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9uQXJnczogS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyk6IHRoaXM7XG4gICAgc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zKTogdGhpcztcbiAgICBzZXRSZXF1ZXN0T3B0aW9ucyhhcmc6IEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MgfCBLYWx0dXJhUmVxdWVzdE9wdGlvbnMpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5fX3JlcXVlc3RPcHRpb25zX18gPSBhcmcgaW5zdGFuY2VvZiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMgPyBhcmcgOiBuZXcgS2FsdHVyYVJlcXVlc3RPcHRpb25zKGFyZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3RPcHRpb25zKCk6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fcmVxdWVzdE9wdGlvbnNfXztcbiAgICB9XG5cbiAgICBidWlsZFJlcXVlc3QoZGVmYXVsdFJlcXVlc3RPcHRpb25zOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMpOiB7fSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zT2JqZWN0ID0gdGhpcy5fX3JlcXVlc3RPcHRpb25zX18gPyB0aGlzLl9fcmVxdWVzdE9wdGlvbnNfXy50b1JlcXVlc3RPYmplY3QoKSA6IHt9O1xuICAgICAgICBjb25zdCBkZWZhdWx0UmVxdWVzdE9wdGlvbnNPYmplY3QgPSBkZWZhdWx0UmVxdWVzdE9wdGlvbnMgPyBkZWZhdWx0UmVxdWVzdE9wdGlvbnMudG9SZXF1ZXN0T2JqZWN0KCkgOiB7fTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZGVmYXVsdFJlcXVlc3RPcHRpb25zT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnNPYmplY3QsXG4gICAgICAgICAgICB0aGlzLnRvUmVxdWVzdE9iamVjdCgpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19