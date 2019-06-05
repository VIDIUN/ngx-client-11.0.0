/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryUserData } from './KalturaBulkUploadCategoryUserData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function CategoryUserAddFromBulkUploadActionArgs() { }
/** @type {?} */
CategoryUserAddFromBulkUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
CategoryUserAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/** @type {?|undefined} */
CategoryUserAddFromBulkUploadActionArgs.prototype.bulkUploadCategoryUserData;
/**
 * Build request payload for service 'categoryUser' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryUser' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
CategoryUserAddFromBulkUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryUserAddFromBulkUploadAction, _super);
    function CategoryUserAddFromBulkUploadAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    CategoryUserAddFromBulkUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadCategoryUserData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryUserData, subType: 'KalturaBulkUploadCategoryUserData' }
        });
        return result;
    };
    return CategoryUserAddFromBulkUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'categoryUser' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { CategoryUserAddFromBulkUploadAction };
if (false) {
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.bulkUploadCategoryUserData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhdGVnb3J5VXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IzRjs7Ozs7Ozs7QUFBQTtJQUF5RCwrREFBdUM7SUFNNUYsNkNBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUM5RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3BILDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDekksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4Q0EvQ0w7RUFzQnlELG9CQUFvQixFQTBCNUUsQ0FBQTs7Ozs7Ozs7O0FBMUJELCtDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZCB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlVc2VyQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgZmlsZURhdGEgOiBGaWxlO1xuXHRidWxrVXBsb2FkRGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGE7XG5cdGJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5VXNlcicgYWN0aW9uICdhZGRGcm9tQnVsa1VwbG9hZCcuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJ1bGtVcGxvYWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5VXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGE7XG5cdGJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhdGVnb3J5VXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnl1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUJ1bGtVcGxvYWQnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWREYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19