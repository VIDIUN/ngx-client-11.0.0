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
export function KalturaDistributionValidationErrorMissingMetadataArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorMissingMetadataArgs.prototype.fieldName;
var KalturaDistributionValidationErrorMissingMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorMissingMetadata, _super);
    function KalturaDistributionValidationErrorMissingMetadata(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorMissingMetadata.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorMissingMetadata' },
            fieldName: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorMissingMetadata;
}(KalturaDistributionValidationError));
export { KalturaDistributionValidationErrorMissingMetadata };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorMissingMetadata.prototype.fieldName;
}
typesMappingStorage['KalturaDistributionValidationErrorMissingMetadata'] = KalturaDistributionValidationErrorMissingMetadata;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFPbEksSUFBQTtJQUF1RSw2RUFBa0M7SUFJckcsMkRBQVksSUFBNkQ7ZUFFckUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtREFBbUQsRUFBRTtZQUN0RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NERBN0JMO0VBU3VFLGtDQUFrQyxFQXFCeEcsQ0FBQTtBQXJCRCw2REFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbURBQW1ELENBQUMsR0FBRyxpREFBaUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yLCBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nTWV0YWRhdGEgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yIHtcblxuICAgIGZpZWxkTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ01ldGFkYXRhJyB9LFxuXHRcdFx0XHRmaWVsZE5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YSddID0gS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdNZXRhZGF0YTsiXX0=