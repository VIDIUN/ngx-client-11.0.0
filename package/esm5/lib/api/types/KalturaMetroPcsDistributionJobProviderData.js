/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaMetroPcsDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaMetroPcsDistributionJobProviderDataArgs.prototype.assetLocalPaths;
/** @type {?|undefined} */
KalturaMetroPcsDistributionJobProviderDataArgs.prototype.thumbUrls;
var KalturaMetroPcsDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetroPcsDistributionJobProviderData, _super);
    function KalturaMetroPcsDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetroPcsDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetroPcsDistributionJobProviderData' },
            assetLocalPaths: { type: 's' },
            thumbUrls: { type: 's' }
        });
        return result;
    };
    return KalturaMetroPcsDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaMetroPcsDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaMetroPcsDistributionJobProviderData.prototype.assetLocalPaths;
    /** @type {?} */
    KalturaMetroPcsDistributionJobProviderData.prototype.thumbUrls;
}
typesMappingStorage['KalturaMetroPcsDistributionJobProviderData'] = KalturaMetroPcsDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7QUFRdEssSUFBQTtJQUFnRSxzRUFBOEM7SUFLMUcsb0RBQVksSUFBc0Q7ZUFFOUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0Q0FBNEMsRUFBRTtZQUMvRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxREFoQ0w7RUFVZ0UsOENBQThDLEVBdUI3RyxDQUFBO0FBdkJELHNEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRDQUE0QyxDQUFDLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIGFzc2V0TG9jYWxQYXRocz8gOiBzdHJpbmc7XG5cdHRodW1iVXJscz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgYXNzZXRMb2NhbFBhdGhzIDogc3RyaW5nO1xuXHR0aHVtYlVybHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdGFzc2V0TG9jYWxQYXRocyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYlVybHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19