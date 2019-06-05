/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPermission } from './KalturaPermission';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PermissionUpdateActionArgs() { }
/** @type {?} */
PermissionUpdateActionArgs.prototype.permissionName;
/** @type {?} */
PermissionUpdateActionArgs.prototype.permission;
/**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Updates an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Updates an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
PermissionUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionUpdateAction, _super);
    function PermissionUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermission', responseConstructor: KalturaPermission }) || this;
    }
    /**
     * @return {?}
     */
    PermissionUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permission' },
            action: { type: 'c', default: 'update' },
            permissionName: { type: 's' },
            permission: { type: 'o', subTypeConstructor: KalturaPermission, subType: 'KalturaPermission' }
        });
        return result;
    };
    return PermissionUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Updates an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export { PermissionUpdateAction };
if (false) {
    /** @type {?} */
    PermissionUpdateAction.prototype.permissionName;
    /** @type {?} */
    PermissionUpdateAction.prototype.permission;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvblVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUGVybWlzc2lvblVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTRDLGtEQUFpQztJQUt6RSxnQ0FBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQ3pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBMUNMO0VBbUI0QyxjQUFjLEVBd0J6RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsa0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25VcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGVybWlzc2lvbk5hbWUgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb24gOiBLYWx0dXJhUGVybWlzc2lvbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Blcm1pc3Npb24nIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlcyBhbiBleGlzdGluZyBwZXJtaXNzaW9uIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQZXJtaXNzaW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBlcm1pc3Npb24+IHtcblxuICAgIHBlcm1pc3Npb25OYW1lIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uIDogS2FsdHVyYVBlcm1pc3Npb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGVybWlzc2lvblVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Blcm1pc3Npb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFQZXJtaXNzaW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=