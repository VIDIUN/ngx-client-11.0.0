/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaObjectIdFieldArgs() { }
var KalturaObjectIdField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaObjectIdField, _super);
    function KalturaObjectIdField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaObjectIdField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaObjectIdField' }
        });
        return result;
    };
    return KalturaObjectIdField;
}(KalturaStringField));
export { KalturaObjectIdField };
typesMappingStorage['KalturaObjectIdField'] = KalturaObjectIdField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU9iamVjdElkRmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFPYmplY3RJZEZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFPbEYsSUFBQTtJQUEwQyxnREFBa0I7SUFJeEQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUNoRSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQTVCTDtFQVMwQyxrQkFBa0IsRUFvQjNELENBQUE7QUFwQkQsZ0NBb0JDO0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nRmllbGQsIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdGaWVsZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU9iamVjdElkRmllbGRBcmdzICBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhT2JqZWN0SWRGaWVsZCBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZCB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU9iamVjdElkRmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU9iamVjdElkRmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFPYmplY3RJZEZpZWxkJ10gPSBLYWx0dXJhT2JqZWN0SWRGaWVsZDsiXX0=