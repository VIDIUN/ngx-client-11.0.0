/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs() { }
/** @type {?} */
LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs.prototype.protocol;
/**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamRemoveLiveStreamPushPublishConfigurationAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamRemoveLiveStreamPushPublishConfigurationAction, _super);
    function LiveStreamRemoveLiveStreamPushPublishConfigurationAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamRemoveLiveStreamPushPublishConfigurationAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'removeLiveStreamPushPublishConfiguration' },
            entryId: { type: 's' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' }
        });
        return result;
    };
    return LiveStreamRemoveLiveStreamPushPublishConfigurationAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamRemoveLiveStreamPushPublishConfigurationAction };
if (false) {
    /** @type {?} */
    LiveStreamRemoveLiveStreamPushPublishConfigurationAction.prototype.entryId;
    /** @type {?} */
    LiveStreamRemoveLiveStreamPushPublishConfigurationAction.prototype.protocol;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbVJlbW92ZUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1SZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBOEUsb0ZBQXNDO0lBS2hILGtFQUFZLElBQW1FO2VBRTNFLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUM7S0FDaEk7Ozs7SUFFUywrRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDN0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUNwRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21FQTNDTDtFQW9COEUsY0FBYyxFQXdCM0YsQ0FBQTs7Ozs7Ozs7O0FBeEJELG9FQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja1Byb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTdHJlYW1SZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHByb3RvY29sIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlU3RyZWFtJyBhY3Rpb24gJ3JlbW92ZUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24nLlxuICpcbiAqIFVzYWdlOiBSZW1vdmUgcHVzaCBwdWJsaXNoIGNvbmZpZ3VyYXRpb24gZnJvbSBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlU3RyZWFtRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1SZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVTdHJlYW1FbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cHJvdG9jb2wgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtUmVtb3ZlTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUxpdmVTdHJlYW1FbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVtb3ZlTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja1Byb3RvY29sJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=