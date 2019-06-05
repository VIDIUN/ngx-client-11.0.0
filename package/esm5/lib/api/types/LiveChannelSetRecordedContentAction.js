/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelSetRecordedContentActionArgs() { }
/** @type {?} */
LiveChannelSetRecordedContentActionArgs.prototype.entryId;
/** @type {?} */
LiveChannelSetRecordedContentActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveChannelSetRecordedContentActionArgs.prototype.resource;
/** @type {?} */
LiveChannelSetRecordedContentActionArgs.prototype.duration;
/** @type {?|undefined} */
LiveChannelSetRecordedContentActionArgs.prototype.recordedEntryId;
/** @type {?|undefined} */
LiveChannelSetRecordedContentActionArgs.prototype.flavorParamsId;
/**
 * Build request payload for service 'liveChannel' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannel' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
LiveChannelSetRecordedContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelSetRecordedContentAction, _super);
    function LiveChannelSetRecordedContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveChannelSetRecordedContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannel' },
            action: { type: 'c', default: 'setRecordedContent' },
            entryId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            resource: { type: 'o', subTypeConstructor: KalturaDataCenterContentResource, subType: 'KalturaDataCenterContentResource' },
            duration: { type: 'n' },
            recordedEntryId: { type: 's' },
            flavorParamsId: { type: 'n' }
        });
        return result;
    };
    return LiveChannelSetRecordedContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannel' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelSetRecordedContentAction };
if (false) {
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.entryId;
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.resource;
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.duration;
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.recordedEntryId;
    /** @type {?} */
    LiveChannelSetRecordedContentAction.prototype.flavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxTZXRSZWNvcmRlZENvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVDaGFubmVsU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CeEU7Ozs7Ozs7O0FBQUE7SUFBeUQsK0RBQWdDO0lBU3JGLDZDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzNILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQzlILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBeERMO0VBeUJ5RCxjQUFjLEVBZ0N0RSxDQUFBOzs7Ozs7Ozs7QUFoQ0QsK0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVDaGFubmVsU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0cmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlY29yZGVkRW50cnlJZD8gOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsJyBhY3Rpb24gJ3NldFJlY29yZGVkQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IFNldCByZWNvcmRlZCB2aWRlbyB0byBsaXZlIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZUNoYW5uZWxTZXRSZWNvcmRlZENvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdHJlc291cmNlIDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2U7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRyZWNvcmRlZEVudHJ5SWQgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVDaGFubmVsU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVjaGFubmVsJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2V0UmVjb3JkZWRDb250ZW50JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVySW5kZXggOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZScgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWNvcmRlZEVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19