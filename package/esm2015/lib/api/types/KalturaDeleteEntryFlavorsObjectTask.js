/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeleteFlavorsLogicType } from './KalturaDeleteFlavorsLogicType';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaDeleteEntryFlavorsObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaDeleteEntryFlavorsObjectTaskArgs.prototype.deleteType;
/** @type {?|undefined} */
KalturaDeleteEntryFlavorsObjectTaskArgs.prototype.flavorParamsIds;
export class KalturaDeleteEntryFlavorsObjectTask extends KalturaObjectTask {
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
            objectType: { type: 'c', default: 'KalturaDeleteEntryFlavorsObjectTask' },
            deleteType: { type: 'en', subTypeConstructor: KalturaDeleteFlavorsLogicType, subType: 'KalturaDeleteFlavorsLogicType' },
            flavorParamsIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeleteEntryFlavorsObjectTask.prototype.deleteType;
    /** @type {?} */
    KalturaDeleteEntryFlavorsObjectTask.prototype.flavorParamsIds;
}
typesMappingStorage['KalturaDeleteEntryFlavorsObjectTask'] = KalturaDeleteEntryFlavorsObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsTUFBTSwwQ0FBMkMsU0FBUSxpQkFBaUI7Ozs7SUFLdEUsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDM0gsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxldGVGbGF2b3JzTG9naWNUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGVsZXRlRmxhdm9yc0xvZ2ljVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2tBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RUYXNrQXJncyB7XG4gICAgZGVsZXRlVHlwZT8gOiBLYWx0dXJhRGVsZXRlRmxhdm9yc0xvZ2ljVHlwZTtcblx0Zmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2sgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFzayB7XG5cbiAgICBkZWxldGVUeXBlIDogS2FsdHVyYURlbGV0ZUZsYXZvcnNMb2dpY1R5cGU7XG5cdGZsYXZvclBhcmFtc0lkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2tBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2snIH0sXG5cdFx0XHRcdGRlbGV0ZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGVsZXRlRmxhdm9yc0xvZ2ljVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGVsZXRlRmxhdm9yc0xvZ2ljVHlwZScgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrJ10gPSBLYWx0dXJhRGVsZXRlRW50cnlGbGF2b3JzT2JqZWN0VGFzazsiXX0=