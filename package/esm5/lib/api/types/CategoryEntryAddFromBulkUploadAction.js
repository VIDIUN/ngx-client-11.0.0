/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkServiceData } from './KalturaBulkServiceData';
import { KalturaBulkUploadCategoryEntryData } from './KalturaBulkUploadCategoryEntryData';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryEntryAddFromBulkUploadActionArgs() { }
/** @type {?} */
CategoryEntryAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/** @type {?|undefined} */
CategoryEntryAddFromBulkUploadActionArgs.prototype.bulkUploadCategoryEntryData;
/**
 * Build request payload for service 'categoryEntry' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryEntry' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
CategoryEntryAddFromBulkUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryEntryAddFromBulkUploadAction, _super);
    function CategoryEntryAddFromBulkUploadAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    CategoryEntryAddFromBulkUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryentry' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkServiceData, subType: 'KalturaBulkServiceData' },
            bulkUploadCategoryEntryData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryEntryData, subType: 'KalturaBulkUploadCategoryEntryData' }
        });
        return result;
    };
    return CategoryEntryAddFromBulkUploadAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryEntry' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { CategoryEntryAddFromBulkUploadAction };
if (false) {
    /** @type {?} */
    CategoryEntryAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryEntryAddFromBulkUploadAction.prototype.bulkUploadCategoryEntryData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlFbnRyeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeUVudHJ5QWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEwRCxnRUFBaUM7SUFLdkYsOENBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNoSCwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1NBQzVJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUNMO0VBcUIwRCxjQUFjLEVBd0J2RSxDQUFBOzs7Ozs7Ozs7QUF4QkQsZ0RBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZCc7XG5cbmltcG9ydCB7IEthbHR1cmFCdWxrU2VydmljZURhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrU2VydmljZURhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUVudHJ5QWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgYnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1NlcnZpY2VEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5RW50cnknIGFjdGlvbiAnYWRkRnJvbUJ1bGtVcGxvYWQnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdWxrVXBsb2FkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUVudHJ5QWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQnVsa1VwbG9hZD4ge1xuXG4gICAgYnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1NlcnZpY2VEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhdGVnb3J5RW50cnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5ZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tQnVsa1VwbG9hZCcgfSxcblx0XHRcdFx0YnVsa1VwbG9hZERhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrU2VydmljZURhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YScgfSxcblx0XHRcdFx0YnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==