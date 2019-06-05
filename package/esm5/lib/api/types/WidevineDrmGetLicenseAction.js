/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function WidevineDrmGetLicenseActionArgs() { }
/** @type {?} */
WidevineDrmGetLicenseActionArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
WidevineDrmGetLicenseActionArgs.prototype.referrer;
/**
 * Build request payload for service 'widevineDrm' action 'getLicense'.
 *
 * Usage: Get license for encrypted content playback
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'widevineDrm' action 'getLicense'.
 *
 * Usage: Get license for encrypted content playback
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
WidevineDrmGetLicenseAction = /** @class */ (function (_super) {
    tslib_1.__extends(WidevineDrmGetLicenseAction, _super);
    function WidevineDrmGetLicenseAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    WidevineDrmGetLicenseAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'widevine_widevinedrm' },
            action: { type: 'c', default: 'getLicense' },
            flavorAssetId: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    };
    return WidevineDrmGetLicenseAction;
}(KalturaRequest));
/**
 * Build request payload for service 'widevineDrm' action 'getLicense'.
 *
 * Usage: Get license for encrypted content playback
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { WidevineDrmGetLicenseAction };
if (false) {
    /** @type {?} */
    WidevineDrmGetLicenseAction.prototype.flavorAssetId;
    /** @type {?} */
    WidevineDrmGetLicenseAction.prototype.referrer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZXZpbmVEcm1HZXRMaWNlbnNlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9XaWRldmluZURybUdldExpY2Vuc2VBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0I7SUFLbkUscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTFDTDtFQW1CaUQsY0FBYyxFQXdCOUQsQ0FBQTs7Ozs7Ozs7O0FBeEJELHVDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2lkZXZpbmVEcm1HZXRMaWNlbnNlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdHJlZmVycmVyPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3dpZGV2aW5lRHJtJyBhY3Rpb24gJ2dldExpY2Vuc2UnLlxuICpcbiAqIFVzYWdlOiBHZXQgbGljZW5zZSBmb3IgZW5jcnlwdGVkIGNvbnRlbnQgcGxheWJhY2tcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFdpZGV2aW5lRHJtR2V0TGljZW5zZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgZmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogV2lkZXZpbmVEcm1HZXRMaWNlbnNlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAncycsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd3aWRldmluZV93aWRldmluZWRybScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldExpY2Vuc2UnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19