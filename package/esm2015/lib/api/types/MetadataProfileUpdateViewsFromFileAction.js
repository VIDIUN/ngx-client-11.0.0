/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MetadataProfileUpdateViewsFromFileActionArgs() { }
/** @type {?} */
MetadataProfileUpdateViewsFromFileActionArgs.prototype.id;
/** @type {?} */
MetadataProfileUpdateViewsFromFileActionArgs.prototype.viewsFile;
/**
 * Build request payload for service 'metadataProfile' action 'updateViewsFromFile'.
 *
 * Usage: Update an existing metadata object views file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export class MetadataProfileUpdateViewsFromFileAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'updateViewsFromFile' },
            id: { type: 'n' },
            viewsFile: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MetadataProfileUpdateViewsFromFileAction.prototype.id;
    /** @type {?} */
    MetadataProfileUpdateViewsFromFileAction.prototype.viewsFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlVXBkYXRlVmlld3NGcm9tRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFQcm9maWxlVXBkYXRlVmlld3NGcm9tRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWUzRixNQUFNLCtDQUFnRCxTQUFRLG9CQUE0Qzs7OztJQUt0RyxZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDLENBQUM7S0FDakk7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVByb2ZpbGVVcGRhdGVWaWV3c0Zyb21GaWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHR2aWV3c0ZpbGUgOiBGaWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGFQcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZVZpZXdzRnJvbUZpbGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYW4gZXhpc3RpbmcgbWV0YWRhdGEgb2JqZWN0IHZpZXdzIGZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVByb2ZpbGVVcGRhdGVWaWV3c0Zyb21GaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYU1ldGFkYXRhUHJvZmlsZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHZpZXdzRmlsZSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFQcm9maWxlVXBkYXRlVmlld3NGcm9tRmlsZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVWaWV3c0Zyb21GaWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWV3c0ZpbGUgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19