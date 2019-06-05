/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaUnicornDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.domainName;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.channelGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.apiHostUrl;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.domainGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.adFreeApplicationGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.remoteAssetParamsId;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.storageProfileId;
export class KalturaUnicornDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaUnicornDistributionProfile' },
            username: { type: 's' },
            password: { type: 's' },
            domainName: { type: 's' },
            channelGuid: { type: 's' },
            apiHostUrl: { type: 's' },
            domainGuid: { type: 's' },
            adFreeApplicationGuid: { type: 's' },
            remoteAssetParamsId: { type: 'n' },
            storageProfileId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.domainName;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.channelGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.apiHostUrl;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.domainGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.adFreeApplicationGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.remoteAssetParamsId;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.storageProfileId;
}
typesMappingStorage['KalturaUnicornDistributionProfile'] = KalturaUnicornDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTlJLE1BQU0sd0NBQXlDLFNBQVEsc0NBQXNDOzs7O0lBWXpGLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRkb21haW5OYW1lPyA6IHN0cmluZztcblx0Y2hhbm5lbEd1aWQ/IDogc3RyaW5nO1xuXHRhcGlIb3N0VXJsPyA6IHN0cmluZztcblx0ZG9tYWluR3VpZD8gOiBzdHJpbmc7XG5cdGFkRnJlZUFwcGxpY2F0aW9uR3VpZD8gOiBzdHJpbmc7XG5cdHJlbW90ZUFzc2V0UGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRzdG9yYWdlUHJvZmlsZUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgdXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRkb21haW5OYW1lIDogc3RyaW5nO1xuXHRjaGFubmVsR3VpZCA6IHN0cmluZztcblx0YXBpSG9zdFVybCA6IHN0cmluZztcblx0ZG9tYWluR3VpZCA6IHN0cmluZztcblx0YWRGcmVlQXBwbGljYXRpb25HdWlkIDogc3RyaW5nO1xuXHRyZW1vdGVBc3NldFBhcmFtc0lkIDogbnVtYmVyO1xuXHRzdG9yYWdlUHJvZmlsZUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb21haW5OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxHdWlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFwaUhvc3RVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZG9tYWluR3VpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZEZyZWVBcHBsaWNhdGlvbkd1aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVtb3RlQXNzZXRQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdG9yYWdlUHJvZmlsZUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==