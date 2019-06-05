/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaMetroPcsDistributionProfile extends KalturaConfigurableDistributionProfile {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUksTUFBTSx5Q0FBMEMsU0FBUSxzQ0FBc0M7Ozs7SUFhMUYsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBmdHBIb3N0PyA6IHN0cmluZztcblx0ZnRwTG9naW4/IDogc3RyaW5nO1xuXHRmdHBQYXNzPyA6IHN0cmluZztcblx0ZnRwUGF0aD8gOiBzdHJpbmc7XG5cdHByb3ZpZGVyTmFtZT8gOiBzdHJpbmc7XG5cdHByb3ZpZGVySWQ/IDogc3RyaW5nO1xuXHRjb3B5cmlnaHQ/IDogc3RyaW5nO1xuXHRlbnRpdGxlbWVudHM/IDogc3RyaW5nO1xuXHRyYXRpbmc/IDogc3RyaW5nO1xuXHRpdGVtVHlwZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRyb1Bjc0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBmdHBIb3N0IDogc3RyaW5nO1xuXHRmdHBMb2dpbiA6IHN0cmluZztcblx0ZnRwUGFzcyA6IHN0cmluZztcblx0ZnRwUGF0aCA6IHN0cmluZztcblx0cHJvdmlkZXJOYW1lIDogc3RyaW5nO1xuXHRwcm92aWRlcklkIDogc3RyaW5nO1xuXHRjb3B5cmlnaHQgOiBzdHJpbmc7XG5cdGVudGl0bGVtZW50cyA6IHN0cmluZztcblx0cmF0aW5nIDogc3RyaW5nO1xuXHRpdGVtVHlwZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldHJvUGNzRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cExvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb3B5cmlnaHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50aXRsZW1lbnRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJhdGluZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtVHlwZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhTWV0cm9QY3NEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==