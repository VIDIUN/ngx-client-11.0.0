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
export function MetadataAddFromUrlActionArgs() { }
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.metadataProfileId;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.objectType;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.objectId;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export class MetadataAddFromUrlAction extends KalturaRequest {
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
            action: { type: 'c', default: 'addFromUrl' },
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
    MetadataAddFromUrlAction.prototype.metadataProfileId;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.objectType;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.objectId;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFBZGRGcm9tVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YUFkZEZyb21VcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sK0JBQWdDLFNBQVEsY0FBK0I7Ozs7SUFPekUsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUMsQ0FBQztLQUNuSDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNuSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhQWRkRnJvbVVybEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0b2JqZWN0VHlwZSA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHR1cmwgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZXRhZGF0YScgYWN0aW9uICdhZGRGcm9tVXJsJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYSBtZXRhZGF0YSB4bWwgZGF0YSBmcm9tIHJlbW90ZSBVUkxcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQWRkRnJvbVVybEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFNZXRhZGF0YT4ge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0dXJsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1ldGFkYXRhQWRkRnJvbVVybEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tVXJsJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19