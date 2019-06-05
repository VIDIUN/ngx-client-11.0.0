/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class CategoryUserAddFromBulkUploadAction extends KalturaUploadRequest {
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
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadCategoryUserData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryUserData, subType: 'KalturaBulkUploadCategoryUserData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryUserAddFromBulkUploadAction.prototype.bulkUploadCategoryUserData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhdGVnb3J5VXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjNGLE1BQU0sMENBQTJDLFNBQVEsb0JBQXVDOzs7O0lBTTVGLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUMsQ0FBQztLQUN2SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQzlELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDcEgsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtTQUN6SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWQgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkJztcblxuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5VXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGE7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXRlZ29yeVVzZXInIGFjdGlvbiAnYWRkRnJvbUJ1bGtVcGxvYWQnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdWxrVXBsb2FkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVVzZXJBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhO1xuXHRidWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YSA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXRlZ29yeVVzZXJBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5dXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrVXBsb2FkJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YScgfSxcblx0XHRcdFx0YnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==