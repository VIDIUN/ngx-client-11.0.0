/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYahooSyndicationFeedCategories } from './KalturaYahooSyndicationFeedCategories';
import { KalturaYahooSyndicationFeedAdultValues } from './KalturaYahooSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
/**
 * @record
 */
export function KalturaYahooSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaYahooSyndicationFeedArgs.prototype.adultContent;
/** @type {?|undefined} */
KalturaYahooSyndicationFeedArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaYahooSyndicationFeedArgs.prototype.feedLandingPage;
export class KalturaYahooSyndicationFeed extends KalturaBaseSyndicationFeed {
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
            objectType: { type: 'c', default: 'KalturaYahooSyndicationFeed' },
            category: { type: 'es', readOnly: true, subTypeConstructor: KalturaYahooSyndicationFeedCategories, subType: 'KalturaYahooSyndicationFeedCategories' },
            adultContent: { type: 'es', subTypeConstructor: KalturaYahooSyndicationFeedAdultValues, subType: 'KalturaYahooSyndicationFeedAdultValues' },
            feedDescription: { type: 's' },
            feedLandingPage: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYahooSyndicationFeed.prototype.category;
    /** @type {?} */
    KalturaYahooSyndicationFeed.prototype.adultContent;
    /** @type {?} */
    KalturaYahooSyndicationFeed.prototype.feedDescription;
    /** @type {?} */
    KalturaYahooSyndicationFeed.prototype.feedLandingPage;
}
typesMappingStorage['KalturaYahooSyndicationFeed'] = KalturaYahooSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0FBUzFHLE1BQU0sa0NBQW1DLFNBQVEsMEJBQTBCOzs7O0lBT3ZFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQ0FBcUMsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUosWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDL0ksZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMgfSBmcm9tICcuL0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMgfSBmcm9tICcuL0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyB7XG4gICAgYWR1bHRDb250ZW50PyA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzO1xuXHRmZWVkRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRmZWVkTGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWQgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCB7XG5cbiAgICByZWFkb25seSBjYXRlZ29yeSA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXM7XG5cdGFkdWx0Q29udGVudCA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzO1xuXHRmZWVkRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGZlZWRMYW5kaW5nUGFnZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZCcgfSxcblx0XHRcdFx0Y2F0ZWdvcnkgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMsIHN1YlR5cGUgOiAnS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcycgfSxcblx0XHRcdFx0YWR1bHRDb250ZW50IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMnIH0sXG5cdFx0XHRcdGZlZWREZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGFuZGluZ1BhZ2UgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkJ10gPSBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWQ7Il19