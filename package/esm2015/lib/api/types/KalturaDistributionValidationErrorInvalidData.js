/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationErrorType } from './KalturaDistributionValidationErrorType';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
/**
 * @record
 */
export function KalturaDistributionValidationErrorInvalidDataArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorInvalidDataArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaDistributionValidationErrorInvalidDataArgs.prototype.validationErrorType;
/** @type {?|undefined} */
KalturaDistributionValidationErrorInvalidDataArgs.prototype.validationErrorParam;
export class KalturaDistributionValidationErrorInvalidData extends KalturaDistributionValidationError {
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
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorInvalidData' },
            fieldName: { type: 's' },
            validationErrorType: { type: 'en', subTypeConstructor: KalturaDistributionValidationErrorType, subType: 'KalturaDistributionValidationErrorType' },
            validationErrorParam: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.fieldName;
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.validationErrorType;
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.validationErrorParam;
}
typesMappingStorage['KalturaDistributionValidationErrorInvalidData'] = KalturaDistributionValidationErrorInvalidData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7O0FBU2xJLE1BQU0sb0RBQXFELFNBQVEsa0NBQWtDOzs7O0lBTWpHLFlBQVksSUFBeUQ7UUFFakUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1lBQ2xHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUN0SixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yLCBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyB7XG4gICAgZmllbGROYW1lPyA6IHN0cmluZztcblx0dmFsaWRhdGlvbkVycm9yVHlwZT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZTtcblx0dmFsaWRhdGlvbkVycm9yUGFyYW0/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGEgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yIHtcblxuICAgIGZpZWxkTmFtZSA6IHN0cmluZztcblx0dmFsaWRhdGlvbkVycm9yVHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JUeXBlO1xuXHR2YWxpZGF0aW9uRXJyb3JQYXJhbSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkRGF0YScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvclR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZScgfSxcblx0XHRcdFx0dmFsaWRhdGlvbkVycm9yUGFyYW0gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhJ10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGE7Il19