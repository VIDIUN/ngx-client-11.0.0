/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddFromBulkActionArgs() { }
/** @type {?} */
MediaAddFromBulkActionArgs.prototype.mediaEntry;
/** @type {?} */
MediaAddFromBulkActionArgs.prototype.url;
/** @type {?} */
MediaAddFromBulkActionArgs.prototype.bulkUploadId;
/**
 * Build request payload for service 'media' action 'addFromBulk'.
 *
 * Usage: Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * This action should be exposed only to the batches
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export class MediaAddFromBulkAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromBulk' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            url: { type: 's' },
            bulkUploadId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MediaAddFromBulkAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromBulkAction.prototype.url;
    /** @type {?} */
    MediaAddFromBulkAction.prototype.bulkUploadId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tQnVsa0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWVkaWFBZGRGcm9tQnVsa0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J4RSxNQUFNLDZCQUE4QixTQUFRLGNBQWlDOzs7O0lBTXpFLFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUMsQ0FBQztLQUN2SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNsRyxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhQWRkRnJvbUJ1bGtBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR1cmwgOiBzdHJpbmc7XG5cdGJ1bGtVcGxvYWRJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21lZGlhJyBhY3Rpb24gJ2FkZEZyb21CdWxrJy5cbiAqXG4gKiBVc2FnZTogQWRkcyBuZXcgbWVkaWEgZW50cnkgYnkgaW1wb3J0aW5nIGFuIEhUVFAgb3IgRlRQIFVSTC5cbiAqIFRoZSBlbnRyeSB3aWxsIGJlIHF1ZXVlZCBmb3IgaW1wb3J0IGFuZCB0aGVuIGZvciBjb252ZXJzaW9uLlxuICogVGhpcyBhY3Rpb24gc2hvdWxkIGJlIGV4cG9zZWQgb25seSB0byB0aGUgYmF0Y2hlc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZWRpYUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYUFkZEZyb21CdWxrQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1lZGlhRW50cnk+IHtcblxuICAgIG1lZGlhRW50cnkgOiBLYWx0dXJhTWVkaWFFbnRyeTtcblx0dXJsIDogc3RyaW5nO1xuXHRidWxrVXBsb2FkSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWVkaWFBZGRGcm9tQnVsa0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUJ1bGsnIH0sXG5cdFx0XHRcdG1lZGlhRW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVsa1VwbG9hZElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==