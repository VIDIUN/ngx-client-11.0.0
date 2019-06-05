/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportGraph } from './KalturaReportGraph';
import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveReportsGetEventsActionArgs() { }
/** @type {?} */
LiveReportsGetEventsActionArgs.prototype.reportType;
/** @type {?|undefined} */
LiveReportsGetEventsActionArgs.prototype.filter;
/** @type {?|undefined} */
LiveReportsGetEventsActionArgs.prototype.pager;
/**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 *
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 *
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
LiveReportsGetEventsAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveReportsGetEventsAction, _super);
    function LiveReportsGetEventsAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaReportGraph', responseConstructor: KalturaReportGraph }) || this;
    }
    /**
     * @return {?}
     */
    LiveReportsGetEventsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livereports' },
            action: { type: 'c', default: 'getEvents' },
            reportType: { type: 'es', subTypeConstructor: KalturaLiveReportType, subType: 'KalturaLiveReportType' },
            filter: { type: 'o', subTypeConstructor: KalturaLiveReportInputFilter, subType: 'KalturaLiveReportInputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return LiveReportsGetEventsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 *
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
export { LiveReportsGetEventsAction };
if (false) {
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.reportType;
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.filter;
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVJlcG9ydHNHZXRFdmVudHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVSZXBvcnRzR2V0RXZlbnRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQW9DO0lBTWhGLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUM7S0FDeEg7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzlDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzNHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3BILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBaERMO0VBdUJnRCxjQUFjLEVBMEI3RCxDQUFBOzs7Ozs7Ozs7QUExQkQsc0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRHcmFwaCB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydEdyYXBoJztcblxuaW1wb3J0IHsgS2FsdHVyYUxpdmVSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVJlcG9ydFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlUmVwb3J0c0dldEV2ZW50c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYUxpdmVSZXBvcnRUeXBlO1xuXHRmaWx0ZXI/IDogS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZVJlcG9ydHMnIGFjdGlvbiAnZ2V0RXZlbnRzJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVwb3J0R3JhcGhbXVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVJlcG9ydHNHZXRFdmVudHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVwb3J0R3JhcGhbXT4ge1xuXG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFMaXZlUmVwb3J0VHlwZTtcblx0ZmlsdGVyIDogS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZVJlcG9ydHNHZXRFdmVudHNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRHcmFwaCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0R3JhcGggIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVyZXBvcnRzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0RXZlbnRzJyB9LFxuXHRcdFx0XHRyZXBvcnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVSZXBvcnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlUmVwb3J0VHlwZScgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=