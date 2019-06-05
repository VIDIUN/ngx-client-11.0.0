/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttUverseDistributionFile } from './KalturaAttUverseDistributionFile';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaAttUverseDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaAttUverseDistributionJobProviderDataArgs.prototype.filesForDistribution;
/** @type {?|undefined} */
KalturaAttUverseDistributionJobProviderDataArgs.prototype.remoteAssetFileUrls;
/** @type {?|undefined} */
KalturaAttUverseDistributionJobProviderDataArgs.prototype.remoteThumbnailFileUrls;
/** @type {?|undefined} */
KalturaAttUverseDistributionJobProviderDataArgs.prototype.remoteCaptionFileUrls;
export class KalturaAttUverseDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.filesForDistribution === 'undefined')
            this.filesForDistribution = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttUverseDistributionJobProviderData' },
            filesForDistribution: { type: 'a', subTypeConstructor: KalturaAttUverseDistributionFile, subType: 'KalturaAttUverseDistributionFile' },
            remoteAssetFileUrls: { type: 's' },
            remoteThumbnailFileUrls: { type: 's' },
            remoteCaptionFileUrls: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAttUverseDistributionJobProviderData.prototype.filesForDistribution;
    /** @type {?} */
    KalturaAttUverseDistributionJobProviderData.prototype.remoteAssetFileUrls;
    /** @type {?} */
    KalturaAttUverseDistributionJobProviderData.prototype.remoteThumbnailFileUrls;
    /** @type {?} */
    KalturaAttUverseDistributionJobProviderData.prototype.remoteCaptionFileUrls;
}
typesMappingStorage['KalturaAttUverseDistributionJobProviderData'] = KalturaAttUverseDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBc0QsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV0SyxNQUFNLGtEQUFtRCxTQUFRLDhDQUE4Qzs7OztJQU8zRyxZQUFZLElBQXVEO1FBRS9ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7S0FDeEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ2hHLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDMUksbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUgfSBmcm9tICcuL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24/IDogS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGVbXTtcblx0cmVtb3RlQXNzZXRGaWxlVXJscz8gOiBzdHJpbmc7XG5cdHJlbW90ZVRodW1ibmFpbEZpbGVVcmxzPyA6IHN0cmluZztcblx0cmVtb3RlQ2FwdGlvbkZpbGVVcmxzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24gOiBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZVtdO1xuXHRyZW1vdGVBc3NldEZpbGVVcmxzIDogc3RyaW5nO1xuXHRyZW1vdGVUaHVtYm5haWxGaWxlVXJscyA6IHN0cmluZztcblx0cmVtb3RlQ2FwdGlvbkZpbGVVcmxzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmlsZXNGb3JEaXN0cmlidXRpb24gPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbGVzRm9yRGlzdHJpYnV0aW9uID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZmlsZXNGb3JEaXN0cmlidXRpb24gOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlLCBzdWJUeXBlIDogJ0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlJyB9LFxuXHRcdFx0XHRyZW1vdGVBc3NldEZpbGVVcmxzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZVRodW1ibmFpbEZpbGVVcmxzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZUNhcHRpb25GaWxlVXJscyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==