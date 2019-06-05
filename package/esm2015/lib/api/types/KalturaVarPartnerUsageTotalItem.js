/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem } from './KalturaVarPartnerUsageItem';
/**
 * @record
 */
export function KalturaVarPartnerUsageTotalItemArgs() { }
export class KalturaVarPartnerUsageTotalItem extends KalturaVarPartnerUsageItem {
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
            objectType: { type: 'c', default: 'KalturaVarPartnerUsageTotalItem' }
        });
        return result;
    }
}
typesMappingStorage['KalturaVarPartnerUsageTotalItem'] = KalturaVarPartnerUsageTotalItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFPMUcsTUFBTSxzQ0FBdUMsU0FBUSwwQkFBMEI7Ozs7SUFJM0UsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSwgS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW1BcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbSBleHRlbmRzIEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmFyUGFydG5lclVzYWdlVG90YWxJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VUb3RhbEl0ZW0nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VUb3RhbEl0ZW0nXSA9IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VUb3RhbEl0ZW07Il19