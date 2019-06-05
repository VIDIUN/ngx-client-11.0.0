/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaReportGraph } from './KalturaReportGraph';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetGraphsActionArgs() { }
/** @type {?} */
ReportGetGraphsActionArgs.prototype.reportType;
/** @type {?} */
ReportGetGraphsActionArgs.prototype.reportInputFilter;
/** @type {?|undefined} */
ReportGetGraphsActionArgs.prototype.dimension;
/** @type {?|undefined} */
ReportGetGraphsActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getGraphs'.
 *
 * Usage: report getGraphs action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
export class ReportGetGraphsAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'a', responseSubType: 'KalturaReportGraph', responseConstructor: KalturaReportGraph });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getGraphs' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            dimension: { type: 's' },
            objectIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ReportGetGraphsAction.prototype.reportType;
    /** @type {?} */
    ReportGetGraphsAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetGraphsAction.prototype.dimension;
    /** @type {?} */
    ReportGetGraphsAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0R3JhcGhzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXBvcnRHZXRHcmFwaHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEUsTUFBTSw0QkFBNkIsU0FBUSxjQUFvQzs7OztJQU8zRSxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDLENBQUM7S0FDekg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDOUMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkcsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUN2SCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRHcmFwaCB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydEdyYXBoJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydFR5cGUgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9ydEdldEdyYXBoc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRkaW1lbnNpb24/IDogc3RyaW5nO1xuXHRvYmplY3RJZHM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncmVwb3J0JyBhY3Rpb24gJ2dldEdyYXBocycuXG4gKlxuICogVXNhZ2U6IHJlcG9ydCBnZXRHcmFwaHMgYWN0aW9uIGFsbG93cyB0byBnZXQgYSBncmFwaCBkYXRhIGZvciBhIHNwZWNpZmljIHJlcG9ydFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXBvcnRHcmFwaFtdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnRHZXRHcmFwaHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVwb3J0R3JhcGhbXT4ge1xuXG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0ZGltZW5zaW9uIDogc3RyaW5nO1xuXHRvYmplY3RJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0R2V0R3JhcGhzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0R3JhcGgnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydEdyYXBoICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRHcmFwaHMnIH0sXG5cdFx0XHRcdHJlcG9ydFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0VHlwZScgfSxcblx0XHRcdFx0cmVwb3J0SW5wdXRGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdGRpbWVuc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19