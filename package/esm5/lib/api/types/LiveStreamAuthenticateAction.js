/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamAuthenticateActionArgs() { }
/** @type {?} */
LiveStreamAuthenticateActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamAuthenticateActionArgs.prototype.token;
/** @type {?|undefined} */
LiveStreamAuthenticateActionArgs.prototype.hostname;
/** @type {?|undefined} */
LiveStreamAuthenticateActionArgs.prototype.mediaServerIndex;
/** @type {?|undefined} */
LiveStreamAuthenticateActionArgs.prototype.applicationName;
/**
 * Build request payload for service 'liveStream' action 'authenticate'.
 *
 * Usage: Authenticate live-stream entry against stream token and partner limitations
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'authenticate'.
 *
 * Usage: Authenticate live-stream entry against stream token and partner limitations
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamAuthenticateAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamAuthenticateAction, _super);
    function LiveStreamAuthenticateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamAuthenticateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'authenticate' },
            entryId: { type: 's' },
            token: { type: 's' },
            hostname: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            applicationName: { type: 's' }
        });
        return result;
    };
    return LiveStreamAuthenticateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'authenticate'.
 *
 * Usage: Authenticate live-stream entry against stream token and partner limitations
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamAuthenticateAction };
if (false) {
    /** @type {?} */
    LiveStreamAuthenticateAction.prototype.entryId;
    /** @type {?} */
    LiveStreamAuthenticateAction.prototype.token;
    /** @type {?} */
    LiveStreamAuthenticateAction.prototype.hostname;
    /** @type {?} */
    LiveStreamAuthenticateAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveStreamAuthenticateAction.prototype.applicationName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUF1dGhlbnRpY2F0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0cmVhbUF1dGhlbnRpY2F0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J4RTs7Ozs7Ozs7QUFBQTtJQUFrRCx3REFBc0M7SUFRcEYsc0NBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMzSCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBcERMO0VBdUJrRCxjQUFjLEVBOEIvRCxDQUFBOzs7Ozs7Ozs7QUE5QkQsd0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbUF1dGhlbnRpY2F0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHR0b2tlbiA6IHN0cmluZztcblx0aG9zdG5hbWU/IDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4PyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRhcHBsaWNhdGlvbk5hbWU/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZVN0cmVhbScgYWN0aW9uICdhdXRoZW50aWNhdGUnLlxuICpcbiAqIFVzYWdlOiBBdXRoZW50aWNhdGUgbGl2ZS1zdHJlYW0gZW50cnkgYWdhaW5zdCBzdHJlYW0gdG9rZW4gYW5kIHBhcnRuZXIgbGltaXRhdGlvbnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtQXV0aGVudGljYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVTdHJlYW1FbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0dG9rZW4gOiBzdHJpbmc7XG5cdGhvc3RuYW1lIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGFwcGxpY2F0aW9uTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtQXV0aGVudGljYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhdXRoZW50aWNhdGUnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dG9rZW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFTZXJ2ZXJJbmRleCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvbk5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19