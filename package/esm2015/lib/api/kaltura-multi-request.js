/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequestBase } from "./kaltura-request-base";
import { KalturaMultiResponse } from "./kaltura-multi-response";
import { KalturaAPIException } from "./kaltura-api-exception";
import { environment } from '../environment';
export class KalturaMultiRequest extends KalturaRequestBase {
    /**
     * @param {...?} args
     */
    constructor(...args) {
        super({});
        this.requests = [];
        this.requests = args;
    }
    /**
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    buildRequest(defaultRequestOptions) {
        /** @type {?} */
        const result = super.toRequestObject();
        for (let i = 0, length = this.requests.length; i < length; i++) {
            result[i] = this.requests[i].buildRequest(defaultRequestOptions);
        }
        return result;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { default: 'multirequest', type: 'c' }
        });
        return result;
    }
    /**
     * @param {?} response
     * @return {?}
     */
    _unwrapResponse(response) {
        if (environment.response.nestedResponse) {
            if (response && response.hasOwnProperty('result')) {
                return response.result;
            }
            else if (response && response.hasOwnProperty('error')) {
                return response.error;
            }
        }
        return response;
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
     * @param {?} responses
     * @return {?}
     */
    handleResponse(responses) {
        /** @type {?} */
        const kalturaResponses = [];
        /** @type {?} */
        const unwrappedResponse = this._unwrapResponse(responses);
        /** @type {?} */
        let responseObject = null;
        if (!unwrappedResponse || !(unwrappedResponse instanceof Array) || unwrappedResponse.length !== this.requests.length) {
            /** @type {?} */
            const response = new KalturaAPIException(`server response is invalid, expected array of ${this.requests.length}`, 'client::response_type_error', null);
            for (let i = 0, len = this.requests.length; i < len; i++) {
                kalturaResponses.push(this.requests[i].handleResponse(response));
            }
        }
        else {
            for (let i = 0, len = this.requests.length; i < len; i++) {
                /** @type {?} */
                const serverResponse = unwrappedResponse[i];
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
    }
}
if (false) {
    /** @type {?} */
    KalturaMultiRequest.prototype.callback;
    /** @type {?} */
    KalturaMultiRequest.prototype.requests;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS9rYWx0dXJhLW11bHRpLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxNQUFNLDBCQUEyQixTQUFRLGtCQUFrQjs7OztJQU12RCxZQUFZLEdBQUcsSUFBMkI7UUFDdEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUhvQixFQUFFO1FBSWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ3hCOzs7OztJQUVELFlBQVksQ0FBQyxxQkFBNEM7O1FBQ3JELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNwRTtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENB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bSBcIi4va2FsdHVyYS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QgfSBmcm9tIFwiLi9rYWx0dXJhLXJlcXVlc3RcIjtcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0QmFzZSB9IGZyb20gXCIuL2thbHR1cmEtcmVxdWVzdC1iYXNlXCI7XG5cbmltcG9ydCB7IEthbHR1cmFNdWx0aVJlc3BvbnNlIH0gZnJvbSBcIi4va2FsdHVyYS1tdWx0aS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gXCIuL2thbHR1cmEtYXBpLWV4Y2VwdGlvblwiO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4va2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNdWx0aVJlcXVlc3QgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEJhc2Uge1xuXG4gICAgcHJvdGVjdGVkIGNhbGxiYWNrOiAocmVzcG9uc2U6IEthbHR1cmFNdWx0aVJlc3BvbnNlKSA9PiB2b2lkO1xuXG4gICAgcmVxdWVzdHM6IEthbHR1cmFSZXF1ZXN0PGFueT5bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogS2FsdHVyYVJlcXVlc3Q8YW55PltdKSB7XG4gICAgICAgIHN1cGVyKHt9KTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0cyA9IGFyZ3M7XG4gICAgfVxuXG4gICAgYnVpbGRSZXF1ZXN0KGRlZmF1bHRSZXF1ZXN0T3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zKToge30ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci50b1JlcXVlc3RPYmplY3QoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy5yZXF1ZXN0cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gdGhpcy5yZXF1ZXN0c1tpXS5idWlsZFJlcXVlc3QoZGVmYXVsdFJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IGRlZmF1bHQgOiAnbXVsdGlyZXF1ZXN0JywgdHlwZSA6ICdjJyAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX3Vud3JhcFJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoZW52aXJvbm1lbnQucmVzcG9uc2UubmVzdGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgncmVzdWx0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBzZXRDb21wbGV0aW9uKGNhbGxiYWNrOiAocmVzcG9uc2U6IEthbHR1cmFNdWx0aVJlc3BvbnNlKSA9PiB2b2lkKTogS2FsdHVyYU11bHRpUmVxdWVzdCB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2VzOiBhbnkpOiBLYWx0dXJhTXVsdGlSZXNwb25zZSB7XG4gICAgICAgIGNvbnN0IGthbHR1cmFSZXNwb25zZXM6IEthbHR1cmFSZXNwb25zZTxhbnk+W10gPSBbXTtcblxuICAgICAgICBjb25zdCB1bndyYXBwZWRSZXNwb25zZSA9IHRoaXMuX3Vud3JhcFJlc3BvbnNlKHJlc3BvbnNlcyk7XG4gICAgICAgIGxldCByZXNwb25zZU9iamVjdCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF1bndyYXBwZWRSZXNwb25zZSB8fCAhKHVud3JhcHBlZFJlc3BvbnNlIGluc3RhbmNlb2YgQXJyYXkpIHx8IHVud3JhcHBlZFJlc3BvbnNlLmxlbmd0aCAhPT0gdGhpcy5yZXF1ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEthbHR1cmFBUElFeGNlcHRpb24oYHNlcnZlciByZXNwb25zZSBpcyBpbnZhbGlkLCBleHBlY3RlZCBhcnJheSBvZiAke3RoaXMucmVxdWVzdHMubGVuZ3RofWAsICdjbGllbnQ6OnJlc3BvbnNlX3R5cGVfZXJyb3InLCBudWxsKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnJlcXVlc3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAga2FsdHVyYVJlc3BvbnNlcy5wdXNoKHRoaXMucmVxdWVzdHNbaV0uaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMucmVxdWVzdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IHVud3JhcHBlZFJlc3BvbnNlW2ldO1xuICAgICAgICAgICAgICAgIGthbHR1cmFSZXNwb25zZXMucHVzaCh0aGlzLnJlcXVlc3RzW2ldLmhhbmRsZVJlc3BvbnNlKHNlcnZlclJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhuZXcgS2FsdHVyYU11bHRpUmVzcG9uc2Uoa2FsdHVyYVJlc3BvbnNlcykpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgYnkgZGVzaWduXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBLYWx0dXJhTXVsdGlSZXNwb25zZShrYWx0dXJhUmVzcG9uc2VzKTtcbiAgICB9XG59XG4iXX0=