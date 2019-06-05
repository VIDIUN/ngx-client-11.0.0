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
export function UserGetByLoginIdActionArgs() { }
/** @type {?} */
UserGetByLoginIdActionArgs.prototype.loginId;
/**
 * Build request payload for service 'user' action 'getByLoginId'.
 *
 * Usage: Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'getByLoginId'.
 *
 * Usage: Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
UserGetByLoginIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserGetByLoginIdAction, _super);
    function UserGetByLoginIdAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUser', responseConstructor: KalturaUser }) || this;
    }
    /**
     * @return {?}
     */
    UserGetByLoginIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'getByLoginId' },
            loginId: { type: 's' }
        });
        return result;
    };
    return UserGetByLoginIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'getByLoginId'.
 *
 * Usage: Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export { UserGetByLoginIdAction };
if (false) {
    /** @type {?} */
    UserGetByLoginIdAction.prototype.loginId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckdldEJ5TG9naW5JZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckdldEJ5TG9naW5JZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBNEMsa0RBQTJCO0lBSW5FLGdDQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGFBQWEsRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUcsQ0FBQztLQUMxRzs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBeENMO0VBbUI0QyxjQUFjLEVBc0J6RCxDQUFBOzs7Ozs7Ozs7O0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlciB9IGZyb20gJy4vS2FsdHVyYVVzZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyR2V0QnlMb2dpbklkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGxvZ2luSWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2dldEJ5TG9naW5JZCcuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlcyBhIHVzZXIgb2JqZWN0IGZvciBhIHVzZXIncyBsb2dpbiBJRCBhbmQgcGFydG5lciBJRC5cbiAqIEEgbG9naW4gSUQgaXMgdGhlIGVtYWlsIGFkZHJlc3MgdXNlZCBieSBhIHVzZXIgdG8gbG9nIGludG8gdGhlIHN5c3RlbVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyR2V0QnlMb2dpbklkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVzZXI+IHtcblxuICAgIGxvZ2luSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckdldEJ5TG9naW5JZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVzZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRCeUxvZ2luSWQnIH0sXG5cdFx0XHRcdGxvZ2luSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19