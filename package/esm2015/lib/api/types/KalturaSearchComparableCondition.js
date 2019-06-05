/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaSearchCondition } from './KalturaSearchCondition';
/**
 * @record
 */
export function KalturaSearchComparableConditionArgs() { }
/** @type {?|undefined} */
KalturaSearchComparableConditionArgs.prototype.comparison;
export class KalturaSearchComparableCondition extends KalturaSearchCondition {
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
            objectType: { type: 'c', default: 'KalturaSearchComparableCondition' },
            comparison: { type: 'es', subTypeConstructor: KalturaSearchConditionComparison, subType: 'KalturaSearchConditionComparison' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSearchComparableCondition.prototype.comparison;
}
typesMappingStorage['KalturaSearchComparableCondition'] = KalturaSearchComparableCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTZWFyY2hDb21wYXJhYmxlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLE1BQU0sdUNBQXdDLFNBQVEsc0JBQXNCOzs7O0lBSXhFLFlBQVksSUFBNEM7UUFFcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbic7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uLCBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hDb25kaXRpb25BcmdzIHtcbiAgICBjb21wYXJpc29uPyA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFTZWFyY2hDb25kaXRpb24ge1xuXG4gICAgY29tcGFyaXNvbiA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0Y29tcGFyaXNvbiA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUNvbmRpdGlvbiddID0gS2FsdHVyYVNlYXJjaENvbXBhcmFibGVDb25kaXRpb247Il19