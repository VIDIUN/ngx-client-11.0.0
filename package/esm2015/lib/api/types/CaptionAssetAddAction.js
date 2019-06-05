/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetAddActionArgs() { }
/** @type {?} */
CaptionAssetAddActionArgs.prototype.entryId;
/** @type {?} */
CaptionAssetAddActionArgs.prototype.captionAsset;
/**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCaptionAsset', responseConstructor: KalturaCaptionAsset });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'add' },
            entryId: { type: 's' },
            captionAsset: { type: 'o', subTypeConstructor: KalturaCaptionAsset, subType: 'KalturaCaptionAsset' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionAssetAddAction.prototype.entryId;
    /** @type {?} */
    CaptionAssetAddAction.prototype.captionAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXB0aW9uQXNzZXRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sNEJBQTZCLFNBQVEsY0FBbUM7Ozs7SUFLMUUsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUcsbUJBQW1CLEVBQUcsQ0FBQyxDQUFDO0tBQzNIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN0RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUMvRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldCB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXQgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2FwdGlvbkFzc2V0JyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBjYXB0aW9uIGFzc2V0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNhcHRpb25Bc3NldFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2FwdGlvbkFzc2V0QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhcHRpb25Bc3NldD4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y2FwdGlvbkFzc2V0IDogS2FsdHVyYUNhcHRpb25Bc3NldDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXB0aW9uQXNzZXRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2FwdGlvbl9jYXB0aW9uYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0LCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==