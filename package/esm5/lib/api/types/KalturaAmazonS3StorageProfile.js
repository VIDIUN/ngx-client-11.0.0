/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageProfile } from './KalturaStorageProfile';
/**
 * @record
 */
export function KalturaAmazonS3StorageProfileArgs() { }
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.filesPermissionInS3;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.s3Region;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.sseType;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.sseKmsKeyId;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.signatureType;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.endPoint;
var KalturaAmazonS3StorageProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAmazonS3StorageProfile, _super);
    function KalturaAmazonS3StorageProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAmazonS3StorageProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAmazonS3StorageProfile' },
            filesPermissionInS3: { type: 'es', subTypeConstructor: KalturaAmazonS3StorageProfileFilesPermissionLevel, subType: 'KalturaAmazonS3StorageProfileFilesPermissionLevel' },
            s3Region: { type: 's' },
            sseType: { type: 's' },
            sseKmsKeyId: { type: 's' },
            signatureType: { type: 's' },
            endPoint: { type: 's' }
        });
        return result;
    };
    return KalturaAmazonS3StorageProfile;
}(KalturaStorageProfile));
export { KalturaAmazonS3StorageProfile };
if (false) {
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.filesPermissionInS3;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.s3Region;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.sseType;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.sseKmsKeyId;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.signatureType;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.endPoint;
}
typesMappingStorage['KalturaAmazonS3StorageProfile'] = KalturaAmazonS3StorageProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hILE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZM0YsSUFBQTtJQUFtRCx5REFBcUI7SUFTcEUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaURBQWlELEVBQUUsT0FBTyxFQUFHLG1EQUFtRCxFQUFFO1lBQzVLLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTdDTDtFQWVtRCxxQkFBcUIsRUErQnZFLENBQUE7QUEvQkQseUNBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICcuL0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWwnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VQcm9maWxlLCBLYWx0dXJhU3RvcmFnZVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RvcmFnZVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVBcmdzIHtcbiAgICBmaWxlc1Blcm1pc3Npb25JblMzPyA6IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWw7XG5cdHMzUmVnaW9uPyA6IHN0cmluZztcblx0c3NlVHlwZT8gOiBzdHJpbmc7XG5cdHNzZUttc0tleUlkPyA6IHN0cmluZztcblx0c2lnbmF0dXJlVHlwZT8gOiBzdHJpbmc7XG5cdGVuZFBvaW50PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZVByb2ZpbGUge1xuXG4gICAgZmlsZXNQZXJtaXNzaW9uSW5TMyA6IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWw7XG5cdHMzUmVnaW9uIDogc3RyaW5nO1xuXHRzc2VUeXBlIDogc3RyaW5nO1xuXHRzc2VLbXNLZXlJZCA6IHN0cmluZztcblx0c2lnbmF0dXJlVHlwZSA6IHN0cmluZztcblx0ZW5kUG9pbnQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlJyB9LFxuXHRcdFx0XHRmaWxlc1Blcm1pc3Npb25JblMzIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbCwgc3ViVHlwZSA6ICdLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUZpbGVzUGVybWlzc2lvbkxldmVsJyB9LFxuXHRcdFx0XHRzM1JlZ2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2VUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzZUttc0tleUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNpZ25hdHVyZVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kUG9pbnQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGUnXSA9IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlOyJdfQ==