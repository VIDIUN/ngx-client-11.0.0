/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function AnnotationAddFromBulkActionArgs() { }
/** @type {?} */
AnnotationAddFromBulkActionArgs.prototype.fileData;
/**
 * Build request payload for service 'annotation' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
export class AnnotationAddFromBulkAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCuePointListResponse', responseConstructor: KalturaCuePointListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'annotation_annotation' },
            action: { type: 'c', default: 'addFromBulk' },
            fileData: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    AnnotationAddFromBulkAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkFkZEZyb21CdWxrQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Bbm5vdGF0aW9uQWRkRnJvbUJ1bGtBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBYzNGLE1BQU0sa0NBQW1DLFNBQVEsb0JBQWlEOzs7O0lBSTlGLFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDZCQUE2QixFQUFFLG1CQUFtQixFQUFHLDJCQUEyQixFQUFHLENBQUMsQ0FBQztLQUMzSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludExpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25BZGRGcm9tQnVsa0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhbm5vdGF0aW9uJyBhY3Rpb24gJ2FkZEZyb21CdWxrJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgbXVsdGlwbGUgY3VlIHBvaW50cyBvYmplY3RzIGJ5IHVwbG9hZGluZyBYTUwgdGhhdCBjb250YWlucyBtdWx0aXBsZSBjdWUgcG9pbnQgZGVmaW5pdGlvbnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25BZGRGcm9tQnVsa0FjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFDdWVQb2ludExpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsZURhdGEgOiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFubm90YXRpb25BZGRGcm9tQnVsa0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludExpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYW5ub3RhdGlvbl9hbm5vdGF0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUJ1bGsnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==