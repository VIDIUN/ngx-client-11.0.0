/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
/**
 * @record
 */
export function KalturaDistributionValidationErrorMissingFlavorArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorMissingFlavorArgs.prototype.flavorParamsId;
var KalturaDistributionValidationErrorMissingFlavor = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorMissingFlavor, _super);
    function KalturaDistributionValidationErrorMissingFlavor(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorMissingFlavor.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorMissingFlavor' },
            flavorParamsId: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorMissingFlavor;
}(KalturaDistributionValidationError));
export { KalturaDistributionValidationErrorMissingFlavor };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorMissingFlavor.prototype.flavorParamsId;
}
typesMappingStorage['KalturaDistributionValidationErrorMissingFlavor'] = KalturaDistributionValidationErrorMissingFlavor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdGbGF2b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nRmxhdm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7OztBQU9sSSxJQUFBO0lBQXFFLDJFQUFrQztJQUluRyx5REFBWSxJQUEyRDtlQUVuRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ3BHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswREE3Qkw7RUFTcUUsa0NBQWtDLEVBcUJ0RyxDQUFBO0FBckJELDJEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpREFBaUQsQ0FBQyxHQUFHLCtDQUErQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3IsIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0ZsYXZvckFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3Mge1xuICAgIGZsYXZvclBhcmFtc0lkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdGbGF2b3IgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yIHtcblxuICAgIGZsYXZvclBhcmFtc0lkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0ZsYXZvckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0ZsYXZvcicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdGbGF2b3InXSA9IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nRmxhdm9yOyJdfQ==