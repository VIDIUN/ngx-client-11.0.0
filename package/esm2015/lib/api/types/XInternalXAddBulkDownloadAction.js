/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function XInternalXAddBulkDownloadActionArgs() { }
/** @type {?} */
XInternalXAddBulkDownloadActionArgs.prototype.entryIds;
/** @type {?|undefined} */
XInternalXAddBulkDownloadActionArgs.prototype.flavorParamsId;
/**
 * Build request payload for service 'xInternal' action 'xAddBulkDownload'.
 *
 * Usage: Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class XInternalXAddBulkDownloadAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'xinternal' },
            action: { type: 'c', default: 'xAddBulkDownload' },
            entryIds: { type: 's' },
            flavorParamsId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    XInternalXAddBulkDownloadAction.prototype.entryIds;
    /** @type {?} */
    XInternalXAddBulkDownloadAction.prototype.flavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCeEUsTUFBTSxzQ0FBdUMsU0FBUSxjQUFzQjs7OztJQUt2RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFhJbnRlcm5hbFhBZGRCdWxrRG93bmxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZHMgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3hJbnRlcm5hbCcgYWN0aW9uICd4QWRkQnVsa0Rvd25sb2FkJy5cbiAqXG4gKiBVc2FnZTogQ3JlYXRlcyBuZXcgZG93bmxvYWQgam9iIGZvciBtdWx0aXBsZSBlbnRyeSBpZHMgKGNvbW1hIHNlcGFyYXRlZCksIGFuIGVtYWlsIHdpbGwgYmUgc2VudCB3aGVuIHRoZSBqb2IgaXMgZG9uZVxuICogVGhpcyBzZXZpY2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGVudHJpZXM6XG4gKiAtIE1lZGlhRW50cnlcbiAqIC0gVmlkZW8gd2lsbCBiZSBjb252ZXJ0ZWQgdXNpbmcgdGhlIGZsYXZvciBwYXJhbXMgaWRcbiAqIC0gQXVkaW8gd2lsbCBiZSBkb3dubG9hZGVkIGFzIE1QM1xuICogLSBJbWFnZSB3aWxsIGJlIGRvd25sb2FkZWQgYXMgSnBlZ1xuICogLSBNaXhFbnRyeSB3aWxsIGJlIGZsYXR0ZW5lZCB1c2luZyB0aGUgZmxhdm9yIHBhcmFtcyBpZFxuICogLSBPdGhlciBlbnRyeSB0eXBlcyBhcmUgbm90IHN1cHBvcnRlZFxuICogUmV0dXJucyB0aGUgYWRtaW4gZW1haWwgdGhhdCB0aGUgZW1haWwgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG9cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFhJbnRlcm5hbFhBZGRCdWxrRG93bmxvYWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIGVudHJ5SWRzIDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBYSW50ZXJuYWxYQWRkQnVsa0Rvd25sb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAncycsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd4aW50ZXJuYWwnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd4QWRkQnVsa0Rvd25sb2FkJyB9LFxuXHRcdFx0XHRlbnRyeUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=