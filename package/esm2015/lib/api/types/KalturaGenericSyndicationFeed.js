/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
/**
 * @record
 */
export function KalturaGenericSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaGenericSyndicationFeedArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaGenericSyndicationFeedArgs.prototype.feedLandingPage;
/** @type {?|undefined} */
KalturaGenericSyndicationFeedArgs.prototype.entryFilter;
/** @type {?|undefined} */
KalturaGenericSyndicationFeedArgs.prototype.pageSize;
export class KalturaGenericSyndicationFeed extends KalturaBaseSyndicationFeed {
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
            objectType: { type: 'c', default: 'KalturaGenericSyndicationFeed' },
            feedDescription: { type: 's' },
            feedLandingPage: { type: 's' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            pageSize: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericSyndicationFeed.prototype.feedDescription;
    /** @type {?} */
    KalturaGenericSyndicationFeed.prototype.feedLandingPage;
    /** @type {?} */
    KalturaGenericSyndicationFeed.prototype.entryFilter;
    /** @type {?} */
    KalturaGenericSyndicationFeed.prototype.pageSize;
}
typesMappingStorage['KalturaGenericSyndicationFeed'] = KalturaGenericSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTFHLE1BQU0sb0NBQXFDLFNBQVEsMEJBQTBCOzs7O0lBT3pFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQsIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3Mge1xuICAgIGZlZWREZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGZlZWRMYW5kaW5nUGFnZT8gOiBzdHJpbmc7XG5cdGVudHJ5RmlsdGVyPyA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7XG5cdHBhZ2VTaXplPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCB7XG5cbiAgICBmZWVkRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGZlZWRMYW5kaW5nUGFnZSA6IHN0cmluZztcblx0ZW50cnlGaWx0ZXIgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyO1xuXHRwYWdlU2l6ZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQnIH0sXG5cdFx0XHRcdGZlZWREZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGFuZGluZ1BhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZVNpemUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkOyJdfQ==