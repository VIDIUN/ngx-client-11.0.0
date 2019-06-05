/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaMatchConditionType } from './KalturaMatchConditionType';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaMatchConditionArgs() { }
/** @type {?|undefined} */
KalturaMatchConditionArgs.prototype.values;
/** @type {?|undefined} */
KalturaMatchConditionArgs.prototype.matchType;
export class KalturaMatchCondition extends KalturaCondition {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.values === 'undefined')
            this.values = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMatchCondition' },
            values: { type: 'a', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' },
            matchType: { type: 'es', subTypeConstructor: KalturaMatchConditionType, subType: 'KalturaMatchConditionType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMatchCondition.prototype.values;
    /** @type {?} */
    KalturaMatchCondition.prototype.matchType;
}
typesMappingStorage['KalturaMatchCondition'] = KalturaMatchCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1hdGNoQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWF0Y2hDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztBQVE1RSxNQUFNLDRCQUE2QixTQUFRLGdCQUFnQjs7OztJQUt2RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUM1RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDaEcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDekcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nVmFsdWUgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWF0Y2hDb25kaXRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWF0Y2hDb25kaXRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFDb25kaXRpb24sIEthbHR1cmFDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFDb25kaXRpb25BcmdzIHtcbiAgICB2YWx1ZXM/IDogS2FsdHVyYVN0cmluZ1ZhbHVlW107XG5cdG1hdGNoVHlwZT8gOiBLYWx0dXJhTWF0Y2hDb25kaXRpb25UeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWF0Y2hDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIHZhbHVlcyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xuXHRtYXRjaFR5cGUgOiBLYWx0dXJhTWF0Y2hDb25kaXRpb25UeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnZhbHVlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNYXRjaENvbmRpdGlvbicgfSxcblx0XHRcdFx0dmFsdWVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ1ZhbHVlJyB9LFxuXHRcdFx0XHRtYXRjaFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWF0Y2hDb25kaXRpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNYXRjaENvbmRpdGlvblR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNYXRjaENvbmRpdGlvbiddID0gS2FsdHVyYU1hdGNoQ29uZGl0aW9uOyJdfQ==