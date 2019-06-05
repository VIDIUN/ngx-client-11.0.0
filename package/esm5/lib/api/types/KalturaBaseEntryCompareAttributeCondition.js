/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryCompareAttribute } from './KalturaBaseEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition } from './KalturaSearchComparableAttributeCondition';
/**
 * @record
 */
export function KalturaBaseEntryCompareAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryCompareAttributeConditionArgs.prototype.attribute;
var KalturaBaseEntryCompareAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseEntryCompareAttributeCondition, _super);
    function KalturaBaseEntryCompareAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseEntryCompareAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseEntryCompareAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaBaseEntryCompareAttribute, subType: 'KalturaBaseEntryCompareAttribute' }
        });
        return result;
    };
    return KalturaBaseEntryCompareAttributeCondition;
}(KalturaSearchComparableAttributeCondition));
export { KalturaBaseEntryCompareAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaBaseEntryCompareAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaBaseEntryCompareAttributeCondition'] = KalturaBaseEntryCompareAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXNlRW50cnlDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5Q0FBeUMsRUFBaUQsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7OztBQU92SixJQUFBO0lBQStELHFFQUF5QztJQUlwRyxtREFBWSxJQUFxRDtlQUU3RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQzlGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3ZILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0RBOUJMO0VBVStELHlDQUF5QyxFQXFCdkcsQ0FBQTtBQXJCRCxxREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24sIEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXNlRW50cnlDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3Mge1xuICAgIGF0dHJpYnV0ZT8gOiBLYWx0dXJhQmFzZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUF0dHJpYnV0ZUNvbmRpdGlvbiB7XG5cbiAgICBhdHRyaWJ1dGUgOiBLYWx0dXJhQmFzZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGF0dHJpYnV0ZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnlDb21wYXJlQXR0cmlidXRlLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlDb21wYXJlQXR0cmlidXRlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmFzZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbiddID0gS2FsdHVyYUJhc2VFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb247Il19