/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAttUverseDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjOUksTUFBTSwwQ0FBMkMsU0FBUSxzQ0FBc0M7Ozs7SUFZM0YsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGZ0cEhvc3Q/IDogc3RyaW5nO1xuXHRmdHBVc2VybmFtZT8gOiBzdHJpbmc7XG5cdGZ0cFBhc3N3b3JkPyA6IHN0cmluZztcblx0ZnRwUGF0aD8gOiBzdHJpbmc7XG5cdGNoYW5uZWxUaXRsZT8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0RmlsZW5hbWVYc2x0PyA6IHN0cmluZztcblx0dGh1bWJuYWlsQXNzZXRGaWxlbmFtZVhzbHQ/IDogc3RyaW5nO1xuXHRhc3NldEZpbGVuYW1lWHNsdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgcmVhZG9ubHkgZmVlZFVybCA6IHN0cmluZztcblx0ZnRwSG9zdCA6IHN0cmluZztcblx0ZnRwVXNlcm5hbWUgOiBzdHJpbmc7XG5cdGZ0cFBhc3N3b3JkIDogc3RyaW5nO1xuXHRmdHBQYXRoIDogc3RyaW5nO1xuXHRjaGFubmVsVGl0bGUgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0RmlsZW5hbWVYc2x0IDogc3RyaW5nO1xuXHR0aHVtYm5haWxBc3NldEZpbGVuYW1lWHNsdCA6IHN0cmluZztcblx0YXNzZXRGaWxlbmFtZVhzbHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmZWVkVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZnRwSG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBVc2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldEZpbGVuYW1lWHNsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYm5haWxBc3NldEZpbGVuYW1lWHNsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldEZpbGVuYW1lWHNsdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGU7Il19