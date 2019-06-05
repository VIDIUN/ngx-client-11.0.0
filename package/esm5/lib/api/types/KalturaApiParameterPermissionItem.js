/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemAction } from './KalturaApiParameterPermissionItemAction';
import { KalturaPermissionItem } from './KalturaPermissionItem';
/**
 * @record
 */
export function KalturaApiParameterPermissionItemArgs() { }
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.object;
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.parameter;
/** @type {?|undefined} */
KalturaApiParameterPermissionItemArgs.prototype.action;
var KalturaApiParameterPermissionItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaApiParameterPermissionItem, _super);
    function KalturaApiParameterPermissionItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaApiParameterPermissionItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaApiParameterPermissionItem' },
            object: { type: 's' },
            parameter: { type: 's' },
            action: { type: 'es', subTypeConstructor: KalturaApiParameterPermissionItemAction, subType: 'KalturaApiParameterPermissionItemAction' }
        });
        return result;
    };
    return KalturaApiParameterPermissionItem;
}(KalturaPermissionItem));
export { KalturaApiParameterPermissionItem };
if (false) {
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.object;
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.parameter;
    /** @type {?} */
    KalturaApiParameterPermissionItem.prototype.action;
}
typesMappingStorage['KalturaApiParameterPermissionItem'] = KalturaApiParameterPermissionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQVMzRixJQUFBO0lBQXVELDZEQUFxQjtJQU14RSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtTQUNsSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQXBDTDtFQVl1RCxxQkFBcUIsRUF5QjNFLENBQUE7QUF6QkQsNkNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uSXRlbSwgS2FsdHVyYVBlcm1pc3Npb25JdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25JdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFQZXJtaXNzaW9uSXRlbUFyZ3Mge1xuICAgIG9iamVjdD8gOiBzdHJpbmc7XG5cdHBhcmFtZXRlcj8gOiBzdHJpbmc7XG5cdGFjdGlvbj8gOiBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BY3Rpb247XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbSBleHRlbmRzIEthbHR1cmFQZXJtaXNzaW9uSXRlbSB7XG5cbiAgICBvYmplY3QgOiBzdHJpbmc7XG5cdHBhcmFtZXRlciA6IHN0cmluZztcblx0YWN0aW9uIDogS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtJyB9LFxuXHRcdFx0XHRvYmplY3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyYW1ldGVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1BY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbSddID0gS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtOyJdfQ==