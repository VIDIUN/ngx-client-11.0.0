/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaDistributionErrorType } from './KalturaDistributionErrorType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionValidationErrorArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorArgs.prototype.action;
/** @type {?|undefined} */
KalturaDistributionValidationErrorArgs.prototype.errorType;
/** @type {?|undefined} */
KalturaDistributionValidationErrorArgs.prototype.description;
export class KalturaDistributionValidationError extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaDistributionValidationError' },
            action: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' },
            errorType: { type: 'en', subTypeConstructor: KalturaDistributionErrorType, subType: 'KalturaDistributionErrorType' },
            description: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionValidationError.prototype.action;
    /** @type {?} */
    KalturaDistributionValidationError.prototype.errorType;
    /** @type {?} */
    KalturaDistributionValidationError.prototype.description;
}
typesMappingStorage['KalturaDistributionValidationError'] = KalturaDistributionValidationError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsTUFBTSx5Q0FBMEMsU0FBUSxpQkFBaUI7Ozs7SUFNckUsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDL0csU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDeEgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uRXJyb3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uRXJyb3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGFjdGlvbj8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXHRlcnJvclR5cGU/IDogS2FsdHVyYURpc3RyaWJ1dGlvbkVycm9yVHlwZTtcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgYWN0aW9uIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbjtcblx0ZXJyb3JUeXBlIDogS2FsdHVyYURpc3RyaWJ1dGlvbkVycm9yVHlwZTtcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJyB9LFxuXHRcdFx0XHRlcnJvclR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uRXJyb3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25FcnJvclR5cGUnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3InXSA9IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3I7Il19