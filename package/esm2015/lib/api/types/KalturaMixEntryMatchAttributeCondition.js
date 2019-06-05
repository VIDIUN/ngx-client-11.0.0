/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMixEntryMatchAttribute } from './KalturaMixEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition } from './KalturaSearchMatchAttributeCondition';
/**
 * @record
 */
export function KalturaMixEntryMatchAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaMixEntryMatchAttributeConditionArgs.prototype.attribute;
export class KalturaMixEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
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
            objectType: { type: 'c', default: 'KalturaMixEntryMatchAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaMixEntryMatchAttribute, subType: 'KalturaMixEntryMatchAttribute' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMixEntryMatchAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaMixEntryMatchAttributeCondition'] = KalturaMixEntryMatchAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1peEVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNaXhFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9DQUFvQyxFQUE0QyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7O0FBT3hJLE1BQU0sNkNBQThDLFNBQVEsb0NBQW9DOzs7O0lBSTVGLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQ2pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNaXhFbnRyeU1hdGNoQXR0cmlidXRlIH0gZnJvbSAnLi9LYWx0dXJhTWl4RW50cnlNYXRjaEF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24sIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1peEVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hNYXRjaEF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3Mge1xuICAgIGF0dHJpYnV0ZT8gOiBLYWx0dXJhTWl4RW50cnlNYXRjaEF0dHJpYnV0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1peEVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoTWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24ge1xuXG4gICAgYXR0cmlidXRlIDogS2FsdHVyYU1peEVudHJ5TWF0Y2hBdHRyaWJ1dGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNaXhFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNaXhFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRhdHRyaWJ1dGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWl4RW50cnlNYXRjaEF0dHJpYnV0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWl4RW50cnlNYXRjaEF0dHJpYnV0ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1peEVudHJ5TWF0Y2hBdHRyaWJ1dGVDb25kaXRpb24nXSA9IEthbHR1cmFNaXhFbnRyeU1hdGNoQXR0cmlidXRlQ29uZGl0aW9uOyJdfQ==