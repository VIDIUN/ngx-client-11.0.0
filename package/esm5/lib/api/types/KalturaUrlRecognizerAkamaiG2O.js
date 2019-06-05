/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlRecognizer } from './KalturaUrlRecognizer';
/**
 * @record
 */
export function KalturaUrlRecognizerAkamaiG2OArgs() { }
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.headerData;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.headerSign;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.timeout;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.salt;
var KalturaUrlRecognizerAkamaiG2O = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlRecognizerAkamaiG2O, _super);
    function KalturaUrlRecognizerAkamaiG2O(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlRecognizerAkamaiG2O.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlRecognizerAkamaiG2O' },
            headerData: { type: 's' },
            headerSign: { type: 's' },
            timeout: { type: 'n' },
            salt: { type: 's' }
        });
        return result;
    };
    return KalturaUrlRecognizerAkamaiG2O;
}(KalturaUrlRecognizer));
export { KalturaUrlRecognizerAkamaiG2O };
if (false) {
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.headerData;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.headerSign;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.timeout;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.salt;
}
typesMappingStorage['KalturaUrlRecognizerAkamaiG2O'] = KalturaUrlRecognizerAkamaiG2O;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV4RixJQUFBO0lBQW1ELHlEQUFvQjtJQU9uRSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXRDTDtFQVltRCxvQkFBb0IsRUEyQnRFLENBQUE7QUEzQkQseUNBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFJlY29nbml6ZXIsIEthbHR1cmFVcmxSZWNvZ25pemVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVVybFJlY29nbml6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsUmVjb2duaXplckFyZ3Mge1xuICAgIGhlYWRlckRhdGE/IDogc3RyaW5nO1xuXHRoZWFkZXJTaWduPyA6IHN0cmluZztcblx0dGltZW91dD8gOiBudW1iZXI7XG5cdHNhbHQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXJsUmVjb2duaXplckFrYW1haUcyTyBleHRlbmRzIEthbHR1cmFVcmxSZWNvZ25pemVyIHtcblxuICAgIGhlYWRlckRhdGEgOiBzdHJpbmc7XG5cdGhlYWRlclNpZ24gOiBzdHJpbmc7XG5cdHRpbWVvdXQgOiBudW1iZXI7XG5cdHNhbHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPJyB9LFxuXHRcdFx0XHRoZWFkZXJEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhlYWRlclNpZ24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZW91dCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzYWx0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPJ10gPSBLYWx0dXJhVXJsUmVjb2duaXplckFrYW1haUcyTzsiXX0=