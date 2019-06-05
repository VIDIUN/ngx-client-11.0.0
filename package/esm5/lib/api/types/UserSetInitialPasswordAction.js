/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserSetInitialPasswordActionArgs() { }
/** @type {?} */
UserSetInitialPasswordActionArgs.prototype.hashKey;
/** @type {?} */
UserSetInitialPasswordActionArgs.prototype.newPassword;
/**
 * Build request payload for service 'user' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
UserSetInitialPasswordAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserSetInitialPasswordAction, _super);
    function UserSetInitialPasswordAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    UserSetInitialPasswordAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'setInitialPassword' },
            hashKey: { type: 's' },
            newPassword: { type: 's' }
        });
        return result;
    };
    return UserSetInitialPasswordAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { UserSetInitialPasswordAction };
if (false) {
    /** @type {?} */
    UserSetInitialPasswordAction.prototype.hashKey;
    /** @type {?} */
    UserSetInitialPasswordAction.prototype.newPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNldEluaXRpYWxQYXNzd29yZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlclNldEluaXRpYWxQYXNzd29yZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUFvQjtJQUtsRSxzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDdEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBbUJrRCxjQUFjLEVBd0IvRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsd0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGhhc2hLZXkgOiBzdHJpbmc7XG5cdG5ld1Bhc3N3b3JkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndXNlcicgYWN0aW9uICdzZXRJbml0aWFsUGFzc3dvcmQnLlxuICpcbiAqIFVzYWdlOiBTZXQgaW5pdGlhbCB1c2VycyBwYXNzd29yZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJTZXRJbml0aWFsUGFzc3dvcmRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBoYXNoS2V5IDogc3RyaW5nO1xuXHRuZXdQYXNzd29yZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2V0SW5pdGlhbFBhc3N3b3JkJyB9LFxuXHRcdFx0XHRoYXNoS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5ld1Bhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==