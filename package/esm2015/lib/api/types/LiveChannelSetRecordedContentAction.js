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
export class LiveChannelSetRecordedContentAction extends KalturaRequest {
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
            action: { type: 'c', default: 'setRecordedContent' },
            entryId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            resource: { type: 'o', subTypeConstructor: KalturaDataCenterContentResource, subType: 'KalturaDataCenterContentResource' },
            duration: { type: 'n' },
            recordedEntryId: { type: 's' },
            flavorParamsId: { type: 'n' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxTZXRSZWNvcmRlZENvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVDaGFubmVsU2V0UmVjb3JkZWRDb250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RSxNQUFNLDBDQUEyQyxTQUFRLGNBQWdDOzs7O0lBU3JGLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUMsQ0FBQztLQUNySDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMzSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZUNoYW5uZWxTZXRSZWNvcmRlZENvbnRlbnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0bWVkaWFTZXJ2ZXJJbmRleCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblx0cmVjb3JkZWRFbnRyeUlkPyA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWQ/IDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZUNoYW5uZWwnIGFjdGlvbiAnc2V0UmVjb3JkZWRDb250ZW50Jy5cbiAqXG4gKiBVc2FnZTogU2V0IHJlY29yZGVkIHZpZGVvIHRvIGxpdmUgZW50cnlcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlQ2hhbm5lbFNldFJlY29yZGVkQ29udGVudEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0cmVzb3VyY2UgOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlY29yZGVkRW50cnlJZCA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxTZXRSZWNvcmRlZENvbnRlbnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZWNoYW5uZWwnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXRSZWNvcmRlZENvbnRlbnQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRyZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY29yZGVkRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=