/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaCompareConditionArgs() { }
/** @type {?|undefined} */
KalturaCompareConditionArgs.prototype.value;
/** @type {?|undefined} */
KalturaCompareConditionArgs.prototype.comparison;
export class KalturaCompareCondition extends KalturaCondition {
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
            objectType: { type: 'c', default: 'KalturaCompareCondition' },
            value: { type: 'o', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' },
            comparison: { type: 'es', subTypeConstructor: KalturaSearchConditionComparison, subType: 'KalturaSearchConditionComparison' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCompareCondition.prototype.value;
    /** @type {?} */
    KalturaCompareCondition.prototype.comparison;
}
typesMappingStorage['KalturaCompareCondition'] = KalturaCompareCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbXBhcmVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb21wYXJlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7QUFRNUUsTUFBTSw4QkFBK0IsU0FBUSxnQkFBZ0I7Ozs7SUFLekQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDakcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7U0FDeEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdlclZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdlclZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbic7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbXBhcmVDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFDb25kaXRpb25BcmdzIHtcbiAgICB2YWx1ZT8gOiBLYWx0dXJhSW50ZWdlclZhbHVlO1xuXHRjb21wYXJpc29uPyA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFDb25kaXRpb24ge1xuXG4gICAgdmFsdWUgOiBLYWx0dXJhSW50ZWdlclZhbHVlO1xuXHRjb21wYXJpc29uIDogS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb21wYXJlQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb21wYXJlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHR2YWx1ZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUludGVnZXJWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhSW50ZWdlclZhbHVlJyB9LFxuXHRcdFx0XHRjb21wYXJpc29uIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb24sIHN1YlR5cGUgOiAnS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb21wYXJlQ29uZGl0aW9uJ10gPSBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbjsiXX0=