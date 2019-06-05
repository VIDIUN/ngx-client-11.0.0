/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class EventNotificationTemplateSendCommandAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'v', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'sendCommand' },
            notificationTemplateSystemName: { type: 's' },
            pushNotificationParams: { type: 'o', subTypeConstructor: KalturaPushNotificationParams, subType: 'KalturaPushNotificationParams' },
            command: { type: 'es', subTypeConstructor: KalturaPushNotificationCommandType, subType: 'KalturaPushNotificationCommandType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.notificationTemplateSystemName;
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.pushNotificationParams;
    /** @type {?} */
    EventNotificationTemplateSendCommandAction.prototype.command;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVNlbmRDb21tYW5kQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU2VuZENvbW1hbmRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0saURBQWtELFNBQVEsY0FBb0I7Ozs7SUFNaEYsWUFBWSxJQUFxRDtRQUU3RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7S0FDeEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQzdGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRCw4QkFBOEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Msc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN0SSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUN6SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkNvbW1hbmRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkNvbW1hbmRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTZW5kQ29tbWFuZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBub3RpZmljYXRpb25UZW1wbGF0ZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdHB1c2hOb3RpZmljYXRpb25QYXJhbXMgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcztcblx0Y29tbWFuZCA6IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uQ29tbWFuZFR5cGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyBhY3Rpb24gJ3NlbmRDb21tYW5kJy5cbiAqXG4gKiBVc2FnZTogQ2xlYXIgcXVldWUgbWVzc2FnZXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU2VuZENvbW1hbmRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBub3RpZmljYXRpb25UZW1wbGF0ZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdHB1c2hOb3RpZmljYXRpb25QYXJhbXMgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcztcblx0Y29tbWFuZCA6IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uQ29tbWFuZFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVNlbmRDb21tYW5kQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdldmVudG5vdGlmaWNhdGlvbl9ldmVudG5vdGlmaWNhdGlvbnRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VuZENvbW1hbmQnIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvblRlbXBsYXRlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcycgfSxcblx0XHRcdFx0Y29tbWFuZCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uQ29tbWFuZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVB1c2hOb3RpZmljYXRpb25Db21tYW5kVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19