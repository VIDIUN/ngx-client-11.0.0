/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaVerizonVcastDistributionProfile extends KalturaConfigurableDistributionProfile {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjlJLE1BQU0sNkNBQThDLFNBQVEsc0NBQXNDOzs7O0lBYzlGLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgZnRwSG9zdD8gOiBzdHJpbmc7XG5cdGZ0cExvZ2luPyA6IHN0cmluZztcblx0ZnRwUGFzcz8gOiBzdHJpbmc7XG5cdHByb3ZpZGVyTmFtZT8gOiBzdHJpbmc7XG5cdHByb3ZpZGVySWQ/IDogc3RyaW5nO1xuXHRlbnRpdGxlbWVudD8gOiBzdHJpbmc7XG5cdHByaW9yaXR5PyA6IHN0cmluZztcblx0YWxsb3dTdHJlYW1pbmc/IDogc3RyaW5nO1xuXHRzdHJlYW1pbmdQcmljZUNvZGU/IDogc3RyaW5nO1xuXHRhbGxvd0Rvd25sb2FkPyA6IHN0cmluZztcblx0ZG93bmxvYWRQcmljZUNvZGU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVmVyaXpvblZjYXN0RGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGZ0cEhvc3QgOiBzdHJpbmc7XG5cdGZ0cExvZ2luIDogc3RyaW5nO1xuXHRmdHBQYXNzIDogc3RyaW5nO1xuXHRwcm92aWRlck5hbWUgOiBzdHJpbmc7XG5cdHByb3ZpZGVySWQgOiBzdHJpbmc7XG5cdGVudGl0bGVtZW50IDogc3RyaW5nO1xuXHRwcmlvcml0eSA6IHN0cmluZztcblx0YWxsb3dTdHJlYW1pbmcgOiBzdHJpbmc7XG5cdHN0cmVhbWluZ1ByaWNlQ29kZSA6IHN0cmluZztcblx0YWxsb3dEb3dubG9hZCA6IHN0cmluZztcblx0ZG93bmxvYWRQcmljZUNvZGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cExvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3ZpZGVySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50aXRsZW1lbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpb3JpdHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dTdHJlYW1pbmcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtaW5nUHJpY2VDb2RlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93RG93bmxvYWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZG93bmxvYWRQcmljZUNvZGUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVZlcml6b25WY2FzdERpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFWZXJpem9uVmNhc3REaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==