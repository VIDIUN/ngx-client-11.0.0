/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayableEntryMatchAttribute } from './KalturaPlayableEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition } from './KalturaSearchMatchAttributeCondition';
/**
 * @record
 */
export function KalturaPlayableEntryMatchAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryMatchAttributeConditionArgs.prototype.attribute;
var KalturaPlayableEntryMatchAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayableEntryMatchAttributeCondition, _super);
    function KalturaPlayableEntryMatchAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayableEntryMatchAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayableEntryMatchAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaPlayableEntryMatchAttribute, subType: 'KalturaPlayableEntryMatchAttribute' }
        });
        return result;
    };
    return KalturaPlayableEntryMatchAttributeCondition;
}(KalturaSearchMatchAttributeCondition));
export { KalturaPlayableEntryMatchAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaPlayableEntryMatchAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaPlayableEntryMatchAttributeCondition'] = KalturaPlayableEntryMatchAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQTRDLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7QUFPeEksSUFBQTtJQUFpRSx1RUFBb0M7SUFJakcscURBQVksSUFBdUQ7ZUFFL0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUNoRyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUMzSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NEQTlCTDtFQVVpRSxvQ0FBb0MsRUFxQnBHLENBQUE7QUFyQkQsdURBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24sIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uQXJncyB7XG4gICAgYXR0cmlidXRlPyA6IEthbHR1cmFQbGF5YWJsZUVudHJ5TWF0Y2hBdHRyaWJ1dGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5YWJsZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24ge1xuXG4gICAgYXR0cmlidXRlIDogS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXlhYmxlRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWFibGVFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRhdHRyaWJ1dGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWFibGVFbnRyeU1hdGNoQXR0cmlidXRlLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YWJsZUVudHJ5TWF0Y2hBdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5YWJsZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24nXSA9IEthbHR1cmFQbGF5YWJsZUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb247Il19