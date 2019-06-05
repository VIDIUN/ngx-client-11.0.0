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
export function KalturaUverseDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaUverseDistributionJobProviderDataArgs.prototype.localAssetFilePath;
/** @type {?|undefined} */
KalturaUverseDistributionJobProviderDataArgs.prototype.remoteAssetUrl;
/** @type {?|undefined} */
KalturaUverseDistributionJobProviderDataArgs.prototype.remoteAssetFileName;
var KalturaUverseDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUverseDistributionJobProviderData, _super);
    function KalturaUverseDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUverseDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUverseDistributionJobProviderData' },
            localAssetFilePath: { type: 's' },
            remoteAssetUrl: { type: 's' },
            remoteAssetFileName: { type: 's' }
        });
        return result;
    };
    return KalturaUverseDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaUverseDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaUverseDistributionJobProviderData.prototype.localAssetFilePath;
    /** @type {?} */
    KalturaUverseDistributionJobProviderData.prototype.remoteAssetUrl;
    /** @type {?} */
    KalturaUverseDistributionJobProviderData.prototype.remoteAssetFileName;
}
typesMappingStorage['KalturaUverseDistributionJobProviderData'] = KalturaUverseDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7O0FBU3RLLElBQUE7SUFBOEQsb0VBQThDO0lBTXhHLGtEQUFZLElBQW9EO2VBRTVELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDN0Ysa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bURBbkNMO0VBVzhELDhDQUE4QyxFQXlCM0csQ0FBQTtBQXpCRCxvREF5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBsb2NhbEFzc2V0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRyZW1vdGVBc3NldFVybD8gOiBzdHJpbmc7XG5cdHJlbW90ZUFzc2V0RmlsZU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICBsb2NhbEFzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdHJlbW90ZUFzc2V0VXJsIDogc3RyaW5nO1xuXHRyZW1vdGVBc3NldEZpbGVOYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdGxvY2FsQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVBc3NldFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVBc3NldEZpbGVOYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19