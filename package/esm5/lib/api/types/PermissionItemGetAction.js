/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PermissionItemGetActionArgs() { }
/** @type {?} */
PermissionItemGetActionArgs.prototype.permissionItemId;
/**
 * Build request payload for service 'permissionItem' action 'get'.
 *
 * Usage: Retrieves a permission item object using its ID
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permissionItem' action 'get'.
 *
 * Usage: Retrieves a permission item object using its ID
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
PermissionItemGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionItemGetAction, _super);
    function PermissionItemGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermissionItem', responseConstructor: KalturaPermissionItem }) || this;
    }
    /**
     * @return {?}
     */
    PermissionItemGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permissionitem' },
            action: { type: 'c', default: 'get' },
            permissionItemId: { type: 'n' }
        });
        return result;
    };
    return PermissionItemGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permissionItem' action 'get'.
 *
 * Usage: Retrieves a permission item object using its ID
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export { PermissionItemGetAction };
if (false) {
    /** @type {?} */
    PermissionItemGetAction.prototype.permissionItemId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkl0ZW1HZXRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Blcm1pc3Npb25JdGVtR2V0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFxQztJQUk5RSxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDO0tBQzlIOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDaEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXZDTDtFQWtCNkMsY0FBYyxFQXNCMUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELG1DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkl0ZW0gfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uSXRlbSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25JdGVtR2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBlcm1pc3Npb25JdGVtSWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwZXJtaXNzaW9uSXRlbScgYWN0aW9uICdnZXQnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZXMgYSBwZXJtaXNzaW9uIGl0ZW0gb2JqZWN0IHVzaW5nIGl0cyBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQZXJtaXNzaW9uSXRlbVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkl0ZW1HZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGVybWlzc2lvbkl0ZW0+IHtcblxuICAgIHBlcm1pc3Npb25JdGVtSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGVybWlzc2lvbkl0ZW1HZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQZXJtaXNzaW9uSXRlbScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGVybWlzc2lvbkl0ZW0gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Blcm1pc3Npb25pdGVtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uSXRlbUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==