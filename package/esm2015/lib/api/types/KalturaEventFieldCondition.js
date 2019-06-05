/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBooleanField } from './KalturaBooleanField';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaEventFieldConditionArgs() { }
/** @type {?|undefined} */
KalturaEventFieldConditionArgs.prototype.field;
export class KalturaEventFieldCondition extends KalturaCondition {
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
            objectType: { type: 'c', default: 'KalturaEventFieldCondition' },
            field: { type: 'o', subTypeConstructor: KalturaBooleanField, subType: 'KalturaBooleanField' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventFieldCondition.prototype.field;
}
typesMappingStorage['KalturaEventFieldCondition'] = KalturaEventFieldCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50RmllbGRDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudEZpZWxkQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBTzVFLE1BQU0saUNBQWtDLFNBQVEsZ0JBQWdCOzs7O0lBSTVELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQ3hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCb29sZWFuRmllbGQgfSBmcm9tICcuL0thbHR1cmFCb29sZWFuRmllbGQnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmRpdGlvbiwgS2FsdHVyYUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudEZpZWxkQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uQXJncyB7XG4gICAgZmllbGQ/IDogS2FsdHVyYUJvb2xlYW5GaWVsZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV2ZW50RmllbGRDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIGZpZWxkIDogS2FsdHVyYUJvb2xlYW5GaWVsZDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50RmllbGRDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50RmllbGRDb25kaXRpb24nIH0sXG5cdFx0XHRcdGZpZWxkIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQm9vbGVhbkZpZWxkLCBzdWJUeXBlIDogJ0thbHR1cmFCb29sZWFuRmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudEZpZWxkQ29uZGl0aW9uJ10gPSBLYWx0dXJhRXZlbnRGaWVsZENvbmRpdGlvbjsiXX0=