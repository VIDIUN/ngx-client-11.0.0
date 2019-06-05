/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeApiCaptionDistributionInfo } from './KalturaYouTubeApiCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaYoutubeApiDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaYoutubeApiDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionJobProviderDataArgs.prototype.thumbAssetFilePath;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionJobProviderDataArgs.prototype.captionsInfo;
var KalturaYoutubeApiDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYoutubeApiDistributionJobProviderData, _super);
    function KalturaYoutubeApiDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.captionsInfo === 'undefined')
            _this.captionsInfo = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaYoutubeApiDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYoutubeApiDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            thumbAssetFilePath: { type: 's' },
            captionsInfo: { type: 'a', subTypeConstructor: KalturaYouTubeApiCaptionDistributionInfo, subType: 'KalturaYouTubeApiCaptionDistributionInfo' }
        });
        return result;
    };
    return KalturaYoutubeApiDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaYoutubeApiDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.thumbAssetFilePath;
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.captionsInfo;
}
typesMappingStorage['KalturaYoutubeApiDistributionJobProviderData'] = KalturaYoutubeApiDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw4Q0FBOEMsRUFBc0QsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7QUFTdEssSUFBQTtJQUFrRSx3RUFBOEM7SUFNNUcsc0RBQVksSUFBd0Q7UUFBcEUsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7S0FDeEU7Ozs7SUFFUyxtRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4Q0FBOEMsRUFBRTtZQUNqRyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1NBQ3pJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dURBckNMO0VBWWtFLDhDQUE4QyxFQTBCL0csQ0FBQTtBQTFCRCx3REEwQkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhDQUE4QyxDQUFDLEdBQUcsNENBQTRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyB9IGZyb20gJy4vS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRjYXB0aW9uc0luZm8/IDogS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mb1tdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgdmlkZW9Bc3NldEZpbGVQYXRoIDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdGNhcHRpb25zSW5mbyA6IEthbHR1cmFZb3VUdWJlQXBpQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXB0aW9uc0luZm8gPT09ICd1bmRlZmluZWQnKSB0aGlzLmNhcHRpb25zSW5mbyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR2aWRlb0Fzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJBc3NldEZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25zSW5mbyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19