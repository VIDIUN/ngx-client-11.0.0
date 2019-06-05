/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'report' action 'getGraphs'.
 *
 * Usage: report getGraphs action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
ReportGetGraphsAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetGraphsAction, _super);
    function ReportGetGraphsAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaReportGraph', responseConstructor: KalturaReportGraph }) || this;
    }
    /**
     * @return {?}
     */
    ReportGetGraphsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getGraphs' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            dimension: { type: 's' },
            objectIds: { type: 's' }
        });
        return result;
    };
    return ReportGetGraphsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'getGraphs'.
 *
 * Usage: report getGraphs action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
export { ReportGetGraphsAction };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0R3JhcGhzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXBvcnRHZXRHcmFwaHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFOzs7Ozs7OztBQUFBO0lBQTJDLGlEQUFvQztJQU8zRSwrQkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3ZILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQWxETDtFQXVCMkMsY0FBYyxFQTRCeEQsQ0FBQTs7Ozs7Ozs7O0FBNUJELGlDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0R3JhcGggfSBmcm9tICcuL0thbHR1cmFSZXBvcnRHcmFwaCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRHcmFwaHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0ZGltZW5zaW9uPyA6IHN0cmluZztcblx0b2JqZWN0SWRzPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3JlcG9ydCcgYWN0aW9uICdnZXRHcmFwaHMnLlxuICpcbiAqIFVzYWdlOiByZXBvcnQgZ2V0R3JhcGhzIGFjdGlvbiBhbGxvd3MgdG8gZ2V0IGEgZ3JhcGggZGF0YSBmb3IgYSBzcGVjaWZpYyByZXBvcnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVwb3J0R3JhcGhbXVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVwb3J0R2V0R3JhcGhzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydEdyYXBoW10+IHtcblxuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdGRpbWVuc2lvbiA6IHN0cmluZztcblx0b2JqZWN0SWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFJlcG9ydEdldEdyYXBoc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEdyYXBoJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRHcmFwaCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVwb3J0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0R3JhcGhzJyB9LFxuXHRcdFx0XHRyZXBvcnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFR5cGUnIH0sXG5cdFx0XHRcdHJlcG9ydElucHV0RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJyB9LFxuXHRcdFx0XHRkaW1lbnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==