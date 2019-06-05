/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaComcastMrssDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedTitle;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedLink;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedLastBuildDate;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.itemLink;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.cPlatformTvSeries;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.cPlatformTvSeriesField;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldIncludeCuePoints;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldIncludeCaptions;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldAddThumbExtension;
export class KalturaComcastMrssDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.cPlatformTvSeries === 'undefined')
            this.cPlatformTvSeries = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaComcastMrssDistributionProfile' },
            metadataProfileId: { type: 'n' },
            feedUrl: { type: 's', readOnly: true },
            feedTitle: { type: 's' },
            feedLink: { type: 's' },
            feedDescription: { type: 's' },
            feedLastBuildDate: { type: 's' },
            itemLink: { type: 's' },
            cPlatformTvSeries: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            cPlatformTvSeriesField: { type: 's' },
            shouldIncludeCuePoints: { type: 'b' },
            shouldIncludeCaptions: { type: 'b' },
            shouldAddThumbExtension: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.metadataProfileId;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedTitle;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedLink;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedDescription;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedLastBuildDate;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.itemLink;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.cPlatformTvSeries;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.cPlatformTvSeriesField;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldIncludeCuePoints;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldIncludeCaptions;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldAddThumbExtension;
}
typesMappingStorage['KalturaComcastMrssDistributionProfile'] = KalturaComcastMrssDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUksTUFBTSw0Q0FBNkMsU0FBUSxzQ0FBc0M7Ozs7SUFlN0YsWUFBWSxJQUFpRDtRQUV6RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQ2xGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3JHLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRmZWVkVGl0bGU/IDogc3RyaW5nO1xuXHRmZWVkTGluaz8gOiBzdHJpbmc7XG5cdGZlZWREZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGZlZWRMYXN0QnVpbGREYXRlPyA6IHN0cmluZztcblx0aXRlbUxpbms/IDogc3RyaW5nO1xuXHRjUGxhdGZvcm1UdlNlcmllcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0Y1BsYXRmb3JtVHZTZXJpZXNGaWVsZD8gOiBzdHJpbmc7XG5cdHNob3VsZEluY2x1ZGVDdWVQb2ludHM/IDogYm9vbGVhbjtcblx0c2hvdWxkSW5jbHVkZUNhcHRpb25zPyA6IGJvb2xlYW47XG5cdHNob3VsZEFkZFRodW1iRXh0ZW5zaW9uPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmVlZFVybCA6IHN0cmluZztcblx0ZmVlZFRpdGxlIDogc3RyaW5nO1xuXHRmZWVkTGluayA6IHN0cmluZztcblx0ZmVlZERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRmZWVkTGFzdEJ1aWxkRGF0ZSA6IHN0cmluZztcblx0aXRlbUxpbmsgOiBzdHJpbmc7XG5cdGNQbGF0Zm9ybVR2U2VyaWVzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdGNQbGF0Zm9ybVR2U2VyaWVzRmllbGQgOiBzdHJpbmc7XG5cdHNob3VsZEluY2x1ZGVDdWVQb2ludHMgOiBib29sZWFuO1xuXHRzaG91bGRJbmNsdWRlQ2FwdGlvbnMgOiBib29sZWFuO1xuXHRzaG91bGRBZGRUaHVtYkV4dGVuc2lvbiA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jUGxhdGZvcm1UdlNlcmllcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY1BsYXRmb3JtVHZTZXJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmZWVkVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmVlZFRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRMaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWREZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGFzdEJ1aWxkRGF0ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjUGxhdGZvcm1UdlNlcmllcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0Y1BsYXRmb3JtVHZTZXJpZXNGaWVsZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzaG91bGRJbmNsdWRlQ3VlUG9pbnRzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHNob3VsZEluY2x1ZGVDYXB0aW9ucyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzaG91bGRBZGRUaHVtYkV4dGVuc2lvbiA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==