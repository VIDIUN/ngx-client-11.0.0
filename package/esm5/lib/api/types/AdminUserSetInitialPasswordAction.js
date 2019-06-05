/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AdminUserSetInitialPasswordActionArgs() { }
/** @type {?} */
AdminUserSetInitialPasswordActionArgs.prototype.hashKey;
/** @type {?} */
AdminUserSetInitialPasswordActionArgs.prototype.newPassword;
/**
 * Build request payload for service 'adminUser' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'adminUser' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
AdminUserSetInitialPasswordAction = /** @class */ (function (_super) {
    tslib_1.__extends(AdminUserSetInitialPasswordAction, _super);
    function AdminUserSetInitialPasswordAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    AdminUserSetInitialPasswordAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'adminuser' },
            action: { type: 'c', default: 'setInitialPassword' },
            hashKey: { type: 's' },
            newPassword: { type: 's' }
        });
        return result;
    };
    return AdminUserSetInitialPasswordAction;
}(KalturaRequest));
/**
 * Build request payload for service 'adminUser' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { AdminUserSetInitialPasswordAction };
if (false) {
    /** @type {?} */
    AdminUserSetInitialPasswordAction.prototype.hashKey;
    /** @type {?} */
    AdminUserSetInitialPasswordAction.prototype.newPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Vc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9BZG1pblVzZXJTZXRJbml0aWFsUGFzc3dvcmRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBb0I7SUFLdkUsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQTFDTDtFQW1CdUQsY0FBYyxFQXdCcEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDZDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtaW5Vc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGhhc2hLZXkgOiBzdHJpbmc7XG5cdG5ld1Bhc3N3b3JkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYWRtaW5Vc2VyJyBhY3Rpb24gJ3NldEluaXRpYWxQYXNzd29yZCcuXG4gKlxuICogVXNhZ2U6IFNldCBpbml0aWFsIHVzZXJzIHBhc3N3b3JkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWRtaW5Vc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgaGFzaEtleSA6IHN0cmluZztcblx0bmV3UGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQWRtaW5Vc2VyU2V0SW5pdGlhbFBhc3N3b3JkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZG1pbnVzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXRJbml0aWFsUGFzc3dvcmQnIH0sXG5cdFx0XHRcdGhhc2hLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmV3UGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19