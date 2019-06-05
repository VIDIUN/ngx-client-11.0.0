/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function CuePointAddFromBulkActionArgs() { }
/** @type {?} */
CuePointAddFromBulkActionArgs.prototype.fileData;
/**
 * Build request payload for service 'cuePoint' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'cuePoint' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
CuePointAddFromBulkAction = /** @class */ (function (_super) {
    tslib_1.__extends(CuePointAddFromBulkAction, _super);
    function CuePointAddFromBulkAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCuePointListResponse', responseConstructor: KalturaCuePointListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CuePointAddFromBulkAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'cuepoint_cuepoint' },
            action: { type: 'c', default: 'addFromBulk' },
            fileData: { type: 'f' }
        });
        return result;
    };
    return CuePointAddFromBulkAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'cuePoint' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
export { CuePointAddFromBulkAction };
if (false) {
    /** @type {?} */
    CuePointAddFromBulkAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBYzNGOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFpRDtJQUk1RixtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDO0tBQzFJOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0F2Q0w7RUFrQitDLG9CQUFvQixFQXNCbEUsQ0FBQTs7Ozs7Ozs7O0FBdEJELHFDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludExpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDdWVQb2ludEFkZEZyb21CdWxrQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGZpbGVEYXRhIDogRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2N1ZVBvaW50JyBhY3Rpb24gJ2FkZEZyb21CdWxrJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgbXVsdGlwbGUgY3VlIHBvaW50cyBvYmplY3RzIGJ5IHVwbG9hZGluZyBYTUwgdGhhdCBjb250YWlucyBtdWx0aXBsZSBjdWUgcG9pbnQgZGVmaW5pdGlvbnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEN1ZVBvaW50QWRkRnJvbUJ1bGtBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxLYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDdWVQb2ludEFkZEZyb21CdWxrQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjdWVwb2ludF9jdWVwb2ludCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=