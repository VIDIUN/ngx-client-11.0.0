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
export function UserRoleGetActionArgs() { }
/** @type {?} */
UserRoleGetActionArgs.prototype.userRoleId;
/**
 * Build request payload for service 'userRole' action 'get'.
 *
 * Usage: Retrieves a user role object using its ID
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userRole' action 'get'.
 *
 * Usage: Retrieves a user role object using its ID
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
UserRoleGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoleGetAction, _super);
    function UserRoleGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUserRole', responseConstructor: KalturaUserRole }) || this;
    }
    /**
     * @return {?}
     */
    UserRoleGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userrole' },
            action: { type: 'c', default: 'get' },
            userRoleId: { type: 'n' }
        });
        return result;
    };
    return UserRoleGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userRole' action 'get'.
 *
 * Usage: Retrieves a user role object using its ID
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export { UserRoleGetAction };
if (false) {
    /** @type {?} */
    UserRoleGetAction.prototype.userRoleId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJvbGVHZXRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VzZXJSb2xlR2V0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF1Qyw2Q0FBK0I7SUFJbEUsMkJBQVksSUFBNEI7ZUFFcEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyx3Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkF2Q0w7RUFrQnVDLGNBQWMsRUFzQnBELENBQUE7Ozs7Ozs7OztBQXRCRCw2QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJSb2xlIH0gZnJvbSAnLi9LYWx0dXJhVXNlclJvbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUdldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1c2VyUm9sZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndXNlclJvbGUnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmVzIGEgdXNlciByb2xlIG9iamVjdCB1c2luZyBpdHMgSURcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVXNlclJvbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJSb2xlR2V0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVzZXJSb2xlPiB7XG5cbiAgICB1c2VyUm9sZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVzZXJSb2xlR2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlclJvbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJSb2xlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2Vycm9sZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldCcgfSxcblx0XHRcdFx0dXNlclJvbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=