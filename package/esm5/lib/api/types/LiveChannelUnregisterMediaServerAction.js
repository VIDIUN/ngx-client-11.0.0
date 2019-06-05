/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelUnregisterMediaServerActionArgs() { }
/** @type {?} */
LiveChannelUnregisterMediaServerActionArgs.prototype.entryId;
/** @type {?} */
LiveChannelUnregisterMediaServerActionArgs.prototype.hostname;
/** @type {?} */
LiveChannelUnregisterMediaServerActionArgs.prototype.mediaServerIndex;
/**
 * Build request payload for service 'liveChannel' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannel' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
LiveChannelUnregisterMediaServerAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelUnregisterMediaServerAction, _super);
    function LiveChannelUnregisterMediaServerAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveChannelUnregisterMediaServerAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannel' },
            action: { type: 'c', default: 'unregisterMediaServer' },
            entryId: { type: 's' },
            hostname: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' }
        });
        return result;
    };
    return LiveChannelUnregisterMediaServerAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannel' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelUnregisterMediaServerAction };
if (false) {
    /** @type {?} */
    LiveChannelUnregisterMediaServerAction.prototype.entryId;
    /** @type {?} */
    LiveChannelUnregisterMediaServerAction.prototype.hostname;
    /** @type {?} */
    LiveChannelUnregisterMediaServerAction.prototype.mediaServerIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxVbnJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVDaGFubmVsVW5yZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBNEQsa0VBQWdDO0lBTXhGLGdEQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDbEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREE5Q0w7RUFxQjRELGNBQWMsRUEwQnpFLENBQUE7Ozs7Ozs7OztBQTFCRCxrREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlQ2hhbm5lbFVucmVnaXN0ZXJNZWRpYVNlcnZlckFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRob3N0bmFtZSA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZUNoYW5uZWwnIGFjdGlvbiAndW5yZWdpc3Rlck1lZGlhU2VydmVyJy5cbiAqXG4gKiBVc2FnZTogVW5yZWdpc3RlciBtZWRpYSBzZXJ2ZXIgZnJvbSBsaXZlIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZUNoYW5uZWxVbnJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRob3N0bmFtZSA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVDaGFubmVsVW5yZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVjaGFubmVsJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndW5yZWdpc3Rlck1lZGlhU2VydmVyJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhvc3RuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVySW5kZXggOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19