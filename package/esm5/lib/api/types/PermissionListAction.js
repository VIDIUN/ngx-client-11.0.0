/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPermissionListResponse } from './KalturaPermissionListResponse';
import { KalturaPermissionFilter } from './KalturaPermissionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PermissionListActionArgs() { }
/** @type {?|undefined} */
PermissionListActionArgs.prototype.filter;
/** @type {?|undefined} */
PermissionListActionArgs.prototype.pager;
/**
 * Build request payload for service 'permission' action 'list'.
 *
 * Usage: Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them
 *
 * Server response type:         KalturaPermissionListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permission' action 'list'.
 *
 * Usage: Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them
 *
 * Server response type:         KalturaPermissionListResponse
 * Server failure response type: KalturaAPIException
 */
PermissionListAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionListAction, _super);
    function PermissionListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermissionListResponse', responseConstructor: KalturaPermissionListResponse }) || this;
    }
    /**
     * @return {?}
     */
    PermissionListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permission' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaPermissionFilter, subType: 'KalturaPermissionFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PermissionListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permission' action 'list'.
 *
 * Usage: Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them
 *
 * Server response type:         KalturaPermissionListResponse
 * Server failure response type: KalturaAPIException
 */
export { PermissionListAction };
if (false) {
    /** @type {?} */
    PermissionListAction.prototype.filter;
    /** @type {?} */
    PermissionListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Blcm1pc3Npb25MaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEU7Ozs7Ozs7Ozs7QUFBQTtJQUEwQyxnREFBNkM7SUFLbkYsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsK0JBQStCLEVBQUUsbUJBQW1CLEVBQUcsNkJBQTZCLEVBQUcsQ0FBQztLQUM5STs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDMUcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE5Q0w7RUF1QjBDLGNBQWMsRUF3QnZELENBQUE7Ozs7Ozs7Ozs7O0FBeEJELGdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25MaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25GaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFQZXJtaXNzaW9uRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwZXJtaXNzaW9uJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0cyBwZXJtaXNzaW9uIG9iamVjdHMgdGhhdCBhcmUgYXNzb2NpYXRlZCB3aXRoIGFuIGFjY291bnQuXG4gKiBCbG9ja2VkIHBlcm1pc3Npb25zIGFyZSBsaXN0ZWQgdW5sZXNzIHlvdSB1c2UgYSBmaWx0ZXIgdG8gZXhjbHVkZSB0aGVtLlxuICogQmxvY2tlZCBwZXJtaXNzaW9ucyBhcmUgbGlzdGVkIHVubGVzcyB5b3UgdXNlIGEgZmlsdGVyIHRvIGV4Y2x1ZGUgdGhlbVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQZXJtaXNzaW9uTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQZXJtaXNzaW9uTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhUGVybWlzc2lvbkZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFBlcm1pc3Npb25MaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvbkxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGVybWlzc2lvbkxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGVybWlzc2lvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25GaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25GaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=