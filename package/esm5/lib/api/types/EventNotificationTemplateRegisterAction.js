/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPushNotificationData } from './KalturaPushNotificationData';
import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EventNotificationTemplateRegisterActionArgs() { }
/** @type {?} */
EventNotificationTemplateRegisterActionArgs.prototype.notificationTemplateSystemName;
/** @type {?} */
EventNotificationTemplateRegisterActionArgs.prototype.pushNotificationParams;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'register'.
 *
 * Usage: Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists
 *
 * Server response type:         KalturaPushNotificationData
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'register'.
 *
 * Usage: Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists
 *
 * Server response type:         KalturaPushNotificationData
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateRegisterAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateRegisterAction, _super);
    function EventNotificationTemplateRegisterAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPushNotificationData', responseConstructor: KalturaPushNotificationData }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateRegisterAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'register' },
            notificationTemplateSystemName: { type: 's' },
            pushNotificationParams: { type: 'o', subTypeConstructor: KalturaPushNotificationParams, subType: 'KalturaPushNotificationParams' }
        });
        return result;
    };
    return EventNotificationTemplateRegisterAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'register'.
 *
 * Usage: Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists
 *
 * Server response type:         KalturaPushNotificationData
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateRegisterAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateRegisterAction.prototype.notificationTemplateSystemName;
    /** @type {?} */
    EventNotificationTemplateRegisterAction.prototype.pushNotificationParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVJlZ2lzdGVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlUmVnaXN0ZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE2RCxtRUFBMkM7SUFLcEcsaURBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNkJBQTZCLEVBQUUsbUJBQW1CLEVBQUcsMkJBQTJCLEVBQUcsQ0FBQztLQUMxSTs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQzdGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUM3Qyw4QkFBOEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Msc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUM3SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQTNDTDtFQW9CNkQsY0FBYyxFQXdCMUUsQ0FBQTs7Ozs7Ozs7O0FBeEJELG1EQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkRhdGEgfSBmcm9tICcuL0thbHR1cmFQdXNoTm90aWZpY2F0aW9uRGF0YSc7XG5cbmltcG9ydCB7IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlUmVnaXN0ZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbm90aWZpY2F0aW9uVGVtcGxhdGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyBhY3Rpb24gJ3JlZ2lzdGVyJy5cbiAqXG4gKiBVc2FnZTogUmVnaXN0ZXIgdG8gYSBxdWV1ZSBmcm9tIHdoaWNoIGV2ZW50IG1lc3NhZ2VzIHdpbGwgYmUgcHJvdmlkZWQgYWNjb3JkaW5nIHRvIGdpdmVuIHRlbXBsYXRlLiBRdWV1ZSB3aWxsIGJlIGNyZWF0ZWQgaWYgbm90IGFscmVhZHkgZXhpc3RzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVB1c2hOb3RpZmljYXRpb25EYXRhXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlUmVnaXN0ZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkRhdGE+IHtcblxuICAgIG5vdGlmaWNhdGlvblRlbXBsYXRlU3lzdGVtTmFtZSA6IHN0cmluZztcblx0cHVzaE5vdGlmaWNhdGlvblBhcmFtcyA6IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVSZWdpc3RlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVB1c2hOb3RpZmljYXRpb25EYXRhJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uRGF0YSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXZlbnRub3RpZmljYXRpb25fZXZlbnRub3RpZmljYXRpb250ZW1wbGF0ZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlZ2lzdGVyJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25UZW1wbGF0ZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHVzaE5vdGlmaWNhdGlvblBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==