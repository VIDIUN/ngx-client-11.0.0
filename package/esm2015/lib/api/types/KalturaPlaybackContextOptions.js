/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
/**
 * @record
 */
export function KalturaPlaybackContextOptionsArgs() { }
export class KalturaPlaybackContextOptions extends KalturaEntryContextDataParams {
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
            objectType: { type: 'c', default: 'KalturaPlaybackContextOptions' }
        });
        return result;
    }
}
typesMappingStorage['KalturaPlaybackContextOptions'] = KalturaPlaybackContextOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFxQyxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQU9uSCxNQUFNLG9DQUFxQyxTQUFRLDZCQUE2Qjs7OztJQUk1RSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zLCBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9uc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXNBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcyB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zJ10gPSBLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9uczsiXX0=