/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericSilverLightArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileGenericSilverLightArgs.prototype.pattern;
var KalturaDeliveryProfileGenericSilverLight = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileGenericSilverLight, _super);
    function KalturaDeliveryProfileGenericSilverLight(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileGenericSilverLight.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericSilverLight' },
            pattern: { type: 's' }
        });
        return result;
    };
    return KalturaDeliveryProfileGenericSilverLight;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileGenericSilverLight };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileGenericSilverLight.prototype.pattern;
}
typesMappingStorage['KalturaDeliveryProfileGenericSilverLight'] = KalturaDeliveryProfileGenericSilverLight;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFPOUYsSUFBQTtJQUE4RCxvRUFBc0I7SUFJaEYsa0RBQVksSUFBb0Q7ZUFFNUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREE3Qkw7RUFTOEQsc0JBQXNCLEVBcUJuRixDQUFBO0FBckJELG9EQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGUsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1NpbHZlckxpZ2h0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyB7XG4gICAgcGF0dGVybj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljU2lsdmVyTGlnaHQgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIHtcblxuICAgIHBhdHRlcm4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljU2lsdmVyTGlnaHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodCcgfSxcblx0XHRcdFx0cGF0dGVybiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1NpbHZlckxpZ2h0J10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1NpbHZlckxpZ2h0OyJdfQ==