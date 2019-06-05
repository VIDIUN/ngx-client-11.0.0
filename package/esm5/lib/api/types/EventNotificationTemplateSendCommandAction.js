/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaPushNotificationCommandType } from './KalturaPushNotificationCommandType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EventNotificationTemplateSendCommandActionArgs() { }
/** @type {?} */
EventNotificationTemplateSendCommandActionArgs.prototype.notificationTemplateSystemName;
/** @type {?} */
EventNotificationTemplateSendCommandActionArgs.prototype.pushNotificationParams;
/** @type {?} */
EventNotificationTemplateSendCommandActionArgs.prototype.command;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'sendCommand'.
 *
 * Usage: Clear queue messages
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'sendCommand'.
 *
 * Usage: Clear queue messages
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateSendCommandAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateSendCommandAction, _super);
    function EventNotificationTemplateSendCommandAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateSendCommandAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'sendCommand' },
            notificationTemplateSystemName: { type: 's' },
            pushNotificationParams: { type: 'o', subTypeConstructor: KalturaPushNotificationParams, subType: 'KalturaPushNotificationParams' },
            command: { type: 'es', subTypeConstructor: KalturaPushNotificationCommandType, subType: 'KalturaPushNotificationCommandType' }
        });
        return result;
    };
    return EventNotificationTemplateSendCommandAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'sendCommand'.
 *
 * Usage: Clear queue messages
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateSendCommandAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.notificationTemplateSystemName;
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.pushNotificationParams;
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.command;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVNlbmRDb21tYW5kQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU2VuZENvbW1hbmRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUFnRSxzRUFBb0I7SUFNaEYsb0RBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsaUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDN0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELDhCQUE4QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3RJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1NBQ3pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBL0NMO0VBc0JnRSxjQUFjLEVBMEI3RSxDQUFBOzs7Ozs7Ozs7QUExQkQsc0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMnO1xuaW1wb3J0IHsgS2FsdHVyYVB1c2hOb3RpZmljYXRpb25Db21tYW5kVHlwZSB9IGZyb20gJy4vS2FsdHVyYVB1c2hOb3RpZmljYXRpb25Db21tYW5kVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU2VuZENvbW1hbmRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbm90aWZpY2F0aW9uVGVtcGxhdGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7XG5cdGNvbW1hbmQgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkNvbW1hbmRUeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScgYWN0aW9uICdzZW5kQ29tbWFuZCcuXG4gKlxuICogVXNhZ2U6IENsZWFyIHF1ZXVlIG1lc3NhZ2VzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVNlbmRDb21tYW5kQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgbm90aWZpY2F0aW9uVGVtcGxhdGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7XG5cdGNvbW1hbmQgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkNvbW1hbmRUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTZW5kQ29tbWFuZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXZlbnRub3RpZmljYXRpb25fZXZlbnRub3RpZmljYXRpb250ZW1wbGF0ZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlbmRDb21tYW5kJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25UZW1wbGF0ZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHVzaE5vdGlmaWNhdGlvblBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMnIH0sXG5cdFx0XHRcdGNvbW1hbmQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkNvbW1hbmRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQdXNoTm90aWZpY2F0aW9uQ29tbWFuZFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==