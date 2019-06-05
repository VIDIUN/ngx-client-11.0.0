/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EventNotificationTemplateGetActionArgs() { }
/** @type {?} */
EventNotificationTemplateGetActionArgs.prototype.id;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'get'.
 *
 * Usage: Retrieve an event notification template object by id
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'get'.
 *
 * Usage: Retrieve an event notification template object by id
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateGetAction, _super);
    function EventNotificationTemplateGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEventNotificationTemplate', responseConstructor: KalturaEventNotificationTemplate }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return EventNotificationTemplateGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'get'.
 *
 * Usage: Retrieve an event notification template object by id
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateGetAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUdldEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUdldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF3RCw4REFBZ0Q7SUFJcEcsNENBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0NBQWtDLEVBQUUsbUJBQW1CLEVBQUcsZ0NBQWdDLEVBQUcsQ0FBQztLQUNwSjs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQzdGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0F2Q0w7RUFrQndELGNBQWMsRUFzQnJFLENBQUE7Ozs7Ozs7OztBQXRCRCw4Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUdldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2V2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYW4gZXZlbnQgbm90aWZpY2F0aW9uIHRlbXBsYXRlIG9iamVjdCBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlR2V0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdldmVudG5vdGlmaWNhdGlvbl9ldmVudG5vdGlmaWNhdGlvbnRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=