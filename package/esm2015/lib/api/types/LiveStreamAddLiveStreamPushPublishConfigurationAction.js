/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamAddLiveStreamPushPublishConfigurationActionArgs() { }
/** @type {?} */
LiveStreamAddLiveStreamPushPublishConfigurationActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamAddLiveStreamPushPublishConfigurationActionArgs.prototype.protocol;
/** @type {?|undefined} */
LiveStreamAddLiveStreamPushPublishConfigurationActionArgs.prototype.url;
/** @type {?|undefined} */
LiveStreamAddLiveStreamPushPublishConfigurationActionArgs.prototype.liveStreamConfiguration;
/**
 * Build request payload for service 'liveStream' action 'addLiveStreamPushPublishConfiguration'.
 *
 * Usage: Add new pushPublish configuration to entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamAddLiveStreamPushPublishConfigurationAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'addLiveStreamPushPublishConfiguration' },
            entryId: { type: 's' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            url: { type: 's' },
            liveStreamConfiguration: { type: 'o', subTypeConstructor: KalturaLiveStreamConfiguration, subType: 'KalturaLiveStreamConfiguration' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveStreamAddLiveStreamPushPublishConfigurationAction.prototype.entryId;
    /** @type {?} */
    LiveStreamAddLiveStreamPushPublishConfigurationAction.prototype.protocol;
    /** @type {?} */
    LiveStreamAddLiveStreamPushPublishConfigurationAction.prototype.url;
    /** @type {?} */
    LiveStreamAddLiveStreamPushPublishConfigurationAction.prototype.liveStreamConfiguration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUFkZExpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1BZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sNERBQTZELFNBQVEsY0FBc0M7Ozs7SUFPN0csWUFBWSxJQUFnRTtRQUV4RSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQyxDQUFDO0tBQ2pJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM3RyxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7U0FDaEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUGxheWJhY2tQcm90b2NvbCB9IGZyb20gJy4vS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbUFkZExpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cHJvdG9jb2wgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblx0dXJsPyA6IHN0cmluZztcblx0bGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24/IDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZVN0cmVhbScgYWN0aW9uICdhZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBwdXNoUHVibGlzaCBjb25maWd1cmF0aW9uIHRvIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVTdHJlYW1FbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbUFkZExpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRwcm90b2NvbCA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xuXHR1cmwgOiBzdHJpbmc7XG5cdGxpdmVTdHJlYW1Db25maWd1cmF0aW9uIDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdHJlYW1BZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsaXZlU3RyZWFtQ29uZmlndXJhdGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19