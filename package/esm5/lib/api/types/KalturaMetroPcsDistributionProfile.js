/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaMetroPcsDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.ftpLogin;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.ftpPass;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.ftpPath;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.providerName;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.providerId;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.copyright;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.entitlements;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.rating;
/** @type {?|undefined} */
KalturaMetroPcsDistributionProfileArgs.prototype.itemType;
var KalturaMetroPcsDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetroPcsDistributionProfile, _super);
    function KalturaMetroPcsDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetroPcsDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetroPcsDistributionProfile' },
            ftpHost: { type: 's' },
            ftpLogin: { type: 's' },
            ftpPass: { type: 's' },
            ftpPath: { type: 's' },
            providerName: { type: 's' },
            providerId: { type: 's' },
            copyright: { type: 's' },
            entitlements: { type: 's' },
            rating: { type: 's' },
            itemType: { type: 's' }
        });
        return result;
    };
    return KalturaMetroPcsDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaMetroPcsDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.ftpLogin;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.ftpPass;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.ftpPath;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.providerName;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.providerId;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.copyright;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.entitlements;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.rating;
    /** @type {?} */
    KalturaMetroPcsDistributionProfile.prototype.itemType;
}
typesMappingStorage['KalturaMetroPcsDistributionProfile'] = KalturaMetroPcsDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlJLElBQUE7SUFBd0QsOERBQXNDO0lBYTFGLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQXhETDtFQWtCd0Qsc0NBQXNDLEVBdUM3RixDQUFBO0FBdkNELDhDQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGZ0cEhvc3Q/IDogc3RyaW5nO1xuXHRmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdGZ0cFBhc3M/IDogc3RyaW5nO1xuXHRmdHBQYXRoPyA6IHN0cmluZztcblx0cHJvdmlkZXJOYW1lPyA6IHN0cmluZztcblx0cHJvdmlkZXJJZD8gOiBzdHJpbmc7XG5cdGNvcHlyaWdodD8gOiBzdHJpbmc7XG5cdGVudGl0bGVtZW50cz8gOiBzdHJpbmc7XG5cdHJhdGluZz8gOiBzdHJpbmc7XG5cdGl0ZW1UeXBlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGZ0cEhvc3QgOiBzdHJpbmc7XG5cdGZ0cExvZ2luIDogc3RyaW5nO1xuXHRmdHBQYXNzIDogc3RyaW5nO1xuXHRmdHBQYXRoIDogc3RyaW5nO1xuXHRwcm92aWRlck5hbWUgOiBzdHJpbmc7XG5cdHByb3ZpZGVySWQgOiBzdHJpbmc7XG5cdGNvcHlyaWdodCA6IHN0cmluZztcblx0ZW50aXRsZW1lbnRzIDogc3RyaW5nO1xuXHRyYXRpbmcgOiBzdHJpbmc7XG5cdGl0ZW1UeXBlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZ0cEhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwTG9naW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGFzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3ZpZGVyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvcHlyaWdodCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlbWVudHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmF0aW5nIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1UeXBlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19