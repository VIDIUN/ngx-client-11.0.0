/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayableEntryCompareAttribute } from './KalturaPlayableEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition } from './KalturaSearchComparableAttributeCondition';
/**
 * @record
 */
export function KalturaPlayableEntryCompareAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryCompareAttributeConditionArgs.prototype.attribute;
export class KalturaPlayableEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
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
            objectType: { type: 'c', default: 'KalturaPlayableEntryCompareAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaPlayableEntryCompareAttribute, subType: 'KalturaPlayableEntryCompareAttribute' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayableEntryCompareAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaPlayableEntryCompareAttributeCondition'] = KalturaPlayableEntryCompareAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnlDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7QUFPdkosTUFBTSxvREFBcUQsU0FBUSx5Q0FBeUM7Ozs7SUFJeEcsWUFBWSxJQUF5RDtRQUVqRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7U0FDL0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlhYmxlRW50cnlDb21wYXJlQXR0cmlidXRlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24sIEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5YWJsZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb25BcmdzIHtcbiAgICBhdHRyaWJ1dGU/IDogS2FsdHVyYVBsYXlhYmxlRW50cnlDb21wYXJlQXR0cmlidXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUF0dHJpYnV0ZUNvbmRpdGlvbiB7XG5cbiAgICBhdHRyaWJ1dGUgOiBLYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5YWJsZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb24nIH0sXG5cdFx0XHRcdGF0dHJpYnV0ZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YWJsZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWFibGVFbnRyeUNvbXBhcmVBdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5YWJsZUVudHJ5Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbiddID0gS2FsdHVyYVBsYXlhYmxlRW50cnlDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uOyJdfQ==