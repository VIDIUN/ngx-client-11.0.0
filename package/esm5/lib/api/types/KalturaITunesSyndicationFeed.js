/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaITunesSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaITunesSyndicationFeed, _super);
    function KalturaITunesSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaITunesSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaITunesSyndicationFeed;
}(KalturaBaseSyndicationFeed));
export { KalturaITunesSyndicationFeed };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFHLElBQUE7SUFBa0Qsd0RBQTBCO0lBY3hFLHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUM1SixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUNqSixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN0RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTdETDtFQXFCa0QsMEJBQTBCLEVBeUMzRSxDQUFBO0FBekNELHdDQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMgfSBmcm9tICcuL0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzJztcbmltcG9ydCB7IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcyB9IGZyb20gJy4vS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQsIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyB7XG4gICAgZmVlZERlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0bGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRmZWVkTGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xuXHRvd25lck5hbWU/IDogc3RyaW5nO1xuXHRvd25lckVtYWlsPyA6IHN0cmluZztcblx0ZmVlZEltYWdlVXJsPyA6IHN0cmluZztcblx0YWR1bHRDb250ZW50PyA6IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcztcblx0ZmVlZEF1dGhvcj8gOiBzdHJpbmc7XG5cdGVuZm9yY2VGZWVkQXV0aG9yPyA6IGJvb2xlYW47XG5cdGVuZm9yY2VPcmRlcj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgZmVlZERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRsYW5ndWFnZSA6IHN0cmluZztcblx0ZmVlZExhbmRpbmdQYWdlIDogc3RyaW5nO1xuXHRvd25lck5hbWUgOiBzdHJpbmc7XG5cdG93bmVyRW1haWwgOiBzdHJpbmc7XG5cdGZlZWRJbWFnZVVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgY2F0ZWdvcnkgOiBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcztcblx0YWR1bHRDb250ZW50IDogS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzO1xuXHRmZWVkQXV0aG9yIDogc3RyaW5nO1xuXHRlbmZvcmNlRmVlZEF1dGhvciA6IGJvb2xlYW47XG5cdGVuZm9yY2VPcmRlciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZCcgfSxcblx0XHRcdFx0ZmVlZERlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRMYW5kaW5nUGFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvd25lck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3duZXJFbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkSW1hZ2VVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnkgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzLCBzdWJUeXBlIDogJ0thbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzJyB9LFxuXHRcdFx0XHRhZHVsdENvbnRlbnQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJyB9LFxuXHRcdFx0XHRmZWVkQXV0aG9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZm9yY2VGZWVkQXV0aG9yIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGVuZm9yY2VPcmRlciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZCddID0gS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZDsiXX0=