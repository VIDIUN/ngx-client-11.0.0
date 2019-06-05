/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'media' action 'addFromBulk'.
 *
 * Usage: Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * This action should be exposed only to the batches
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaAddFromBulkAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAddFromBulkAction, _super);
    function MediaAddFromBulkAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaAddFromBulkAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromBulk' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            url: { type: 's' },
            bulkUploadId: { type: 'n' }
        });
        return result;
    };
    return MediaAddFromBulkAction;
}(KalturaRequest));
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
export { MediaAddFromBulkAction };
if (false) {
    /** @type {?} */
    MediaAddFromBulkAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromBulkAction.prototype.url;
    /** @type {?} */
    MediaAddFromBulkAction.prototype.bulkUploadId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tQnVsa0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWVkaWFBZGRGcm9tQnVsa0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEU7Ozs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBaUM7SUFNekUsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbEcsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBL0NMO0VBc0I0QyxjQUFjLEVBMEJ6RCxDQUFBOzs7Ozs7Ozs7OztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnkgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFBZGRGcm9tQnVsa0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHVybCA6IHN0cmluZztcblx0YnVsa1VwbG9hZElkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWVkaWEnIGFjdGlvbiAnYWRkRnJvbUJ1bGsnLlxuICpcbiAqIFVzYWdlOiBBZGRzIG5ldyBtZWRpYSBlbnRyeSBieSBpbXBvcnRpbmcgYW4gSFRUUCBvciBGVFAgVVJMLlxuICogVGhlIGVudHJ5IHdpbGwgYmUgcXVldWVkIGZvciBpbXBvcnQgYW5kIHRoZW4gZm9yIGNvbnZlcnNpb24uXG4gKiBUaGlzIGFjdGlvbiBzaG91bGQgYmUgZXhwb3NlZCBvbmx5IHRvIHRoZSBiYXRjaGVzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhQWRkRnJvbUJ1bGtBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWVkaWFFbnRyeT4ge1xuXG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR1cmwgOiBzdHJpbmc7XG5cdGJ1bGtVcGxvYWRJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYUFkZEZyb21CdWxrQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tQnVsaycgfSxcblx0XHRcdFx0bWVkaWFFbnRyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhRW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhRW50cnknIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19