/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportResponse } from './KalturaReportResponse';
import { KalturaAnalyticsFilter } from './KalturaAnalyticsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AnalyticsQueryActionArgs() { }
/** @type {?} */
AnalyticsQueryActionArgs.prototype.filter;
/** @type {?|undefined} */
AnalyticsQueryActionArgs.prototype.pager;
/**
 * Build request payload for service 'analytics' action 'query'.
 *
 * Usage: report query action allows to get a analytics data for specific query dimensions, metrics and filters
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'analytics' action 'query'.
 *
 * Usage: report query action allows to get a analytics data for specific query dimensions, metrics and filters
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
AnalyticsQueryAction = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsQueryAction, _super);
    function AnalyticsQueryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaReportResponse', responseConstructor: KalturaReportResponse }) || this;
    }
    /**
     * @return {?}
     */
    AnalyticsQueryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'analytics' },
            action: { type: 'c', default: 'query' },
            filter: { type: 'o', subTypeConstructor: KalturaAnalyticsFilter, subType: 'KalturaAnalyticsFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return AnalyticsQueryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'analytics' action 'query'.
 *
 * Usage: report query action allows to get a analytics data for specific query dimensions, metrics and filters
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
export { AnalyticsQueryAction };
if (false) {
    /** @type {?} */
    AnalyticsQueryAction.prototype.filter;
    /** @type {?} */
    AnalyticsQueryAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5hbHl0aWNzUXVlcnlBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FuYWx5dGljc1F1ZXJ5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQXFDO0lBSzNFLDhCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBNUNMO0VBcUIwQyxjQUFjLEVBd0J2RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsZ0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUFuYWx5dGljc0ZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUFuYWx5dGljc0ZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBbmFseXRpY3NRdWVyeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXIgOiBLYWx0dXJhQW5hbHl0aWNzRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhbmFseXRpY3MnIGFjdGlvbiAncXVlcnknLlxuICpcbiAqIFVzYWdlOiByZXBvcnQgcXVlcnkgYWN0aW9uIGFsbG93cyB0byBnZXQgYSBhbmFseXRpY3MgZGF0YSBmb3Igc3BlY2lmaWMgcXVlcnkgZGltZW5zaW9ucywgbWV0cmljcyBhbmQgZmlsdGVyc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXBvcnRSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzUXVlcnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVwb3J0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFBbmFseXRpY3NGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFuYWx5dGljc1F1ZXJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhbmFseXRpY3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdxdWVyeScgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQW5hbHl0aWNzRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFBbmFseXRpY3NGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=