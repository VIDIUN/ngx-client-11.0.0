/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaAttUverseDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttUverseDistributionJobProviderData, _super);
    function KalturaAttUverseDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.filesForDistribution === 'undefined')
            _this.filesForDistribution = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAttUverseDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttUverseDistributionJobProviderData' },
            filesForDistribution: { type: 'a', subTypeConstructor: KalturaAttUverseDistributionFile, subType: 'KalturaAttUverseDistributionFile' },
            remoteAssetFileUrls: { type: 's' },
            remoteThumbnailFileUrls: { type: 's' },
            remoteCaptionFileUrls: { type: 's' }
        });
        return result;
    };
    return KalturaAttUverseDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaAttUverseDistributionJobProviderData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdEssSUFBQTtJQUFpRSx1RUFBOEM7SUFPM0cscURBQVksSUFBdUQ7UUFBbkUsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7O0tBQ3hGOzs7O0lBRVMsa0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDaEcsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUMxSSxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NEQXhDTDtFQWFpRSw4Q0FBOEMsRUE0QjlHLENBQUE7QUE1QkQsdURBNEJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUgfSBmcm9tICcuL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24/IDogS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGVbXTtcblx0cmVtb3RlQXNzZXRGaWxlVXJscz8gOiBzdHJpbmc7XG5cdHJlbW90ZVRodW1ibmFpbEZpbGVVcmxzPyA6IHN0cmluZztcblx0cmVtb3RlQ2FwdGlvbkZpbGVVcmxzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24gOiBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZVtdO1xuXHRyZW1vdGVBc3NldEZpbGVVcmxzIDogc3RyaW5nO1xuXHRyZW1vdGVUaHVtYm5haWxGaWxlVXJscyA6IHN0cmluZztcblx0cmVtb3RlQ2FwdGlvbkZpbGVVcmxzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmlsZXNGb3JEaXN0cmlidXRpb24gPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbGVzRm9yRGlzdHJpYnV0aW9uID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZmlsZXNGb3JEaXN0cmlidXRpb24gOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlLCBzdWJUeXBlIDogJ0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlJyB9LFxuXHRcdFx0XHRyZW1vdGVBc3NldEZpbGVVcmxzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZVRodW1ibmFpbEZpbGVVcmxzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZUNhcHRpb25GaWxlVXJscyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==