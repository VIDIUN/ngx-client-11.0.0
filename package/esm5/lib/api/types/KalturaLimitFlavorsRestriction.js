/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLimitFlavorsRestrictionType } from './KalturaLimitFlavorsRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaLimitFlavorsRestrictionArgs() { }
/** @type {?|undefined} */
KalturaLimitFlavorsRestrictionArgs.prototype.limitFlavorsRestrictionType;
/** @type {?|undefined} */
KalturaLimitFlavorsRestrictionArgs.prototype.flavorParamsIds;
var KalturaLimitFlavorsRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLimitFlavorsRestriction, _super);
    function KalturaLimitFlavorsRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLimitFlavorsRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLimitFlavorsRestriction' },
            limitFlavorsRestrictionType: { type: 'en', subTypeConstructor: KalturaLimitFlavorsRestrictionType, subType: 'KalturaLimitFlavorsRestrictionType' },
            flavorParamsIds: { type: 's' }
        });
        return result;
    };
    return KalturaLimitFlavorsRestriction;
}(KalturaBaseRestriction));
export { KalturaLimitFlavorsRestriction };
if (false) {
    /** @type {?} */
    KalturaLimitFlavorsRestriction.prototype.limitFlavorsRestrictionType;
    /** @type {?} */
    KalturaLimitFlavorsRestriction.prototype.flavorParamsIds;
}
typesMappingStorage['KalturaLimitFlavorsRestriction'] = KalturaLimitFlavorsRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7QUFROUYsSUFBQTtJQUFvRCwwREFBc0I7SUFLdEUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3RKLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0FqQ0w7RUFXb0Qsc0JBQXNCLEVBdUJ6RSxDQUFBO0FBdkJELDBDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VSZXN0cmljdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB7XG4gICAgbGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlPyA6IEthbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGU7XG5cdGZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvbiBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb24ge1xuXG4gICAgbGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlIDogS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZTtcblx0Zmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uJyB9LFxuXHRcdFx0XHRsaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGUnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb24nXSA9IEthbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvbjsiXX0=