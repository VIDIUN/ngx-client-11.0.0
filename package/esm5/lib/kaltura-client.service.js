/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaClient = /** @class */ (function () {
    function KalturaClient(_http, _options, defaultRequestOptionsArgs) {
        this._http = _http;
        this._options = _options;
        this._defaultRequestOptions = new KalturaRequestOptions(defaultRequestOptionsArgs || {});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    KalturaClient.prototype.appendOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options) {
            throw new KalturaClientException('client::append_options', "missing required argument 'options'");
        }
        this._options = Object.assign(this._options || {}, options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    KalturaClient.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options) {
            throw new KalturaClientException('client::set_options', "missing required argument 'options'");
        }
        this._options = options;
    };
    /**
     * @param {?} args
     * @return {?}
     */
    KalturaClient.prototype.appendDefaultRequestOptions = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (!args) {
            throw new KalturaClientException('client::append_default_request_options', "missing required argument 'args'");
        }
        this._defaultRequestOptions = Object.assign(this._defaultRequestOptions || new KalturaRequestOptions(), new KalturaRequestOptions(args));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    KalturaClient.prototype.setDefaultRequestOptions = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (!args) {
            throw new KalturaClientException('client::set_default_request_options', "missing required argument 'args'");
        }
        this._defaultRequestOptions = new KalturaRequestOptions(args);
    };
    /**
     * @return {?}
     */
    KalturaClient.prototype._validateOptions = /**
     * @return {?}
     */
    function () {
        if (!this._options) {
            return new KalturaClientException('client::missing_options', 'cannot transmit request, missing client options (did you forgot to provide options manually or using KALTURA_CLIENT_OPTIONS?)');
        }
        if (!this._options.endpointUrl) {
            return new KalturaClientException('client::missing_options', "cannot transmit request, missing 'endpointUrl' in client options");
        }
        if (!this._options.clientTag) {
            return new KalturaClientException('client::missing_options', "cannot transmit request, missing 'clientTag' in client options");
        }
        return null;
    };
    /**
     * @template T
     * @param {?} request
     * @return {?}
     */
    KalturaClient.prototype.request = /**
     * @template T
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var optionsViolationError = this._validateOptions();
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
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    KalturaClient.prototype.multiRequest = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var optionsViolationError = this._validateOptions();
        if (optionsViolationError) {
            return observableThrowError(optionsViolationError);
        }
        /** @type {?} */
        var request = arg instanceof KalturaMultiRequest ? arg : (arg instanceof Array ? new (KalturaMultiRequest.bind.apply(KalturaMultiRequest, tslib_1.__spread([void 0], arg)))() : null);
        if (!request) {
            return observableThrowError(new KalturaClientException('client::invalid_request', "Expected argument of type Array or KalturaMultiRequest"));
        }
        /** @type {?} */
        var containsFileRequest = request.requests.some(function (item) { return item instanceof KalturaFileRequest; });
        if (containsFileRequest) {
            return observableThrowError(new KalturaClientException('client::invalid_request', "multi-request not support requests of type 'KalturaFileRequest', use regular request instead"));
        }
        else {
            return new KalturaMultiRequestAdapter(this._http).transmit(request, this._options, this._defaultRequestOptions);
        }
    };
    KalturaClient.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    KalturaClient.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [KALTURA_CLIENT_OPTIONS,] }, { type: Optional }, { type: Self }] },
        { type: undefined, decorators: [{ type: Inject, args: [KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS,] }, { type: Optional }, { type: Self }] }
    ]; };
    return KalturaClient;
}());
export { KalturaClient };
if (false) {
    /** @type {?} */
    KalturaClient.prototype._defaultRequestOptions;
    /** @type {?} */
    KalturaClient.prototype._http;
    /** @type {?} */
    KalturaClient.prototype._options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9rYWx0dXJhLWNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFVBQVUsSUFBSSxvQkFBb0IsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEYsT0FBTyxFQUF3QixzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFDSCxzQ0FBc0MsRUFBRSxxQkFBcUIsRUFFaEUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFPbkMsdUJBQW9CLEtBQWlCLEVBQThELFFBQThCLEVBQ2hELHlCQUFvRDtRQURqSCxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQThELGFBQVEsR0FBUixRQUFRLENBQXNCO1FBRTdILElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixDQUFDLHlCQUF5QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzVGOzs7OztJQUVNLHFDQUFhOzs7O2NBQUMsT0FBNkI7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxJQUFJLHNCQUFzQixDQUFDLHdCQUF3QixFQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDcEc7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3pCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FDL0IsQ0FBQzs7Ozs7O0lBR0Msa0NBQVU7Ozs7Y0FBQyxPQUE2QjtRQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLElBQUksc0JBQXNCLENBQUMscUJBQXFCLEVBQUMscUNBQXFDLENBQUMsQ0FBQztTQUNqRztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzs7Ozs7SUFHckIsbURBQTJCOzs7O2NBQUMsSUFBK0I7UUFDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxJQUFJLHNCQUFzQixDQUFDLHdDQUF3QyxFQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDakg7UUFFRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDdkMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUkscUJBQXFCLEVBQUUsRUFBRSxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUM5RixDQUFDOzs7Ozs7SUFHQyxnREFBd0I7Ozs7Y0FBQyxJQUErQjtRQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLElBQUksc0JBQXNCLENBQUMscUNBQXFDLEVBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUM5RztRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztJQUcxRCx3Q0FBZ0I7Ozs7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyx5QkFBeUIsRUFBQywrSEFBK0gsQ0FBQyxDQUFDO1NBQ2hNO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksc0JBQXNCLENBQUMseUJBQXlCLEVBQUUsa0VBQWtFLENBQUMsQ0FBQztTQUNwSTtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHlCQUF5QixFQUFFLGdFQUFnRSxDQUFDLENBQUM7U0FDbEk7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0lBS1QsK0JBQU87Ozs7O2NBQUksT0FBK0M7O1FBRTdELElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFdEQsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUV4RztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hHO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDOUc7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztTQUMvSDs7Ozs7O0lBS0Usb0NBQVk7Ozs7Y0FBQyxHQUFnRDs7UUFDaEUsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0RCxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEQ7O1FBRUQsSUFBTSxPQUFPLEdBQUcsR0FBRyxZQUFZLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLE1BQUssbUJBQW1CLFlBQW5CLG1CQUFtQiw2QkFBSSxHQUFHLE1BQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNILEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHlCQUF5QixFQUFFLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztTQUNoSjs7UUFFRCxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxZQUFZLGtCQUFrQixFQUFsQyxDQUFrQyxDQUFDLENBQUM7UUFDOUYsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHlCQUF5QixFQUFFLDhGQUE4RixDQUFDLENBQUMsQ0FBQztTQUN0TDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNuSDs7O2dCQXZHUixVQUFVOzs7O2dCQWpCRixVQUFVO2dEQXNCeUIsTUFBTSxTQUFDLHNCQUFzQixjQUFHLFFBQVEsWUFBSSxJQUFJO2dEQUMzRSxNQUFNLFNBQUMsc0NBQXNDLGNBQUcsUUFBUSxZQUFJLElBQUk7O3dCQTVCakY7O1NBdUJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QgfSBmcm9tICcuL2FwaS9rYWx0dXJhLXJlcXVlc3QnO1xuaW1wb3J0IHsgS2FsdHVyYU11bHRpUmVxdWVzdCB9IGZyb20gJy4vYXBpL2thbHR1cmEtbXVsdGktcmVxdWVzdCc7XG5pbXBvcnQgeyBLYWx0dXJhTXVsdGlSZXNwb25zZSB9IGZyb20gJy4vYXBpL2thbHR1cmEtbXVsdGktcmVzcG9uc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0IH0gZnJvbSAnLi9hcGkva2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QgfSBmcm9tICcuL2FwaS9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0QWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMva2FsdHVyYS1yZXF1ZXN0LWFkYXB0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0QWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMva2FsdHVyYS1maWxlLXJlcXVlc3QtYWRhcHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhQ2xpZW50T3B0aW9ucywgS0FMVFVSQV9DTElFTlRfT1BUSU9OUyB9IGZyb20gJy4va2FsdHVyYS1jbGllbnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhTXVsdGlSZXF1ZXN0QWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMva2FsdHVyYS1tdWx0aS1yZXF1ZXN0LWFkYXB0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB9IGZyb20gJy4vYXBpL2thbHR1cmEtY2xpZW50LWV4Y2VwdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QtYWRhcHRlcic7XG5pbXBvcnQge1xuICAgIEtBTFRVUkFfQ0xJRU5UX0RFRkFVTFRfUkVRVUVTVF9PUFRJT05TLCBLYWx0dXJhUmVxdWVzdE9wdGlvbnMsXG4gICAgS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJnc1xufSBmcm9tICcuL2FwaS9rYWx0dXJhLXJlcXVlc3Qtb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2xpZW50IHtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRSZXF1ZXN0T3B0aW9uczogS2FsdHVyYVJlcXVlc3RPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgQEluamVjdChLQUxUVVJBX0NMSUVOVF9PUFRJT05TKSBAT3B0aW9uYWwoKSBAU2VsZigpIHByaXZhdGUgX29wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoS0FMVFVSQV9DTElFTlRfREVGQVVMVF9SRVFVRVNUX09QVElPTlMpIEBPcHRpb25hbCgpIEBTZWxmKCkgIGRlZmF1bHRSZXF1ZXN0T3B0aW9uc0FyZ3M6IEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFJlcXVlc3RPcHRpb25zID0gbmV3IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyhkZWZhdWx0UmVxdWVzdE9wdGlvbnNBcmdzIHx8IHt9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kT3B0aW9ucyhvcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6OmFwcGVuZF9vcHRpb25zJyxgbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCAnb3B0aW9ucydgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyB8fCB7fSwgb3B0aW9uc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6c2V0X29wdGlvbnMnLGBtaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50ICdvcHRpb25zJ2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZERlZmF1bHRSZXF1ZXN0T3B0aW9ucyhhcmdzOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzKTogdm9pZCB7XG4gICAgICAgIGlmICghYXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6YXBwZW5kX2RlZmF1bHRfcmVxdWVzdF9vcHRpb25zJyxgbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCAnYXJncydgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMgfHwgbmV3IEthbHR1cmFSZXF1ZXN0T3B0aW9ucygpLCBuZXcgS2FsdHVyYVJlcXVlc3RPcHRpb25zKGFyZ3MpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyhhcmdzOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzKTogdm9pZCB7XG4gICAgICAgIGlmICghYXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6c2V0X2RlZmF1bHRfcmVxdWVzdF9vcHRpb25zJyxgbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCAnYXJncydgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucyA9IG5ldyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMoYXJncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVPcHRpb25zKCk6IEVycm9yIHwgbnVsbCB7XG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6Om1pc3Npbmdfb3B0aW9ucycsJ2Nhbm5vdCB0cmFuc21pdCByZXF1ZXN0LCBtaXNzaW5nIGNsaWVudCBvcHRpb25zIChkaWQgeW91IGZvcmdvdCB0byBwcm92aWRlIG9wdGlvbnMgbWFudWFsbHkgb3IgdXNpbmcgS0FMVFVSQV9DTElFTlRfT1BUSU9OUz8pJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuZW5kcG9pbnRVcmwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjptaXNzaW5nX29wdGlvbnMnLCBgY2Fubm90IHRyYW5zbWl0IHJlcXVlc3QsIG1pc3NpbmcgJ2VuZHBvaW50VXJsJyBpbiBjbGllbnQgb3B0aW9uc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmNsaWVudFRhZykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6Om1pc3Npbmdfb3B0aW9ucycsIGBjYW5ub3QgdHJhbnNtaXQgcmVxdWVzdCwgbWlzc2luZyAnY2xpZW50VGFnJyBpbiBjbGllbnQgb3B0aW9uc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVlc3Q8VD4ocmVxdWVzdDogS2FsdHVyYVJlcXVlc3Q8VD4pOiBPYnNlcnZhYmxlPFQ+O1xuICAgIHB1YmxpYyByZXF1ZXN0PFQ+KHJlcXVlc3Q6IEthbHR1cmFGaWxlUmVxdWVzdCk6IE9ic2VydmFibGU8eyB1cmw6IHN0cmluZyB9PjtcbiAgICBwdWJsaWMgcmVxdWVzdDxUPihyZXF1ZXN0OiBLYWx0dXJhUmVxdWVzdDxUPiB8IEthbHR1cmFGaWxlUmVxdWVzdCk6IE9ic2VydmFibGU8VCB8IHsgdXJsOiBzdHJpbmcgfT4ge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnNWaW9sYXRpb25FcnJvciA9IHRoaXMuX3ZhbGlkYXRlT3B0aW9ucygpO1xuXG4gICAgICAgIGlmIChvcHRpb25zVmlvbGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihvcHRpb25zVmlvbGF0aW9uRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBLYWx0dXJhRmlsZVJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2FsdHVyYUZpbGVSZXF1ZXN0QWRhcHRlcigpLnRyYW5zbWl0KHJlcXVlc3QsIHRoaXMuX29wdGlvbnMsIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0IGluc3RhbmNlb2YgS2FsdHVyYVVwbG9hZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2FsdHVyYVVwbG9hZFJlcXVlc3RBZGFwdGVyKHRoaXMuX29wdGlvbnMsIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucykudHJhbnNtaXQocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVxdWVzdCBpbnN0YW5jZW9mIEthbHR1cmFSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEthbHR1cmFSZXF1ZXN0QWRhcHRlcih0aGlzLl9odHRwKS50cmFuc21pdChyZXF1ZXN0LCB0aGlzLl9vcHRpb25zLCB0aGlzLl9kZWZhdWx0UmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKFwiY2xpZW50OjpyZXF1ZXN0X3R5cGVfZXJyb3JcIiwgJ3Vuc3VwcG9ydGVkIHJlcXVlc3QgdHlwZSByZXF1ZXN0ZWQnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlSZXF1ZXN0KHJlcXVlc3RzOiBLYWx0dXJhUmVxdWVzdDxhbnk+W10pOiBPYnNlcnZhYmxlPEthbHR1cmFNdWx0aVJlc3BvbnNlPlxuICAgIHB1YmxpYyBtdWx0aVJlcXVlc3QocmVxdWVzdDogS2FsdHVyYU11bHRpUmVxdWVzdCk6IE9ic2VydmFibGU8S2FsdHVyYU11bHRpUmVzcG9uc2U+O1xuICAgIHB1YmxpYyBtdWx0aVJlcXVlc3QoYXJnOiBLYWx0dXJhTXVsdGlSZXF1ZXN0IHwgS2FsdHVyYVJlcXVlc3Q8YW55PltdKTogT2JzZXJ2YWJsZTxLYWx0dXJhTXVsdGlSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zVmlvbGF0aW9uRXJyb3IgPSB0aGlzLl92YWxpZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnNWaW9sYXRpb25FcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKG9wdGlvbnNWaW9sYXRpb25FcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXJnIGluc3RhbmNlb2YgS2FsdHVyYU11bHRpUmVxdWVzdCA/IGFyZyA6IChhcmcgaW5zdGFuY2VvZiBBcnJheSA/IG5ldyBLYWx0dXJhTXVsdGlSZXF1ZXN0KC4uLmFyZykgOiBudWxsKTtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IobmV3IEthbHR1cmFDbGllbnRFeGNlcHRpb24oJ2NsaWVudDo6aW52YWxpZF9yZXF1ZXN0JywgYEV4cGVjdGVkIGFyZ3VtZW50IG9mIHR5cGUgQXJyYXkgb3IgS2FsdHVyYU11bHRpUmVxdWVzdGApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5zRmlsZVJlcXVlc3QgPSByZXF1ZXN0LnJlcXVlc3RzLnNvbWUoaXRlbSA9PiBpdGVtIGluc3RhbmNlb2YgS2FsdHVyYUZpbGVSZXF1ZXN0KTtcbiAgICAgICAgaWYgKGNvbnRhaW5zRmlsZVJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbignY2xpZW50OjppbnZhbGlkX3JlcXVlc3QnLCBgbXVsdGktcmVxdWVzdCBub3Qgc3VwcG9ydCByZXF1ZXN0cyBvZiB0eXBlICdLYWx0dXJhRmlsZVJlcXVlc3QnLCB1c2UgcmVndWxhciByZXF1ZXN0IGluc3RlYWRgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEthbHR1cmFNdWx0aVJlcXVlc3RBZGFwdGVyKHRoaXMuX2h0dHApLnRyYW5zbWl0KHJlcXVlc3QsIHRoaXMuX29wdGlvbnMsIHRoaXMuX2RlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=