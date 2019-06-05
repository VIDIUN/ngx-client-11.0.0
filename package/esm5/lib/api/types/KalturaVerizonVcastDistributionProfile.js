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
export function KalturaVerizonVcastDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.ftpLogin;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.ftpPass;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.providerName;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.providerId;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.entitlement;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.priority;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.allowStreaming;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.streamingPriceCode;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.allowDownload;
/** @type {?|undefined} */
KalturaVerizonVcastDistributionProfileArgs.prototype.downloadPriceCode;
var KalturaVerizonVcastDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVerizonVcastDistributionProfile, _super);
    function KalturaVerizonVcastDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVerizonVcastDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaVerizonVcastDistributionProfile' },
            ftpHost: { type: 's' },
            ftpLogin: { type: 's' },
            ftpPass: { type: 's' },
            providerName: { type: 's' },
            providerId: { type: 's' },
            entitlement: { type: 's' },
            priority: { type: 's' },
            allowStreaming: { type: 's' },
            streamingPriceCode: { type: 's' },
            allowDownload: { type: 's' },
            downloadPriceCode: { type: 's' }
        });
        return result;
    };
    return KalturaVerizonVcastDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaVerizonVcastDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.ftpLogin;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.ftpPass;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.providerName;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.providerId;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.entitlement;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.priority;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.allowStreaming;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.streamingPriceCode;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.allowDownload;
    /** @type {?} */
    KalturaVerizonVcastDistributionProfile.prototype.downloadPriceCode;
}
typesMappingStorage['KalturaVerizonVcastDistributionProfile'] = KalturaVerizonVcastDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI5SSxJQUFBO0lBQTRELGtFQUFzQztJQWM5RixnREFBWSxJQUFrRDtlQUUxRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREEzREw7RUFtQjRELHNDQUFzQyxFQXlDakcsQ0FBQTtBQXpDRCxrREF5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVmVyaXpvblZjYXN0RGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBmdHBIb3N0PyA6IHN0cmluZztcblx0ZnRwTG9naW4/IDogc3RyaW5nO1xuXHRmdHBQYXNzPyA6IHN0cmluZztcblx0cHJvdmlkZXJOYW1lPyA6IHN0cmluZztcblx0cHJvdmlkZXJJZD8gOiBzdHJpbmc7XG5cdGVudGl0bGVtZW50PyA6IHN0cmluZztcblx0cHJpb3JpdHk/IDogc3RyaW5nO1xuXHRhbGxvd1N0cmVhbWluZz8gOiBzdHJpbmc7XG5cdHN0cmVhbWluZ1ByaWNlQ29kZT8gOiBzdHJpbmc7XG5cdGFsbG93RG93bmxvYWQ/IDogc3RyaW5nO1xuXHRkb3dubG9hZFByaWNlQ29kZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgZnRwSG9zdCA6IHN0cmluZztcblx0ZnRwTG9naW4gOiBzdHJpbmc7XG5cdGZ0cFBhc3MgOiBzdHJpbmc7XG5cdHByb3ZpZGVyTmFtZSA6IHN0cmluZztcblx0cHJvdmlkZXJJZCA6IHN0cmluZztcblx0ZW50aXRsZW1lbnQgOiBzdHJpbmc7XG5cdHByaW9yaXR5IDogc3RyaW5nO1xuXHRhbGxvd1N0cmVhbWluZyA6IHN0cmluZztcblx0c3RyZWFtaW5nUHJpY2VDb2RlIDogc3RyaW5nO1xuXHRhbGxvd0Rvd25sb2FkIDogc3RyaW5nO1xuXHRkb3dubG9hZFByaWNlQ29kZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZ0cEhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwTG9naW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGFzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlbWVudCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd1N0cmVhbWluZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1pbmdQcmljZUNvZGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dEb3dubG9hZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb3dubG9hZFByaWNlQ29kZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmVyaXpvblZjYXN0RGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGU7Il19