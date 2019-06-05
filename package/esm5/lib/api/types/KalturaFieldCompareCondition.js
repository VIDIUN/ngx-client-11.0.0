/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerField } from './KalturaIntegerField';
import { KalturaCompareCondition } from './KalturaCompareCondition';
/**
 * @record
 */
export function KalturaFieldCompareConditionArgs() { }
/** @type {?|undefined} */
KalturaFieldCompareConditionArgs.prototype.field;
var KalturaFieldCompareCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFieldCompareCondition, _super);
    function KalturaFieldCompareCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFieldCompareCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFieldCompareCondition' },
            field: { type: 'o', subTypeConstructor: KalturaIntegerField, subType: 'KalturaIntegerField' }
        });
        return result;
    };
    return KalturaFieldCompareCondition;
}(KalturaCompareCondition));
export { KalturaFieldCompareCondition };
if (false) {
    /** @type {?} */
    KalturaFieldCompareCondition.prototype.field;
}
typesMappingStorage['KalturaFieldCompareCondition'] = KalturaFieldCompareCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFPakcsSUFBQTtJQUFrRCx3REFBdUI7SUFJckUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTlCTDtFQVVrRCx1QkFBdUIsRUFxQnhFLENBQUE7QUFyQkQsd0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJGaWVsZCB9IGZyb20gJy4vS2FsdHVyYUludGVnZXJGaWVsZCc7XG5pbXBvcnQgeyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbiwgS2FsdHVyYUNvbXBhcmVDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29tcGFyZUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbXBhcmVDb25kaXRpb25BcmdzIHtcbiAgICBmaWVsZD8gOiBLYWx0dXJhSW50ZWdlckZpZWxkO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmllbGRDb21wYXJlQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYUNvbXBhcmVDb25kaXRpb24ge1xuXG4gICAgZmllbGQgOiBLYWx0dXJhSW50ZWdlckZpZWxkO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmllbGRDb21wYXJlQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGaWVsZENvbXBhcmVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGZpZWxkIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdlckZpZWxkLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ2VyRmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGaWVsZENvbXBhcmVDb25kaXRpb24nXSA9IEthbHR1cmFGaWVsZENvbXBhcmVDb25kaXRpb247Il19