/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseSyndicationFeedListResponse } from './KalturaBaseSyndicationFeedListResponse';
import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedListActionArgs() { }
/** @type {?|undefined} */
SyndicationFeedListActionArgs.prototype.filter;
/** @type {?|undefined} */
SyndicationFeedListActionArgs.prototype.pager;
/**
 * Build request payload for service 'syndicationFeed' action 'list'.
 *
 * Usage: List Syndication Feeds by filter with paging support
 *
 * Server response type:         KalturaBaseSyndicationFeedListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'syndicationFeed' action 'list'.
 *
 * Usage: List Syndication Feeds by filter with paging support
 *
 * Server response type:         KalturaBaseSyndicationFeedListResponse
 * Server failure response type: KalturaAPIException
 */
SyndicationFeedListAction = /** @class */ (function (_super) {
    tslib_1.__extends(SyndicationFeedListAction, _super);
    function SyndicationFeedListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseSyndicationFeedListResponse', responseConstructor: KalturaBaseSyndicationFeedListResponse }) || this;
    }
    /**
     * @return {?}
     */
    SyndicationFeedListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaBaseSyndicationFeedFilter, subType: 'KalturaBaseSyndicationFeedFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return SyndicationFeedListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'syndicationFeed' action 'list'.
 *
 * Usage: List Syndication Feeds by filter with paging support
 *
 * Server response type:         KalturaBaseSyndicationFeedListResponse
 * Server failure response type: KalturaAPIException
 */
export { SyndicationFeedListAction };
if (false) {
    /** @type {?} */
    SyndicationFeedListAction.prototype.filter;
    /** @type {?} */
    SyndicationFeedListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU3luZGljYXRpb25GZWVkTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFzRDtJQUtqRyxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3Q0FBd0MsRUFBRSxtQkFBbUIsRUFBRyxzQ0FBc0MsRUFBRyxDQUFDO0tBQ2hLOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDakUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQzVILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBNUNMO0VBcUIrQyxjQUFjLEVBd0I1RCxDQUFBOzs7Ozs7Ozs7QUF4QkQscUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZExpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTeW5kaWNhdGlvbkZlZWRMaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc3luZGljYXRpb25GZWVkJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0IFN5bmRpY2F0aW9uIEZlZWRzIGJ5IGZpbHRlciB3aXRoIHBhZ2luZyBzdXBwb3J0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmRpY2F0aW9uRmVlZExpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZExpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBTeW5kaWNhdGlvbkZlZWRMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZExpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZExpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3luZGljYXRpb25mZWVkJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdCcgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==