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
export function PermissionAddActionArgs() { }
/** @type {?} */
PermissionAddActionArgs.prototype.permission;
/**
 * Build request payload for service 'permission' action 'add'.
 *
 * Usage: Adds a new permission object to the account
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permission' action 'add'.
 *
 * Usage: Adds a new permission object to the account
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
PermissionAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionAddAction, _super);
    function PermissionAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermission', responseConstructor: KalturaPermission }) || this;
    }
    /**
     * @return {?}
     */
    PermissionAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permission' },
            action: { type: 'c', default: 'add' },
            permission: { type: 'o', subTypeConstructor: KalturaPermission, subType: 'KalturaPermission' }
        });
        return result;
    };
    return PermissionAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permission' action 'add'.
 *
 * Usage: Adds a new permission object to the account
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export { PermissionAddAction };
if (false) {
    /** @type {?} */
    PermissionAddAction.prototype.permission;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUGVybWlzc2lvbkFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBaUM7SUFJdEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDekYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkF2Q0w7RUFrQnlDLGNBQWMsRUFzQnRELENBQUE7Ozs7Ozs7OztBQXRCRCwrQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb24gfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBwZXJtaXNzaW9uIDogS2FsdHVyYVBlcm1pc3Npb247XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwZXJtaXNzaW9uJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZHMgYSBuZXcgcGVybWlzc2lvbiBvYmplY3QgdG8gdGhlIGFjY291bnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGVybWlzc2lvblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQZXJtaXNzaW9uPiB7XG5cbiAgICBwZXJtaXNzaW9uIDogS2FsdHVyYVBlcm1pc3Npb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGVybWlzc2lvbkFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Blcm1pc3Npb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFQZXJtaXNzaW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=