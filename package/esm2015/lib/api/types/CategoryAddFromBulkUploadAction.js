/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class CategoryAddFromBulkUploadAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'category' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadCategoryData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryData, subType: 'KalturaBulkUploadCategoryData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryAddFromBulkUploadAction.prototype.bulkUploadCategoryData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IzRixNQUFNLHNDQUF1QyxTQUFRLG9CQUF1Qzs7OztJQU14RixZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3BILHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZCc7XG5cbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YTtcblx0YnVsa1VwbG9hZENhdGVnb3J5RGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RGF0YTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5JyBhY3Rpb24gJ2FkZEZyb21CdWxrVXBsb2FkJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQnVsa1VwbG9hZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlEYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeURhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2F0ZWdvcnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUJ1bGtVcGxvYWQnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWREYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkQ2F0ZWdvcnlEYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19