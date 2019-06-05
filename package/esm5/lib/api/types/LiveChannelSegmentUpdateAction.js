/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelSegmentUpdateActionArgs() { }
/** @type {?} */
LiveChannelSegmentUpdateActionArgs.prototype.id;
/** @type {?} */
LiveChannelSegmentUpdateActionArgs.prototype.liveChannelSegment;
/**
 * Build request payload for service 'liveChannelSegment' action 'update'.
 *
 * Usage: Update live channel segment by id
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannelSegment' action 'update'.
 *
 * Usage: Update live channel segment by id
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
LiveChannelSegmentUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelSegmentUpdateAction, _super);
    function LiveChannelSegmentUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveChannelSegment', responseConstructor: KalturaLiveChannelSegment }) || this;
    }
    /**
     * @return {?}
     */
    LiveChannelSegmentUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannelsegment' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            liveChannelSegment: { type: 'o', subTypeConstructor: KalturaLiveChannelSegment, subType: 'KalturaLiveChannelSegment' }
        });
        return result;
    };
    return LiveChannelSegmentUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannelSegment' action 'update'.
 *
 * Usage: Update live channel segment by id
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelSegmentUpdateAction };
if (false) {
    /** @type {?} */
    LiveChannelSegmentUpdateAction.prototype.id;
    /** @type {?} */
    LiveChannelSegmentUpdateAction.prototype.liveChannelSegment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxTZWdtZW50VXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbFNlZ21lbnRVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFvRCwwREFBeUM7SUFLekYsd0NBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUcseUJBQXlCLEVBQUcsQ0FBQztLQUN0STs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDakgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0ExQ0w7RUFtQm9ELGNBQWMsRUF3QmpFLENBQUE7Ozs7Ozs7OztBQXhCRCwwQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCB9IGZyb20gJy4vS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVDaGFubmVsU2VnbWVudFVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0bGl2ZUNoYW5uZWxTZWdtZW50IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsU2VnbWVudCcgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgbGl2ZSBjaGFubmVsIHNlZ21lbnQgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlQ2hhbm5lbFNlZ21lbnRVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50PiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0bGl2ZUNoYW5uZWxTZWdtZW50IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlQ2hhbm5lbFNlZ21lbnRVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZWNoYW5uZWxzZWdtZW50JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaXZlQ2hhbm5lbFNlZ21lbnQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19