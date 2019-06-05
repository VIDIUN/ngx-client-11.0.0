/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserUpdateLoginDataActionArgs() { }
/** @type {?} */
UserUpdateLoginDataActionArgs.prototype.oldLoginId;
/** @type {?} */
UserUpdateLoginDataActionArgs.prototype.password;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newLoginId;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newPassword;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newFirstName;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newLastName;
/**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
UserUpdateLoginDataAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserUpdateLoginDataAction, _super);
    function UserUpdateLoginDataAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    UserUpdateLoginDataAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'updateLoginData' },
            oldLoginId: { type: 's' },
            password: { type: 's' },
            newLoginId: { type: 's' },
            newPassword: { type: 's' },
            newFirstName: { type: 's' },
            newLastName: { type: 's' }
        });
        return result;
    };
    return UserUpdateLoginDataAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { UserUpdateLoginDataAction };
if (false) {
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.oldLoginId;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.password;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newLoginId;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newPassword;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newFirstName;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newLastName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFvQjtJQVMvRCxtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0F0REw7RUF1QitDLGNBQWMsRUFnQzVELENBQUE7Ozs7Ozs7OztBQWhDRCxxQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJVcGRhdGVMb2dpbkRhdGFBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgb2xkTG9naW5JZCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdG5ld0xvZ2luSWQ/IDogc3RyaW5nO1xuXHRuZXdQYXNzd29yZD8gOiBzdHJpbmc7XG5cdG5ld0ZpcnN0TmFtZT8gOiBzdHJpbmc7XG5cdG5ld0xhc3ROYW1lPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXInIGFjdGlvbiAndXBkYXRlTG9naW5EYXRhJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlcyBhIHVzZXIncyBsb2dpbiBkYXRhOiBlbWFpbCwgcGFzc3dvcmQsIG5hbWVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyVXBkYXRlTG9naW5EYXRhQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgb2xkTG9naW5JZCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdG5ld0xvZ2luSWQgOiBzdHJpbmc7XG5cdG5ld1Bhc3N3b3JkIDogc3RyaW5nO1xuXHRuZXdGaXJzdE5hbWUgOiBzdHJpbmc7XG5cdG5ld0xhc3ROYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVzZXJVcGRhdGVMb2dpbkRhdGFBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICd2JywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVMb2dpbkRhdGEnIH0sXG5cdFx0XHRcdG9sZExvZ2luSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmV3TG9naW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdGaXJzdE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmV3TGFzdE5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19