/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStatsEvent } from './KalturaLiveStatsEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStatsCollectActionArgs() { }
/** @type {?} */
LiveStatsCollectActionArgs.prototype.event;
/**
 * Build request payload for service 'liveStats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
LiveStatsCollectAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStatsCollectAction, _super);
    function LiveStatsCollectAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    LiveStatsCollectAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestats' },
            action: { type: 'c', default: 'collect' },
            event: { type: 'o', subTypeConstructor: KalturaLiveStatsEvent, subType: 'KalturaLiveStatsEvent' }
        });
        return result;
    };
    return LiveStatsCollectAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { LiveStatsCollectAction };
if (false) {
    /** @type {?} */
    LiveStatsCollectAction.prototype.event;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0YXRzQ29sbGVjdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0YXRzQ29sbGVjdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7OztBQUFBO0lBQTRDLGtEQUF1QjtJQUkvRCxnQ0FBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQzVDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQzVGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBekNMO0VBb0I0QyxjQUFjLEVBc0J6RCxDQUFBOzs7Ozs7Ozs7O0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdGF0c0V2ZW50IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0YXRzRXZlbnQnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0YXRzQ29sbGVjdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBldmVudCA6IEthbHR1cmFMaXZlU3RhdHNFdmVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdGF0cycgYWN0aW9uICdjb2xsZWN0Jy5cbiAqXG4gKiBVc2FnZTogV2lsbCB3cml0ZSB0byB0aGUgZXZlbnQgbG9nIGEgc2luZ2xlIGxpbmUgcmVwcmVzZW50aW5nIHRoZSBldmVudFxuICogS2FsdHVyYVN0YXRzRXZlbnQgJGV2ZW50XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgYm9vbGVhblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0YXRzQ29sbGVjdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PGJvb2xlYW4+IHtcblxuICAgIGV2ZW50IDogS2FsdHVyYUxpdmVTdGF0c0V2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdGF0c0NvbGxlY3RBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdiJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdGF0cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbGxlY3QnIH0sXG5cdFx0XHRcdGV2ZW50IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVN0YXRzRXZlbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVTdGF0c0V2ZW50JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=