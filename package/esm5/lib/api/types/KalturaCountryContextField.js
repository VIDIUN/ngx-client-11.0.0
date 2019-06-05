/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaCountryContextFieldArgs() { }
/** @type {?|undefined} */
KalturaCountryContextFieldArgs.prototype.geoCoderType;
var KalturaCountryContextField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCountryContextField, _super);
    function KalturaCountryContextField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCountryContextField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCountryContextField' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    };
    return KalturaCountryContextField;
}(KalturaStringField));
export { KalturaCountryContextField };
if (false) {
    /** @type {?} */
    KalturaCountryContextField.prototype.geoCoderType;
}
typesMappingStorage['KalturaCountryContextField'] = KalturaCountryContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQU9sRixJQUFBO0lBQWdELHNEQUFrQjtJQUk5RCxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBOUJMO0VBVWdELGtCQUFrQixFQXFCakUsQ0FBQTtBQXJCRCxzQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VvQ29kZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhR2VvQ29kZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmdGaWVsZCwgS2FsdHVyYVN0cmluZ0ZpZWxkQXJncyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZ0ZpZWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ291bnRyeUNvbnRleHRGaWVsZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0cmluZ0ZpZWxkQXJncyB7XG4gICAgZ2VvQ29kZXJUeXBlPyA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkIGV4dGVuZHMgS2FsdHVyYVN0cmluZ0ZpZWxkIHtcblxuICAgIGdlb0NvZGVyVHlwZSA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkJyB9LFxuXHRcdFx0XHRnZW9Db2RlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VvQ29kZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFHZW9Db2RlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkJ10gPSBLYWx0dXJhQ291bnRyeUNvbnRleHRGaWVsZDsiXX0=