/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaAttributeCondition } from './KalturaAttributeCondition';
/**
 * @record
 */
export function KalturaSearchComparableAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaSearchComparableAttributeConditionArgs.prototype.comparison;
var KalturaSearchComparableAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchComparableAttributeCondition, _super);
    function KalturaSearchComparableAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearchComparableAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchComparableAttributeCondition' },
            comparison: { type: 'es', subTypeConstructor: KalturaSearchConditionComparison, subType: 'KalturaSearchConditionComparison' }
        });
        return result;
    };
    return KalturaSearchComparableAttributeCondition;
}(KalturaAttributeCondition));
export { KalturaSearchComparableAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaSearchComparableAttributeCondition.prototype.comparison;
}
typesMappingStorage['KalturaSearchComparableAttributeCondition'] = KalturaSearchComparableAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQU92RyxJQUFBO0lBQStELHFFQUF5QjtJQUlwRixtREFBWSxJQUFxRDtlQUU3RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQzlGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0RBOUJMO0VBVStELHlCQUF5QixFQXFCdkYsQ0FBQTtBQXJCRCxxREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbiB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb24nO1xuaW1wb3J0IHsgS2FsdHVyYUF0dHJpYnV0ZUNvbmRpdGlvbiwgS2FsdHVyYUF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFBdHRyaWJ1dGVDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXR0cmlidXRlQ29uZGl0aW9uQXJncyB7XG4gICAgY29tcGFyaXNvbj8gOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQXR0cmlidXRlQ29uZGl0aW9uIHtcblxuICAgIGNvbXBhcmlzb24gOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGNvbXBhcmlzb24gOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbiwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24nXSA9IEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uOyJdfQ==