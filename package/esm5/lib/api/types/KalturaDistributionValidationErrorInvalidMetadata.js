/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationErrorInvalidData } from './KalturaDistributionValidationErrorInvalidData';
/**
 * @record
 */
export function KalturaDistributionValidationErrorInvalidMetadataArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorInvalidMetadataArgs.prototype.metadataProfileId;
var KalturaDistributionValidationErrorInvalidMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorInvalidMetadata, _super);
    function KalturaDistributionValidationErrorInvalidMetadata(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorInvalidMetadata.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorInvalidMetadata' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorInvalidMetadata;
}(KalturaDistributionValidationErrorInvalidData));
export { KalturaDistributionValidationErrorInvalidMetadata };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorInvalidMetadata.prototype.metadataProfileId;
}
typesMappingStorage['KalturaDistributionValidationErrorInvalidMetadata'] = KalturaDistributionValidationErrorInvalidMetadata;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWRNZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWRNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkNBQTZDLEVBQXFELE1BQU0saURBQWlELENBQUM7Ozs7Ozs7QUFPbkssSUFBQTtJQUF1RSw2RUFBNkM7SUFJaEgsMkRBQVksSUFBNkQ7ZUFFckUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtREFBbUQsRUFBRTtZQUN0RyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0REE3Qkw7RUFTdUUsNkNBQTZDLEVBcUJuSCxDQUFBO0FBckJELDZEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtREFBbUQsQ0FBQyxHQUFHLGlEQUFpRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkRGF0YSwgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWREYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZE1ldGFkYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGFBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkTWV0YWRhdGEgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ySW52YWxpZERhdGEge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JJbnZhbGlkTWV0YWRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWRNZXRhZGF0YScgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWRNZXRhZGF0YSddID0gS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckludmFsaWRNZXRhZGF0YTsiXX0=