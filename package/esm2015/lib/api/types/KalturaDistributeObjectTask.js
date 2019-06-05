/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaDistributeObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaDistributeObjectTaskArgs.prototype.distributionProfileId;
export class KalturaDistributeObjectTask extends KalturaObjectTask {
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
            objectType: { type: 'c', default: 'KalturaDistributeObjectTask' },
            distributionProfileId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributeObjectTask.prototype.distributionProfileId;
}
typesMappingStorage['KalturaDistributeObjectTask'] = KalturaDistributeObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGVPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0ZU9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsTUFBTSxrQ0FBbUMsU0FBUSxpQkFBaUI7Ozs7SUFJOUQsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RUYXNrLCBLYWx0dXJhT2JqZWN0VGFza0FyZ3MgfSBmcm9tICcuL0thbHR1cmFPYmplY3RUYXNrJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0ZU9iamVjdFRhc2tBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RUYXNrQXJncyB7XG4gICAgZGlzdHJpYnV0aW9uUHJvZmlsZUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGVPYmplY3RUYXNrIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2sge1xuXG4gICAgZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0ZU9iamVjdFRhc2tBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGVPYmplY3RUYXNrJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGVPYmplY3RUYXNrJ10gPSBLYWx0dXJhRGlzdHJpYnV0ZU9iamVjdFRhc2s7Il19