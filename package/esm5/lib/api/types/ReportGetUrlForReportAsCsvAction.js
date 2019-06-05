/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetUrlForReportAsCsvActionArgs() { }
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportTitle;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportText;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.headers;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportType;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportInputFilter;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.dimension;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.pager;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.order;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
ReportGetUrlForReportAsCsvAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetUrlForReportAsCsvAction, _super);
    function ReportGetUrlForReportAsCsvAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    ReportGetUrlForReportAsCsvAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getUrlForReportAsCsv' },
            reportTitle: { type: 's' },
            reportText: { type: 's' },
            headers: { type: 's' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            dimension: { type: 's' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' },
            order: { type: 's' },
            objectIds: { type: 's' }
        });
        return result;
    };
    return ReportGetUrlForReportAsCsvAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { ReportGetUrlForReportAsCsvAction };
if (false) {
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportTitle;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportText;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.headers;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportType;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.dimension;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.pager;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.order;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0VXJsRm9yUmVwb3J0QXNDc3ZBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1JlcG9ydEdldFVybEZvclJlcG9ydEFzQ3N2QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCeEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQXNCO0lBWXhFLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3ZILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBbEVMO0VBNkJzRCxjQUFjLEVBc0NuRSxDQUFBOzs7Ozs7Ozs7QUF0Q0QsNENBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0VHlwZSB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0R2V0VXJsRm9yUmVwb3J0QXNDc3ZBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVwb3J0VGl0bGUgOiBzdHJpbmc7XG5cdHJlcG9ydFRleHQgOiBzdHJpbmc7XG5cdGhlYWRlcnMgOiBzdHJpbmc7XG5cdHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdGRpbWVuc2lvbj8gOiBzdHJpbmc7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblx0b3JkZXI/IDogc3RyaW5nO1xuXHRvYmplY3RJZHM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncmVwb3J0JyBhY3Rpb24gJ2dldFVybEZvclJlcG9ydEFzQ3N2Jy5cbiAqXG4gKiBVc2FnZTogd2lsbCBjcmVhdGUgYSBDc3YgZmlsZSBmb3IgdGhlIGdpdmVuIHJlcG9ydCBhbmQgcmV0dXJuIHRoZSBVUkwgdG8gYWNjZXNzIGl0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnRHZXRVcmxGb3JSZXBvcnRBc0NzdkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgcmVwb3J0VGl0bGUgOiBzdHJpbmc7XG5cdHJlcG9ydFRleHQgOiBzdHJpbmc7XG5cdGhlYWRlcnMgOiBzdHJpbmc7XG5cdHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdGRpbWVuc2lvbiA6IHN0cmluZztcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cdG9yZGVyIDogc3RyaW5nO1xuXHRvYmplY3RJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0R2V0VXJsRm9yUmVwb3J0QXNDc3ZBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcG9ydCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFVybEZvclJlcG9ydEFzQ3N2JyB9LFxuXHRcdFx0XHRyZXBvcnRUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXBvcnRUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhlYWRlcnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVwb3J0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRUeXBlJyB9LFxuXHRcdFx0XHRyZXBvcnRJbnB1dEZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0ZGltZW5zaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9LFxuXHRcdFx0XHRvcmRlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19