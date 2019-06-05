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
export function LiveStreamSetRecordedContentActionArgs() { }
/** @type {?} */
LiveStreamSetRecordedContentActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamSetRecordedContentActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveStreamSetRecordedContentActionArgs.prototype.resource;
/** @type {?} */
LiveStreamSetRecordedContentActionArgs.prototype.duration;
/** @type {?|undefined} */
LiveStreamSetRecordedContentActionArgs.prototype.recordedEntryId;
/** @type {?|undefined} */
LiveStreamSetRecordedContentActionArgs.prototype.flavorParamsId;
/**
 * Build request payload for service 'liveStream' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamSetRecordedContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamSetRecordedContentAction, _super);
    function LiveStreamSetRecordedContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamSetRecordedContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
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
    return LiveStreamSetRecordedContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamSetRecordedContentAction };
if (false) {
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.entryId;
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.resource;
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.duration;
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.recordedEntryId;
    /** @type {?} */
    LiveStreamSetRecordedContentAction.prototype.flavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbVNldFJlY29yZGVkQ29udGVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0cmVhbVNldFJlY29yZGVkQ29udGVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhFOzs7Ozs7OztBQUFBO0lBQXdELDhEQUFnQztJQVNwRiw0Q0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDO0tBQ3BIOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMzSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQXhETDtFQXlCd0QsY0FBYyxFQWdDckUsQ0FBQTs7Ozs7Ozs7O0FBaENELDhDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlU3RyZWFtU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0cmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlY29yZGVkRW50cnlJZD8gOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAnc2V0UmVjb3JkZWRDb250ZW50Jy5cbiAqXG4gKiBVc2FnZTogU2V0IHJlY29yZGVkIHZpZGVvIHRvIGxpdmUgZW50cnlcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVFbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblx0cmVjb3JkZWRFbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXRSZWNvcmRlZENvbnRlbnQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRyZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY29yZGVkRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=