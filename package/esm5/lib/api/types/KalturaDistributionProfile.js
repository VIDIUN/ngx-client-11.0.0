/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionProfile, _super);
    function KalturaDistributionProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.optionalThumbDimensions === 'undefined')
            _this.optionalThumbDimensions = [];
        if (typeof _this.requiredThumbDimensions === 'undefined')
            _this.requiredThumbDimensions = [];
        if (typeof _this.optionalAssetDistributionRules === 'undefined')
            _this.optionalAssetDistributionRules = [];
        if (typeof _this.requiredAssetDistributionRules === 'undefined')
            _this.requiredAssetDistributionRules = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaDistributionProfile;
}(KalturaObjectBase));
export { KalturaDistributionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJsRixJQUFBO0lBQWdELHNEQUFpQjtJQTJCN0Qsb0NBQVksSUFBc0M7UUFBbEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FLZDtRQUpHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLHVCQUF1QixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDakcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsdUJBQXVCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUMzRixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyw4QkFBOEIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsOEJBQThCLEdBQUcsRUFBRSxDQUFDO1FB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LElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0F2R0w7RUFpQ2dELGlCQUFpQixFQXVFaEUsQ0FBQTtBQXZFRCxzQ0F1RUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZSB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcHJvdmlkZXJUeXBlPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGU7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXM7XG5cdHN1Ym1pdEVuYWJsZWQ/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdHVwZGF0ZUVuYWJsZWQ/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdGRlbGV0ZUVuYWJsZWQ/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdHJlcG9ydEVuYWJsZWQ/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdGF1dG9DcmVhdGVGbGF2b3JzPyA6IHN0cmluZztcblx0YXV0b0NyZWF0ZVRodW1iPyA6IHN0cmluZztcblx0b3B0aW9uYWxGbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRyZXF1aXJlZEZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG5cdG9wdGlvbmFsVGh1bWJEaW1lbnNpb25zPyA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnNbXTtcblx0cmVxdWlyZWRUaHVtYkRpbWVuc2lvbnM/IDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRvcHRpb25hbEFzc2V0RGlzdHJpYnV0aW9uUnVsZXM/IDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZVtdO1xuXHRyZXF1aXJlZEFzc2V0RGlzdHJpYnV0aW9uUnVsZXM/IDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZVtdO1xuXHRzdW5yaXNlRGVmYXVsdE9mZnNldD8gOiBudW1iZXI7XG5cdHN1bnNldERlZmF1bHRPZmZzZXQ/IDogbnVtYmVyO1xuXHRyZWNvbW1lbmRlZFN0b3JhZ2VQcm9maWxlRm9yRG93bmxvYWQ/IDogbnVtYmVyO1xuXHRyZWNvbW1lbmRlZERjRm9yRG93bmxvYWQ/IDogbnVtYmVyO1xuXHRyZWNvbW1lbmRlZERjRm9yRXhlY3V0ZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cHJvdmlkZXJUeXBlIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZTtcblx0bmFtZSA6IHN0cmluZztcblx0c3RhdHVzIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXM7XG5cdHN1Ym1pdEVuYWJsZWQgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0dXBkYXRlRW5hYmxlZCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzO1xuXHRkZWxldGVFbmFibGVkIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXM7XG5cdHJlcG9ydEVuYWJsZWQgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cztcblx0YXV0b0NyZWF0ZUZsYXZvcnMgOiBzdHJpbmc7XG5cdGF1dG9DcmVhdGVUaHVtYiA6IHN0cmluZztcblx0b3B0aW9uYWxGbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdHJlcXVpcmVkRmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRvcHRpb25hbFRodW1iRGltZW5zaW9ucyA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnNbXTtcblx0cmVxdWlyZWRUaHVtYkRpbWVuc2lvbnMgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zW107XG5cdG9wdGlvbmFsQXNzZXREaXN0cmlidXRpb25SdWxlcyA6IEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblJ1bGVbXTtcblx0cmVxdWlyZWRBc3NldERpc3RyaWJ1dGlvblJ1bGVzIDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZVtdO1xuXHRzdW5yaXNlRGVmYXVsdE9mZnNldCA6IG51bWJlcjtcblx0c3Vuc2V0RGVmYXVsdE9mZnNldCA6IG51bWJlcjtcblx0cmVjb21tZW5kZWRTdG9yYWdlUHJvZmlsZUZvckRvd25sb2FkIDogbnVtYmVyO1xuXHRyZWNvbW1lbmRlZERjRm9yRG93bmxvYWQgOiBudW1iZXI7XG5cdHJlY29tbWVuZGVkRGNGb3JFeGVjdXRlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbmFsVGh1bWJEaW1lbnNpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5vcHRpb25hbFRodW1iRGltZW5zaW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZXF1aXJlZFRodW1iRGltZW5zaW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVxdWlyZWRUaHVtYkRpbWVuc2lvbnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9uYWxBc3NldERpc3RyaWJ1dGlvblJ1bGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5vcHRpb25hbEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMucmVxdWlyZWRBc3NldERpc3RyaWJ1dGlvblJ1bGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXF1aXJlZEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwcm92aWRlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGUnIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN1Ym1pdEVuYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cycgfSxcblx0XHRcdFx0dXBkYXRlRW5hYmxlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRkZWxldGVFbmFibGVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb25TdGF0dXMnIH0sXG5cdFx0XHRcdHJlcG9ydEVuYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvblN0YXR1cycgfSxcblx0XHRcdFx0YXV0b0NyZWF0ZUZsYXZvcnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXV0b0NyZWF0ZVRodW1iIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9wdGlvbmFsRmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlcXVpcmVkRmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9wdGlvbmFsVGh1bWJEaW1lbnNpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMnIH0sXG5cdFx0XHRcdHJlcXVpcmVkVGh1bWJEaW1lbnNpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMnIH0sXG5cdFx0XHRcdG9wdGlvbmFsQXNzZXREaXN0cmlidXRpb25SdWxlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlJyB9LFxuXHRcdFx0XHRyZXF1aXJlZEFzc2V0RGlzdHJpYnV0aW9uUnVsZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblJ1bGUsIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZScgfSxcblx0XHRcdFx0c3VucmlzZURlZmF1bHRPZmZzZXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3Vuc2V0RGVmYXVsdE9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWNvbW1lbmRlZFN0b3JhZ2VQcm9maWxlRm9yRG93bmxvYWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVjb21tZW5kZWREY0ZvckRvd25sb2FkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY29tbWVuZGVkRGNGb3JFeGVjdXRlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=