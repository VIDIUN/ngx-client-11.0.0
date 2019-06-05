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
export function EventNotificationTemplateCloneActionArgs() { }
/** @type {?} */
EventNotificationTemplateCloneActionArgs.prototype.id;
/** @type {?|undefined} */
EventNotificationTemplateCloneActionArgs.prototype.eventNotificationTemplate;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'clone'.
 *
 * Usage: This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'clone'.
 *
 * Usage: This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateCloneAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateCloneAction, _super);
    function EventNotificationTemplateCloneAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEventNotificationTemplate', responseConstructor: KalturaEventNotificationTemplate }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateCloneAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'clone' },
            id: { type: 'n' },
            eventNotificationTemplate: { type: 'o', subTypeConstructor: KalturaEventNotificationTemplate, subType: 'KalturaEventNotificationTemplate' }
        });
        return result;
    };
    return EventNotificationTemplateCloneAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'clone'.
 *
 * Usage: This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateCloneAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateCloneAction.prototype.id;
    /** @type {?} */
    EventNotificationTemplateCloneAction.prototype.eventNotificationTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUNsb25lQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQ2xvbmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0RixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEwRCxnRUFBZ0Q7SUFLdEcsOENBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0NBQWtDLEVBQUUsbUJBQW1CLEVBQUcsZ0NBQWdDLEVBQUcsQ0FBQztLQUNwSjs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQzdGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7U0FDdEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQ0ExQ0w7RUFtQjBELGNBQWMsRUF3QnZFLENBQUE7Ozs7Ozs7OztBQXhCRCxnREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUNsb25lQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScgYWN0aW9uICdjbG9uZScuXG4gKlxuICogVXNhZ2U6IFRoaXMgYWN0aW9uIGFsbG93cyByZWdpc3RlcmluZyB0byB2YXJpb3VzIGJhY2tlbmQgZXZlbnQuIFVzZSB0aGlzIGFjdGlvbiB0byBjcmVhdGUgbm90aWZpY2F0aW9ucyB0aGF0IHdpbGwgcmVhY3QgdG8gZXZlbnRzIHN1Y2ggYXMgbmV3IHZpZGVvIHdhcyB1cGxvYWRlZCBvciBtZXRhZGF0YSBmaWVsZCB3YXMgdXBkYXRlZC4gVG8gc2VlIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBldmVudCB0eXBlcywgY2FsbCB0aGUgbGlzdFRlbXBsYXRlcyBhY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUNsb25lQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUNsb25lQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXZlbnRub3RpZmljYXRpb25fZXZlbnRub3RpZmljYXRpb250ZW1wbGF0ZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Nsb25lJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19