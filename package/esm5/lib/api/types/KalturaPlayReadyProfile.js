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
export function KalturaPlayReadyProfileArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyProfileArgs.prototype.keySeed;
var KalturaPlayReadyProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyProfile, _super);
    function KalturaPlayReadyProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyProfile' },
            keySeed: { type: 's' }
        });
        return result;
    };
    return KalturaPlayReadyProfile;
}(KalturaDrmProfile));
export { KalturaPlayReadyProfile };
if (false) {
    /** @type {?} */
    KalturaPlayReadyProfile.prototype.keySeed;
}
typesMappingStorage['KalturaPlayReadyProfile'] = KalturaPlayReadyProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeVByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5UmVhZHlQcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxJQUFBO0lBQTZDLG1EQUFpQjtJQUkxRCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQTdCTDtFQVM2QyxpQkFBaUIsRUFxQjdELENBQUE7QUFyQkQsbUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb2ZpbGUsIEthbHR1cmFEcm1Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURybVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJtUHJvZmlsZUFyZ3Mge1xuICAgIGtleVNlZWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGxheVJlYWR5UHJvZmlsZSBleHRlbmRzIEthbHR1cmFEcm1Qcm9maWxlIHtcblxuICAgIGtleVNlZWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5UmVhZHlQcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5UmVhZHlQcm9maWxlJyB9LFxuXHRcdFx0XHRrZXlTZWVkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5UmVhZHlQcm9maWxlJ10gPSBLYWx0dXJhUGxheVJlYWR5UHJvZmlsZTsiXX0=