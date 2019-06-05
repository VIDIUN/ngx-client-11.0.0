/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryBaseItem } from './KalturaESearchCategoryBaseItem';
/**
 * @record
 */
export function KalturaESearchCategoryQueryArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryQueryArgs.prototype.eSearchQuery;
var KalturaESearchCategoryQuery = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryQuery, _super);
    function KalturaESearchCategoryQuery(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryQuery.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryQuery' },
            eSearchQuery: { type: 's' }
        });
        return result;
    };
    return KalturaESearchCategoryQuery;
}(KalturaESearchCategoryBaseItem));
export { KalturaESearchCategoryQuery };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryQuery.prototype.eSearchQuery;
}
typesMappingStorage['KalturaESearchCategoryQuery'] = KalturaESearchCategoryQuery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaENhdGVnb3J5UXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7O0FBT3RILElBQUE7SUFBaUQsdURBQThCO0lBSTNFLHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTdCTDtFQVNpRCw4QkFBOEIsRUFxQjlFLENBQUE7QUFyQkQsdUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtLCBLYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlRdWVyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtQXJncyB7XG4gICAgZVNlYXJjaFF1ZXJ5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVF1ZXJ5IGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtIHtcblxuICAgIGVTZWFyY2hRdWVyeSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVF1ZXJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlRdWVyeScgfSxcblx0XHRcdFx0ZVNlYXJjaFF1ZXJ5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlRdWVyeSddID0gS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVF1ZXJ5OyJdfQ==