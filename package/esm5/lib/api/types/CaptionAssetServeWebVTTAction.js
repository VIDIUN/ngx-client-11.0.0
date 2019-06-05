/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'captionAsset' action 'serveWebVTT'.
 *
 * Usage: Serves caption by its id converting it to segmented WebVTT
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
CaptionAssetServeWebVTTAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetServeWebVTTAction, _super);
    function CaptionAssetServeWebVTTAction(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.segmentDuration === 'undefined')
            _this.segmentDuration = 30;
        if (typeof _this.localTimestamp === 'undefined')
            _this.localTimestamp = 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    CaptionAssetServeWebVTTAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'serveWebVTT' },
            captionAssetId: { type: 's' },
            segmentDuration: { type: 'n' },
            segmentIndex: { type: 'n' },
            localTimestamp: { type: 'n' }
        });
        return result;
    };
    return CaptionAssetServeWebVTTAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'captionAsset' action 'serveWebVTT'.
 *
 * Usage: Serves caption by its id converting it to segmented WebVTT
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetServeWebVTTAction };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0U2VydmVXZWJWVFRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldFNlcnZlV2ViVlRUQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJGOzs7Ozs7OztBQUFBO0lBQW1ELHlEQUFrQjtJQU9qRSx1Q0FBWSxJQUF3QztRQUFwRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ2pGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7S0FDekU7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN0RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQWxETDtFQXFCbUQsa0JBQWtCLEVBOEJwRSxDQUFBOzs7Ozs7Ozs7QUE5QkQseUNBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvbkFzc2V0U2VydmVXZWJWVFRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGNhcHRpb25Bc3NldElkIDogc3RyaW5nO1xuXHRzZWdtZW50RHVyYXRpb24/IDogbnVtYmVyO1xuXHRzZWdtZW50SW5kZXg/IDogbnVtYmVyO1xuXHRsb2NhbFRpbWVzdGFtcD8gOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uQXNzZXQnIGFjdGlvbiAnc2VydmVXZWJWVFQnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgY2FwdGlvbiBieSBpdHMgaWQgY29udmVydGluZyBpdCB0byBzZWdtZW50ZWQgV2ViVlRUXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uQXNzZXRTZXJ2ZVdlYlZUVEFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBjYXB0aW9uQXNzZXRJZCA6IHN0cmluZztcblx0c2VnbWVudER1cmF0aW9uIDogbnVtYmVyO1xuXHRzZWdtZW50SW5kZXggOiBudW1iZXI7XG5cdGxvY2FsVGltZXN0YW1wIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhcHRpb25Bc3NldFNlcnZlV2ViVlRUQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VnbWVudER1cmF0aW9uID09PSAndW5kZWZpbmVkJykgdGhpcy5zZWdtZW50RHVyYXRpb24gPSAzMDtcblx0XHRpZiAodHlwZW9mIHRoaXMubG9jYWxUaW1lc3RhbXAgPT09ICd1bmRlZmluZWQnKSB0aGlzLmxvY2FsVGltZXN0YW1wID0gMTAwMDA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2FwdGlvbl9jYXB0aW9uYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXJ2ZVdlYlZUVCcgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VnbWVudER1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlZ21lbnRJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsb2NhbFRpbWVzdGFtcCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=