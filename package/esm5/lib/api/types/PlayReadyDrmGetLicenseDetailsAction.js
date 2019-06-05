/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlayReadyLicenseDetails } from './KalturaPlayReadyLicenseDetails';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGetLicenseDetailsActionArgs() { }
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.keyId;
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.deviceId;
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.deviceType;
/** @type {?|undefined} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.entryId;
/** @type {?|undefined} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.referrer;
/**
 * Build request payload for service 'playReadyDrm' action 'getLicenseDetails'.
 *
 * Usage: Get Play Ready policy and dates for license creation
 *
 * Server response type:         KalturaPlayReadyLicenseDetails
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playReadyDrm' action 'getLicenseDetails'.
 *
 * Usage: Get Play Ready policy and dates for license creation
 *
 * Server response type:         KalturaPlayReadyLicenseDetails
 * Server failure response type: KalturaAPIException
 */
PlayReadyDrmGetLicenseDetailsAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlayReadyDrmGetLicenseDetailsAction, _super);
    function PlayReadyDrmGetLicenseDetailsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlayReadyLicenseDetails', responseConstructor: KalturaPlayReadyLicenseDetails }) || this;
    }
    /**
     * @return {?}
     */
    PlayReadyDrmGetLicenseDetailsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'getLicenseDetails' },
            keyId: { type: 's' },
            deviceId: { type: 's' },
            deviceType: { type: 'n' },
            entryId: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    };
    return PlayReadyDrmGetLicenseDetailsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playReadyDrm' action 'getLicenseDetails'.
 *
 * Usage: Get Play Ready policy and dates for license creation
 *
 * Server response type:         KalturaPlayReadyLicenseDetails
 * Server failure response type: KalturaAPIException
 */
export { PlayReadyDrmGetLicenseDetailsAction };
if (false) {
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.keyId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.deviceId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.deviceType;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.entryId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.referrer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2V0TGljZW5zZURldGFpbHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlSZWFkeURybUdldExpY2Vuc2VEZXRhaWxzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFOzs7Ozs7OztBQUFBO0lBQXlELCtEQUE4QztJQVFuRyw2Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxnQ0FBZ0MsRUFBRSxtQkFBbUIsRUFBRyw4QkFBOEIsRUFBRyxDQUFDO0tBQ2hKOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBbkRMO0VBc0J5RCxjQUFjLEVBOEJ0RSxDQUFBOzs7Ozs7Ozs7QUE5QkQsK0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscyB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheVJlYWR5RHJtR2V0TGljZW5zZURldGFpbHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAga2V5SWQgOiBzdHJpbmc7XG5cdGRldmljZUlkIDogc3RyaW5nO1xuXHRkZXZpY2VUeXBlIDogbnVtYmVyO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcblx0cmVmZXJyZXI/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGxheVJlYWR5RHJtJyBhY3Rpb24gJ2dldExpY2Vuc2VEZXRhaWxzJy5cbiAqXG4gKiBVc2FnZTogR2V0IFBsYXkgUmVhZHkgcG9saWN5IGFuZCBkYXRlcyBmb3IgbGljZW5zZSBjcmVhdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlsc1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGxheVJlYWR5RHJtR2V0TGljZW5zZURldGFpbHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHM+IHtcblxuICAgIGtleUlkIDogc3RyaW5nO1xuXHRkZXZpY2VJZCA6IHN0cmluZztcblx0ZGV2aWNlVHlwZSA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheVJlYWR5RHJtR2V0TGljZW5zZURldGFpbHNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHMgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlyZWFkeV9wbGF5cmVhZHlkcm0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRMaWNlbnNlRGV0YWlscycgfSxcblx0XHRcdFx0a2V5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV2aWNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV2aWNlVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==