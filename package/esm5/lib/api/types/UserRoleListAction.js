/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUserRoleListResponse } from './KalturaUserRoleListResponse';
import { KalturaUserRoleFilter } from './KalturaUserRoleFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserRoleListActionArgs() { }
/** @type {?|undefined} */
UserRoleListActionArgs.prototype.filter;
/** @type {?|undefined} */
UserRoleListActionArgs.prototype.pager;
/**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 */
UserRoleListAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoleListAction, _super);
    function UserRoleListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUserRoleListResponse', responseConstructor: KalturaUserRoleListResponse }) || this;
    }
    /**
     * @return {?}
     */
    UserRoleListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userrole' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaUserRoleFilter, subType: 'KalturaUserRoleFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return UserRoleListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 */
export { UserRoleListAction };
if (false) {
    /** @type {?} */
    UserRoleListAction.prototype.filter;
    /** @type {?} */
    UserRoleListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJvbGVMaXN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyUm9sZUxpc3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7OztBQUFBO0lBQXdDLDhDQUEyQztJQUsvRSw0QkFBWSxJQUE4QjtlQUV0QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDO0tBQzFJOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN0RyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQTlDTDtFQXVCd0MsY0FBYyxFQXdCckQsQ0FBQTs7Ozs7Ozs7Ozs7QUF4QkQsOEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyUm9sZUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVVzZXJSb2xlTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVVzZXJSb2xlRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhVXNlclJvbGVGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhVXNlclJvbGVGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXJSb2xlJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0cyB1c2VyIHJvbGUgb2JqZWN0cyB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggYW4gYWNjb3VudC5cbiAqIEJsb2NrZWQgdXNlciByb2xlcyBhcmUgbGlzdGVkIHVubGVzcyB5b3UgdXNlIGEgZmlsdGVyIHRvIGV4Y2x1ZGUgdGhlbS5cbiAqIERlbGV0ZWQgdXNlciByb2xlcyBhcmUgbm90IGxpc3RlZCB1bmxlc3MgeW91IHVzZSBhIGZpbHRlciB0byBpbmNsdWRlIHRoZW1cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVXNlclJvbGVMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJSb2xlTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVc2VyUm9sZUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYVVzZXJSb2xlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogVXNlclJvbGVMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlclJvbGVMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJSb2xlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2Vycm9sZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJSb2xlRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyUm9sZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==