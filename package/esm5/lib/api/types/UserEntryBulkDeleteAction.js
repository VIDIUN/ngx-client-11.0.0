/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserEntryBulkDeleteActionArgs() { }
/** @type {?} */
UserEntryBulkDeleteActionArgs.prototype.filter;
/**
 * Build request payload for service 'userEntry' action 'bulkDelete'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userEntry' action 'bulkDelete'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
UserEntryBulkDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserEntryBulkDeleteAction, _super);
    function UserEntryBulkDeleteAction(data) {
        return _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    UserEntryBulkDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userentry' },
            action: { type: 'c', default: 'bulkDelete' },
            filter: { type: 'o', subTypeConstructor: KalturaUserEntryFilter, subType: 'KalturaUserEntryFilter' }
        });
        return result;
    };
    return UserEntryBulkDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userEntry' action 'bulkDelete'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { UserEntryBulkDeleteAction };
if (false) {
    /** @type {?} */
    UserEntryBulkDeleteAction.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVudHJ5QnVsa0RlbGV0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckVudHJ5QnVsa0RlbGV0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBc0I7SUFJakUsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUMvQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUMvRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQXhDTDtFQW1CK0MsY0FBYyxFQXNCNUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELHFDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRW50cnlCdWxrRGVsZXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlciA6IEthbHR1cmFVc2VyRW50cnlGaWx0ZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyRW50cnknIGFjdGlvbiAnYnVsa0RlbGV0ZScuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgbnVtYmVyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyRW50cnlCdWxrRGVsZXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhVXNlckVudHJ5RmlsdGVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVzZXJFbnRyeUJ1bGtEZWxldGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICduJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXJlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2J1bGtEZWxldGUnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckVudHJ5RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=