/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFacebookCaptionDistributionInfo } from './KalturaFacebookCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaFacebookDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaFacebookDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
/** @type {?|undefined} */
KalturaFacebookDistributionJobProviderDataArgs.prototype.thumbAssetId;
/** @type {?|undefined} */
KalturaFacebookDistributionJobProviderDataArgs.prototype.captionsInfo;
var KalturaFacebookDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFacebookDistributionJobProviderData, _super);
    function KalturaFacebookDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.captionsInfo === 'undefined')
            _this.captionsInfo = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaFacebookDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFacebookDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            thumbAssetId: { type: 's' },
            captionsInfo: { type: 'a', subTypeConstructor: KalturaFacebookCaptionDistributionInfo, subType: 'KalturaFacebookCaptionDistributionInfo' }
        });
        return result;
    };
    return KalturaFacebookDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaFacebookDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaFacebookDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaFacebookDistributionJobProviderData.prototype.thumbAssetId;
    /** @type {?} */
    KalturaFacebookDistributionJobProviderData.prototype.captionsInfo;
}
typesMappingStorage['KalturaFacebookDistributionJobProviderData'] = KalturaFacebookDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7OztBQVN0SyxJQUFBO0lBQWdFLHNFQUE4QztJQU0xRyxvREFBWSxJQUFzRDtRQUFsRSxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOztLQUN4RTs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1lBQy9GLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0NBQXNDLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1NBQ3JJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBckNMO0VBWWdFLDhDQUE4QyxFQTBCN0csQ0FBQTtBQTFCRCxzREEwQkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRDQUE0QyxDQUFDLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8gfSBmcm9tICcuL0thbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0SWQ/IDogc3RyaW5nO1xuXHRjYXB0aW9uc0luZm8/IDogS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRJZCA6IHN0cmluZztcblx0Y2FwdGlvbnNJbmZvIDogS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2FwdGlvbnNJbmZvID09PSAndW5kZWZpbmVkJykgdGhpcy5jYXB0aW9uc0luZm8gPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHZpZGVvQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbnNJbmZvIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19