/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBooleanField } from './KalturaBooleanField';
/**
 * @record
 */
export function KalturaEvalBooleanFieldArgs() { }
/** @type {?|undefined} */
KalturaEvalBooleanFieldArgs.prototype.code;
var KalturaEvalBooleanField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEvalBooleanField, _super);
    function KalturaEvalBooleanField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEvalBooleanField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEvalBooleanField' },
            code: { type: 's' }
        });
        return result;
    };
    return KalturaEvalBooleanField;
}(KalturaBooleanField));
export { KalturaEvalBooleanField };
if (false) {
    /** @type {?} */
    KalturaEvalBooleanField.prototype.code;
}
typesMappingStorage['KalturaEvalBooleanField'] = KalturaEvalBooleanField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2YWxCb29sZWFuRmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmFsQm9vbGVhbkZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQU9yRixJQUFBO0lBQTZDLG1EQUFtQjtJQUk1RCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQTdCTDtFQVM2QyxtQkFBbUIsRUFxQi9ELENBQUE7QUFyQkQsbUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJvb2xlYW5GaWVsZCwgS2FsdHVyYUJvb2xlYW5GaWVsZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCb29sZWFuRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmFsQm9vbGVhbkZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhQm9vbGVhbkZpZWxkQXJncyB7XG4gICAgY29kZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmFsQm9vbGVhbkZpZWxkIGV4dGVuZHMgS2FsdHVyYUJvb2xlYW5GaWVsZCB7XG5cbiAgICBjb2RlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZhbEJvb2xlYW5GaWVsZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXZhbEJvb2xlYW5GaWVsZCcgfSxcblx0XHRcdFx0Y29kZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZhbEJvb2xlYW5GaWVsZCddID0gS2FsdHVyYUV2YWxCb29sZWFuRmllbGQ7Il19