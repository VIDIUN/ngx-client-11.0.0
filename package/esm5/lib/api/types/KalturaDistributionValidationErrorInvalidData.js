/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaDistributionValidationErrorInvalidData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorInvalidData, _super);
    function KalturaDistributionValidationErrorInvalidData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorInvalidData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorInvalidData' },
            fieldName: { type: 's' },
            validationErrorType: { type: 'en', subTypeConstructor: KalturaDistributionValidationErrorType, subType: 'KalturaDistributionValidationErrorType' },
            validationErrorParam: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorInvalidData;
}(KalturaDistributionValidationError));
export { KalturaDistributionValidationErrorInvalidData };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.fieldName;
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.validationErrorType;
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidData.prototype.validationErrorParam;
}
typesMappingStorage['KalturaDistributionValidationErrorInvalidData'] = KalturaDistributionValidationErrorInvalidData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7OztBQVNsSSxJQUFBO0lBQW1FLHlFQUFrQztJQU1qRyx1REFBWSxJQUF5RDtlQUVqRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1lBQ2xHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUN0SixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REFwQ0w7RUFZbUUsa0NBQWtDLEVBeUJwRyxDQUFBO0FBekJELHlEQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciwgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBzdHJpbmc7XG5cdHZhbGlkYXRpb25FcnJvclR5cGU/IDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvclR5cGU7XG5cdHZhbGlkYXRpb25FcnJvclBhcmFtPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciB7XG5cbiAgICBmaWVsZE5hbWUgOiBzdHJpbmc7XG5cdHZhbGlkYXRpb25FcnJvclR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yVHlwZTtcblx0dmFsaWRhdGlvbkVycm9yUGFyYW0gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGEnIH0sXG5cdFx0XHRcdGZpZWxkTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YWxpZGF0aW9uRXJyb3JUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvclR5cGUnIH0sXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvclBhcmFtIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkRGF0YSddID0gS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhOyJdfQ==