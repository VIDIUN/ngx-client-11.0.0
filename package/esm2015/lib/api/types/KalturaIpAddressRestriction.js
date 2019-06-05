/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaIpAddressRestriction extends KalturaBaseRestriction {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIpAddressRestriction' },
            ipAddressRestrictionType: { type: 'en', subTypeConstructor: KalturaIpAddressRestrictionType, subType: 'KalturaIpAddressRestrictionType' },
            ipAddressList: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaIpAddressRestriction.prototype.ipAddressRestrictionType;
    /** @type {?} */
    KalturaIpAddressRestriction.prototype.ipAddressList;
}
typesMappingStorage['KalturaIpAddressRestriction'] = KalturaIpAddressRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixNQUFNLGtDQUFtQyxTQUFRLHNCQUFzQjs7OztJQUtuRSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRix3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzdJLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24sIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3RyaWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICBpcEFkZHJlc3NSZXN0cmljdGlvblR5cGU/IDogS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZTtcblx0aXBBZGRyZXNzTGlzdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvbiBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb24ge1xuXG4gICAgaXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlIDogS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZTtcblx0aXBBZGRyZXNzTGlzdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0aXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhSXBBZGRyZXNzUmVzdHJpY3Rpb25UeXBlJyB9LFxuXHRcdFx0XHRpcEFkZHJlc3NMaXN0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJcEFkZHJlc3NSZXN0cmljdGlvbiddID0gS2FsdHVyYUlwQWRkcmVzc1Jlc3RyaWN0aW9uOyJdfQ==