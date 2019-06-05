/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaDistributionProfileActionStatus } from './KalturaDistributionProfileActionStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaAssetDistributionRule } from './KalturaAssetDistributionRule';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.providerType;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.submitEnabled;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.updateEnabled;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.deleteEnabled;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.reportEnabled;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.autoCreateFlavors;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.autoCreateThumb;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.optionalFlavorParamsIds;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.requiredFlavorParamsIds;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.optionalThumbDimensions;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.requiredThumbDimensions;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.optionalAssetDistributionRules;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.requiredAssetDistributionRules;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.sunriseDefaultOffset;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.sunsetDefaultOffset;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.recommendedStorageProfileForDownload;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.recommendedDcForDownload;
/** @type {?|undefined} */
KalturaDistributionProfileArgs.prototype.recommendedDcForExecute;
export class KalturaDistributionProfile extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.optionalThumbDimensions === 'undefined')
            this.optionalThumbDimensions = [];
        if (typeof this.requiredThumbDimensions === 'undefined')
            this.requiredThumbDimensions = [];
        if (typeof this.optionalAssetDistributionRules === 'undefined')
            this.optionalAssetDistributionRules = [];
        if (typeof this.requiredAssetDistributionRules === 'undefined')
            this.requiredAssetDistributionRules = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionProfile' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            providerType: { type: 'es', subTypeConstructor: KalturaDistributionProviderType, subType: 'KalturaDistributionProviderType' },
            name: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaDistributionProfileStatus, subType: 'KalturaDistributionProfileStatus' },
            submitEnabled: { type: 'en', subTypeConstructor: KalturaDistributionProfileActionStatus, subType: 'KalturaDistributionProfileActionStatus' },
            updateEnabled: { type: 'en', subTypeConstructor: KalturaDistributionProfileActionStatus, subType: 'KalturaDistributionProfileActionStatus' },
            deleteEnabled: { type: 'en', subTypeConstructor: KalturaDistributionProfileActionStatus, subType: 'KalturaDistributionProfileActionStatus' },
            reportEnabled: { type: 'en', subTypeConstructor: KalturaDistributionProfileActionStatus, subType: 'KalturaDistributionProfileActionStatus' },
            autoCreateFlavors: { type: 's' },
            autoCreateThumb: { type: 's' },
            optionalFlavorParamsIds: { type: 's' },
            requiredFlavorParamsIds: { type: 's' },
            optionalThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            requiredThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            optionalAssetDistributionRules: { type: 'a', subTypeConstructor: KalturaAssetDistributionRule, subType: 'KalturaAssetDistributionRule' },
            requiredAssetDistributionRules: { type: 'a', subTypeConstructor: KalturaAssetDistributionRule, subType: 'KalturaAssetDistributionRule' },
            sunriseDefaultOffset: { type: 'n' },
            sunsetDefaultOffset: { type: 'n' },
            recommendedStorageProfileForDownload: { type: 'n' },
            recommendedDcForDownload: { type: 'n' },
            recommendedDcForExecute: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionProfile.prototype.id;
    /** @type {?} */
    KalturaDistributionProfile.prototype.createdAt;
    /** @type {?} */
    KalturaDistributionProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaDistributionProfile.prototype.partnerId;
    /** @type {?} */
    KalturaDistributionProfile.prototype.providerType;
    /** @type {?} */
    KalturaDistributionProfile.prototype.name;
    /** @type {?} */
    KalturaDistributionProfile.prototype.status;
    /** @type {?} */
    KalturaDistributionProfile.prototype.submitEnabled;
    /** @type {?} */
    KalturaDistributionProfile.prototype.updateEnabled;
    /** @type {?} */
    KalturaDistributionProfile.prototype.deleteEnabled;
    /** @type {?} */
    KalturaDistributionProfile.prototype.reportEnabled;
    /** @type {?} */
    KalturaDistributionProfile.prototype.autoCreateFlavors;
    /** @type {?} */
    KalturaDistributionProfile.prototype.autoCreateThumb;
    /** @type {?} */
    KalturaDistributionProfile.prototype.optionalFlavorParamsIds;
    /** @type {?} */
    KalturaDistributionProfile.prototype.requiredFlavorParamsIds;
    /** @type {?} */
    KalturaDistributionProfile.prototype.optionalThumbDimensions;
    /** @type {?} */
    KalturaDistributionProfile.prototype.requiredThumbDimensions;
    /** @type {?} */
    KalturaDistributionProfile.prototype.optionalAssetDistributionRules;
    /** @type {?} */
    KalturaDistributionProfile.prototype.requiredAssetDistributionRules;
    /** @type {?} */
    KalturaDistributionProfile.prototype.sunriseDefaultOffset;
    /** @type {?} */
    KalturaDistributionProfile.prototype.sunsetDefaultOffset;
    /** @type {?} */
    KalturaDistributionProfile.prototype.recommendedStorageProfileForDownload;
    /** @type {?} */
    KalturaDistributionProfile.prototype.recommendedDcForDownload;
    /** @type {?} */
    KalturaDistributionProfile.prototype.recommendedDcForExecute;
}
typesMappingStorage['KalturaDistributionProfile'] = KalturaDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmxGLE1BQU0saUNBQWtDLFNBQVEsaUJBQWlCOzs7O0lBMkI3RCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDakcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUMzRixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsOEJBQThCLEdBQUcsRUFBRSxD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RSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwcm92aWRlclR5cGU/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZTtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cztcblx0c3VibWl0RW5hYmxlZD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0dXBkYXRlRW5hYmxlZD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0ZGVsZXRlRW5hYmxlZD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0cmVwb3J0RW5hYmxlZD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0YXV0b0NyZWF0ZUZsYXZvcnM/IDogc3RyaW5nO1xuXHRhdXRvQ3JlYXRlVGh1bWI/IDogc3RyaW5nO1xuXHRvcHRpb25hbEZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG5cdHJlcXVpcmVkRmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcblx0b3B0aW9uYWxUaHVtYkRpbWVuc2lvbnM/IDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRyZXF1aXJlZFRodW1iRGltZW5zaW9ucz8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zW107XG5cdG9wdGlvbmFsQXNzZXREaXN0cmlidXRpb25SdWxlcz8gOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlW107XG5cdHJlcXVpcmVkQXNzZXREaXN0cmlidXRpb25SdWxlcz8gOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlW107XG5cdHN1bnJpc2VEZWZhdWx0T2Zmc2V0PyA6IG51bWJlcjtcblx0c3Vuc2V0RGVmYXVsdE9mZnNldD8gOiBudW1iZXI7XG5cdHJlY29tbWVuZGVkU3RvcmFnZVByb2ZpbGVGb3JEb3dubG9hZD8gOiBudW1iZXI7XG5cdHJlY29tbWVuZGVkRGNGb3JEb3dubG9hZD8gOiBudW1iZXI7XG5cdHJlY29tbWVuZGVkRGNGb3JFeGVjdXRlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRwcm92aWRlclR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cztcblx0c3VibWl0RW5hYmxlZCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzO1xuXHR1cGRhdGVFbmFibGVkIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdGRlbGV0ZUVuYWJsZWQgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0cmVwb3J0RW5hYmxlZCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzO1xuXHRhdXRvQ3JlYXRlRmxhdm9ycyA6IHN0cmluZztcblx0YXV0b0NyZWF0ZVRodW1iIDogc3RyaW5nO1xuXHRvcHRpb25hbEZsYXZvclBhcmFtc0lkcyA6IHN0cmluZztcblx0cmVxdWlyZWRGbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdG9wdGlvbmFsVGh1bWJEaW1lbnNpb25zIDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRyZXF1aXJlZFRodW1iRGltZW5zaW9ucyA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnNbXTtcblx0b3B0aW9uYWxBc3NldERpc3RyaWJ1dGlvblJ1bGVzIDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZVtdO1xuXHRyZXF1aXJlZEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlW107XG5cdHN1bnJpc2VEZWZhdWx0T2Zmc2V0IDogbnVtYmVyO1xuXHRzdW5zZXREZWZhdWx0T2Zmc2V0IDogbnVtYmVyO1xuXHRyZWNvbW1lbmRlZFN0b3JhZ2VQcm9maWxlRm9yRG93bmxvYWQgOiBudW1iZXI7XG5cdHJlY29tbWVuZGVkRGNGb3JEb3dubG9hZCA6IG51bWJlcjtcblx0cmVjb21tZW5kZWREY0ZvckV4ZWN1dGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uYWxUaHVtYkRpbWVuc2lvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wdGlvbmFsVGh1bWJEaW1lbnNpb25zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlcXVpcmVkVGh1bWJEaW1lbnNpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXF1aXJlZFRodW1iRGltZW5zaW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25hbEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wdGlvbmFsQXNzZXREaXN0cmlidXRpb25SdWxlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZXF1aXJlZEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlcXVpcmVkQXNzZXREaXN0cmlidXRpb25SdWxlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHByb3ZpZGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0c3VibWl0RW5hYmxlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHR1cGRhdGVFbmFibGVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMnIH0sXG5cdFx0XHRcdGRlbGV0ZUVuYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cycgfSxcblx0XHRcdFx0cmVwb3J0RW5hYmxlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRhdXRvQ3JlYXRlRmxhdm9ycyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhdXRvQ3JlYXRlVGh1bWIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3B0aW9uYWxGbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVxdWlyZWRGbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3B0aW9uYWxUaHVtYkRpbWVuc2lvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucycgfSxcblx0XHRcdFx0cmVxdWlyZWRUaHVtYkRpbWVuc2lvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucycgfSxcblx0XHRcdFx0b3B0aW9uYWxBc3NldERpc3RyaWJ1dGlvblJ1bGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlLCBzdWJUeXBlIDogJ0thbHR1cmFBc3NldERpc3RyaWJ1dGlvblJ1bGUnIH0sXG5cdFx0XHRcdHJlcXVpcmVkQXNzZXREaXN0cmlidXRpb25SdWxlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlJyB9LFxuXHRcdFx0XHRzdW5yaXNlRGVmYXVsdE9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdW5zZXREZWZhdWx0T2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY29tbWVuZGVkU3RvcmFnZVByb2ZpbGVGb3JEb3dubG9hZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWNvbW1lbmRlZERjRm9yRG93bmxvYWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVjb21tZW5kZWREY0ZvckV4ZWN1dGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==