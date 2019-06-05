/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCountryRestrictionType } from './KalturaCountryRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaCountryRestrictionArgs() { }
/** @type {?|undefined} */
KalturaCountryRestrictionArgs.prototype.countryRestrictionType;
/** @type {?|undefined} */
KalturaCountryRestrictionArgs.prototype.countryList;
var KalturaCountryRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCountryRestriction, _super);
    function KalturaCountryRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCountryRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCountryRestriction' },
            countryRestrictionType: { type: 'en', subTypeConstructor: KalturaCountryRestrictionType, subType: 'KalturaCountryRestrictionType' },
            countryList: { type: 's' }
        });
        return result;
    };
    return KalturaCountryRestriction;
}(KalturaBaseRestriction));
export { KalturaCountryRestriction };
if (false) {
    /** @type {?} */
    KalturaCountryRestriction.prototype.countryRestrictionType;
    /** @type {?} */
    KalturaCountryRestriction.prototype.countryList;
}
typesMappingStorage['KalturaCountryRestriction'] = KalturaCountryRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixJQUFBO0lBQStDLHFEQUFzQjtJQUtqRSxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkksV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQWpDTDtFQVcrQyxzQkFBc0IsRUF1QnBFLENBQUE7QUF2QkQscUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiwgS2FsdHVyYUJhc2VSZXN0cmljdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICBjb3VudHJ5UmVzdHJpY3Rpb25UeXBlPyA6IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25UeXBlO1xuXHRjb3VudHJ5TGlzdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb24gZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uIHtcblxuICAgIGNvdW50cnlSZXN0cmljdGlvblR5cGUgOiBLYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uVHlwZTtcblx0Y291bnRyeUxpc3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0Y291bnRyeVJlc3RyaWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25UeXBlJyB9LFxuXHRcdFx0XHRjb3VudHJ5TGlzdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uJ10gPSBLYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uOyJdfQ==