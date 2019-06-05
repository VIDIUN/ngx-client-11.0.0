/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaCrossKalturaDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.targetServiceUrl;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.targetAccountId;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.targetLoginId;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.targetLoginPassword;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.metadataXslt;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.metadataXpathsTriggerUpdate;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.distributeCaptions;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.distributeCuePoints;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.distributeRemoteFlavorAssetContent;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.distributeRemoteThumbAssetContent;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.distributeRemoteCaptionAssetContent;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapAccessControlProfileIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapConversionProfileIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapMetadataProfileIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapStorageProfileIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapFlavorParamsIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapThumbParamsIds;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionProfileArgs.prototype.mapCaptionParamsIds;
var KalturaCrossKalturaDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCrossKalturaDistributionProfile, _super);
    function KalturaCrossKalturaDistributionProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.metadataXpathsTriggerUpdate === 'undefined')
            _this.metadataXpathsTriggerUpdate = [];
        if (typeof _this.mapAccessControlProfileIds === 'undefined')
            _this.mapAccessControlProfileIds = [];
        if (typeof _this.mapConversionProfileIds === 'undefined')
            _this.mapConversionProfileIds = [];
        if (typeof _this.mapMetadataProfileIds === 'undefined')
            _this.mapMetadataProfileIds = [];
        if (typeof _this.mapStorageProfileIds === 'undefined')
            _this.mapStorageProfileIds = [];
        if (typeof _this.mapFlavorParamsIds === 'undefined')
            _this.mapFlavorParamsIds = [];
        if (typeof _this.mapThumbParamsIds === 'undefined')
            _this.mapThumbParamsIds = [];
        if (typeof _this.mapCaptionParamsIds === 'undefined')
            _this.mapCaptionParamsIds = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaCrossKalturaDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCrossKalturaDistributionProfile' },
            targetServiceUrl: { type: 's' },
            targetAccountId: { type: 'n' },
            targetLoginId: { type: 's' },
            targetLoginPassword: { type: 's' },
            metadataXslt: { type: 's' },
            metadataXpathsTriggerUpdate: { type: 'a', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' },
            distributeCaptions: { type: 'b' },
            distributeCuePoints: { type: 'b' },
            distributeRemoteFlavorAssetContent: { type: 'b' },
            distributeRemoteThumbAssetContent: { type: 'b' },
            distributeRemoteCaptionAssetContent: { type: 'b' },
            mapAccessControlProfileIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapConversionProfileIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapMetadataProfileIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapStorageProfileIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapFlavorParamsIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapThumbParamsIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mapCaptionParamsIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaCrossKalturaDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaCrossKalturaDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.targetServiceUrl;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.targetAccountId;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.targetLoginId;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.targetLoginPassword;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.metadataXslt;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.metadataXpathsTriggerUpdate;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.distributeCaptions;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.distributeCuePoints;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.distributeRemoteFlavorAssetContent;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.distributeRemoteThumbAssetContent;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.distributeRemoteCaptionAssetContent;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapAccessControlProfileIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapConversionProfileIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapMetadataProfileIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapStorageProfileIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapFlavorParamsIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapThumbParamsIds;
    /** @type {?} */
    KalturaCrossKalturaDistributionProfile.prototype.mapCaptionParamsIds;
}
typesMappingStorage['KalturaCrossKalturaDistributionProfile'] = KalturaCrossKalturaDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0I5SSxJQUFBO0lBQTRELGtFQUFzQztJQXFCOUYsZ0RBQVksSUFBa0Q7UUFBOUQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FTZDtRQVJHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLDJCQUEyQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQywyQkFBMkIsR0FBRyxFQUFFLENBQUM7UUFDekcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsMEJBQTBCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNqRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyx1QkFBdUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQzNGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLHFCQUFxQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDdkYsRUFBRSxDQUFDLENBQUMsT0FB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LENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nVmFsdWUgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgdGFyZ2V0U2VydmljZVVybD8gOiBzdHJpbmc7XG5cdHRhcmdldEFjY291bnRJZD8gOiBudW1iZXI7XG5cdHRhcmdldExvZ2luSWQ/IDogc3RyaW5nO1xuXHR0YXJnZXRMb2dpblBhc3N3b3JkPyA6IHN0cmluZztcblx0bWV0YWRhdGFYc2x0PyA6IHN0cmluZztcblx0bWV0YWRhdGFYcGF0aHNUcmlnZ2VyVXBkYXRlPyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xuXHRkaXN0cmlidXRlQ2FwdGlvbnM/IDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0ZUN1ZVBvaW50cz8gOiBib29sZWFuO1xuXHRkaXN0cmlidXRlUmVtb3RlRmxhdm9yQXNzZXRDb250ZW50PyA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVSZW1vdGVUaHVtYkFzc2V0Q29udGVudD8gOiBib29sZWFuO1xuXHRkaXN0cmlidXRlUmVtb3RlQ2FwdGlvbkFzc2V0Q29udGVudD8gOiBib29sZWFuO1xuXHRtYXBBY2Nlc3NDb250cm9sUHJvZmlsZUlkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwQ29udmVyc2lvblByb2ZpbGVJZHM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcE1ldGFkYXRhUHJvZmlsZUlkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwU3RvcmFnZVByb2ZpbGVJZHM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcEZsYXZvclBhcmFtc0lkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwVGh1bWJQYXJhbXNJZHM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcENhcHRpb25QYXJhbXNJZHM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgdGFyZ2V0U2VydmljZVVybCA6IHN0cmluZztcblx0dGFyZ2V0QWNjb3VudElkIDogbnVtYmVyO1xuXHR0YXJnZXRMb2dpbklkIDogc3RyaW5nO1xuXHR0YXJnZXRMb2dpblBhc3N3b3JkIDogc3RyaW5nO1xuXHRtZXRhZGF0YVhzbHQgOiBzdHJpbmc7XG5cdG1ldGFkYXRhWHBhdGhzVHJpZ2dlclVwZGF0ZSA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xuXHRkaXN0cmlidXRlQ2FwdGlvbnMgOiBib29sZWFuO1xuXHRkaXN0cmlidXRlQ3VlUG9pbnRzIDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0ZVJlbW90ZUZsYXZvckFzc2V0Q29udGVudCA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVSZW1vdGVUaHVtYkFzc2V0Q29udGVudCA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVSZW1vdGVDYXB0aW9uQXNzZXRDb250ZW50IDogYm9vbGVhbjtcblx0bWFwQWNjZXNzQ29udHJvbFByb2ZpbGVJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwQ29udmVyc2lvblByb2ZpbGVJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwTWV0YWRhdGFQcm9maWxlSWRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcFN0b3JhZ2VQcm9maWxlSWRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcEZsYXZvclBhcmFtc0lkcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBUaHVtYlBhcmFtc0lkcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBDYXB0aW9uUGFyYW1zSWRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWV0YWRhdGFYcGF0aHNUcmlnZ2VyVXBkYXRlID09PSAndW5kZWZpbmVkJykgdGhpcy5tZXRhZGF0YVhwYXRoc1RyaWdnZXJVcGRhdGUgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwQWNjZXNzQ29udHJvbFByb2ZpbGVJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcEFjY2Vzc0NvbnRyb2xQcm9maWxlSWRzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcENvbnZlcnNpb25Qcm9maWxlSWRzID09PSAndW5kZWZpbmVkJykgdGhpcy5tYXBDb252ZXJzaW9uUHJvZmlsZUlkcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXBNZXRhZGF0YVByb2ZpbGVJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcE1ldGFkYXRhUHJvZmlsZUlkcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXBTdG9yYWdlUHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWFwU3RvcmFnZVByb2ZpbGVJZHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwRmxhdm9yUGFyYW1zSWRzID09PSAndW5kZWZpbmVkJykgdGhpcy5tYXBGbGF2b3JQYXJhbXNJZHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwVGh1bWJQYXJhbXNJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcFRodW1iUGFyYW1zSWRzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcENhcHRpb25QYXJhbXNJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcENhcHRpb25QYXJhbXNJZHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0dGFyZ2V0U2VydmljZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YXJnZXRBY2NvdW50SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGFyZ2V0TG9naW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YXJnZXRMb2dpblBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhWHNsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVhwYXRoc1RyaWdnZXJVcGRhdGUgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmdWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nVmFsdWUnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVDYXB0aW9ucyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlQ3VlUG9pbnRzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVSZW1vdGVGbGF2b3JBc3NldENvbnRlbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZVJlbW90ZVRodW1iQXNzZXRDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVSZW1vdGVDYXB0aW9uQXNzZXRDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdG1hcEFjY2Vzc0NvbnRyb2xQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBDb252ZXJzaW9uUHJvZmlsZUlkcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0bWFwTWV0YWRhdGFQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBTdG9yYWdlUHJvZmlsZUlkcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0bWFwRmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBUaHVtYlBhcmFtc0lkcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0bWFwQ2FwdGlvblBhcmFtc0lkcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==