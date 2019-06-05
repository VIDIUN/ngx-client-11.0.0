/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class EventNotificationTemplateCloneAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaEventNotificationTemplate', responseConstructor: KalturaEventNotificationTemplate });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'clone' },
            id: { type: 'n' },
            eventNotificationTemplate: { type: 'o', subTypeConstructor: KalturaEventNotificationTemplate, subType: 'KalturaEventNotificationTemplate' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EventNotificationTemplateCloneAction.prototype.id;
    /** @type {?} */
    EventNotificationTemplateCloneAction.prototype.eventNotificationTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUNsb25lQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQ2xvbmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sMkNBQTRDLFNBQVEsY0FBZ0Q7Ozs7SUFLdEcsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0NBQWtDLEVBQUUsbUJBQW1CLEVBQUcsZ0NBQWdDLEVBQUcsQ0FBQyxDQUFDO0tBQ3JKOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUM3RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3RJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQ2xvbmVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyBhY3Rpb24gJ2Nsb25lJy5cbiAqXG4gKiBVc2FnZTogVGhpcyBhY3Rpb24gYWxsb3dzIHJlZ2lzdGVyaW5nIHRvIHZhcmlvdXMgYmFja2VuZCBldmVudC4gVXNlIHRoaXMgYWN0aW9uIHRvIGNyZWF0ZSBub3RpZmljYXRpb25zIHRoYXQgd2lsbCByZWFjdCB0byBldmVudHMgc3VjaCBhcyBuZXcgdmlkZW8gd2FzIHVwbG9hZGVkIG9yIG1ldGFkYXRhIGZpZWxkIHdhcyB1cGRhdGVkLiBUbyBzZWUgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGV2ZW50IHR5cGVzLCBjYWxsIHRoZSBsaXN0VGVtcGxhdGVzIGFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQ2xvbmVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQ2xvbmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdldmVudG5vdGlmaWNhdGlvbl9ldmVudG5vdGlmaWNhdGlvbnRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2xvbmUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=