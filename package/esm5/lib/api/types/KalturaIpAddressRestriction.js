/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIpAddressRestrictionType } from './KalturaIpAddressRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaIpAddressRestrictionArgs() { }
/** @type {?|undefined} */
KalturaIpAddressRestrictionArgs.prototype.ipAddressRestrictionType;
/** @type {?|undefined} */
KalturaIpAddressRestrictionArgs.prototype.ipAddressList;
var KalturaIpAddressRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIpAddressRestriction, _super);
    function KalturaIpAddressRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIpAddressRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIpAddressRestriction' },
            ipAddressRestrictionType: { type: 'en', subTypeConstructor: KalturaIpAddressRestrictionType, subType: 'KalturaIpAddressRestrictionType' },
            ipAddressList: { type: 's' }
        });
        return result;
    };
    return KalturaIpAddressRestriction;
}(KalturaBaseRestriction));
export { KalturaIpAddressRestriction };
if (false) {
    /** @type {?} */
    KalturaIpAddressRestriction.prototype.ipAddressRestrictionType;
    /** @type {?} */
    KalturaIpAddressRestriction.prototype.ipAddressList;
}
typesMappingStorage['KalturaIpAddressRestriction'] = KalturaIpAddressRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7QUFROUYsSUFBQTtJQUFpRCx1REFBc0I7SUFLbkUscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRix3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzdJLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0FqQ0w7RUFXaUQsc0JBQXNCLEVBdUJ0RSxDQUFBO0FBdkJELHVDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VSZXN0cmljdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB7XG4gICAgaXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlPyA6IEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvblR5cGU7XG5cdGlwQWRkcmVzc0xpc3Q/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb24gZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uIHtcblxuICAgIGlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZSA6IEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvblR5cGU7XG5cdGlwQWRkcmVzc0xpc3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdGlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZScgfSxcblx0XHRcdFx0aXBBZGRyZXNzTGlzdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb24nXSA9IEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvbjsiXX0=