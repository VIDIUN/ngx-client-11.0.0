/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaYahooDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYahooDistributionProfile, _super);
    function KalturaYahooDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYahooDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaYahooDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaYahooDistributionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUksSUFBQTtJQUFxRCwyREFBc0M7SUFVdkYseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0NBQStDLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1NBQ3ZKLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBaERMO0VBZ0JxRCxzQ0FBc0MsRUFpQzFGLENBQUE7QUFqQ0QsMkNBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvY2Vzc0ZlZWRBY3Rpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2Nlc3NGZWVkQWN0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGZ0cFBhdGg/IDogc3RyaW5nO1xuXHRmdHBVc2VybmFtZT8gOiBzdHJpbmc7XG5cdGZ0cFBhc3N3b3JkPyA6IHN0cmluZztcblx0ZnRwSG9zdD8gOiBzdHJpbmc7XG5cdGNvbnRhY3RUZWxlcGhvbmU/IDogc3RyaW5nO1xuXHRjb250YWN0RW1haWw/IDogc3RyaW5nO1xuXHRwcm9jZXNzRmVlZD8gOiBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9jZXNzRmVlZEFjdGlvblN0YXR1cztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGZ0cFBhdGggOiBzdHJpbmc7XG5cdGZ0cFVzZXJuYW1lIDogc3RyaW5nO1xuXHRmdHBQYXNzd29yZCA6IHN0cmluZztcblx0ZnRwSG9zdCA6IHN0cmluZztcblx0Y29udGFjdFRlbGVwaG9uZSA6IHN0cmluZztcblx0Y29udGFjdEVtYWlsIDogc3RyaW5nO1xuXHRwcm9jZXNzRmVlZCA6IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2Nlc3NGZWVkQWN0aW9uU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZ0cFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwVXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwSG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250YWN0VGVsZXBob25lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRhY3RFbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9jZXNzRmVlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2Nlc3NGZWVkQWN0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb2Nlc3NGZWVkQWN0aW9uU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==