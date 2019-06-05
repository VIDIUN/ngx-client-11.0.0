/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSessionResponse } from './KalturaSessionResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserLoginByKsActionArgs() { }
/** @type {?} */
UserLoginByKsActionArgs.prototype.requestedPartnerId;
/**
 * Build request payload for service 'user' action 'loginByKs'.
 *
 * Usage: Loges a user to the destination account as long the ks user id exists in the desc acount and the loginData id match for both accounts
 *
 * Server response type:         KalturaSessionResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'loginByKs'.
 *
 * Usage: Loges a user to the destination account as long the ks user id exists in the desc acount and the loginData id match for both accounts
 *
 * Server response type:         KalturaSessionResponse
 * Server failure response type: KalturaAPIException
 */
UserLoginByKsAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserLoginByKsAction, _super);
    function UserLoginByKsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSessionResponse', responseConstructor: KalturaSessionResponse }) || this;
    }
    /**
     * @return {?}
     */
    UserLoginByKsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'loginByKs' },
            requestedPartnerId: { type: 'n' }
        });
        return result;
    };
    return UserLoginByKsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'loginByKs'.
 *
 * Usage: Loges a user to the destination account as long the ks user id exists in the desc acount and the loginData id match for both accounts
 *
 * Server response type:         KalturaSessionResponse
 * Server failure response type: KalturaAPIException
 */
export { UserLoginByKsAction };
if (false) {
    /** @type {?} */
    UserLoginByKsAction.prototype.requestedPartnerId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxvZ2luQnlLc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckxvZ2luQnlLc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBc0M7SUFJM0UsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDOUMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzFCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBdkNMO0VBa0J5QyxjQUFjLEVBc0J0RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsK0JBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uUmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uUmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTG9naW5CeUtzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHJlcXVlc3RlZFBhcnRuZXJJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXInIGFjdGlvbiAnbG9naW5CeUtzJy5cbiAqXG4gKiBVc2FnZTogTG9nZXMgYSB1c2VyIHRvIHRoZSBkZXN0aW5hdGlvbiBhY2NvdW50IGFzIGxvbmcgdGhlIGtzIHVzZXIgaWQgZXhpc3RzIGluIHRoZSBkZXNjIGFjb3VudCBhbmQgdGhlIGxvZ2luRGF0YSBpZCBtYXRjaCBmb3IgYm90aCBhY2NvdW50c1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXNzaW9uUmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJMb2dpbkJ5S3NBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2Vzc2lvblJlc3BvbnNlPiB7XG5cbiAgICByZXF1ZXN0ZWRQYXJ0bmVySWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckxvZ2luQnlLc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25SZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvblJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbG9naW5CeUtzJyB9LFxuXHRcdFx0XHRyZXF1ZXN0ZWRQYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19