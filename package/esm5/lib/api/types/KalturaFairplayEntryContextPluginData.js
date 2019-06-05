/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginData } from './KalturaPluginData';
/**
 * @record
 */
export function KalturaFairplayEntryContextPluginDataArgs() { }
/** @type {?|undefined} */
KalturaFairplayEntryContextPluginDataArgs.prototype.publicCertificate;
var KalturaFairplayEntryContextPluginData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFairplayEntryContextPluginData, _super);
    function KalturaFairplayEntryContextPluginData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFairplayEntryContextPluginData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFairplayEntryContextPluginData' },
            publicCertificate: { type: 's' }
        });
        return result;
    };
    return KalturaFairplayEntryContextPluginData;
}(KalturaPluginData));
export { KalturaFairplayEntryContextPluginData };
if (false) {
    /** @type {?} */
    KalturaFairplayEntryContextPluginData.prototype.publicCertificate;
}
typesMappingStorage['KalturaFairplayEntryContextPluginData'] = KalturaFairplayEntryContextPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsSUFBQTtJQUEyRCxpRUFBaUI7SUFJeEUsK0NBQVksSUFBaUQ7ZUFFekQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE3Qkw7RUFTMkQsaUJBQWlCLEVBcUIzRSxDQUFBO0FBckJELGlEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbHVnaW5EYXRhLCBLYWx0dXJhUGx1Z2luRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbHVnaW5EYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmFpcnBsYXlFbnRyeUNvbnRleHRQbHVnaW5EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhUGx1Z2luRGF0YUFyZ3Mge1xuICAgIHB1YmxpY0NlcnRpZmljYXRlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YSBleHRlbmRzIEthbHR1cmFQbHVnaW5EYXRhIHtcblxuICAgIHB1YmxpY0NlcnRpZmljYXRlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmFpcnBsYXlFbnRyeUNvbnRleHRQbHVnaW5EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGYWlycGxheUVudHJ5Q29udGV4dFBsdWdpbkRhdGEnIH0sXG5cdFx0XHRcdHB1YmxpY0NlcnRpZmljYXRlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWlycGxheUVudHJ5Q29udGV4dFBsdWdpbkRhdGEnXSA9IEthbHR1cmFGYWlycGxheUVudHJ5Q29udGV4dFBsdWdpbkRhdGE7Il19