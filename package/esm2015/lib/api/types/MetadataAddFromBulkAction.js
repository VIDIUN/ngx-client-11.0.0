/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataAddFromBulkActionArgs() { }
/** @type {?} */
MetadataAddFromBulkActionArgs.prototype.metadataProfileId;
/** @type {?} */
MetadataAddFromBulkActionArgs.prototype.objectType;
/** @type {?} */
MetadataAddFromBulkActionArgs.prototype.objectId;
/** @type {?} */
MetadataAddFromBulkActionArgs.prototype.url;
/**
 * Build request payload for service 'metadata' action 'addFromBulk'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export class MetadataAddFromBulkAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMetadata', responseConstructor: KalturaMetadata });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'addFromBulk' },
            metadataProfileId: { type: 'n' },
            objectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            objectId: { type: 's' },
            url: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MetadataAddFromBulkAction.prototype.metadataProfileId;
    /** @type {?} */
    MetadataAddFromBulkAction.prototype.objectType;
    /** @type {?} */
    MetadataAddFromBulkAction.prototype.objectId;
    /** @type {?} */
    MetadataAddFromBulkAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFBZGRGcm9tQnVsa0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFBZGRGcm9tQnVsa0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFLE1BQU0sZ0NBQWlDLFNBQVEsY0FBK0I7Ozs7SUFPMUUsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUMsQ0FBQztLQUNuSDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNuSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhQWRkRnJvbUJ1bGtBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0dXJsIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGEnIGFjdGlvbiAnYWRkRnJvbUJ1bGsnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgeW91IHRvIGFkZCBhIG1ldGFkYXRhIHhtbCBkYXRhIGZyb20gcmVtb3RlIFVSTC5cbiAqIEVuYWJsZXMgZGlmZmVyZW50IHBlcm1pc3Npb25zIHRoYW4gYWRkRnJvbVVybCBhY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQWRkRnJvbUJ1bGtBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGE+IHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRvYmplY3RUeXBlIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YUFkZEZyb21CdWxrQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGEnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19