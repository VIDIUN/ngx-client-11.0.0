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
export function LiveChannelSegmentAddActionArgs() { }
/** @type {?} */
LiveChannelSegmentAddActionArgs.prototype.liveChannelSegment;
/**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
LiveChannelSegmentAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelSegmentAddAction, _super);
    function LiveChannelSegmentAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveChannelSegment', responseConstructor: KalturaLiveChannelSegment }) || this;
    }
    /**
     * @return {?}
     */
    LiveChannelSegmentAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannelsegment' },
            action: { type: 'c', default: 'add' },
            liveChannelSegment: { type: 'o', subTypeConstructor: KalturaLiveChannelSegment, subType: 'KalturaLiveChannelSegment' }
        });
        return result;
    };
    return LiveChannelSegmentAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelSegmentAddAction };
if (false) {
    /** @type {?} */
    LiveChannelSegmentAddAction.prototype.liveChannelSegment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxTZWdtZW50QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbFNlZ21lbnRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBaUQsdURBQXlDO0lBSXRGLHFDQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDJCQUEyQixFQUFFLG1CQUFtQixFQUFHLHlCQUF5QixFQUFHLENBQUM7S0FDdEk7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQXZDTDtFQWtCaUQsY0FBYyxFQXNCOUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELHVDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZUNoYW5uZWxTZWdtZW50QWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGxpdmVDaGFubmVsU2VnbWVudCA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlQ2hhbm5lbFNlZ21lbnQnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBsaXZlIGNoYW5uZWwgc2VnbWVudFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVDaGFubmVsU2VnbWVudEFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQ+IHtcblxuICAgIGxpdmVDaGFubmVsU2VnbWVudCA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxTZWdtZW50QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVjaGFubmVsc2VnbWVudCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0bGl2ZUNoYW5uZWxTZWdtZW50IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50LCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==