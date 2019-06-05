/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadEntryData } from './KalturaBulkUploadEntryData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MediaBulkUploadAddActionArgs() { }
/** @type {?} */
MediaBulkUploadAddActionArgs.prototype.fileData;
/** @type {?|undefined} */
MediaBulkUploadAddActionArgs.prototype.bulkUploadData;
/** @type {?|undefined} */
MediaBulkUploadAddActionArgs.prototype.bulkUploadEntryData;
/**
 * Build request payload for service 'media' action 'bulkUploadAdd'.
 *
 * Usage: Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class MediaBulkUploadAddAction extends KalturaUploadRequest {
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
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'bulkUploadAdd' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadEntryData: { type: 'o', subTypeConstructor: KalturaBulkUploadEntryData, subType: 'KalturaBulkUploadEntryData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MediaBulkUploadAddAction.prototype.fileData;
    /** @type {?} */
    MediaBulkUploadAddAction.prototype.bulkUploadData;
    /** @type {?} */
    MediaBulkUploadAddAction.prototype.bulkUploadEntryData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFCdWxrVXBsb2FkQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUJ1bGtVcGxvYWRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0IzRixNQUFNLCtCQUFnQyxTQUFRLG9CQUF1Qzs7OztJQU1qRixZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNwSCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQ3BILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZCB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEVudHJ5RGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRFbnRyeURhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhQnVsa1VwbG9hZEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YTtcblx0YnVsa1VwbG9hZEVudHJ5RGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZEVudHJ5RGF0YTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21lZGlhJyBhY3Rpb24gJ2J1bGtVcGxvYWRBZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IGJ1bGsgdXBsb2FkIGJhdGNoIGpvYlxuICogQ29udmVyc2lvbiBwcm9maWxlIGlkIGNhbiBiZSBzcGVjaWZpZWQgaW4gdGhlIEFQSSBvciBpbiB0aGUgQ1NWIGZpbGUsIHRoZSBvbmUgaW4gdGhlIENTViBmaWxlIHdpbGwgYmUgc3Ryb25nZXIuXG4gKiBJZiBubyBjb252ZXJzaW9uIHByb2ZpbGUgd2FzIHNwZWNpZmllZCwgcGFydG5lcidzIGRlZmF1bHQgd2lsbCBiZSB1c2VkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJ1bGtVcGxvYWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhQnVsa1VwbG9hZEFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhO1xuXHRidWxrVXBsb2FkRW50cnlEYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRFbnRyeURhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWVkaWFCdWxrVXBsb2FkQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidWxrVXBsb2FkQWRkJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YScgfSxcblx0XHRcdFx0YnVsa1VwbG9hZEVudHJ5RGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRFbnRyeURhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRFbnRyeURhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==