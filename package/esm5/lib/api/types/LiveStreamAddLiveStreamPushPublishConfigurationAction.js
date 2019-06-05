/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'liveStream' action 'addLiveStreamPushPublishConfiguration'.
 *
 * Usage: Add new pushPublish configuration to entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamAddLiveStreamPushPublishConfigurationAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamAddLiveStreamPushPublishConfigurationAction, _super);
    function LiveStreamAddLiveStreamPushPublishConfigurationAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamAddLiveStreamPushPublishConfigurationAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'addLiveStreamPushPublishConfiguration' },
            entryId: { type: 's' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            url: { type: 's' },
            liveStreamConfiguration: { type: 'o', subTypeConstructor: KalturaLiveStreamConfiguration, subType: 'KalturaLiveStreamConfiguration' }
        });
        return result;
    };
    return LiveStreamAddLiveStreamPushPublishConfigurationAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'addLiveStreamPushPublishConfiguration'.
 *
 * Usage: Add new pushPublish configuration to entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamAddLiveStreamPushPublishConfigurationAction };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUFkZExpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1BZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUEyRSxpRkFBc0M7SUFPN0csK0RBQVksSUFBZ0U7ZUFFeEUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLDRFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzdHLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNoSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dFQWxETDtFQXVCMkUsY0FBYyxFQTRCeEYsQ0FBQTs7Ozs7Ozs7O0FBNUJELGlFQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja1Byb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTdHJlYW1BZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHByb3RvY29sIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHVybD8gOiBzdHJpbmc7XG5cdGxpdmVTdHJlYW1Db25maWd1cmF0aW9uPyA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAnYWRkTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbicuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgcHVzaFB1Ymxpc2ggY29uZmlndXJhdGlvbiB0byBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlU3RyZWFtRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1BZGRMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVTdHJlYW1FbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cHJvdG9jb2wgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblx0dXJsIDogc3RyaW5nO1xuXHRsaXZlU3RyZWFtQ29uZmlndXJhdGlvbiA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtQWRkTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUxpdmVTdHJlYW1FbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja1Byb3RvY29sJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==