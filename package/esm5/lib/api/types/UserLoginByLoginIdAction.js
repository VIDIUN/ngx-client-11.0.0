/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserLoginByLoginIdActionArgs() { }
/** @type {?} */
UserLoginByLoginIdActionArgs.prototype.loginId;
/** @type {?} */
UserLoginByLoginIdActionArgs.prototype.password;
/** @type {?|undefined} */
UserLoginByLoginIdActionArgs.prototype.partnerId;
/** @type {?|undefined} */
UserLoginByLoginIdActionArgs.prototype.expiry;
/** @type {?|undefined} */
UserLoginByLoginIdActionArgs.prototype.privileges;
/** @type {?|undefined} */
UserLoginByLoginIdActionArgs.prototype.otp;
/**
 * Build request payload for service 'user' action 'loginByLoginId'.
 *
 * Usage: Logs a user into a partner account with a user login ID and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'loginByLoginId'.
 *
 * Usage: Logs a user into a partner account with a user login ID and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
UserLoginByLoginIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserLoginByLoginIdAction, _super);
    function UserLoginByLoginIdAction(data) {
        var _this = _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.expiry === 'undefined')
            _this.expiry = 86400;
        if (typeof _this.privileges === 'undefined')
            _this.privileges = "*";
        return _this;
    }
    /**
     * @return {?}
     */
    UserLoginByLoginIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'loginByLoginId' },
            loginId: { type: 's' },
            password: { type: 's' },
            partnerId: { type: 'n' },
            expiry: { type: 'n' },
            privileges: { type: 's' },
            otp: { type: 's' }
        });
        return result;
    };
    return UserLoginByLoginIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'loginByLoginId'.
 *
 * Usage: Logs a user into a partner account with a user login ID and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { UserLoginByLoginIdAction };
if (false) {
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.loginId;
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.password;
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.partnerId;
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.expiry;
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.privileges;
    /** @type {?} */
    UserLoginByLoginIdAction.prototype.otp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxvZ2luQnlMb2dpbklkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyTG9naW5CeUxvZ2luSWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBc0I7SUFTaEUsa0NBQVksSUFBbUM7UUFBL0MsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsU0FHdkY7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDOztLQUMvRDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNYLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBeERMO0VBdUI4QyxjQUFjLEVBa0MzRCxDQUFBOzs7Ozs7Ozs7QUFsQ0Qsb0NBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTG9naW5CeUxvZ2luSWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbG9naW5JZCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGV4cGlyeT8gOiBudW1iZXI7XG5cdHByaXZpbGVnZXM/IDogc3RyaW5nO1xuXHRvdHA/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndXNlcicgYWN0aW9uICdsb2dpbkJ5TG9naW5JZCcuXG4gKlxuICogVXNhZ2U6IExvZ3MgYSB1c2VyIGludG8gYSBwYXJ0bmVyIGFjY291bnQgd2l0aCBhIHVzZXIgbG9naW4gSUQgYW5kIGEgdXNlciBwYXNzd29yZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luQnlMb2dpbklkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBsb2dpbklkIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRleHBpcnkgOiBudW1iZXI7XG5cdHByaXZpbGVnZXMgOiBzdHJpbmc7XG5cdG90cCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyTG9naW5CeUxvZ2luSWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXhwaXJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5leHBpcnkgPSA4NjQwMDtcblx0XHRpZiAodHlwZW9mIHRoaXMucHJpdmlsZWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucHJpdmlsZWdlcyA9IFwiKlwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsb2dpbkJ5TG9naW5JZCcgfSxcblx0XHRcdFx0bG9naW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXhwaXJ5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaXZpbGVnZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3RwIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==