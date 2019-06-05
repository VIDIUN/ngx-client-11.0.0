/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function CaptionAssetServeWebVTTActionArgs() { }
/** @type {?} */
CaptionAssetServeWebVTTActionArgs.prototype.captionAssetId;
/** @type {?|undefined} */
CaptionAssetServeWebVTTActionArgs.prototype.segmentDuration;
/** @type {?|undefined} */
CaptionAssetServeWebVTTActionArgs.prototype.segmentIndex;
/** @type {?|undefined} */
CaptionAssetServeWebVTTActionArgs.prototype.localTimestamp;
/**
 * Build request payload for service 'captionAsset' action 'serveWebVTT'.
 *
 * Usage: Serves caption by its id converting it to segmented WebVTT
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetServeWebVTTAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
        if (typeof this.segmentDuration === 'undefined')
            this.segmentDuration = 30;
        if (typeof this.localTimestamp === 'undefined')
            this.localTimestamp = 10000;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'serveWebVTT' },
            captionAssetId: { type: 's' },
            segmentDuration: { type: 'n' },
            segmentIndex: { type: 'n' },
            localTimestamp: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionAssetServeWebVTTAction.prototype.captionAssetId;
    /** @type {?} */
    CaptionAssetServeWebVTTAction.prototype.segmentDuration;
    /** @type {?} */
    CaptionAssetServeWebVTTAction.prototype.segmentIndex;
    /** @type {?} */
    CaptionAssetServeWebVTTAction.prototype.localTimestamp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0U2VydmVXZWJWVFRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldFNlcnZlV2ViVlRUQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckYsTUFBTSxvQ0FBcUMsU0FBUSxrQkFBa0I7Ozs7SUFPakUsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDakYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0tBQ3pFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN0RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uQXNzZXRTZXJ2ZVdlYlZUVEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgY2FwdGlvbkFzc2V0SWQgOiBzdHJpbmc7XG5cdHNlZ21lbnREdXJhdGlvbj8gOiBudW1iZXI7XG5cdHNlZ21lbnRJbmRleD8gOiBudW1iZXI7XG5cdGxvY2FsVGltZXN0YW1wPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhcHRpb25Bc3NldCcgYWN0aW9uICdzZXJ2ZVdlYlZUVCcuXG4gKlxuICogVXNhZ2U6IFNlcnZlcyBjYXB0aW9uIGJ5IGl0cyBpZCBjb252ZXJ0aW5nIGl0IHRvIHNlZ21lbnRlZCBXZWJWVFRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhcHRpb25Bc3NldFNlcnZlV2ViVlRUQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGNhcHRpb25Bc3NldElkIDogc3RyaW5nO1xuXHRzZWdtZW50RHVyYXRpb24gOiBudW1iZXI7XG5cdHNlZ21lbnRJbmRleCA6IG51bWJlcjtcblx0bG9jYWxUaW1lc3RhbXAgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2FwdGlvbkFzc2V0U2VydmVXZWJWVFRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWdtZW50RHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB0aGlzLnNlZ21lbnREdXJhdGlvbiA9IDMwO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5sb2NhbFRpbWVzdGFtcCA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubG9jYWxUaW1lc3RhbXAgPSAxMDAwMDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uX2NhcHRpb25hc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlV2ViVlRUJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWdtZW50RHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2VnbWVudEluZGV4IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxvY2FsVGltZXN0YW1wIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==