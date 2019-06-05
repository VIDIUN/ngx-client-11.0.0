/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class EventNotificationTemplateUpdateAction extends KalturaRequest {
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
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            eventNotificationTemplate: { type: 'o', subTypeConstructor: KalturaEventNotificationTemplate, subType: 'KalturaEventNotificationTemplate' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EventNotificationTemplateUpdateAction.prototype.id;
    /** @type {?} */
    EventNotificationTemplateUpdateAction.prototype.eventNotificationTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw0Q0FBNkMsU0FBUSxjQUFnRDs7OztJQUt2RyxZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBRyxnQ0FBZ0MsRUFBRyxDQUFDLENBQUM7S0FDcko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQzdGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7U0FDdEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2V2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFuIGV4aXN0aW5nIGV2ZW50IG5vdGlmaWNhdGlvbiB0ZW1wbGF0ZSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0ZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdldmVudG5vdGlmaWNhdGlvbl9ldmVudG5vdGlmaWNhdGlvbnRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRldmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19