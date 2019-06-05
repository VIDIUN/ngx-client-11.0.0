/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryUserFieldName } from './KalturaESearchCategoryUserFieldName';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaESearchAbstractCategoryItem } from './KalturaESearchAbstractCategoryItem';
/**
 * @record
 */
export function KalturaESearchCategoryUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.permissionLevel;
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.permissionName;
var KalturaESearchCategoryUserItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryUserItem, _super);
    function KalturaESearchCategoryUserItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryUserItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryUserItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryUserFieldName, subType: 'KalturaESearchCategoryUserFieldName' },
            permissionLevel: { type: 'en', subTypeConstructor: KalturaCategoryUserPermissionLevel, subType: 'KalturaCategoryUserPermissionLevel' },
            permissionName: { type: 's' }
        });
        return result;
    };
    return KalturaESearchCategoryUserItem;
}(KalturaESearchAbstractCategoryItem));
export { KalturaESearchCategoryUserItem };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.fieldName;
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.permissionLevel;
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.permissionName;
}
typesMappingStorage['KalturaESearchCategoryUserItem'] = KalturaESearchCategoryUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7OztBQVNsSSxJQUFBO0lBQW9ELDBEQUFrQztJQU1sRix3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3RJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzFJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0FyQ0w7RUFhb0Qsa0NBQWtDLEVBeUJyRixDQUFBO0FBekJELDBDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckZpZWxkTmFtZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJGaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtLCBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtQXJncyB7XG4gICAgZmllbGROYW1lPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VyRmllbGROYW1lO1xuXHRwZXJtaXNzaW9uTGV2ZWw/IDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbDtcblx0cGVybWlzc2lvbk5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtIHtcblxuICAgIGZpZWxkTmFtZSA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VyRmllbGROYW1lO1xuXHRwZXJtaXNzaW9uTGV2ZWwgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsO1xuXHRwZXJtaXNzaW9uTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VySXRlbScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJGaWVsZE5hbWUnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25MZXZlbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCcgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW07Il19