/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BusinessProcessCaseAbortActionArgs() { }
/** @type {?} */
BusinessProcessCaseAbortActionArgs.prototype.objectType;
/** @type {?} */
BusinessProcessCaseAbortActionArgs.prototype.objectId;
/** @type {?} */
BusinessProcessCaseAbortActionArgs.prototype.businessProcessStartNotificationTemplateId;
/**
 * Build request payload for service 'businessProcessCase' action 'abort'.
 *
 * Usage: Abort business-process case
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class BusinessProcessCaseAbortAction extends KalturaRequest {
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
            service: { type: 'c', default: 'businessprocessnotification_businessprocesscase' },
            action: { type: 'c', default: 'abort' },
            objectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            objectId: { type: 's' },
            businessProcessStartNotificationTemplateId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BusinessProcessCaseAbortAction.prototype.objectType;
    /** @type {?} */
    BusinessProcessCaseAbortAction.prototype.objectId;
    /** @type {?} */
    BusinessProcessCaseAbortAction.prototype.businessProcessStartNotificationTemplateId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzaW5lc3NQcm9jZXNzQ2FzZUFib3J0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CdXNpbmVzc1Byb2Nlc3NDYXNlQWJvcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0scUNBQXNDLFNBQVEsY0FBb0I7Ozs7SUFNcEUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7S0FDeEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ2pHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUMvSSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLDBDQUEwQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsRCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1c2luZXNzUHJvY2Vzc0Nhc2VBYm9ydEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBvYmplY3RUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYnVzaW5lc3NQcm9jZXNzQ2FzZScgYWN0aW9uICdhYm9ydCcuXG4gKlxuICogVXNhZ2U6IEFib3J0IGJ1c2luZXNzLXByb2Nlc3MgY2FzZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUHJvY2Vzc0Nhc2VBYm9ydEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHZvaWQ+IHtcblxuICAgIG9iamVjdFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRidXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQnVzaW5lc3NQcm9jZXNzQ2FzZUFib3J0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidXNpbmVzc3Byb2Nlc3Nub3RpZmljYXRpb25fYnVzaW5lc3Nwcm9jZXNzY2FzZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Fib3J0JyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==