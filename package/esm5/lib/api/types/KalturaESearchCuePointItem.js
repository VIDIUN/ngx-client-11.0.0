/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCuePointFieldName } from './KalturaESearchCuePointFieldName';
import { KalturaESearchEntryAbstractNestedItem } from './KalturaESearchEntryAbstractNestedItem';
/**
 * @record
 */
export function KalturaESearchCuePointItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCuePointItemArgs.prototype.fieldName;
var KalturaESearchCuePointItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCuePointItem, _super);
    function KalturaESearchCuePointItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCuePointItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCuePointItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCuePointFieldName, subType: 'KalturaESearchCuePointFieldName' }
        });
        return result;
    };
    return KalturaESearchCuePointItem;
}(KalturaESearchEntryAbstractNestedItem));
export { KalturaESearchCuePointItem };
if (false) {
    /** @type {?} */
    KalturaESearchCuePointItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchCuePointItem'] = KalturaESearchCuePointItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoQ3VlUG9pbnRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBNkMsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7OztBQU8zSSxJQUFBO0lBQWdELHNEQUFxQztJQUlqRixvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBOUJMO0VBVWdELHFDQUFxQyxFQXFCcEYsQ0FBQTtBQXJCRCxzQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEN1ZVBvaW50RmllbGROYW1lJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0sIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbUFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEN1ZVBvaW50SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hDdWVQb2ludEZpZWxkTmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW0nIH0sXG5cdFx0XHRcdGZpZWxkTmFtZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoQ3VlUG9pbnRGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hDdWVQb2ludEZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDdWVQb2ludEl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQ3VlUG9pbnRJdGVtOyJdfQ==