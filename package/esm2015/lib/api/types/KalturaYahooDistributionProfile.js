/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYahooDistributionProcessFeedActionStatus } from './KalturaYahooDistributionProcessFeedActionStatus';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaYahooDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.ftpPath;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.ftpUsername;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.ftpPassword;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.contactTelephone;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.contactEmail;
/** @type {?|undefined} */
KalturaYahooDistributionProfileArgs.prototype.processFeed;
export class KalturaYahooDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaYahooDistributionProfile' },
            ftpPath: { type: 's' },
            ftpUsername: { type: 's' },
            ftpPassword: { type: 's' },
            ftpHost: { type: 's' },
            contactTelephone: { type: 's' },
            contactEmail: { type: 's' },
            processFeed: { type: 'en', subTypeConstructor: KalturaYahooDistributionProcessFeedActionStatus, subType: 'KalturaYahooDistributionProcessFeedActionStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.ftpPath;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.ftpUsername;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.ftpPassword;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.contactTelephone;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.contactEmail;
    /** @type {?} */
    KalturaYahooDistributionProfile.prototype.processFeed;
}
typesMappingStorage['KalturaYahooDistributionProfile'] = KalturaYahooDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQ0FBK0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE5SSxNQUFNLHNDQUF1QyxTQUFRLHNDQUFzQzs7OztJQVV2RixZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0NBQStDLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1NBQ3ZKLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2Nlc3NGZWVkQWN0aW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9jZXNzRmVlZEFjdGlvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBmdHBQYXRoPyA6IHN0cmluZztcblx0ZnRwVXNlcm5hbWU/IDogc3RyaW5nO1xuXHRmdHBQYXNzd29yZD8gOiBzdHJpbmc7XG5cdGZ0cEhvc3Q/IDogc3RyaW5nO1xuXHRjb250YWN0VGVsZXBob25lPyA6IHN0cmluZztcblx0Y29udGFjdEVtYWlsPyA6IHN0cmluZztcblx0cHJvY2Vzc0ZlZWQ/IDogS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvY2Vzc0ZlZWRBY3Rpb25TdGF0dXM7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBmdHBQYXRoIDogc3RyaW5nO1xuXHRmdHBVc2VybmFtZSA6IHN0cmluZztcblx0ZnRwUGFzc3dvcmQgOiBzdHJpbmc7XG5cdGZ0cEhvc3QgOiBzdHJpbmc7XG5cdGNvbnRhY3RUZWxlcGhvbmUgOiBzdHJpbmc7XG5cdGNvbnRhY3RFbWFpbCA6IHN0cmluZztcblx0cHJvY2Vzc0ZlZWQgOiBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9jZXNzRmVlZEFjdGlvblN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmdHBQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cEhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGFjdFRlbGVwaG9uZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250YWN0RW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvY2Vzc0ZlZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9jZXNzRmVlZEFjdGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9jZXNzRmVlZEFjdGlvblN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=