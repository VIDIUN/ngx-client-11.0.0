/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class EventNotificationTemplateRegisterAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPushNotificationData', responseConstructor: KalturaPushNotificationData });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'register' },
            notificationTemplateSystemName: { type: 's' },
            pushNotificationParams: { type: 'o', subTypeConstructor: KalturaPushNotificationParams, subType: 'KalturaPushNotificationParams' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EventNotificationTemplateRegisterAction.prototype.notificationTemplateSystemName;
    /** @type {?} */
    EventNotificationTemplateRegisterAction.prototype.pushNotificationParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVJlZ2lzdGVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlUmVnaXN0ZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sOENBQStDLFNBQVEsY0FBMkM7Ozs7SUFLcEcsWUFBWSxJQUFrRDtRQUUxRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNkJBQTZCLEVBQUUsbUJBQW1CLEVBQUcsMkJBQTJCLEVBQUcsQ0FBQyxDQUFDO0tBQzNJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUM3RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDN0MsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQdXNoTm90aWZpY2F0aW9uRGF0YSB9IGZyb20gJy4vS2FsdHVyYVB1c2hOb3RpZmljYXRpb25EYXRhJztcblxuaW1wb3J0IHsgS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMgfSBmcm9tICcuL0thbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVSZWdpc3RlckFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBub3RpZmljYXRpb25UZW1wbGF0ZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdHB1c2hOb3RpZmljYXRpb25QYXJhbXMgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2V2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIGFjdGlvbiAncmVnaXN0ZXInLlxuICpcbiAqIFVzYWdlOiBSZWdpc3RlciB0byBhIHF1ZXVlIGZyb20gd2hpY2ggZXZlbnQgbWVzc2FnZXMgd2lsbCBiZSBwcm92aWRlZCBhY2NvcmRpbmcgdG8gZ2l2ZW4gdGVtcGxhdGUuIFF1ZXVlIHdpbGwgYmUgY3JlYXRlZCBpZiBub3QgYWxyZWFkeSBleGlzdHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkRhdGFcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVSZWdpc3RlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQdXNoTm90aWZpY2F0aW9uRGF0YT4ge1xuXG4gICAgbm90aWZpY2F0aW9uVGVtcGxhdGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVJlZ2lzdGVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvbkRhdGEnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25EYXRhICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdldmVudG5vdGlmaWNhdGlvbl9ldmVudG5vdGlmaWNhdGlvbnRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVnaXN0ZXInIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvblRlbXBsYXRlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdXNoTm90aWZpY2F0aW9uUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19