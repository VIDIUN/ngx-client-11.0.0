/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaMatchMetadataConditionArgs() { }
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.profileSystemName;
export class KalturaMatchMetadataCondition extends KalturaMatchCondition {
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
            objectType: { type: 'c', default: 'KalturaMatchMetadataCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.xPath;
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.profileId;
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.profileSystemName;
}
typesMappingStorage['KalturaMatchMetadataCondition'] = KalturaMatchMetadataCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQVMzRixNQUFNLG9DQUFxQyxTQUFRLHFCQUFxQjs7OztJQU1wRSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWF0Y2hDb25kaXRpb24sIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFNYXRjaENvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3Mge1xuICAgIHhQYXRoPyA6IHN0cmluZztcblx0cHJvZmlsZUlkPyA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWF0Y2hNZXRhZGF0YUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbiB7XG5cbiAgICB4UGF0aCA6IHN0cmluZztcblx0cHJvZmlsZUlkIDogbnVtYmVyO1xuXHRwcm9maWxlU3lzdGVtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb24nIH0sXG5cdFx0XHRcdHhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcm9maWxlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWF0Y2hNZXRhZGF0YUNvbmRpdGlvbiddID0gS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb247Il19