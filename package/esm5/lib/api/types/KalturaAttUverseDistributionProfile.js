/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaAttUverseDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.ftpUsername;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.ftpPassword;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.ftpPath;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.flavorAssetFilenameXslt;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.thumbnailAssetFilenameXslt;
/** @type {?|undefined} */
KalturaAttUverseDistributionProfileArgs.prototype.assetFilenameXslt;
var KalturaAttUverseDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttUverseDistributionProfile, _super);
    function KalturaAttUverseDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAttUverseDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttUverseDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            ftpHost: { type: 's' },
            ftpUsername: { type: 's' },
            ftpPassword: { type: 's' },
            ftpPath: { type: 's' },
            channelTitle: { type: 's' },
            flavorAssetFilenameXslt: { type: 's' },
            thumbnailAssetFilenameXslt: { type: 's' },
            assetFilenameXslt: { type: 's' }
        });
        return result;
    };
    return KalturaAttUverseDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaAttUverseDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.ftpUsername;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.ftpPassword;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.ftpPath;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.flavorAssetFilenameXslt;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.thumbnailAssetFilenameXslt;
    /** @type {?} */
    KalturaAttUverseDistributionProfile.prototype.assetFilenameXslt;
}
typesMappingStorage['KalturaAttUverseDistributionProfile'] = KalturaAttUverseDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzlJLElBQUE7SUFBeUQsK0RBQXNDO0lBWTNGLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQXBETDtFQWdCeUQsc0NBQXNDLEVBcUM5RixDQUFBO0FBckNELCtDQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgZnRwSG9zdD8gOiBzdHJpbmc7XG5cdGZ0cFVzZXJuYW1lPyA6IHN0cmluZztcblx0ZnRwUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRmdHBQYXRoPyA6IHN0cmluZztcblx0Y2hhbm5lbFRpdGxlPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRGaWxlbmFtZVhzbHQ/IDogc3RyaW5nO1xuXHR0aHVtYm5haWxBc3NldEZpbGVuYW1lWHNsdD8gOiBzdHJpbmc7XG5cdGFzc2V0RmlsZW5hbWVYc2x0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICByZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRmdHBIb3N0IDogc3RyaW5nO1xuXHRmdHBVc2VybmFtZSA6IHN0cmluZztcblx0ZnRwUGFzc3dvcmQgOiBzdHJpbmc7XG5cdGZ0cFBhdGggOiBzdHJpbmc7XG5cdGNoYW5uZWxUaXRsZSA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRGaWxlbmFtZVhzbHQgOiBzdHJpbmc7XG5cdHRodW1ibmFpbEFzc2V0RmlsZW5hbWVYc2x0IDogc3RyaW5nO1xuXHRhc3NldEZpbGVuYW1lWHNsdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZlZWRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbFRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1ibmFpbEFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=