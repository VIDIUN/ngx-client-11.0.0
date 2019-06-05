/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSiteRestrictionType } from './KalturaSiteRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaSiteRestrictionArgs() { }
/** @type {?|undefined} */
KalturaSiteRestrictionArgs.prototype.siteRestrictionType;
/** @type {?|undefined} */
KalturaSiteRestrictionArgs.prototype.siteList;
var KalturaSiteRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSiteRestriction, _super);
    function KalturaSiteRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSiteRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSiteRestriction' },
            siteRestrictionType: { type: 'en', subTypeConstructor: KalturaSiteRestrictionType, subType: 'KalturaSiteRestrictionType' },
            siteList: { type: 's' }
        });
        return result;
    };
    return KalturaSiteRestriction;
}(KalturaBaseRestriction));
export { KalturaSiteRestriction };
if (false) {
    /** @type {?} */
    KalturaSiteRestriction.prototype.siteRestrictionType;
    /** @type {?} */
    KalturaSiteRestriction.prototype.siteList;
}
typesMappingStorage['KalturaSiteRestriction'] = KalturaSiteRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNpdGVSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNpdGVSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixJQUFBO0lBQTRDLGtEQUFzQjtJQUs5RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDOUgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQWpDTDtFQVc0QyxzQkFBc0IsRUF1QmpFLENBQUE7QUF2QkQsa0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2l0ZVJlc3RyaWN0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNpdGVSZXN0cmljdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiwgS2FsdHVyYUJhc2VSZXN0cmljdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTaXRlUmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICBzaXRlUmVzdHJpY3Rpb25UeXBlPyA6IEthbHR1cmFTaXRlUmVzdHJpY3Rpb25UeXBlO1xuXHRzaXRlTGlzdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTaXRlUmVzdHJpY3Rpb24gZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uIHtcblxuICAgIHNpdGVSZXN0cmljdGlvblR5cGUgOiBLYWx0dXJhU2l0ZVJlc3RyaWN0aW9uVHlwZTtcblx0c2l0ZUxpc3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTaXRlUmVzdHJpY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNpdGVSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0c2l0ZVJlc3RyaWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTaXRlUmVzdHJpY3Rpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTaXRlUmVzdHJpY3Rpb25UeXBlJyB9LFxuXHRcdFx0XHRzaXRlTGlzdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2l0ZVJlc3RyaWN0aW9uJ10gPSBLYWx0dXJhU2l0ZVJlc3RyaWN0aW9uOyJdfQ==