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
export function KalturaDistributionValidationErrorMissingAssetArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorMissingAssetArgs.prototype.data;
var KalturaDistributionValidationErrorMissingAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorMissingAsset, _super);
    function KalturaDistributionValidationErrorMissingAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorMissingAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorMissingAsset' },
            data: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorMissingAsset;
}(KalturaDistributionValidationError));
export { KalturaDistributionValidationErrorMissingAsset };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorMissingAsset.prototype.data;
}
typesMappingStorage['KalturaDistributionValidationErrorMissingAsset'] = KalturaDistributionValidationErrorMissingAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFPbEksSUFBQTtJQUFvRSwwRUFBa0M7SUFJbEcsd0RBQVksSUFBMEQ7ZUFFbEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNuRyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5REE3Qkw7RUFTb0Usa0NBQWtDLEVBcUJyRyxDQUFBO0FBckJELDBEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxHQUFHLDhDQUE4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3IsIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0Fzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyB7XG4gICAgZGF0YT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nQXNzZXQgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yIHtcblxuICAgIGRhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nQXNzZXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldCcgfSxcblx0XHRcdFx0ZGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0Fzc2V0J10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0Fzc2V0OyJdfQ==