/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaFieldMatchConditionArgs() { }
/** @type {?|undefined} */
KalturaFieldMatchConditionArgs.prototype.field;
var KalturaFieldMatchCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFieldMatchCondition, _super);
    function KalturaFieldMatchCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFieldMatchCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFieldMatchCondition' },
            field: { type: 'o', subTypeConstructor: KalturaStringField, subType: 'KalturaStringField' }
        });
        return result;
    };
    return KalturaFieldMatchCondition;
}(KalturaMatchCondition));
export { KalturaFieldMatchCondition };
if (false) {
    /** @type {?} */
    KalturaFieldMatchCondition.prototype.field;
}
typesMappingStorage['KalturaFieldMatchCondition'] = KalturaFieldMatchCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWVsZE1hdGNoQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQU8zRixJQUFBO0lBQWdELHNEQUFxQjtJQUlqRSxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBOUJMO0VBVWdELHFCQUFxQixFQXFCcEUsQ0FBQTtBQXJCRCxzQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nRmllbGQgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdGaWVsZCc7XG5pbXBvcnQgeyBLYWx0dXJhTWF0Y2hDb25kaXRpb24sIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFNYXRjaENvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3Mge1xuICAgIGZpZWxkPyA6IEthbHR1cmFTdHJpbmdGaWVsZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhTWF0Y2hDb25kaXRpb24ge1xuXG4gICAgZmllbGQgOiBLYWx0dXJhU3RyaW5nRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWVsZE1hdGNoQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGaWVsZE1hdGNoQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRmaWVsZCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ0ZpZWxkLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdGaWVsZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb24nXSA9IEthbHR1cmFGaWVsZE1hdGNoQ29uZGl0aW9uOyJdfQ==