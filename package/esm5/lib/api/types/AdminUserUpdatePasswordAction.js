/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAdminUser } from './KalturaAdminUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AdminUserUpdatePasswordActionArgs() { }
/** @type {?} */
AdminUserUpdatePasswordActionArgs.prototype.email;
/** @type {?} */
AdminUserUpdatePasswordActionArgs.prototype.password;
/** @type {?|undefined} */
AdminUserUpdatePasswordActionArgs.prototype.newEmail;
/** @type {?|undefined} */
AdminUserUpdatePasswordActionArgs.prototype.newPassword;
/**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
AdminUserUpdatePasswordAction = /** @class */ (function (_super) {
    tslib_1.__extends(AdminUserUpdatePasswordAction, _super);
    function AdminUserUpdatePasswordAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAdminUser', responseConstructor: KalturaAdminUser }) || this;
    }
    /**
     * @return {?}
     */
    AdminUserUpdatePasswordAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'adminuser' },
            action: { type: 'c', default: 'updatePassword' },
            email: { type: 's' },
            password: { type: 's' },
            newEmail: { type: 's' },
            newPassword: { type: 's' }
        });
        return result;
    };
    return AdminUserUpdatePasswordAction;
}(KalturaRequest));
/**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
export { AdminUserUpdatePasswordAction };
if (false) {
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.email;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.password;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.newEmail;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.newPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Vc2VyVXBkYXRlUGFzc3dvcmRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FkbWluVXNlclVwZGF0ZVBhc3N3b3JkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUFtRCx5REFBZ0M7SUFPL0UsdUNBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBaERMO0VBcUJtRCxjQUFjLEVBNEJoRSxDQUFBOzs7Ozs7Ozs7QUE1QkQseUNBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBZG1pblVzZXIgfSBmcm9tICcuL0thbHR1cmFBZG1pblVzZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBZG1pblVzZXJVcGRhdGVQYXNzd29yZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbWFpbCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdG5ld0VtYWlsPyA6IHN0cmluZztcblx0bmV3UGFzc3dvcmQ/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYWRtaW5Vc2VyJyBhY3Rpb24gJ3VwZGF0ZVBhc3N3b3JkJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFkbWluIHVzZXIgcGFzc3dvcmQgYW5kIGVtYWlsXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUFkbWluVXNlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWRtaW5Vc2VyVXBkYXRlUGFzc3dvcmRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQWRtaW5Vc2VyPiB7XG5cbiAgICBlbWFpbCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdG5ld0VtYWlsIDogc3RyaW5nO1xuXHRuZXdQYXNzd29yZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBZG1pblVzZXJVcGRhdGVQYXNzd29yZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUFkbWluVXNlcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWRtaW5Vc2VyICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZG1pbnVzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVQYXNzd29yZCcgfSxcblx0XHRcdFx0ZW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmV3RW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmV3UGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19