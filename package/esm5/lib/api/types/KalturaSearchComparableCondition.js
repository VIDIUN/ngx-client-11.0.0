/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaSearchCondition } from './KalturaSearchCondition';
/**
 * @record
 */
export function KalturaSearchComparableConditionArgs() { }
/** @type {?|undefined} */
KalturaSearchComparableConditionArgs.prototype.comparison;
var KalturaSearchComparableCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchComparableCondition, _super);
    function KalturaSearchComparableCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearchComparableCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchComparableCondition' },
            comparison: { type: 'es', subTypeConstructor: KalturaSearchConditionComparison, subType: 'KalturaSearchConditionComparison' }
        });
        return result;
    };
    return KalturaSearchComparableCondition;
}(KalturaSearchCondition));
export { KalturaSearchComparableCondition };
if (false) {
    /** @type {?} */
    KalturaSearchComparableCondition.prototype.comparison;
}
typesMappingStorage['KalturaSearchComparableCondition'] = KalturaSearchComparableCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTZWFyY2hDb21wYXJhYmxlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU85RixJQUFBO0lBQXNELDREQUFzQjtJQUl4RSwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBOUJMO0VBVXNELHNCQUFzQixFQXFCM0UsQ0FBQTtBQXJCRCw0Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbiB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb24nO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaENvbmRpdGlvbiwgS2FsdHVyYVNlYXJjaENvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQXJncyB7XG4gICAgY29tcGFyaXNvbj8gOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uIHtcblxuICAgIGNvbXBhcmlzb24gOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGNvbXBhcmlzb24gOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbiwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb24nXSA9IEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQ29uZGl0aW9uOyJdfQ==