/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserRoleDeleteActionArgs() { }
/** @type {?} */
UserRoleDeleteActionArgs.prototype.userRoleId;
/**
 * Build request payload for service 'userRole' action 'delete'.
 *
 * Usage: Deletes an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userRole' action 'delete'.
 *
 * Usage: Deletes an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
UserRoleDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoleDeleteAction, _super);
    function UserRoleDeleteAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUserRole', responseConstructor: KalturaUserRole }) || this;
    }
    /**
     * @return {?}
     */
    UserRoleDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userrole' },
            action: { type: 'c', default: 'delete' },
            userRoleId: { type: 'n' }
        });
        return result;
    };
    return UserRoleDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userRole' action 'delete'.
 *
 * Usage: Deletes an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export { UserRoleDeleteAction };
if (false) {
    /** @type {?} */
    UserRoleDeleteAction.prototype.userRoleId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJvbGVEZWxldGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VzZXJSb2xlRGVsZXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUEwQyxnREFBK0I7SUFJckUsOEJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkF2Q0w7RUFrQjBDLGNBQWMsRUFzQnZELENBQUE7Ozs7Ozs7OztBQXRCRCxnQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJSb2xlIH0gZnJvbSAnLi9LYWx0dXJhVXNlclJvbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZURlbGV0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1c2VyUm9sZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndXNlclJvbGUnIGFjdGlvbiAnZGVsZXRlJy5cbiAqXG4gKiBVc2FnZTogRGVsZXRlcyBhbiBleGlzdGluZyB1c2VyIHJvbGUgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVVzZXJSb2xlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyUm9sZURlbGV0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVc2VyUm9sZT4ge1xuXG4gICAgdXNlclJvbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyUm9sZURlbGV0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVzZXJSb2xlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyUm9sZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXNlcnJvbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxldGUnIH0sXG5cdFx0XHRcdHVzZXJSb2xlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19