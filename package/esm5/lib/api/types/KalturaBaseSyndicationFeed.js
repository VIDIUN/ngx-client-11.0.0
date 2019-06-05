/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSyndicationFeedStatus } from './KalturaSyndicationFeedStatus';
import { KalturaSyndicationFeedType } from './KalturaSyndicationFeedType';
import { KalturaSyndicationFeedEntriesOrderBy } from './KalturaSyndicationFeedEntriesOrderBy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBaseSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.playlistId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.name;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.type;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.landingPage;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.allowEmbed;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.playerUiconfId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.flavorParamId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.transcodeExistingContent;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.addToDefaultConversionProfile;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.categories;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.storageId;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.entriesOrderBy;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.enforceEntitlement;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.privacyContext;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.useCategoryEntries;
/** @type {?|undefined} */
KalturaBaseSyndicationFeedArgs.prototype.feedContentTypeHeader;
var KalturaBaseSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseSyndicationFeed, _super);
    function KalturaBaseSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseSyndicationFeed' },
            id: { type: 's', readOnly: true },
            feedUrl: { type: 's', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            playlistId: { type: 's' },
            name: { type: 's' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaSyndicationFeedStatus, subType: 'KalturaSyndicationFeedStatus' },
            type: { type: 'en', subTypeConstructor: KalturaSyndicationFeedType, subType: 'KalturaSyndicationFeedType' },
            landingPage: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            allowEmbed: { type: 'b' },
            playerUiconfId: { type: 'n' },
            flavorParamId: { type: 'n' },
            transcodeExistingContent: { type: 'b' },
            addToDefaultConversionProfile: { type: 'b' },
            categories: { type: 's' },
            storageId: { type: 'n' },
            entriesOrderBy: { type: 'es', subTypeConstructor: KalturaSyndicationFeedEntriesOrderBy, subType: 'KalturaSyndicationFeedEntriesOrderBy' },
            enforceEntitlement: { type: 'b' },
            privacyContext: { type: 's' },
            updatedAt: { type: 'd', readOnly: true },
            useCategoryEntries: { type: 'b' },
            feedContentTypeHeader: { type: 's' }
        });
        return result;
    };
    return KalturaBaseSyndicationFeed;
}(KalturaObjectBase));
export { KalturaBaseSyndicationFeed };
if (false) {
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.id;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.feedUrl;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.partnerId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.playlistId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.name;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.status;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.type;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.landingPage;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.createdAt;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.allowEmbed;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.playerUiconfId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.flavorParamId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.transcodeExistingContent;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.addToDefaultConversionProfile;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.categories;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.storageId;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.entriesOrderBy;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.enforceEntitlement;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.privacyContext;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.updatedAt;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.useCategoryEntries;
    /** @type {?} */
    KalturaBaseSyndicationFeed.prototype.feedContentTypeHeader;
}
typesMappingStorage['KalturaBaseSyndicationFeed'] = KalturaBaseSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCbEYsSUFBQTtJQUFnRCxzREFBaUI7SUF5QjdELG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDdEksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0csV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDN0ksa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0F6Rkw7RUEyQmdELGlCQUFpQixFQStEaEUsQ0FBQTtBQS9ERCxzQ0ErREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3luZGljYXRpb25GZWVkU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU3luZGljYXRpb25GZWVkU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU3luZGljYXRpb25GZWVkVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cmllc09yZGVyQnkgfSBmcm9tICcuL0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyaWVzT3JkZXJCeSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGxheWxpc3RJZD8gOiBzdHJpbmc7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRUeXBlO1xuXHRsYW5kaW5nUGFnZT8gOiBzdHJpbmc7XG5cdGFsbG93RW1iZWQ/IDogYm9vbGVhbjtcblx0cGxheWVyVWljb25mSWQ/IDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbUlkPyA6IG51bWJlcjtcblx0dHJhbnNjb2RlRXhpc3RpbmdDb250ZW50PyA6IGJvb2xlYW47XG5cdGFkZFRvRGVmYXVsdENvbnZlcnNpb25Qcm9maWxlPyA6IGJvb2xlYW47XG5cdGNhdGVnb3JpZXM/IDogc3RyaW5nO1xuXHRzdG9yYWdlSWQ/IDogbnVtYmVyO1xuXHRlbnRyaWVzT3JkZXJCeT8gOiBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cmllc09yZGVyQnk7XG5cdGVuZm9yY2VFbnRpdGxlbWVudD8gOiBib29sZWFuO1xuXHRwcml2YWN5Q29udGV4dD8gOiBzdHJpbmc7XG5cdHVzZUNhdGVnb3J5RW50cmllcz8gOiBib29sZWFuO1xuXHRmZWVkQ29udGVudFR5cGVIZWFkZXI/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHBsYXlsaXN0SWQgOiBzdHJpbmc7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRTdGF0dXM7XG5cdHR5cGUgOiBLYWx0dXJhU3luZGljYXRpb25GZWVkVHlwZTtcblx0bGFuZGluZ1BhZ2UgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdGFsbG93RW1iZWQgOiBib29sZWFuO1xuXHRwbGF5ZXJVaWNvbmZJZCA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1JZCA6IG51bWJlcjtcblx0dHJhbnNjb2RlRXhpc3RpbmdDb250ZW50IDogYm9vbGVhbjtcblx0YWRkVG9EZWZhdWx0Q29udmVyc2lvblByb2ZpbGUgOiBib29sZWFuO1xuXHRjYXRlZ29yaWVzIDogc3RyaW5nO1xuXHRzdG9yYWdlSWQgOiBudW1iZXI7XG5cdGVudHJpZXNPcmRlckJ5IDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJpZXNPcmRlckJ5O1xuXHRlbmZvcmNlRW50aXRsZW1lbnQgOiBib29sZWFuO1xuXHRwcml2YWN5Q29udGV4dCA6IHN0cmluZztcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0dXNlQ2F0ZWdvcnlFbnRyaWVzIDogYm9vbGVhbjtcblx0ZmVlZENvbnRlbnRUeXBlSGVhZGVyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmZWVkVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGxheWxpc3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU3luZGljYXRpb25GZWVkU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVN5bmRpY2F0aW9uRmVlZFR5cGUnIH0sXG5cdFx0XHRcdGxhbmRpbmdQYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGFsbG93RW1iZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cGxheWVyVWljb25mSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1JZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0cmFuc2NvZGVFeGlzdGluZ0NvbnRlbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YWRkVG9EZWZhdWx0Q29udmVyc2lvblByb2ZpbGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0Y2F0ZWdvcmllcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cmllc09yZGVyQnkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cmllc09yZGVyQnksIHN1YlR5cGUgOiAnS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJpZXNPcmRlckJ5JyB9LFxuXHRcdFx0XHRlbmZvcmNlRW50aXRsZW1lbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlQ2F0ZWdvcnlFbnRyaWVzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGZlZWRDb250ZW50VHlwZUhlYWRlciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCddID0gS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQ7Il19