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
export function UserRoleUpdateActionArgs() { }
/** @type {?} */
UserRoleUpdateActionArgs.prototype.userRoleId;
/** @type {?} */
UserRoleUpdateActionArgs.prototype.userRole;
/**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Updates an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Updates an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
UserRoleUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoleUpdateAction, _super);
    function UserRoleUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUserRole', responseConstructor: KalturaUserRole }) || this;
    }
    /**
     * @return {?}
     */
    UserRoleUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userrole' },
            action: { type: 'c', default: 'update' },
            userRoleId: { type: 'n' },
            userRole: { type: 'o', subTypeConstructor: KalturaUserRole, subType: 'KalturaUserRole' }
        });
        return result;
    };
    return UserRoleUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Updates an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export { UserRoleUpdateAction };
if (false) {
    /** @type {?} */
    UserRoleUpdateAction.prototype.userRoleId;
    /** @type {?} */
    UserRoleUpdateAction.prototype.userRole;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJvbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VzZXJSb2xlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTBDLGdEQUErQjtJQUtyRSw4QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRyxlQUFlLEVBQUcsQ0FBQztLQUNsSDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDbkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkExQ0w7RUFtQjBDLGNBQWMsRUF3QnZELENBQUE7Ozs7Ozs7OztBQXhCRCxnQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJSb2xlIH0gZnJvbSAnLi9LYWx0dXJhVXNlclJvbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1c2VyUm9sZUlkIDogbnVtYmVyO1xuXHR1c2VyUm9sZSA6IEthbHR1cmFVc2VyUm9sZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXJSb2xlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZXMgYW4gZXhpc3RpbmcgdXNlciByb2xlIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyUm9sZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlclJvbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVXNlclJvbGU+IHtcblxuICAgIHVzZXJSb2xlSWQgOiBudW1iZXI7XG5cdHVzZXJSb2xlIDogS2FsdHVyYVVzZXJSb2xlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVzZXJSb2xlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlclJvbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJSb2xlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2Vycm9sZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0dXNlclJvbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VyUm9sZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJSb2xlLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyUm9sZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19