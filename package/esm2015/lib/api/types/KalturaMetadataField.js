/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaMetadataFieldArgs() { }
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.profileSystemName;
export class KalturaMetadataField extends KalturaStringField {
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
            objectType: { type: 'c', default: 'KalturaMetadataField' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataField.prototype.xPath;
    /** @type {?} */
    KalturaMetadataField.prototype.profileId;
    /** @type {?} */
    KalturaMetadataField.prototype.profileSystemName;
}
typesMappingStorage['KalturaMetadataField'] = KalturaMetadataField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhRmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZXRhZGF0YUZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7OztBQVNsRixNQUFNLDJCQUE0QixTQUFRLGtCQUFrQjs7OztJQU14RCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nRmllbGQsIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdGaWVsZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1ldGFkYXRhRmllbGRBcmdzICBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3Mge1xuICAgIHhQYXRoPyA6IHN0cmluZztcblx0cHJvZmlsZUlkPyA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWV0YWRhdGFGaWVsZCBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZCB7XG5cbiAgICB4UGF0aCA6IHN0cmluZztcblx0cHJvZmlsZUlkIDogbnVtYmVyO1xuXHRwcm9maWxlU3lzdGVtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldGFkYXRhRmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1ldGFkYXRhRmllbGQnIH0sXG5cdFx0XHRcdHhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcm9maWxlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFGaWVsZCddID0gS2FsdHVyYU1ldGFkYXRhRmllbGQ7Il19