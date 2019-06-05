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
export function UserDeleteActionArgs() { }
/** @type {?} */
UserDeleteActionArgs.prototype.userId;
/**
 * Build request payload for service 'user' action 'delete'.
 *
 * Usage: Deletes a user from a partner account
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'delete'.
 *
 * Usage: Deletes a user from a partner account
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
UserDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserDeleteAction, _super);
    function UserDeleteAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUser', responseConstructor: KalturaUser }) || this;
    }
    /**
     * @return {?}
     */
    UserDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'delete' },
            userId: { type: 's' }
        });
        return result;
    };
    return UserDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'delete'.
 *
 * Usage: Deletes a user from a partner account
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export { UserDeleteAction };
if (false) {
    /** @type {?} */
    UserDeleteAction.prototype.userId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckRlbGV0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckRlbGV0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXNDLDRDQUEyQjtJQUk3RCwwQkFBWSxJQUEyQjtlQUVuQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxhQUFhLEVBQUUsbUJBQW1CLEVBQUcsV0FBVyxFQUFHLENBQUM7S0FDMUc7Ozs7SUFFUyx1Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQXZDTDtFQWtCc0MsY0FBYyxFQXNCbkQsQ0FBQTs7Ozs7Ozs7O0FBdEJELDRCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlciB9IGZyb20gJy4vS2FsdHVyYVVzZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGVsZXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHVzZXJJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXInIGFjdGlvbiAnZGVsZXRlJy5cbiAqXG4gKiBVc2FnZTogRGVsZXRlcyBhIHVzZXIgZnJvbSBhIHBhcnRuZXIgYWNjb3VudFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVzZXI+IHtcblxuICAgIHVzZXJJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyRGVsZXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlciAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RlbGV0ZScgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==