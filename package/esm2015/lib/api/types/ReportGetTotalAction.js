/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaReportTotal } from './KalturaReportTotal';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetTotalActionArgs() { }
/** @type {?} */
ReportGetTotalActionArgs.prototype.reportType;
/** @type {?} */
ReportGetTotalActionArgs.prototype.reportInputFilter;
/** @type {?|undefined} */
ReportGetTotalActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getTotal'.
 *
 * Usage: report getTotal action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTotal
 * Server failure response type: KalturaAPIException
 */
export class ReportGetTotalAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaReportTotal', responseConstructor: KalturaReportTotal });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getTotal' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            objectIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ReportGetTotalAction.prototype.reportType;
    /** @type {?} */
    ReportGetTotalAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetTotalAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0VG90YWxBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1JlcG9ydEdldFRvdGFsQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLDJCQUE0QixTQUFRLGNBQWtDOzs7O0lBTXhFLFlBQVksSUFBK0I7UUFFdkMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUMsQ0FBQztLQUN6SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUM3QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3ZILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUb3RhbCB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydFRvdGFsJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydFR5cGUgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9ydEdldFRvdGFsQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdG9iamVjdElkcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXBvcnQnIGFjdGlvbiAnZ2V0VG90YWwnLlxuICpcbiAqIFVzYWdlOiByZXBvcnQgZ2V0VG90YWwgYWN0aW9uIGFsbG93cyB0byBnZXQgYSBncmFwaCBkYXRhIGZvciBhIHNwZWNpZmljIHJlcG9ydFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXBvcnRUb3RhbFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVwb3J0R2V0VG90YWxBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVwb3J0VG90YWw+IHtcblxuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdG9iamVjdElkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBSZXBvcnRHZXRUb3RhbEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFRvdGFsJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRUb3RhbCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVwb3J0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0VG90YWwnIH0sXG5cdFx0XHRcdHJlcG9ydFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0VHlwZScgfSxcblx0XHRcdFx0cmVwb3J0SW5wdXRGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdG9iamVjdElkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=