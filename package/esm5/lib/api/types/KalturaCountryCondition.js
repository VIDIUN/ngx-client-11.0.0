/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaCountryConditionArgs() { }
/** @type {?|undefined} */
KalturaCountryConditionArgs.prototype.geoCoderType;
var KalturaCountryCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCountryCondition, _super);
    function KalturaCountryCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCountryCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCountryCondition' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    };
    return KalturaCountryCondition;
}(KalturaMatchCondition));
export { KalturaCountryCondition };
if (false) {
    /** @type {?} */
    KalturaCountryCondition.prototype.geoCoderType;
}
typesMappingStorage['KalturaCountryCondition'] = KalturaCountryCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvdW50cnlDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb3VudHJ5Q29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQU8zRixJQUFBO0lBQTZDLG1EQUFxQjtJQUk5RCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBOUJMO0VBVTZDLHFCQUFxQixFQXFCakUsQ0FBQTtBQXJCRCxtQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VvQ29kZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhR2VvQ29kZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNYXRjaENvbmRpdGlvbiwgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYU1hdGNoQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ291bnRyeUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB7XG4gICAgZ2VvQ29kZXJUeXBlPyA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb3VudHJ5Q29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uIHtcblxuICAgIGdlb0NvZGVyVHlwZSA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb3VudHJ5Q29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb3VudHJ5Q29uZGl0aW9uJyB9LFxuXHRcdFx0XHRnZW9Db2RlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VvQ29kZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFHZW9Db2RlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb3VudHJ5Q29uZGl0aW9uJ10gPSBLYWx0dXJhQ291bnRyeUNvbmRpdGlvbjsiXX0=