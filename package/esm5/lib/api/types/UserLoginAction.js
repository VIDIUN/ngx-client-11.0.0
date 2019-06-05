/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserLoginActionArgs() { }
/** @type {?} */
UserLoginActionArgs.prototype.partnerId;
/** @type {?} */
UserLoginActionArgs.prototype.userId;
/** @type {?} */
UserLoginActionArgs.prototype.password;
/** @type {?|undefined} */
UserLoginActionArgs.prototype.expiry;
/** @type {?|undefined} */
UserLoginActionArgs.prototype.privileges;
/**
 * Build request payload for service 'user' action 'login'.
 *
 * Usage: Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'login'.
 *
 * Usage: Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
UserLoginAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserLoginAction, _super);
    function UserLoginAction(data) {
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
    UserLoginAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'login' },
            partnerId: { type: 'n' },
            userId: { type: 's' },
            password: { type: 's' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    };
    return UserLoginAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'login'.
 *
 * Usage: Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { UserLoginAction };
if (false) {
    /** @type {?} */
    UserLoginAction.prototype.partnerId;
    /** @type {?} */
    UserLoginAction.prototype.userId;
    /** @type {?} */
    UserLoginAction.prototype.password;
    /** @type {?} */
    UserLoginAction.prototype.expiry;
    /** @type {?} */
    UserLoginAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxvZ2luQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyTG9naW5BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEU7Ozs7Ozs7O0FBQUE7SUFBcUMsMkNBQXNCO0lBUXZELHlCQUFZLElBQTBCO1FBQXRDLFlBRUksa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLFNBR3ZGO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzs7S0FDL0Q7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQXJETDtFQXNCcUMsY0FBYyxFQWdDbEQsQ0FBQTs7Ozs7Ozs7O0FBaENELDJCQWdDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckxvZ2luQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBhcnRuZXJJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0ZXhwaXJ5PyA6IG51bWJlcjtcblx0cHJpdmlsZWdlcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2xvZ2luJy5cbiAqXG4gKiBVc2FnZTogTG9ncyBhIHVzZXIgaW50byBhIHBhcnRuZXIgYWNjb3VudCB3aXRoIGEgcGFydG5lciBJRCwgYSBwYXJ0bmVyIHVzZXIgSUQgKHB1c2VyKSwgYW5kIGEgdXNlciBwYXNzd29yZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGV4cGlyeSA6IG51bWJlcjtcblx0cHJpdmlsZWdlcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyTG9naW5BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXhwaXJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5leHBpcnkgPSA4NjQwMDtcblx0XHRpZiAodHlwZW9mIHRoaXMucHJpdmlsZWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucHJpdmlsZWdlcyA9IFwiKlwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsb2dpbicgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=