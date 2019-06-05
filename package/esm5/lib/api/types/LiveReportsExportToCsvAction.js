/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveReportExportResponse } from './KalturaLiveReportExportResponse';
import { KalturaLiveReportExportType } from './KalturaLiveReportExportType';
import { KalturaLiveReportExportParams } from './KalturaLiveReportExportParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveReportsExportToCsvActionArgs() { }
/** @type {?} */
LiveReportsExportToCsvActionArgs.prototype.reportType;
/** @type {?} */
LiveReportsExportToCsvActionArgs.prototype.params;
/**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 *
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 *
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 */
LiveReportsExportToCsvAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveReportsExportToCsvAction, _super);
    function LiveReportsExportToCsvAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveReportExportResponse', responseConstructor: KalturaLiveReportExportResponse }) || this;
    }
    /**
     * @return {?}
     */
    LiveReportsExportToCsvAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livereports' },
            action: { type: 'c', default: 'exportToCsv' },
            reportType: { type: 'en', subTypeConstructor: KalturaLiveReportExportType, subType: 'KalturaLiveReportExportType' },
            params: { type: 'o', subTypeConstructor: KalturaLiveReportExportParams, subType: 'KalturaLiveReportExportParams' }
        });
        return result;
    };
    return LiveReportsExportToCsvAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 *
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 */
export { LiveReportsExportToCsvAction };
if (false) {
    /** @type {?} */
    LiveReportsExportToCsvAction.prototype.reportType;
    /** @type {?} */
    LiveReportsExportToCsvAction.prototype.params;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUErQztJQUs3RixzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQ0FBaUMsRUFBRSxtQkFBbUIsRUFBRywrQkFBK0IsRUFBRyxDQUFDO0tBQ2xKOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUN2SCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUM3RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTVDTDtFQXFCa0QsY0FBYyxFQXdCL0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELHdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVSZXBvcnRzRXhwb3J0VG9Dc3ZBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0VHlwZTtcblx0cGFyYW1zIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlUmVwb3J0cycgYWN0aW9uICdleHBvcnRUb0NzdicuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UmVzcG9uc2U+IHtcblxuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFR5cGU7XG5cdHBhcmFtcyA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVSZXBvcnRzRXhwb3J0VG9Dc3ZBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZXJlcG9ydHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdleHBvcnRUb0NzdicgfSxcblx0XHRcdFx0cmVwb3J0VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFR5cGUnIH0sXG5cdFx0XHRcdHBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==