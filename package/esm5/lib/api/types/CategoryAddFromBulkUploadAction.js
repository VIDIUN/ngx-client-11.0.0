/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryData } from './KalturaBulkUploadCategoryData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function CategoryAddFromBulkUploadActionArgs() { }
/** @type {?} */
CategoryAddFromBulkUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
CategoryAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/** @type {?|undefined} */
CategoryAddFromBulkUploadActionArgs.prototype.bulkUploadCategoryData;
/**
 * Build request payload for service 'category' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'category' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
CategoryAddFromBulkUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAddFromBulkUploadAction, _super);
    function CategoryAddFromBulkUploadAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    CategoryAddFromBulkUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'category' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadCategoryData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryData, subType: 'KalturaBulkUploadCategoryData' }
        });
        return result;
    };
    return CategoryAddFromBulkUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'category' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { CategoryAddFromBulkUploadAction };
if (false) {
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.bulkUploadCategoryData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCM0Y7Ozs7Ozs7O0FBQUE7SUFBcUQsMkRBQXVDO0lBTXhGLHlDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNwSCxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQzdILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBL0NMO0VBc0JxRCxvQkFBb0IsRUEwQnhFLENBQUE7Ozs7Ozs7OztBQTFCRCwyQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWQgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkJztcblxuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeURhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlEYXRhJztcbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlEYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlEYXRhO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2F0ZWdvcnknIGFjdGlvbiAnYWRkRnJvbUJ1bGtVcGxvYWQnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdWxrVXBsb2FkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGE7XG5cdGJ1bGtVcGxvYWRDYXRlZ29yeURhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXRlZ29yeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tQnVsa1VwbG9hZCcgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfSxcblx0XHRcdFx0YnVsa1VwbG9hZERhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRDYXRlZ29yeURhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlEYXRhJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=