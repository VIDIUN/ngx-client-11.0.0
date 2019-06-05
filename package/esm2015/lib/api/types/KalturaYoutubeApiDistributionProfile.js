/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaYoutubeApiDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.defaultCategory;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.allowComments;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.allowEmbedding;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.allowRatings;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.allowResponses;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.apiAuthorizeUrl;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.googleClientId;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.googleClientSecret;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.googleTokenData;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.assumeSuccess;
/** @type {?|undefined} */
KalturaYoutubeApiDistributionProfileArgs.prototype.privacyStatus;
export class KalturaYoutubeApiDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaYoutubeApiDistributionProfile' },
            username: { type: 's' },
            defaultCategory: { type: 'n' },
            allowComments: { type: 's' },
            allowEmbedding: { type: 's' },
            allowRatings: { type: 's' },
            allowResponses: { type: 's' },
            apiAuthorizeUrl: { type: 's' },
            googleClientId: { type: 's' },
            googleClientSecret: { type: 's' },
            googleTokenData: { type: 's' },
            assumeSuccess: { type: 'b' },
            privacyStatus: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.defaultCategory;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.allowComments;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.allowEmbedding;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.allowRatings;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.allowResponses;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.apiAuthorizeUrl;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.googleClientId;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.googleClientSecret;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.googleTokenData;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.assumeSuccess;
    /** @type {?} */
    KalturaYoutubeApiDistributionProfile.prototype.privacyStatus;
}
typesMappingStorage['KalturaYoutubeApiDistributionProfile'] = KalturaYoutubeApiDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0I5SSxNQUFNLDJDQUE0QyxTQUFRLHNDQUFzQzs7OztJQWU1RixZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHVzZXJuYW1lPyA6IHN0cmluZztcblx0ZGVmYXVsdENhdGVnb3J5PyA6IG51bWJlcjtcblx0YWxsb3dDb21tZW50cz8gOiBzdHJpbmc7XG5cdGFsbG93RW1iZWRkaW5nPyA6IHN0cmluZztcblx0YWxsb3dSYXRpbmdzPyA6IHN0cmluZztcblx0YWxsb3dSZXNwb25zZXM/IDogc3RyaW5nO1xuXHRhcGlBdXRob3JpemVVcmw/IDogc3RyaW5nO1xuXHRnb29nbGVDbGllbnRJZD8gOiBzdHJpbmc7XG5cdGdvb2dsZUNsaWVudFNlY3JldD8gOiBzdHJpbmc7XG5cdGdvb2dsZVRva2VuRGF0YT8gOiBzdHJpbmc7XG5cdGFzc3VtZVN1Y2Nlc3M/IDogYm9vbGVhbjtcblx0cHJpdmFjeVN0YXR1cz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xuXHRkZWZhdWx0Q2F0ZWdvcnkgOiBudW1iZXI7XG5cdGFsbG93Q29tbWVudHMgOiBzdHJpbmc7XG5cdGFsbG93RW1iZWRkaW5nIDogc3RyaW5nO1xuXHRhbGxvd1JhdGluZ3MgOiBzdHJpbmc7XG5cdGFsbG93UmVzcG9uc2VzIDogc3RyaW5nO1xuXHRhcGlBdXRob3JpemVVcmwgOiBzdHJpbmc7XG5cdGdvb2dsZUNsaWVudElkIDogc3RyaW5nO1xuXHRnb29nbGVDbGllbnRTZWNyZXQgOiBzdHJpbmc7XG5cdGdvb2dsZVRva2VuRGF0YSA6IHN0cmluZztcblx0YXNzdW1lU3VjY2VzcyA6IGJvb2xlYW47XG5cdHByaXZhY3lTdGF0dXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFZb3V0dWJlQXBpRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlZmF1bHRDYXRlZ29yeSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhbGxvd0NvbW1lbnRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93RW1iZWRkaW5nIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93UmF0aW5ncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd1Jlc3BvbnNlcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhcGlBdXRob3JpemVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z29vZ2xlQ2xpZW50SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z29vZ2xlQ2xpZW50U2VjcmV0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGdvb2dsZVRva2VuRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3N1bWVTdWNjZXNzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHByaXZhY3lTdGF0dXMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVlvdXR1YmVBcGlEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhWW91dHViZUFwaURpc3RyaWJ1dGlvblByb2ZpbGU7Il19