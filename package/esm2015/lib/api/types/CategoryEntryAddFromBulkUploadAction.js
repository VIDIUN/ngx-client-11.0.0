/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class CategoryEntryAddFromBulkUploadAction extends KalturaRequest {
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
            service: { type: 'c', default: 'categoryentry' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkServiceData, subType: 'KalturaBulkServiceData' },
            bulkUploadCategoryEntryData: { type: 'o', subTypeConstructor: KalturaBulkUploadCategoryEntryData, subType: 'KalturaBulkUploadCategoryEntryData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CategoryEntryAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    CategoryEntryAddFromBulkUploadAction.prototype.bulkUploadCategoryEntryData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlFbnRyeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeUVudHJ5QWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sMkNBQTRDLFNBQVEsY0FBaUM7Ozs7SUFLdkYsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDaEgsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUM1SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWQgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkJztcblxuaW1wb3J0IHsgS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5RW50cnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBidWxrVXBsb2FkRGF0YSA6IEthbHR1cmFCdWxrU2VydmljZURhdGE7XG5cdGJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5RW50cnlEYXRhO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2F0ZWdvcnlFbnRyeScgYWN0aW9uICdhZGRGcm9tQnVsa1VwbG9hZCcuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJ1bGtVcGxvYWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5RW50cnlBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBidWxrVXBsb2FkRGF0YSA6IEthbHR1cmFCdWxrU2VydmljZURhdGE7XG5cdGJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YSA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2F0ZWdvcnlFbnRyeUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnllbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrVXBsb2FkJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1NlcnZpY2VEYXRhJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlFbnRyeURhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeUVudHJ5RGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19