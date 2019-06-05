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
export function UserDisableLoginActionArgs() { }
/** @type {?|undefined} */
UserDisableLoginActionArgs.prototype.userId;
/** @type {?|undefined} */
UserDisableLoginActionArgs.prototype.loginId;
/**
 * Build request payload for service 'user' action 'disableLogin'.
 *
 * Usage: Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'disableLogin'.
 *
 * Usage: Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
UserDisableLoginAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserDisableLoginAction, _super);
    function UserDisableLoginAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUser', responseConstructor: KalturaUser }) || this;
    }
    /**
     * @return {?}
     */
    UserDisableLoginAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'disableLogin' },
            userId: { type: 's' },
            loginId: { type: 's' }
        });
        return result;
    };
    return UserDisableLoginAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'disableLogin'.
 *
 * Usage: Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export { UserDisableLoginAction };
if (false) {
    /** @type {?} */
    UserDisableLoginAction.prototype.userId;
    /** @type {?} */
    UserDisableLoginAction.prototype.loginId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckRpc2FibGVMb2dpbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckRpc2FibGVMb2dpbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7O0FBQUE7SUFBNEMsa0RBQTJCO0lBS25FLGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGFBQWEsRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUcsQ0FBQztLQUMxRzs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0EzQ0w7RUFvQjRDLGNBQWMsRUF3QnpELENBQUE7Ozs7Ozs7Ozs7QUF4QkQsa0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyIH0gZnJvbSAnLi9LYWx0dXJhVXNlcic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEaXNhYmxlTG9naW5BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgdXNlcklkPyA6IHN0cmluZztcblx0bG9naW5JZD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2Rpc2FibGVMb2dpbicuXG4gKlxuICogVXNhZ2U6IERpc2FibGVzIGEgdXNlcidzIGFiaWxpdHkgdG8gbG9nIGludG8gYSBwYXJ0bmVyIGFjY291bnQgdXNpbmcgYW4gZW1haWwgYWRkcmVzcyBhbmQgYSBwYXNzd29yZC5cbiAqIFlvdSBtYXkgdXNlIGVpdGhlciBhIHVzZXJJZCBvciBhIGxvZ2luSWQgcGFyYW1ldGVyIGZvciB0aGlzIGFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyRGlzYWJsZUxvZ2luQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVzZXI+IHtcblxuICAgIHVzZXJJZCA6IHN0cmluZztcblx0bG9naW5JZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogVXNlckRpc2FibGVMb2dpbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVzZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkaXNhYmxlTG9naW4nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsb2dpbklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==