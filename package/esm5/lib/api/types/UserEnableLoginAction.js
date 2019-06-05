/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUser } from './KalturaUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserEnableLoginActionArgs() { }
/** @type {?} */
UserEnableLoginActionArgs.prototype.userId;
/** @type {?} */
UserEnableLoginActionArgs.prototype.loginId;
/** @type {?|undefined} */
UserEnableLoginActionArgs.prototype.password;
/**
 * Build request payload for service 'user' action 'enableLogin'.
 *
 * Usage: Enables a user to log into a partner account using an email address and a password
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'enableLogin'.
 *
 * Usage: Enables a user to log into a partner account using an email address and a password
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
UserEnableLoginAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserEnableLoginAction, _super);
    function UserEnableLoginAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUser', responseConstructor: KalturaUser }) || this;
    }
    /**
     * @return {?}
     */
    UserEnableLoginAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'enableLogin' },
            userId: { type: 's' },
            loginId: { type: 's' },
            password: { type: 's' }
        });
        return result;
    };
    return UserEnableLoginAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'enableLogin'.
 *
 * Usage: Enables a user to log into a partner account using an email address and a password
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export { UserEnableLoginAction };
if (false) {
    /** @type {?} */
    UserEnableLoginAction.prototype.userId;
    /** @type {?} */
    UserEnableLoginAction.prototype.loginId;
    /** @type {?} */
    UserEnableLoginAction.prototype.password;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVuYWJsZUxvZ2luQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyRW5hYmxlTG9naW5BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQTJDLGlEQUEyQjtJQU1sRSwrQkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxhQUFhLEVBQUUsbUJBQW1CLEVBQUcsV0FBVyxFQUFHLENBQUM7S0FDMUc7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBN0NMO0VBb0IyQyxjQUFjLEVBMEJ4RCxDQUFBOzs7Ozs7Ozs7QUExQkQsaUNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyIH0gZnJvbSAnLi9LYWx0dXJhVXNlcic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJFbmFibGVMb2dpbkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1c2VySWQgOiBzdHJpbmc7XG5cdGxvZ2luSWQgOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXInIGFjdGlvbiAnZW5hYmxlTG9naW4nLlxuICpcbiAqIFVzYWdlOiBFbmFibGVzIGEgdXNlciB0byBsb2cgaW50byBhIHBhcnRuZXIgYWNjb3VudCB1c2luZyBhbiBlbWFpbCBhZGRyZXNzIGFuZCBhIHBhc3N3b3JkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVVzZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJFbmFibGVMb2dpbkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVc2VyPiB7XG5cbiAgICB1c2VySWQgOiBzdHJpbmc7XG5cdGxvZ2luSWQgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVzZXJFbmFibGVMb2dpbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVzZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdlbmFibGVMb2dpbicgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvZ2luSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19