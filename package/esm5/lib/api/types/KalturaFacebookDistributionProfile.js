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
export function KalturaFacebookDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.apiAuthorizeUrl;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.pageId;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.pageAccessToken;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.userAccessToken;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.state;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.permissions;
/** @type {?|undefined} */
KalturaFacebookDistributionProfileArgs.prototype.reRequestPermissions;
var KalturaFacebookDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFacebookDistributionProfile, _super);
    function KalturaFacebookDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFacebookDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFacebookDistributionProfile' },
            apiAuthorizeUrl: { type: 's' },
            pageId: { type: 's' },
            pageAccessToken: { type: 's' },
            userAccessToken: { type: 's' },
            state: { type: 's' },
            permissions: { type: 's' },
            reRequestPermissions: { type: 'n' }
        });
        return result;
    };
    return KalturaFacebookDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaFacebookDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.apiAuthorizeUrl;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.pageId;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.pageAccessToken;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.userAccessToken;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.state;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.permissions;
    /** @type {?} */
    KalturaFacebookDistributionProfile.prototype.reRequestPermissions;
}
typesMappingStorage['KalturaFacebookDistributionProfile'] = KalturaFacebookDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUksSUFBQTtJQUF3RCw4REFBc0M7SUFVMUYsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0EvQ0w7RUFld0Qsc0NBQXNDLEVBaUM3RixDQUFBO0FBakNELDhDQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGFwaUF1dGhvcml6ZVVybD8gOiBzdHJpbmc7XG5cdHBhZ2VJZD8gOiBzdHJpbmc7XG5cdHBhZ2VBY2Nlc3NUb2tlbj8gOiBzdHJpbmc7XG5cdHVzZXJBY2Nlc3NUb2tlbj8gOiBzdHJpbmc7XG5cdHN0YXRlPyA6IHN0cmluZztcblx0cGVybWlzc2lvbnM/IDogc3RyaW5nO1xuXHRyZVJlcXVlc3RQZXJtaXNzaW9ucz8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBhcGlBdXRob3JpemVVcmwgOiBzdHJpbmc7XG5cdHBhZ2VJZCA6IHN0cmluZztcblx0cGFnZUFjY2Vzc1Rva2VuIDogc3RyaW5nO1xuXHR1c2VyQWNjZXNzVG9rZW4gOiBzdHJpbmc7XG5cdHN0YXRlIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9ucyA6IHN0cmluZztcblx0cmVSZXF1ZXN0UGVybWlzc2lvbnMgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0YXBpQXV0aG9yaXplVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhZ2VJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYWdlQWNjZXNzVG9rZW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlckFjY2Vzc1Rva2VuIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlUmVxdWVzdFBlcm1pc3Npb25zIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19