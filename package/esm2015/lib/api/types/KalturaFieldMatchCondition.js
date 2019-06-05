/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaFieldMatchConditionArgs() { }
/** @type {?|undefined} */
KalturaFieldMatchConditionArgs.prototype.field;
export class KalturaFieldMatchCondition extends KalturaMatchCondition {
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
            objectType: { type: 'c', default: 'KalturaFieldMatchCondition' },
            field: { type: 'o', subTypeConstructor: KalturaStringField, subType: 'KalturaStringField' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFieldMatchCondition.prototype.field;
}
typesMappingStorage['KalturaFieldMatchCondition'] = KalturaFieldMatchCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWVsZE1hdGNoQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLE1BQU0saUNBQWtDLFNBQVEscUJBQXFCOzs7O0lBSWpFLFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmdGaWVsZCB9IGZyb20gJy4vS2FsdHVyYVN0cmluZ0ZpZWxkJztcbmltcG9ydCB7IEthbHR1cmFNYXRjaENvbmRpdGlvbiwgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYU1hdGNoQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmllbGRNYXRjaENvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB7XG4gICAgZmllbGQ/IDogS2FsdHVyYVN0cmluZ0ZpZWxkO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmllbGRNYXRjaENvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbiB7XG5cbiAgICBmaWVsZCA6IEthbHR1cmFTdHJpbmdGaWVsZDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb24nIH0sXG5cdFx0XHRcdGZpZWxkIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nRmllbGQsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ0ZpZWxkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmllbGRNYXRjaENvbmRpdGlvbiddID0gS2FsdHVyYUZpZWxkTWF0Y2hDb25kaXRpb247Il19