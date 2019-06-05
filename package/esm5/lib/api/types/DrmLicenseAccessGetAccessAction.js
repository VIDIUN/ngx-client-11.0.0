/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDrmLicenseAccessDetails } from './KalturaDrmLicenseAccessDetails';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmLicenseAccessGetAccessActionArgs() { }
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.entryId;
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.flavorIds;
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.referrer;
/**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 */
DrmLicenseAccessGetAccessAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmLicenseAccessGetAccessAction, _super);
    function DrmLicenseAccessGetAccessAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmLicenseAccessDetails', responseConstructor: KalturaDrmLicenseAccessDetails }) || this;
    }
    /**
     * @return {?}
     */
    DrmLicenseAccessGetAccessAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmlicenseaccess' },
            action: { type: 'c', default: 'getAccess' },
            entryId: { type: 's' },
            flavorIds: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    };
    return DrmLicenseAccessGetAccessAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 */
export { DrmLicenseAccessGetAccessAction };
if (false) {
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.entryId;
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.flavorIds;
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.referrer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEU7Ozs7Ozs7Ozs7QUFBQTtJQUFxRCwyREFBOEM7SUFNL0YseUNBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsZ0NBQWdDLEVBQUUsbUJBQW1CLEVBQUcsOEJBQThCLEVBQUcsQ0FBQztLQUNoSjs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQS9DTDtFQXNCcUQsY0FBYyxFQTBCbEUsQ0FBQTs7Ozs7Ozs7Ozs7QUExQkQsMkNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1MaWNlbnNlQWNjZXNzRGV0YWlscyB9IGZyb20gJy4vS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JJZHMgOiBzdHJpbmc7XG5cdHJlZmVycmVyIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZHJtTGljZW5zZUFjY2VzcycgYWN0aW9uICdnZXRBY2Nlc3MnLlxuICpcbiAqIFVzYWdlOiBnZXRBY2Nlc3NBY3Rpb25cbiAqIGlucHV0OiBmbGF2b3IgaWRzLCBkcm1Qcm92aWRlclxuICogR2V0IEFjY2VzcyBBY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHNcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERybUxpY2Vuc2VBY2Nlc3NHZXRBY2Nlc3NBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHM+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZsYXZvcklkcyA6IHN0cmluZztcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1MaWNlbnNlQWNjZXNzRGV0YWlscyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJtX2RybWxpY2Vuc2VhY2Nlc3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRBY2Nlc3MnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9ySWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==