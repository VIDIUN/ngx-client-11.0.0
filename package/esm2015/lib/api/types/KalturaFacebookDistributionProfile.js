/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFacebookDistributionProfile extends KalturaConfigurableDistributionProfile {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE5SSxNQUFNLHlDQUEwQyxTQUFRLHNDQUFzQzs7OztJQVUxRixZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgYXBpQXV0aG9yaXplVXJsPyA6IHN0cmluZztcblx0cGFnZUlkPyA6IHN0cmluZztcblx0cGFnZUFjY2Vzc1Rva2VuPyA6IHN0cmluZztcblx0dXNlckFjY2Vzc1Rva2VuPyA6IHN0cmluZztcblx0c3RhdGU/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9ucz8gOiBzdHJpbmc7XG5cdHJlUmVxdWVzdFBlcm1pc3Npb25zPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGFwaUF1dGhvcml6ZVVybCA6IHN0cmluZztcblx0cGFnZUlkIDogc3RyaW5nO1xuXHRwYWdlQWNjZXNzVG9rZW4gOiBzdHJpbmc7XG5cdHVzZXJBY2Nlc3NUb2tlbiA6IHN0cmluZztcblx0c3RhdGUgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25zIDogc3RyaW5nO1xuXHRyZVJlcXVlc3RQZXJtaXNzaW9ucyA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRhcGlBdXRob3JpemVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFnZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhZ2VBY2Nlc3NUb2tlbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VyQWNjZXNzVG9rZW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVSZXF1ZXN0UGVybWlzc2lvbnMgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=