/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class LiveChannelRegisterMediaServerAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry });
        if (typeof this.liveEntryStatus === 'undefined')
            this.liveEntryStatus = 1;
        if (typeof this.shouldCreateRecordedEntry === 'undefined')
            this.shouldCreateRecordedEntry = true;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxSZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbFJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhFLE1BQU0sMkNBQTRDLFNBQVEsY0FBZ0M7Ozs7SUFTdEYsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQyxDQUFDO1FBQ2xILEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNoRixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO0tBQzlGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDM0gsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUM5SCx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlQ2hhbm5lbFJlZ2lzdGVyTWVkaWFTZXJ2ZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0aG9zdG5hbWUgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0YXBwbGljYXRpb25OYW1lPyA6IHN0cmluZztcblx0bGl2ZUVudHJ5U3RhdHVzPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cdHNob3VsZENyZWF0ZVJlY29yZGVkRW50cnk/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsJyBhY3Rpb24gJ3JlZ2lzdGVyTWVkaWFTZXJ2ZXInLlxuICpcbiAqIFVzYWdlOiBSZWdpc3RlciBtZWRpYSBzZXJ2ZXIgdG8gbGl2ZSBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVDaGFubmVsUmVnaXN0ZXJNZWRpYVNlcnZlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGhvc3RuYW1lIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGFwcGxpY2F0aW9uTmFtZSA6IHN0cmluZztcblx0bGl2ZUVudHJ5U3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblx0c2hvdWxkQ3JlYXRlUmVjb3JkZWRFbnRyeSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxSZWdpc3Rlck1lZGlhU2VydmVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGl2ZUVudHJ5U3RhdHVzID09PSAndW5kZWZpbmVkJykgdGhpcy5saXZlRW50cnlTdGF0dXMgPSAxO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5zaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5zaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlY2hhbm5lbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlZ2lzdGVyTWVkaWFTZXJ2ZXInIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGl2ZUVudHJ5U3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzJyB9LFxuXHRcdFx0XHRzaG91bGRDcmVhdGVSZWNvcmRlZEVudHJ5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==