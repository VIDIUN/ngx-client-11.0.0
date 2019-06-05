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
export function EventNotificationTemplateUpdateActionArgs() { }
/** @type {?} */
EventNotificationTemplateUpdateActionArgs.prototype.id;
/** @type {?} */
EventNotificationTemplateUpdateActionArgs.prototype.eventNotificationTemplate;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'update'.
 *
 * Usage: Update an existing event notification template object
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'update'.
 *
 * Usage: Update an existing event notification template object
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateUpdateAction, _super);
    function EventNotificationTemplateUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEventNotificationTemplate', responseConstructor: KalturaEventNotificationTemplate }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            eventNotificationTemplate: { type: 'o', subTypeConstructor: KalturaEventNotificationTemplate, subType: 'KalturaEventNotificationTemplate' }
        });
        return result;
    };
    return EventNotificationTemplateUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'update'.
 *
 * Usage: Update an existing event notification template object
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateUpdateAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateUpdateAction.prototype.id;
    /** @type {?} */
    EventNotificationTemplateUpdateAction.prototype.eventNotificationTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTJELGlFQUFnRDtJQUt2RywrQ0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBRyxnQ0FBZ0MsRUFBRyxDQUFDO0tBQ3BKOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDN0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUN0SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQTFDTDtFQW1CMkQsY0FBYyxFQXdCeEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELGlEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBldmVudCBub3RpZmljYXRpb24gdGVtcGxhdGUgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXZlbnRub3RpZmljYXRpb25fZXZlbnRub3RpZmljYXRpb250ZW1wbGF0ZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==