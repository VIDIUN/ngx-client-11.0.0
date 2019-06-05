/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportTable } from './KalturaReportTable';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetTableActionArgs() { }
/** @type {?} */
ReportGetTableActionArgs.prototype.reportType;
/** @type {?} */
ReportGetTableActionArgs.prototype.reportInputFilter;
/** @type {?} */
ReportGetTableActionArgs.prototype.pager;
/** @type {?|undefined} */
ReportGetTableActionArgs.prototype.order;
/** @type {?|undefined} */
ReportGetTableActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getTable'.
 *
 * Usage: report getTable action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTable
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'report' action 'getTable'.
 *
 * Usage: report getTable action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTable
 * Server failure response type: KalturaAPIException
 */
ReportGetTableAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetTableAction, _super);
    function ReportGetTableAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaReportTable', responseConstructor: KalturaReportTable }) || this;
    }
    /**
     * @return {?}
     */
    ReportGetTableAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getTable' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' },
            order: { type: 's' },
            objectIds: { type: 's' }
        });
        return result;
    };
    return ReportGetTableAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'getTable'.
 *
 * Usage: report getTable action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTable
 * Server failure response type: KalturaAPIException
 */
export { ReportGetTableAction };
if (false) {
    /** @type {?} */
    ReportGetTableAction.prototype.reportType;
    /** @type {?} */
    ReportGetTableAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetTableAction.prototype.pager;
    /** @type {?} */
    ReportGetTableAction.prototype.order;
    /** @type {?} */
    ReportGetTableAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0VGFibGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1JlcG9ydEdldFRhYmxlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFOzs7Ozs7OztBQUFBO0lBQTBDLGdEQUFrQztJQVF4RSw4QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUM3QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3ZILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQy9GLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQXRETDtFQXlCMEMsY0FBYyxFQThCdkQsQ0FBQTs7Ozs7Ozs7O0FBOUJELGdDQThCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0VGFibGUgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRUYWJsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRUYWJsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblx0b3JkZXI/IDogc3RyaW5nO1xuXHRvYmplY3RJZHM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncmVwb3J0JyBhY3Rpb24gJ2dldFRhYmxlJy5cbiAqXG4gKiBVc2FnZTogcmVwb3J0IGdldFRhYmxlIGFjdGlvbiBhbGxvd3MgdG8gZ2V0IGEgZ3JhcGggZGF0YSBmb3IgYSBzcGVjaWZpYyByZXBvcnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVwb3J0VGFibGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9ydEdldFRhYmxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydFRhYmxlPiB7XG5cbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblx0b3JkZXIgOiBzdHJpbmc7XG5cdG9iamVjdElkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBSZXBvcnRHZXRUYWJsZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFRhYmxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRUYWJsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVwb3J0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0VGFibGUnIH0sXG5cdFx0XHRcdHJlcG9ydFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0VHlwZScgfSxcblx0XHRcdFx0cmVwb3J0SW5wdXRGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9LFxuXHRcdFx0XHRvcmRlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19