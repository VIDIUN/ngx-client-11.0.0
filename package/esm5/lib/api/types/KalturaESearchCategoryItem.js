/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryFieldName } from './KalturaESearchCategoryFieldName';
import { KalturaESearchAbstractCategoryItem } from './KalturaESearchAbstractCategoryItem';
/**
 * @record
 */
export function KalturaESearchCategoryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryItemArgs.prototype.fieldName;
var KalturaESearchCategoryItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryItem, _super);
    function KalturaESearchCategoryItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryFieldName, subType: 'KalturaESearchCategoryFieldName' }
        });
        return result;
    };
    return KalturaESearchCategoryItem;
}(KalturaESearchAbstractCategoryItem));
export { KalturaESearchCategoryItem };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchCategoryItem'] = KalturaESearchCategoryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7OztBQU9sSSxJQUFBO0lBQWdELHNEQUFrQztJQUk5RSxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBOUJMO0VBVWdELGtDQUFrQyxFQXFCakYsQ0FBQTtBQXJCRCxzQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5RmllbGROYW1lJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5SXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbUFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUZpZWxkTmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW0nIH0sXG5cdFx0XHRcdGZpZWxkTmFtZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlJdGVtOyJdfQ==