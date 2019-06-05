/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFilter } from './KalturaDropFolderFilter';
/**
 * @record
 */
export function KalturaWebexDropFolderBaseFilterArgs() { }
export class KalturaWebexDropFolderBaseFilter extends KalturaDropFolderFilter {
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
            objectType: { type: 'c', default: 'KalturaWebexDropFolderBaseFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaWebexDropFolderBaseFilter'] = KalturaWebexDropFolderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXZWJleERyb3BGb2xkZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7OztBQU9qRyxNQUFNLHVDQUF3QyxTQUFRLHVCQUF1Qjs7OztJQUl6RSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsdGVyLCBLYWx0dXJhRHJvcEZvbGRlckZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdlYmV4RHJvcEZvbGRlckJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmV4RHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXZWJleERyb3BGb2xkZXJCYXNlRmlsdGVyJ10gPSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQmFzZUZpbHRlcjsiXX0=