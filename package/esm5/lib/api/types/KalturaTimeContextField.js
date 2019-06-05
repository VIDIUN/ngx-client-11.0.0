/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerField } from './KalturaIntegerField';
/**
 * @record
 */
export function KalturaTimeContextFieldArgs() { }
/** @type {?|undefined} */
KalturaTimeContextFieldArgs.prototype.offset;
var KalturaTimeContextField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTimeContextField, _super);
    function KalturaTimeContextField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTimeContextField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTimeContextField' },
            offset: { type: 'n' }
        });
        return result;
    };
    return KalturaTimeContextField;
}(KalturaIntegerField));
export { KalturaTimeContextField };
if (false) {
    /** @type {?} */
    KalturaTimeContextField.prototype.offset;
}
typesMappingStorage['KalturaTimeContextField'] = KalturaTimeContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRpbWVDb250ZXh0RmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUaW1lQ29udGV4dEZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQU9yRixJQUFBO0lBQTZDLG1EQUFtQjtJQUk1RCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQTdCTDtFQVM2QyxtQkFBbUIsRUFxQi9ELENBQUE7QUFyQkQsbUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJGaWVsZCwgS2FsdHVyYUludGVnZXJGaWVsZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ2VyRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUaW1lQ29udGV4dEZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhSW50ZWdlckZpZWxkQXJncyB7XG4gICAgb2Zmc2V0PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRpbWVDb250ZXh0RmllbGQgZXh0ZW5kcyBLYWx0dXJhSW50ZWdlckZpZWxkIHtcblxuICAgIG9mZnNldCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRpbWVDb250ZXh0RmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRpbWVDb250ZXh0RmllbGQnIH0sXG5cdFx0XHRcdG9mZnNldCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGltZUNvbnRleHRGaWVsZCddID0gS2FsdHVyYVRpbWVDb250ZXh0RmllbGQ7Il19