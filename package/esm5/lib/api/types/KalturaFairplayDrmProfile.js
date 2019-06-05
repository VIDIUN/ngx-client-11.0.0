/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
/**
 * @record
 */
export function KalturaFairplayDrmProfileArgs() { }
/** @type {?|undefined} */
KalturaFairplayDrmProfileArgs.prototype.publicCertificate;
var KalturaFairplayDrmProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFairplayDrmProfile, _super);
    function KalturaFairplayDrmProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFairplayDrmProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFairplayDrmProfile' },
            publicCertificate: { type: 's' }
        });
        return result;
    };
    return KalturaFairplayDrmProfile;
}(KalturaDrmProfile));
export { KalturaFairplayDrmProfile };
if (false) {
    /** @type {?} */
    KalturaFairplayDrmProfile.prototype.publicCertificate;
}
typesMappingStorage['KalturaFairplayDrmProfile'] = KalturaFairplayDrmProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsSUFBQTtJQUErQyxxREFBaUI7SUFJNUQsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0E3Qkw7RUFTK0MsaUJBQWlCLEVBcUIvRCxDQUFBO0FBckJELHFDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm9maWxlLCBLYWx0dXJhRHJtUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmFpcnBsYXlEcm1Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJtUHJvZmlsZUFyZ3Mge1xuICAgIHB1YmxpY0NlcnRpZmljYXRlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZSBleHRlbmRzIEthbHR1cmFEcm1Qcm9maWxlIHtcblxuICAgIHB1YmxpY0NlcnRpZmljYXRlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmFpcnBsYXlEcm1Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGYWlycGxheURybVByb2ZpbGUnIH0sXG5cdFx0XHRcdHB1YmxpY0NlcnRpZmljYXRlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWlycGxheURybVByb2ZpbGUnXSA9IEthbHR1cmFGYWlycGxheURybVByb2ZpbGU7Il19