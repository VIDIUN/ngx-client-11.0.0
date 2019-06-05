/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUploadTokenListResponse } from './KalturaUploadTokenListResponse';
import { KalturaUploadTokenFilter } from './KalturaUploadTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UploadTokenListActionArgs() { }
/** @type {?|undefined} */
UploadTokenListActionArgs.prototype.filter;
/** @type {?|undefined} */
UploadTokenListActionArgs.prototype.pager;
/**
 * Build request payload for service 'uploadToken' action 'list'.
 *
 * Usage: List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only
 *
 * Server response type:         KalturaUploadTokenListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uploadToken' action 'list'.
 *
 * Usage: List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only
 *
 * Server response type:         KalturaUploadTokenListResponse
 * Server failure response type: KalturaAPIException
 */
UploadTokenListAction = /** @class */ (function (_super) {
    tslib_1.__extends(UploadTokenListAction, _super);
    function UploadTokenListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUploadTokenListResponse', responseConstructor: KalturaUploadTokenListResponse }) || this;
    }
    /**
     * @return {?}
     */
    UploadTokenListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uploadtoken' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaUploadTokenFilter, subType: 'KalturaUploadTokenFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return UploadTokenListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'uploadToken' action 'list'.
 *
 * Usage: List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only
 *
 * Server response type:         KalturaUploadTokenListResponse
 * Server failure response type: KalturaAPIException
 */
export { UploadTokenListAction };
if (false) {
    /** @type {?} */
    UploadTokenListAction.prototype.filter;
    /** @type {?} */
    UploadTokenListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkVG9rZW5MaXN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9VcGxvYWRUb2tlbkxpc3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBOEM7SUFLckYsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsZ0NBQWdDLEVBQUUsbUJBQW1CLEVBQUcsOEJBQThCLEVBQUcsQ0FBQztLQUNoSjs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUM3RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDNUcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E3Q0w7RUFzQjJDLGNBQWMsRUF3QnhELENBQUE7Ozs7Ozs7Ozs7QUF4QkQsaUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcGxvYWRUb2tlbkxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVVwbG9hZFRva2VuTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFRva2VuRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhVXBsb2FkVG9rZW5GaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkVG9rZW5MaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhVXBsb2FkVG9rZW5GaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VwbG9hZFRva2VuJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0IHVwbG9hZCB0b2tlbiBieSBmaWx0ZXIgd2l0aCBwYWdlciBzdXBwb3J0LlxuICogV2hlbiB1c2luZyBhIHVzZXIgc2Vzc2lvbiB0aGUgc2VydmljZSB3aWxsIGJlIHJlc3RyaWN0ZWQgdG8gdXNlcnMgb2JqZWN0cyBvbmx5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVVwbG9hZFRva2VuTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGxvYWRUb2tlbkxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVXBsb2FkVG9rZW5MaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFVcGxvYWRUb2tlbkZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFVwbG9hZFRva2VuTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVwbG9hZFRva2VuTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGxvYWRUb2tlbkxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBsb2FkdG9rZW4nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGxvYWRUb2tlbkZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkVG9rZW5GaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=