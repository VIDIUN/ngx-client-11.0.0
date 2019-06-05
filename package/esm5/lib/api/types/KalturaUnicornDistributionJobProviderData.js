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
export function KalturaUnicornDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.catalogGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.title;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.mediaChanged;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.flavorAssetVersion;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.notificationBaseUrl;
var KalturaUnicornDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUnicornDistributionJobProviderData, _super);
    function KalturaUnicornDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUnicornDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUnicornDistributionJobProviderData' },
            catalogGuid: { type: 's' },
            title: { type: 's' },
            mediaChanged: { type: 'b' },
            flavorAssetVersion: { type: 's' },
            notificationBaseUrl: { type: 's' }
        });
        return result;
    };
    return KalturaUnicornDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaUnicornDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.catalogGuid;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.title;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.mediaChanged;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.flavorAssetVersion;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.notificationBaseUrl;
}
typesMappingStorage['KalturaUnicornDistributionJobProviderData'] = KalturaUnicornDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBc0QsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV3RLLElBQUE7SUFBK0QscUVBQThDO0lBUXpHLG1EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMzQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQXpDTDtFQWErRCw4Q0FBOEMsRUE2QjVHLENBQUE7QUE3QkQscURBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBjYXRhbG9nR3VpZD8gOiBzdHJpbmc7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0bWVkaWFDaGFuZ2VkPyA6IGJvb2xlYW47XG5cdGZsYXZvckFzc2V0VmVyc2lvbj8gOiBzdHJpbmc7XG5cdG5vdGlmaWNhdGlvbkJhc2VVcmw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgY2F0YWxvZ0d1aWQgOiBzdHJpbmc7XG5cdHRpdGxlIDogc3RyaW5nO1xuXHRtZWRpYUNoYW5nZWQgOiBib29sZWFuO1xuXHRmbGF2b3JBc3NldFZlcnNpb24gOiBzdHJpbmc7XG5cdG5vdGlmaWNhdGlvbkJhc2VVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHRjYXRhbG9nR3VpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYUNoYW5nZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvbkJhc2VVcmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==