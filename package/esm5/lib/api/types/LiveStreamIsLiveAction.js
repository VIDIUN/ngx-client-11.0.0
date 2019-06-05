/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamIsLiveActionArgs() { }
/** @type {?} */
LiveStreamIsLiveActionArgs.prototype.id;
/** @type {?} */
LiveStreamIsLiveActionArgs.prototype.protocol;
/**
 * Build request payload for service 'liveStream' action 'isLive'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'isLive'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
LiveStreamIsLiveAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamIsLiveAction, _super);
    function LiveStreamIsLiveAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamIsLiveAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'isLive' },
            id: { type: 's' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' }
        });
        return result;
    };
    return LiveStreamIsLiveAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'isLive'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamIsLiveAction };
if (false) {
    /** @type {?} */
    LiveStreamIsLiveAction.prototype.id;
    /** @type {?} */
    LiveStreamIsLiveAction.prototype.protocol;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUlzTGl2ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0cmVhbUlzTGl2ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTRDLGtEQUF1QjtJQUsvRCxnQ0FBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDcEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0EzQ0w7RUFvQjRDLGNBQWMsRUF3QnpELENBQUE7Ozs7Ozs7OztBQXhCRCxrQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1Byb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlU3RyZWFtSXNMaXZlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRwcm90b2NvbCA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZVN0cmVhbScgYWN0aW9uICdpc0xpdmUnLlxuICpcbiAqIFVzYWdlOiBEZWxpdmVyaW5nIHRoZSBzdGF0dXMgb2YgYSBsaXZlIHN0cmVhbSAob24tYWlyL29mZmxpbmUpIGlmIGl0IGlzIHBvc3NpYmxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgYm9vbGVhblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbUlzTGl2ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PGJvb2xlYW4+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRwcm90b2NvbCA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdHJlYW1Jc0xpdmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdiJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpc0xpdmUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==