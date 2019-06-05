/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaCrossKalturaDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.metadataXpathsTriggerUpdate === 'undefined')
            this.metadataXpathsTriggerUpdate = [];
        if (typeof this.mapAccessControlProfileIds === 'undefined')
            this.mapAccessControlProfileIds = [];
        if (typeof this.mapConversionProfileIds === 'undefined')
            this.mapConversionProfileIds = [];
        if (typeof this.mapMetadataProfileIds === 'undefined')
            this.mapMetadataProfileIds = [];
        if (typeof this.mapStorageProfileIds === 'undefined')
            this.mapStorageProfileIds = [];
        if (typeof this.mapFlavorParamsIds === 'undefined')
            this.mapFlavorParamsIds = [];
        if (typeof this.mapThumbParamsIds === 'undefined')
            this.mapThumbParamsIds = [];
        if (typeof this.mapCaptionParamsIds === 'undefined')
            this.mapCaptionParamsIds = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QjlJLE1BQU0sNkNBQThDLFNBQVEsc0NBQXNDOzs7O0lBcUI5RixZQUFZLElBQWtEO1FBRTFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxFQUFFLENBQUM7UUFDekcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNqRyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQzNGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDdkYsRUFBRSxDQUFDLENB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cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmdWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYVN0cmluZ1ZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICB0YXJnZXRTZXJ2aWNlVXJsPyA6IHN0cmluZztcblx0dGFyZ2V0QWNjb3VudElkPyA6IG51bWJlcjtcblx0dGFyZ2V0TG9naW5JZD8gOiBzdHJpbmc7XG5cdHRhcmdldExvZ2luUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVhzbHQ/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVhwYXRoc1RyaWdnZXJVcGRhdGU/IDogS2FsdHVyYVN0cmluZ1ZhbHVlW107XG5cdGRpc3RyaWJ1dGVDYXB0aW9ucz8gOiBib29sZWFuO1xuXHRkaXN0cmlidXRlQ3VlUG9pbnRzPyA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVSZW1vdGVGbGF2b3JBc3NldENvbnRlbnQ/IDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0ZVJlbW90ZVRodW1iQXNzZXRDb250ZW50PyA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVSZW1vdGVDYXB0aW9uQXNzZXRDb250ZW50PyA6IGJvb2xlYW47XG5cdG1hcEFjY2Vzc0NvbnRyb2xQcm9maWxlSWRzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBDb252ZXJzaW9uUHJvZmlsZUlkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwTWV0YWRhdGFQcm9maWxlSWRzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBTdG9yYWdlUHJvZmlsZUlkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwRmxhdm9yUGFyYW1zSWRzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBUaHVtYlBhcmFtc0lkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwQ2FwdGlvblBhcmFtc0lkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICB0YXJnZXRTZXJ2aWNlVXJsIDogc3RyaW5nO1xuXHR0YXJnZXRBY2NvdW50SWQgOiBudW1iZXI7XG5cdHRhcmdldExvZ2luSWQgOiBzdHJpbmc7XG5cdHRhcmdldExvZ2luUGFzc3dvcmQgOiBzdHJpbmc7XG5cdG1ldGFkYXRhWHNsdCA6IHN0cmluZztcblx0bWV0YWRhdGFYcGF0aHNUcmlnZ2VyVXBkYXRlIDogS2FsdHVyYVN0cmluZ1ZhbHVlW107XG5cdGRpc3RyaWJ1dGVDYXB0aW9ucyA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGVDdWVQb2ludHMgOiBib29sZWFuO1xuXHRkaXN0cmlidXRlUmVtb3RlRmxhdm9yQXNzZXRDb250ZW50IDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0ZVJlbW90ZVRodW1iQXNzZXRDb250ZW50IDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0ZVJlbW90ZUNhcHRpb25Bc3NldENvbnRlbnQgOiBib29sZWFuO1xuXHRtYXBBY2Nlc3NDb250cm9sUHJvZmlsZUlkcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBDb252ZXJzaW9uUHJvZmlsZUlkcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRtYXBNZXRhZGF0YVByb2ZpbGVJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwU3RvcmFnZVByb2ZpbGVJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWFwRmxhdm9yUGFyYW1zSWRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcFRodW1iUGFyYW1zSWRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdG1hcENhcHRpb25QYXJhbXNJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZXRhZGF0YVhwYXRoc1RyaWdnZXJVcGRhdGUgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1ldGFkYXRhWHBhdGhzVHJpZ2dlclVwZGF0ZSA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXBBY2Nlc3NDb250cm9sUHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWFwQWNjZXNzQ29udHJvbFByb2ZpbGVJZHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwQ29udmVyc2lvblByb2ZpbGVJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcENvbnZlcnNpb25Qcm9maWxlSWRzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcE1ldGFkYXRhUHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWFwTWV0YWRhdGFQcm9maWxlSWRzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcFN0b3JhZ2VQcm9maWxlSWRzID09PSAndW5kZWZpbmVkJykgdGhpcy5tYXBTdG9yYWdlUHJvZmlsZUlkcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXBGbGF2b3JQYXJhbXNJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm1hcEZsYXZvclBhcmFtc0lkcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXBUaHVtYlBhcmFtc0lkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWFwVGh1bWJQYXJhbXNJZHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWFwQ2FwdGlvblBhcmFtc0lkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWFwQ2FwdGlvblBhcmFtc0lkcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHR0YXJnZXRTZXJ2aWNlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhcmdldEFjY291bnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0YXJnZXRMb2dpbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhcmdldExvZ2luUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhWHBhdGhzVHJpZ2dlclVwZGF0ZSA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZUNhcHRpb25zIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVDdWVQb2ludHMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZVJlbW90ZUZsYXZvckFzc2V0Q29udGVudCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlUmVtb3RlVGh1bWJBc3NldENvbnRlbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZVJlbW90ZUNhcHRpb25Bc3NldENvbnRlbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bWFwQWNjZXNzQ29udHJvbFByb2ZpbGVJZHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG1hcENvbnZlcnNpb25Qcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBNZXRhZGF0YVByb2ZpbGVJZHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG1hcFN0b3JhZ2VQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBGbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG1hcFRodW1iUGFyYW1zSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRtYXBDYXB0aW9uUGFyYW1zSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGU7Il19