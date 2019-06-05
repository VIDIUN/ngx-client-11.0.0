/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { throwError as observableThrowError } from 'rxjs';
import { Inject, Injectable, Optional, Self } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KalturaRequest } from './api/kaltura-request';
import { KalturaMultiRequest } from './api/kaltura-multi-request';
import { KalturaFileRequest } from './api/kaltura-file-request';
import { KalturaUploadRequest } from './api/kaltura-upload-request';
import { KalturaRequestAdapter } from './adapters/kaltura-request-adapter';
import { KalturaFileRequestAdapter } from './adapters/kaltura-file-request-adapter';
import { KALTURA_CLIENT_OPTIONS } from './kaltura-client-options';
import { KalturaMultiRequestAdapter } from './adapters/kaltura-multi-request-adapter';
import { KalturaClientException } from './api/kaltura-client-exception';
import { KalturaUploadRequestAdapter } from './adapters/kaltura-upload-request-adapter';
import { KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS, KalturaRequestOptions } from './api/kaltura-request-options';
export class KalturaClient {
    /**
     * @param {?} _http
     * @param {?} _options
     * @param {?} defaultRequestOptionsArgs
     */
    constructor(_http, _options, defaultRequestOptionsArgs) {
        this._http = _http;
        this._options = _options;
        this._defaultRequestOptions = new KalturaRequestOptions(defaultRequestOptionsArgs || {});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    appendOptions(options) {
        if (!options) {
            throw new KalturaClientException('client::append_options', `missing required argument 'options'`);
        }
        this._options = Object.assign(this._options || {}, options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (!options) {
            throw new KalturaClientException('client::set_options', `missing required argument 'options'`);
        }
        this._options = options;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    appendDefaultRequestOptions(args) {
        if (!args) {
            throw new KalturaClientException('client::append_default_request_options', `missing required argument 'args'`);
        }
        this._defaultRequestOptions = Object.assign(this._defaultRequestOptions || new KalturaRequestOptions(), new KalturaRequestOptions(args));
    }
    /**
     * @param {?} args
     * @return {?}
     */
    setDefaultRequestOptions(args) {
        if (!args) {
            throw new KalturaClientException('client::set_default_request_options', `missing required argument 'args'`);
        }
        this._defaultRequestOptions = new KalturaRequestOptions(args);
    }
    /**
     * @return {?}
     */
    _validateOptions() {
        if (!this._options) {
            return new KalturaClientException('client::missing_options', 'cannot transmit request, missing client options (did you forgot to provide options manually or using KALTURA_CLIENT_OPTIONS?)');
        }
        if (!this._options.endpointUrl) {
            return new KalturaClientException('client::missing_options', `cannot transmit request, missing 'endpointUrl' in client options`);
        }
        if (!this._options.clientTag) {
            return new KalturaClientException('client::missing_options', `cannot transmit request, missing 'clientTag' in client options`);
        }
        return null;
    }
    /**
     * @template T
     * @param {?} request
     * @return {?}
     */
    request(request) {
        /** @type {?} */
        const optionsViolationError = this._validateOptions();
        if (optionsViolationError) {
            return observableThrowError(optionsViolationError);
        }
        if (request instanceof KalturaFileRequest) {
            return new KalturaFileRequestAdapter().transmit(request, this._options, this._defaultRequestOptions);
        }
        else if (request instanceof KalturaUploadRequest) {
            return new KalturaUploadRequestAdapter(this._options, this._defaultRequestOptions).transmit(request);
        }
        else if (request instanceof KalturaRequest) {
            return new KalturaRequestAdapter(this._http).transmit(request, this._options, this._defaultRequestOptions);
        }
        else {
            return observableThrowError(new KalturaClientException("client::request_type_error", 'unsupported request type requested'));
        }
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    multiRequest(arg) {
        /** @type {?} */
        const optionsViolationError = this._validateOptions();
        if (optionsViolationError) {
            return observableThrowError(optionsViolationError);
        }
        /** @type {?} */
        const request = arg instanceof KalturaMultiRequest ? arg : (arg instanceof Array ? new KalturaMultiRequest(...arg) : null);
        if (!request) {
            return observableThrowError(new KalturaClientException('client::invalid_request', `Expected argument of type Array or KalturaMultiRequest`));
        }
        /** @type {?} */
        const containsFileRequest = request.requests.some(item => item instanceof KalturaFileRequest);
        if (containsFileRequest) {
            return observableThrowError(new KalturaClientException('client::invalid_request', `multi-request not support requests of type 'KalturaFileRequest', use regular request instead`));
        }
        else {
            return new KalturaMultiRequestAdapter(this._http).transmit(request, this._options, this._defaultRequestOptions);
        }
    }
}
KalturaClient.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KalturaClient.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [KALTURA_CLIENT_OPTIONS,] }, { type: Optional }, { type: Self }] },
    { type: undefined, decorators: [{ type: Inject, args: [KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS,] }, { type: Optional }, { type: Self }] }
];
if (false) {
    /** @type {?} */
    KalturaClient.prototype._defaultRequestOptions;
    /** @type {?} */
    KalturaClient.prototype._http;
    /** @type {?} */
    KalturaClient.prototype._options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9rYWx0dXJhLWNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsVUFBVSxJQUFJLG9CQUFvQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRixPQUFPLEVBQXdCLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUNILHNDQUFzQyxFQUFFLHFCQUFxQixFQUVoRSxNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE1BQU07Ozs7OztJQUlGLFlBQW9CLEtBQWlCLEVBQThELFFBQThCLEVBQ2hELHlCQUFvRDtRQURqSCxVQUFL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LEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksa0JBQWtCLENBQUMsQ0FBQztRQUM5RixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksc0JBQXNCLENBQUMseUJBQXlCLEVBQUUsOEZBQThGLENBQUMsQ0FBQyxDQUFDO1NBQ3RMO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ25IOzs7O1lBdkdSLFVBQVU7Ozs7WUFqQkYsVUFBVTs0Q0FzQnlCLE1BQU0sU0FBQyxzQkFBc0IsY0FBRyxRQUFRLFlBQUksSUFBSTs0Q0FDM0UsTUFBTSxTQUFDLHNDQUFzQyxjQUFHLFFBQVEsWUFBSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge3Rocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0IH0gZnJvbSAnLi9hcGkva2FsdHVyYS1yZXF1ZXN0JztcbmltcG9ydCB7IEthbHR1cmFNdWx0aVJlcXVlc3QgfSBmcm9tICcuL2FwaS9rYWx0dXJhLW11bHRpLXJlcXVlc3QnO1xuaW1wb3J0IHsgS2FsdHVyYU11bHRpUmVzcG9uc2UgfSBmcm9tICcuL2FwaS9rYWx0dXJhLW11bHRpLXJlc3BvbnNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCB9IGZyb20gJy4vYXBpL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0IH0gZnJvbSAnLi9hcGkva2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL2thbHR1cmEtcmVxdWVzdC1hZGFwdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL2thbHR1cmEtZmlsZS1yZXF1ZXN0LWFkYXB0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudE9wdGlvbnMsIEtBTFRVUkFfQ0xJRU5UX09QVElPTlMgfSBmcm9tICcuL2thbHR1cmEtY2xpZW50LW9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYU11bHRpUmVxdWVzdEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL2thbHR1cmEtbXVsdGktcmVxdWVzdC1hZGFwdGVyJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnRFeGNlcHRpb24gfSBmcm9tICcuL2FwaS9rYWx0dXJhLWNsaWVudC1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3RBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0LWFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgICBLQUxUVVJBX0NMSUVOVF9ERUZBVUxUX1JFUVVFU1RfT1BUSU9OUywgS2FsdHVyYVJlcXVlc3RPcHRpb25zLFxuICAgIEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3Ncbn0gZnJvbSAnLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNsaWVudCB7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0UmVxdWVzdE9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoS0FMVFVSQV9DTElFTlRfT1BUSU9OUykgQE9wdGlvbmFsKCkgQFNlbGYoKSBwcml2YXRlIF9vcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBASW5qZWN0KEtBTFRVUkFfQ0xJRU5UX0RFRkFVTFRfUkVRVUVTVF9PUFRJT05TKSBAT3B0aW9uYWwoKSBAU2VsZigpICBkZWZhdWx0UmVxdWVzdE9wdGlvbnNBcmdzOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucyA9IG5ldyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMoZGVmYXVsdFJlcXVlc3RPcHRpb25zQXJncyB8fCB7fSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZE9wdGlvbnMob3B0aW9uczogS2FsdHVyYUNsaWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjphcHBlbmRfb3B0aW9ucycsYG1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgJ29wdGlvbnMnYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgfHwge30sIG9wdGlvbnNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnNldF9vcHRpb25zJyxgbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCAnb3B0aW9ucydgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBlbmREZWZhdWx0UmVxdWVzdE9wdGlvbnMoYXJnczogS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyk6IHZvaWQge1xuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OmFwcGVuZF9kZWZhdWx0X3JlcXVlc3Rfb3B0aW9ucycsYG1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgJ2FyZ3MnYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdFJlcXVlc3RPcHRpb25zIHx8IG5ldyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMoKSwgbmV3IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyhhcmdzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWZhdWx0UmVxdWVzdE9wdGlvbnMoYXJnczogS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyk6IHZvaWQge1xuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OnNldF9kZWZhdWx0X3JlcXVlc3Rfb3B0aW9ucycsYG1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgJ2FyZ3MnYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMgPSBuZXcgS2FsdHVyYVJlcXVlc3RPcHRpb25zKGFyZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZhbGlkYXRlT3B0aW9ucygpOiBFcnJvciB8IG51bGwge1xuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjptaXNzaW5nX29wdGlvbnMnLCdjYW5ub3QgdHJhbnNtaXQgcmVxdWVzdCwgbWlzc2luZyBjbGllbnQgb3B0aW9ucyAoZGlkIHlvdSBmb3Jnb3QgdG8gcHJvdmlkZSBvcHRpb25zIG1hbnVhbGx5IG9yIHVzaW5nIEtBTFRVUkFfQ0xJRU5UX09QVElPTlM/KScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmVuZHBvaW50VXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6bWlzc2luZ19vcHRpb25zJywgYGNhbm5vdCB0cmFuc21pdCByZXF1ZXN0LCBtaXNzaW5nICdlbmRwb2ludFVybCcgaW4gY2xpZW50IG9wdGlvbnNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5jbGllbnRUYWcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjptaXNzaW5nX29wdGlvbnMnLCBgY2Fubm90IHRyYW5zbWl0IHJlcXVlc3QsIG1pc3NpbmcgJ2NsaWVudFRhZycgaW4gY2xpZW50IG9wdGlvbnNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0PFQ+KHJlcXVlc3Q6IEthbHR1cmFSZXF1ZXN0PFQ+KTogT2JzZXJ2YWJsZTxUPjtcbiAgICBwdWJsaWMgcmVxdWVzdDxUPihyZXF1ZXN0OiBLYWx0dXJhRmlsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPHsgdXJsOiBzdHJpbmcgfT47XG4gICAgcHVibGljIHJlcXVlc3Q8VD4ocmVxdWVzdDogS2FsdHVyYVJlcXVlc3Q8VD4gfCBLYWx0dXJhRmlsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPFQgfCB7IHVybDogc3RyaW5nIH0+IHtcblxuICAgICAgICBjb25zdCBvcHRpb25zVmlvbGF0aW9uRXJyb3IgPSB0aGlzLl92YWxpZGF0ZU9wdGlvbnMoKTtcblxuICAgICAgICBpZiAob3B0aW9uc1Zpb2xhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3Iob3B0aW9uc1Zpb2xhdGlvbkVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0IGluc3RhbmNlb2YgS2FsdHVyYUZpbGVSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEthbHR1cmFGaWxlUmVxdWVzdEFkYXB0ZXIoKS50cmFuc21pdChyZXF1ZXN0LCB0aGlzLl9vcHRpb25zLCB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdCBpbnN0YW5jZW9mIEthbHR1cmFVcGxvYWRSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEthbHR1cmFVcGxvYWRSZXF1ZXN0QWRhcHRlcih0aGlzLl9vcHRpb25zLCB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMpLnRyYW5zbWl0KHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBLYWx0dXJhUmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBLYWx0dXJhUmVxdWVzdEFkYXB0ZXIodGhpcy5faHR0cCkudHJhbnNtaXQocmVxdWVzdCwgdGhpcy5fb3B0aW9ucywgdGhpcy5fZGVmYXVsdFJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbihcImNsaWVudDo6cmVxdWVzdF90eXBlX2Vycm9yXCIsICd1bnN1cHBvcnRlZCByZXF1ZXN0IHR5cGUgcmVxdWVzdGVkJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG11bHRpUmVxdWVzdChyZXF1ZXN0czogS2FsdHVyYVJlcXVlc3Q8YW55PltdKTogT2JzZXJ2YWJsZTxLYWx0dXJhTXVsdGlSZXNwb25zZT5cbiAgICBwdWJsaWMgbXVsdGlSZXF1ZXN0KHJlcXVlc3Q6IEthbHR1cmFNdWx0aVJlcXVlc3QpOiBPYnNlcnZhYmxlPEthbHR1cmFNdWx0aVJlc3BvbnNlPjtcbiAgICBwdWJsaWMgbXVsdGlSZXF1ZXN0KGFyZzogS2FsdHVyYU11bHRpUmVxdWVzdCB8IEthbHR1cmFSZXF1ZXN0PGFueT5bXSk6IE9ic2VydmFibGU8S2FsdHVyYU11bHRpUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1Zpb2xhdGlvbkVycm9yID0gdGhpcy5fdmFsaWRhdGVPcHRpb25zKCk7XG4gICAgICAgIGlmIChvcHRpb25zVmlvbGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihvcHRpb25zVmlvbGF0aW9uRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGFyZyBpbnN0YW5jZW9mIEthbHR1cmFNdWx0aVJlcXVlc3QgPyBhcmcgOiAoYXJnIGluc3RhbmNlb2YgQXJyYXkgPyBuZXcgS2FsdHVyYU11bHRpUmVxdWVzdCguLi5hcmcpIDogbnVsbCk7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OmludmFsaWRfcmVxdWVzdCcsIGBFeHBlY3RlZCBhcmd1bWVudCBvZiB0eXBlIEFycmF5IG9yIEthbHR1cmFNdWx0aVJlcXVlc3RgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWluc0ZpbGVSZXF1ZXN0ID0gcmVxdWVzdC5yZXF1ZXN0cy5zb21lKGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIEthbHR1cmFGaWxlUmVxdWVzdCk7XG4gICAgICAgIGlmIChjb250YWluc0ZpbGVSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IobmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6aW52YWxpZF9yZXF1ZXN0JywgYG11bHRpLXJlcXVlc3Qgbm90IHN1cHBvcnQgcmVxdWVzdHMgb2YgdHlwZSAnS2FsdHVyYUZpbGVSZXF1ZXN0JywgdXNlIHJlZ3VsYXIgcmVxdWVzdCBpbnN0ZWFkYCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBLYWx0dXJhTXVsdGlSZXF1ZXN0QWRhcHRlcih0aGlzLl9odHRwKS50cmFuc21pdChyZXF1ZXN0LCB0aGlzLl9vcHRpb25zLCB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19