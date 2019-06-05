/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryMatchAttribute } from './KalturaMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition } from './KalturaSearchMatchAttributeCondition';
/**
 * @record
 */
export function KalturaMediaEntryMatchAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryMatchAttributeConditionArgs.prototype.attribute;
var KalturaMediaEntryMatchAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaEntryMatchAttributeCondition, _super);
    function KalturaMediaEntryMatchAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMediaEntryMatchAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaEntryMatchAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaMediaEntryMatchAttribute, subType: 'KalturaMediaEntryMatchAttribute' }
        });
        return result;
    };
    return KalturaMediaEntryMatchAttributeCondition;
}(KalturaSearchMatchAttributeCondition));
export { KalturaMediaEntryMatchAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaMediaEntryMatchAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaMediaEntryMatchAttributeCondition'] = KalturaMediaEntryMatchAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQTRDLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7QUFPeEksSUFBQTtJQUE4RCxvRUFBb0M7SUFJOUYsa0RBQVksSUFBb0Q7ZUFFNUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtTQUNySCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQTlCTDtFQVU4RCxvQ0FBb0MsRUFxQmpHLENBQUE7QUFyQkQsb0RBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24sIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaE1hdGNoQXR0cmlidXRlQ29uZGl0aW9uQXJncyB7XG4gICAgYXR0cmlidXRlPyA6IEthbHR1cmFNZWRpYUVudHJ5TWF0Y2hBdHRyaWJ1dGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZWRpYUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24ge1xuXG4gICAgYXR0cmlidXRlIDogS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1lZGlhRW50cnlNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWVkaWFFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRhdHRyaWJ1dGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeU1hdGNoQXR0cmlidXRlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5TWF0Y2hBdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24nXSA9IEthbHR1cmFNZWRpYUVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb247Il19