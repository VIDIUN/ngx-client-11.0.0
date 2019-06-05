/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConversionAttributeArgs() { }
/** @type {?|undefined} */
KalturaConversionAttributeArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
KalturaConversionAttributeArgs.prototype.name;
/** @type {?|undefined} */
KalturaConversionAttributeArgs.prototype.value;
var KalturaConversionAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConversionAttribute, _super);
    function KalturaConversionAttribute(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConversionAttribute.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConversionAttribute' },
            flavorParamsId: { type: 'n' },
            name: { type: 's' },
            value: { type: 's' }
        });
        return result;
    };
    return KalturaConversionAttribute;
}(KalturaObjectBase));
export { KalturaConversionAttribute };
if (false) {
    /** @type {?} */
    KalturaConversionAttribute.prototype.flavorParamsId;
    /** @type {?} */
    KalturaConversionAttribute.prototype.name;
    /** @type {?} */
    KalturaConversionAttribute.prototype.value;
}
typesMappingStorage['KalturaConversionAttribute'] = KalturaConversionAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUFnRCxzREFBaUI7SUFNN0Qsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBbkNMO0VBV2dELGlCQUFpQixFQXlCaEUsQ0FBQTtBQXpCRCxzQ0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHZhbHVlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBmbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0dmFsdWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZhbHVlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlJ10gPSBLYWx0dXJhQ29udmVyc2lvbkF0dHJpYnV0ZTsiXX0=