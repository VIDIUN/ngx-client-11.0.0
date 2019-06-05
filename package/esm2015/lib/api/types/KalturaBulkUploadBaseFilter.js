/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBulkUploadBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnLessThanOrEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.bulkUploadObjectTypeEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.bulkUploadObjectTypeIn;
export class KalturaBulkUploadBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadBaseFilter' },
            uploadedOnGreaterThanOrEqual: { type: 'd' },
            uploadedOnLessThanOrEqual: { type: 'd' },
            uploadedOnEqual: { type: 'd' },
            statusIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            bulkUploadObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' },
            bulkUploadObjectTypeIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnGreaterThanOrEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnLessThanOrEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.bulkUploadObjectTypeEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.bulkUploadObjectTypeIn;
}
typesMappingStorage['KalturaBulkUploadBaseFilter'] = KalturaBulkUploadBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYW5FLE1BQU0sa0NBQW1DLFNBQVEsYUFBYTs7OztJQVUxRCxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRiw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1Ryx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3RJLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYlN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgdXBsb2FkZWRPbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGxvYWRlZE9uTGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwbG9hZGVkT25FcXVhbD8gOiBEYXRlO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cztcblx0YnVsa1VwbG9hZE9iamVjdFR5cGVFcXVhbD8gOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGU7XG5cdGJ1bGtVcGxvYWRPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIHVwbG9hZGVkT25HcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGxvYWRlZE9uTGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBsb2FkZWRPbkVxdWFsIDogRGF0ZTtcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRidWxrVXBsb2FkT2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlO1xuXHRidWxrVXBsb2FkT2JqZWN0VHlwZUluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHR1cGxvYWRlZE9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwbG9hZGVkT25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBsb2FkZWRPbkVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYlN0YXR1cycgfSxcblx0XHRcdFx0YnVsa1VwbG9hZE9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRPYmplY3RUeXBlSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQnVsa1VwbG9hZEJhc2VGaWx0ZXI7Il19