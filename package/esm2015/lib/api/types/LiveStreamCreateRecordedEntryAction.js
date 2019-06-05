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
export function LiveStreamCreateRecordedEntryActionArgs() { }
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.liveEntryStatus;
/**
 * Build request payload for service 'liveStream' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamCreateRecordedEntryAction extends KalturaRequest {
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
            service: { type: 'c', default: 'livestream' },
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
    LiveStreamCreateRecordedEntryAction.prototype.entryId;
    /** @type {?} */
    LiveStreamCreateRecordedEntryAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveStreamCreateRecordedEntryAction.prototype.liveEntryStatus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUNyZWF0ZVJlY29yZGVkRW50cnlBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1DcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLDBDQUEyQyxTQUFRLGNBQWdDOzs7O0lBTXJGLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUMsQ0FBQztLQUNySDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMzSCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUNySCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTdHJlYW1DcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0bGl2ZUVudHJ5U3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAnY3JlYXRlUmVjb3JkZWRFbnRyeScuXG4gKlxuICogVXNhZ2U6IENyZWF0ZSByZWNvcmRlZCBlbnRyeSBpZCBpZiBpdCBkb2Vzbid0IGV4aXN0IGFuZCBtYWtlIHN1cmUgaXQgaGFwcGVucyBvbiB0aGUgREMgdGhhdCB0aGUgbGl2ZSBlbnRyeSB3YXMgY3JlYXRlZCBvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1DcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVFbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRsaXZlRW50cnlTdGF0dXMgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdHJlYW1DcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjcmVhdGVSZWNvcmRlZEVudHJ5JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVySW5kZXggOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZScgfSxcblx0XHRcdFx0bGl2ZUVudHJ5U3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=