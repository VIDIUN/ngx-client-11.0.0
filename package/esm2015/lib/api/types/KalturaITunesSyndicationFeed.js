/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaITunesSyndicationFeedCategories } from './KalturaITunesSyndicationFeedCategories';
import { KalturaITunesSyndicationFeedAdultValues } from './KalturaITunesSyndicationFeedAdultValues';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
/**
 * @record
 */
export function KalturaITunesSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.language;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.feedLandingPage;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.ownerName;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.ownerEmail;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.feedImageUrl;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.adultContent;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.feedAuthor;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.enforceFeedAuthor;
/** @type {?|undefined} */
KalturaITunesSyndicationFeedArgs.prototype.enforceOrder;
export class KalturaITunesSyndicationFeed extends KalturaBaseSyndicationFeed {
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
            objectType: { type: 'c', default: 'KalturaITunesSyndicationFeed' },
            feedDescription: { type: 's' },
            language: { type: 's' },
            feedLandingPage: { type: 's' },
            ownerName: { type: 's' },
            ownerEmail: { type: 's' },
            feedImageUrl: { type: 's' },
            category: { type: 'es', readOnly: true, subTypeConstructor: KalturaITunesSyndicationFeedCategories, subType: 'KalturaITunesSyndicationFeedCategories' },
            adultContent: { type: 'es', subTypeConstructor: KalturaITunesSyndicationFeedAdultValues, subType: 'KalturaITunesSyndicationFeedAdultValues' },
            feedAuthor: { type: 's' },
            enforceFeedAuthor: { type: 'b' },
            enforceOrder: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.feedDescription;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.language;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.feedLandingPage;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.ownerName;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.ownerEmail;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.feedImageUrl;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.category;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.adultContent;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.feedAuthor;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.enforceFeedAuthor;
    /** @type {?} */
    KalturaITunesSyndicationFeed.prototype.enforceOrder;
}
typesMappingStorage['KalturaITunesSyndicationFeed'] = KalturaITunesSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCMUcsTUFBTSxtQ0FBb0MsU0FBUSwwQkFBMEI7Ozs7SUFjeEUsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUM1SixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUNqSixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN0RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9LYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMgfSBmcm9tICcuL0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcyc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3Mge1xuICAgIGZlZWREZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGxhbmd1YWdlPyA6IHN0cmluZztcblx0ZmVlZExhbmRpbmdQYWdlPyA6IHN0cmluZztcblx0b3duZXJOYW1lPyA6IHN0cmluZztcblx0b3duZXJFbWFpbD8gOiBzdHJpbmc7XG5cdGZlZWRJbWFnZVVybD8gOiBzdHJpbmc7XG5cdGFkdWx0Q29udGVudD8gOiBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXM7XG5cdGZlZWRBdXRob3I/IDogc3RyaW5nO1xuXHRlbmZvcmNlRmVlZEF1dGhvcj8gOiBib29sZWFuO1xuXHRlbmZvcmNlT3JkZXI/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZCBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkIHtcblxuICAgIGZlZWREZXNjcmlwdGlvbiA6IHN0cmluZztcblx0bGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGZlZWRMYW5kaW5nUGFnZSA6IHN0cmluZztcblx0b3duZXJOYW1lIDogc3RyaW5nO1xuXHRvd25lckVtYWlsIDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VVcmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNhdGVnb3J5IDogS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXM7XG5cdGFkdWx0Q29udGVudCA6IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcztcblx0ZmVlZEF1dGhvciA6IHN0cmluZztcblx0ZW5mb3JjZUZlZWRBdXRob3IgOiBib29sZWFuO1xuXHRlbmZvcmNlT3JkZXIgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWQnIH0sXG5cdFx0XHRcdGZlZWREZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGFuZGluZ1BhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3duZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVyRW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZEltYWdlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3J5IDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcywgc3ViVHlwZSA6ICdLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcycgfSxcblx0XHRcdFx0YWR1bHRDb250ZW50IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzLCBzdWJUeXBlIDogJ0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcycgfSxcblx0XHRcdFx0ZmVlZEF1dGhvciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmZvcmNlRmVlZEF1dGhvciA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRlbmZvcmNlT3JkZXIgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWQ7Il19