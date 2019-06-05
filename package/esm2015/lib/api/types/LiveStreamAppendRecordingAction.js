/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamAppendRecordingActionArgs() { }
/** @type {?} */
LiveStreamAppendRecordingActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamAppendRecordingActionArgs.prototype.assetId;
/** @type {?} */
LiveStreamAppendRecordingActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveStreamAppendRecordingActionArgs.prototype.resource;
/** @type {?} */
LiveStreamAppendRecordingActionArgs.prototype.duration;
/** @type {?|undefined} */
LiveStreamAppendRecordingActionArgs.prototype.isLastChunk;
/**
 * Build request payload for service 'liveStream' action 'appendRecording'.
 *
 * Usage: Append recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamAppendRecordingAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry });
        if (typeof this.isLastChunk === 'undefined')
            this.isLastChunk = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'appendRecording' },
            entryId: { type: 's' },
            assetId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            resource: { type: 'o', subTypeConstructor: KalturaDataCenterContentResource, subType: 'KalturaDataCenterContentResource' },
            duration: { type: 'n' },
            isLastChunk: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.entryId;
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.assetId;
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.resource;
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.duration;
    /** @type {?} */
    LiveStreamAppendRecordingAction.prototype.isLastChunk;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUFwcGVuZFJlY29yZGluZ0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0cmVhbUFwcGVuZFJlY29yZGluZ0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CeEUsTUFBTSxzQ0FBdUMsU0FBUSxjQUFnQzs7OztJQVNqRixZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDLENBQUM7UUFDbEgsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQ3pFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDM0gsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDOUgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlU3RyZWFtQXBwZW5kUmVjb3JkaW5nQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGFzc2V0SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0cmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdGlzTGFzdENodW5rPyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlU3RyZWFtJyBhY3Rpb24gJ2FwcGVuZFJlY29yZGluZycuXG4gKlxuICogVXNhZ2U6IEFwcGVuZCByZWNvcmRlZCB2aWRlbyB0byBsaXZlIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbUFwcGVuZFJlY29yZGluZ0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGFzc2V0SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0cmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdGlzTGFzdENodW5rIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtQXBwZW5kUmVjb3JkaW5nQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaXNMYXN0Q2h1bmsgPT09ICd1bmRlZmluZWQnKSB0aGlzLmlzTGFzdENodW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZXN0cmVhbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FwcGVuZFJlY29yZGluZycgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVySW5kZXggOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZScgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0xhc3RDaHVuayA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=