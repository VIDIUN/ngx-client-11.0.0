/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelRegisterMediaServerActionArgs() { }
/** @type {?} */
LiveChannelRegisterMediaServerActionArgs.prototype.entryId;
/** @type {?} */
LiveChannelRegisterMediaServerActionArgs.prototype.hostname;
/** @type {?} */
LiveChannelRegisterMediaServerActionArgs.prototype.mediaServerIndex;
/** @type {?|undefined} */
LiveChannelRegisterMediaServerActionArgs.prototype.applicationName;
/** @type {?|undefined} */
LiveChannelRegisterMediaServerActionArgs.prototype.liveEntryStatus;
/** @type {?|undefined} */
LiveChannelRegisterMediaServerActionArgs.prototype.shouldCreateRecordedEntry;
/**
 * Build request payload for service 'liveChannel' action 'registerMediaServer'.
 *
 * Usage: Register media server to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannel' action 'registerMediaServer'.
 *
 * Usage: Register media server to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
LiveChannelRegisterMediaServerAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelRegisterMediaServerAction, _super);
    function LiveChannelRegisterMediaServerAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry }) || this;
        if (typeof _this.liveEntryStatus === 'undefined')
            _this.liveEntryStatus = 1;
        if (typeof _this.shouldCreateRecordedEntry === 'undefined')
            _this.shouldCreateRecordedEntry = true;
        return _this;
    }
    /**
     * @return {?}
     */
    LiveChannelRegisterMediaServerAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannel' },
            action: { type: 'c', default: 'registerMediaServer' },
            entryId: { type: 's' },
            hostname: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            applicationName: { type: 's' },
            liveEntryStatus: { type: 'en', subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' },
            shouldCreateRecordedEntry: { type: 'b' }
        });
        return result;
    };
    return LiveChannelRegisterMediaServerAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannel' action 'registerMediaServer'.
 *
 * Usage: Register media server to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelRegisterMediaServerAction };
if (false) {
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.entryId;
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.hostname;
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.applicationName;
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.liveEntryStatus;
    /** @type {?} */
    LiveChannelRegisterMediaServerAction.prototype.shouldCreateRecordedEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxSZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbFJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RTs7Ozs7Ozs7QUFBQTtJQUEwRCxnRUFBZ0M7SUFTdEYsOENBQVksSUFBK0M7UUFBM0QsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDLFNBR3BIO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLHlCQUF5QixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7O0tBQzlGOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzNILGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDOUgseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBMURMO0VBeUIwRCxjQUFjLEVBa0N2RSxDQUFBOzs7Ozs7Ozs7QUFsQ0QsZ0RBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlQ2hhbm5lbFJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0aG9zdG5hbWUgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0YXBwbGljYXRpb25OYW1lPyA6IHN0cmluZztcblx0bGl2ZUVudHJ5U3RhdHVzPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cdHNob3VsZENyZWF0ZVJlY29yZGVkRW50cnk/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsJyBhY3Rpb24gJ3JlZ2lzdGVyTWVkaWFTZXJ2ZXInLlxuICpcbiAqIFVzYWdlOiBSZWdpc3RlciBtZWRpYSBzZXJ2ZXIgdG8gbGl2ZSBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVDaGFubmVsUmVnaXN0ZXJNZWRpYVNlcnZlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGhvc3RuYW1lIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGFwcGxpY2F0aW9uTmFtZSA6IHN0cmluZztcblx0bGl2ZUVudHJ5U3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblx0c2hvdWxkQ3JlYXRlUmVjb3JkZWRFbnRyeSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxSZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGl2ZUVudHJ5U3RhdHVzID09PSAndW5kZWZpbmVkJykgdGhpcy5saXZlRW50cnlTdGF0dXMgPSAxO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5zaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5zaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlY2hhbm5lbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlZ2lzdGVyTWVkaWFTZXJ2ZXInIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGl2ZUVudHJ5U3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzJyB9LFxuXHRcdFx0XHRzaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==