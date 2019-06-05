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
export function LiveChannelCreateRecordedEntryActionArgs() { }
/** @type {?} */
LiveChannelCreateRecordedEntryActionArgs.prototype.entryId;
/** @type {?} */
LiveChannelCreateRecordedEntryActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveChannelCreateRecordedEntryActionArgs.prototype.liveEntryStatus;
/**
 * Build request payload for service 'liveChannel' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveChannelCreateRecordedEntryAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannel' },
            action: { type: 'c', default: 'createRecordedEntry' },
            entryId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            liveEntryStatus: { type: 'en', subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveChannelCreateRecordedEntryAction.prototype.entryId;
    /** @type {?} */
    LiveChannelCreateRecordedEntryAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveChannelCreateRecordedEntryAction.prototype.liveEntryStatus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxDcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlQ2hhbm5lbENyZWF0ZVJlY29yZGVkRW50cnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0sMkNBQTRDLFNBQVEsY0FBZ0M7Ozs7SUFNdEYsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQyxDQUFDO0tBQ3JIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzNILGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZUNoYW5uZWxDcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0bGl2ZUVudHJ5U3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVDaGFubmVsJyBhY3Rpb24gJ2NyZWF0ZVJlY29yZGVkRW50cnknLlxuICpcbiAqIFVzYWdlOiBDcmVhdGUgcmVjb3JkZWQgZW50cnkgaWQgaWYgaXQgZG9lc24ndCBleGlzdCBhbmQgbWFrZSBzdXJlIGl0IGhhcHBlbnMgb24gdGhlIERDIHRoYXQgdGhlIGxpdmUgZW50cnkgd2FzIGNyZWF0ZWQgb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlQ2hhbm5lbENyZWF0ZVJlY29yZGVkRW50cnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGxpdmVFbnRyeVN0YXR1cyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxDcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVjaGFubmVsJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY3JlYXRlUmVjb3JkZWRFbnRyeScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVNlcnZlckluZGV4IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnIH0sXG5cdFx0XHRcdGxpdmVFbnRyeVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19