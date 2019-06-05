/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
/**
 * @record
 */
export function KalturaApiActionPermissionItemArgs() { }
/** @type {?|undefined} */
KalturaApiActionPermissionItemArgs.prototype.service;
/** @type {?|undefined} */
KalturaApiActionPermissionItemArgs.prototype.action;
var KalturaApiActionPermissionItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaApiActionPermissionItem, _super);
    function KalturaApiActionPermissionItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaApiActionPermissionItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaApiActionPermissionItem' },
            service: { type: 's' },
            action: { type: 's' }
        });
        return result;
    };
    return KalturaApiActionPermissionItem;
}(KalturaPermissionItem));
export { KalturaApiActionPermissionItem };
if (false) {
    /** @type {?} */
    KalturaApiActionPermissionItem.prototype.service;
    /** @type {?} */
    KalturaApiActionPermissionItem.prototype.action;
}
typesMappingStorage['KalturaApiActionPermissionItem'] = KalturaApiActionPermissionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7QUFRM0YsSUFBQTtJQUFvRCwwREFBcUI7SUFLckUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQWhDTDtFQVVvRCxxQkFBcUIsRUF1QnhFLENBQUE7QUF2QkQsMENBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkl0ZW0sIEthbHR1cmFQZXJtaXNzaW9uSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhUGVybWlzc2lvbkl0ZW1BcmdzIHtcbiAgICBzZXJ2aWNlPyA6IHN0cmluZztcblx0YWN0aW9uPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtIGV4dGVuZHMgS2FsdHVyYVBlcm1pc3Npb25JdGVtIHtcblxuICAgIHNlcnZpY2UgOiBzdHJpbmc7XG5cdGFjdGlvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBcGlBY3Rpb25QZXJtaXNzaW9uSXRlbScgfSxcblx0XHRcdFx0c2VydmljZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtJ10gPSBLYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW07Il19