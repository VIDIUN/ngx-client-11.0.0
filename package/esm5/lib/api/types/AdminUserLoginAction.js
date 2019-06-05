/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AdminUserLoginActionArgs() { }
/** @type {?} */
AdminUserLoginActionArgs.prototype.email;
/** @type {?} */
AdminUserLoginActionArgs.prototype.password;
/** @type {?|undefined} */
AdminUserLoginActionArgs.prototype.partnerId;
/**
 * Build request payload for service 'adminUser' action 'login'.
 *
 * Usage: Get an admin session using admin email and password (Used for login to the KMC application)
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'adminUser' action 'login'.
 *
 * Usage: Get an admin session using admin email and password (Used for login to the KMC application)
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
AdminUserLoginAction = /** @class */ (function (_super) {
    tslib_1.__extends(AdminUserLoginAction, _super);
    function AdminUserLoginAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    AdminUserLoginAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'adminuser' },
            action: { type: 'c', default: 'login' },
            email: { type: 's' },
            password: { type: 's' },
            partnerId: { type: 'n' }
        });
        return result;
    };
    return AdminUserLoginAction;
}(KalturaRequest));
/**
 * Build request payload for service 'adminUser' action 'login'.
 *
 * Usage: Get an admin session using admin email and password (Used for login to the KMC application)
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { AdminUserLoginAction };
if (false) {
    /** @type {?} */
    AdminUserLoginAction.prototype.email;
    /** @type {?} */
    AdminUserLoginAction.prototype.password;
    /** @type {?} */
    AdminUserLoginAction.prototype.partnerId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Vc2VyTG9naW5BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FkbWluVXNlckxvZ2luQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQXNCO0lBTTVELDhCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE3Q0w7RUFvQjBDLGNBQWMsRUEwQnZELENBQUE7Ozs7Ozs7OztBQTFCRCxnQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluVXNlckxvZ2luQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVtYWlsIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0cGFydG5lcklkPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2FkbWluVXNlcicgYWN0aW9uICdsb2dpbicuXG4gKlxuICogVXNhZ2U6IEdldCBhbiBhZG1pbiBzZXNzaW9uIHVzaW5nIGFkbWluIGVtYWlsIGFuZCBwYXNzd29yZCAoVXNlZCBmb3IgbG9naW4gdG8gdGhlIEtNQyBhcHBsaWNhdGlvbilcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFkbWluVXNlckxvZ2luQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBlbWFpbCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBZG1pblVzZXJMb2dpbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3MnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRtaW51c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbG9naW4nIH0sXG5cdFx0XHRcdGVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=