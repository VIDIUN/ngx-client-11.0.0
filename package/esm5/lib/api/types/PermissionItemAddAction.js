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
export function PermissionItemAddActionArgs() { }
/** @type {?} */
PermissionItemAddActionArgs.prototype.permissionItem;
/**
 * Build request payload for service 'permissionItem' action 'add'.
 *
 * Usage: Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permissionItem' action 'add'.
 *
 * Usage: Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
PermissionItemAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionItemAddAction, _super);
    function PermissionItemAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermissionItem', responseConstructor: KalturaPermissionItem }) || this;
    }
    /**
     * @return {?}
     */
    PermissionItemAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permissionitem' },
            action: { type: 'c', default: 'add' },
            permissionItem: { type: 'o', subTypeConstructor: KalturaPermissionItem, subType: 'KalturaPermissionItem' }
        });
        return result;
    };
    return PermissionItemAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permissionItem' action 'add'.
 *
 * Usage: Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export { PermissionItemAddAction };
if (false) {
    /** @type {?} */
    PermissionItemAddAction.prototype.permissionItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkl0ZW1BZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Blcm1pc3Npb25JdGVtQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBNkMsbURBQXFDO0lBSTlFLGlDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNoRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7U0FDckcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0F4Q0w7RUFtQjZDLGNBQWMsRUFzQjFELENBQUE7Ozs7Ozs7Ozs7QUF0QkQsbUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uSXRlbSB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25JdGVtJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkl0ZW1BZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGVybWlzc2lvbkl0ZW0gOiBLYWx0dXJhUGVybWlzc2lvbkl0ZW07XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwZXJtaXNzaW9uSXRlbScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGRzIGEgbmV3IHBlcm1pc3Npb24gaXRlbSBvYmplY3QgdG8gdGhlIGFjY291bnQuXG4gKiBUaGlzIGFjdGlvbiBpcyBhdmFpbGFibGUgb25seSB0byBLYWx0dXJhIHN5c3RlbSBhZG1pbmlzdHJhdG9yc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQZXJtaXNzaW9uSXRlbVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkl0ZW1BZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGVybWlzc2lvbkl0ZW0+IHtcblxuICAgIHBlcm1pc3Npb25JdGVtIDogS2FsdHVyYVBlcm1pc3Npb25JdGVtO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFBlcm1pc3Npb25JdGVtQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvbkl0ZW0nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25JdGVtICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdwZXJtaXNzaW9uaXRlbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0cGVybWlzc2lvbkl0ZW0gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvbkl0ZW0nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==