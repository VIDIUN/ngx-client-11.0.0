/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'report' action 'getTotal'.
 *
 * Usage: report getTotal action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTotal
 * Server failure response type: KalturaAPIException
 */
ReportGetTotalAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetTotalAction, _super);
    function ReportGetTotalAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaReportTotal', responseConstructor: KalturaReportTotal }) || this;
    }
    /**
     * @return {?}
     */
    ReportGetTotalAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getTotal' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            objectIds: { type: 's' }
        });
        return result;
    };
    return ReportGetTotalAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'getTotal'.
 *
 * Usage: report getTotal action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTotal
 * Server failure response type: KalturaAPIException
 */
export { ReportGetTotalAction };
if (false) {
    /** @type {?} */
    ReportGetTotalAction.prototype.reportType;
    /** @type {?} */
    ReportGetTotalAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetTotalAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0VG90YWxBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1JlcG9ydEdldFRvdGFsQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQWtDO0lBTXhFLDhCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUM7S0FDeEg7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzdDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDdkgsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQS9DTDtFQXNCMEMsY0FBYyxFQTBCdkQsQ0FBQTs7Ozs7Ozs7O0FBMUJELGdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0VG90YWwgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRUb3RhbCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRUb3RhbEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRvYmplY3RJZHM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncmVwb3J0JyBhY3Rpb24gJ2dldFRvdGFsJy5cbiAqXG4gKiBVc2FnZTogcmVwb3J0IGdldFRvdGFsIGFjdGlvbiBhbGxvd3MgdG8gZ2V0IGEgZ3JhcGggZGF0YSBmb3IgYSBzcGVjaWZpYyByZXBvcnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVwb3J0VG90YWxcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9ydEdldFRvdGFsQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydFRvdGFsPiB7XG5cbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRvYmplY3RJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0R2V0VG90YWxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRUb3RhbCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0VG90YWwgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcG9ydCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFRvdGFsJyB9LFxuXHRcdFx0XHRyZXBvcnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFR5cGUnIH0sXG5cdFx0XHRcdHJlcG9ydElucHV0RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJyB9LFxuXHRcdFx0XHRvYmplY3RJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19