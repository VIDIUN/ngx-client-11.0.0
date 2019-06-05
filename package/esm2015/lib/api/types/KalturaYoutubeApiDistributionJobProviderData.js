/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaYoutubeApiDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.captionsInfo === 'undefined')
            this.captionsInfo = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYoutubeApiDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            thumbAssetFilePath: { type: 's' },
            captionsInfo: { type: 'a', subTypeConstructor: KalturaYouTubeApiCaptionDistributionInfo, subType: 'KalturaYouTubeApiCaptionDistributionInfo' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.thumbAssetFilePath;
    /** @type {?} */
    KalturaYoutubeApiDistributionJobProviderData.prototype.captionsInfo;
}
typesMappingStorage['KalturaYoutubeApiDistributionJobProviderData'] = KalturaYoutubeApiDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7OztBQVN0SyxNQUFNLG1EQUFvRCxTQUFRLDhDQUE4Qzs7OztJQU01RyxZQUFZLElBQXdEO1FBRWhFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztLQUN4RTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDakcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtTQUN6SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhDQUE4QyxDQUFDLEdBQUcsNENBQTRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyB9IGZyb20gJy4vS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRjYXB0aW9uc0luZm8/IDogS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mb1tdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgdmlkZW9Bc3NldEZpbGVQYXRoIDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdGNhcHRpb25zSW5mbyA6IEthbHR1cmFZb3VUdWJlQXBpQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXB0aW9uc0luZm8gPT09ICd1bmRlZmluZWQnKSB0aGlzLmNhcHRpb25zSW5mbyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR2aWRlb0Fzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJBc3NldEZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25zSW5mbyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19