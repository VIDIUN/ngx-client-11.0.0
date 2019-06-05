/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryFieldName } from './KalturaESearchEntryFieldName';
import { KalturaESearchAbstractEntryItem } from './KalturaESearchAbstractEntryItem';
/**
 * @record
 */
export function KalturaESearchEntryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryItemArgs.prototype.fieldName;
var KalturaESearchEntryItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryItem, _super);
    function KalturaESearchEntryItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchEntryFieldName, subType: 'KalturaESearchEntryFieldName' }
        });
        return result;
    };
    return KalturaESearchEntryItem;
}(KalturaESearchAbstractEntryItem));
export { KalturaESearchEntryItem };
if (false) {
    /** @type {?} */
    KalturaESearchEntryItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchEntryItem'] = KalturaESearchEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoRW50cnlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBdUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7OztBQU96SCxJQUFBO0lBQTZDLG1EQUErQjtJQUl4RSxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQy9HLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBOUJMO0VBVTZDLCtCQUErQixFQXFCM0UsQ0FBQTtBQXJCRCxtQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5RmllbGROYW1lJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEVudHJ5SXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbUFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBLYWx0dXJhRVNlYXJjaEVudHJ5RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEVudHJ5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hFbnRyeUZpZWxkTmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hFbnRyeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeUl0ZW0nIH0sXG5cdFx0XHRcdGZpZWxkTmFtZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoRW50cnlGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeUZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hFbnRyeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoRW50cnlJdGVtOyJdfQ==