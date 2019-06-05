/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaAssetPropertiesCompareConditionArgs() { }
/** @type {?|undefined} */
KalturaAssetPropertiesCompareConditionArgs.prototype.properties;
var KalturaAssetPropertiesCompareCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetPropertiesCompareCondition, _super);
    function KalturaAssetPropertiesCompareCondition(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.properties === 'undefined')
            _this.properties = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAssetPropertiesCompareCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetPropertiesCompareCondition' },
            properties: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaAssetPropertiesCompareCondition;
}(KalturaCondition));
export { KalturaAssetPropertiesCompareCondition };
if (false) {
    /** @type {?} */
    KalturaAssetPropertiesCompareCondition.prototype.properties;
}
typesMappingStorage['KalturaAssetPropertiesCompareCondition'] = KalturaAssetPropertiesCompareCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UHJvcGVydGllc0NvbXBhcmVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldFByb3BlcnRpZXNDb21wYXJlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPNUUsSUFBQTtJQUE0RCxrRUFBZ0I7SUFJeEUsZ0RBQVksSUFBa0Q7UUFBOUQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7S0FDcEU7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDckYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREEvQkw7RUFVNEQsZ0JBQWdCLEVBc0IzRSxDQUFBO0FBdEJELGtEQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFDb25kaXRpb24sIEthbHR1cmFDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXNzZXRQcm9wZXJ0aWVzQ29tcGFyZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbkFyZ3Mge1xuICAgIHByb3BlcnRpZXM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldFByb3BlcnRpZXNDb21wYXJlQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbiB7XG5cbiAgICBwcm9wZXJ0aWVzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFByb3BlcnRpZXNDb21wYXJlQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldFByb3BlcnRpZXNDb21wYXJlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRwcm9wZXJ0aWVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRQcm9wZXJ0aWVzQ29tcGFyZUNvbmRpdGlvbiddID0gS2FsdHVyYUFzc2V0UHJvcGVydGllc0NvbXBhcmVDb25kaXRpb247Il19