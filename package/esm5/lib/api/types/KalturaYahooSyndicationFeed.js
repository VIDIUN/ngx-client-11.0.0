/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaYahooSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYahooSyndicationFeed, _super);
    function KalturaYahooSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYahooSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYahooSyndicationFeed' },
            category: { type: 'es', readOnly: true, subTypeConstructor: KalturaYahooSyndicationFeedCategories, subType: 'KalturaYahooSyndicationFeedCategories' },
            adultContent: { type: 'es', subTypeConstructor: KalturaYahooSyndicationFeedAdultValues, subType: 'KalturaYahooSyndicationFeedAdultValues' },
            feedDescription: { type: 's' },
            feedLandingPage: { type: 's' }
        });
        return result;
    };
    return KalturaYahooSyndicationFeed;
}(KalturaBaseSyndicationFeed));
export { KalturaYahooSyndicationFeed };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7OztBQVMxRyxJQUFBO0lBQWlELHVEQUEwQjtJQU92RSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQ0FBcUMsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUosWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDL0ksZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBdkNMO0VBYWlELDBCQUEwQixFQTJCMUUsQ0FBQTtBQTNCRCx1Q0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9LYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzJztcbmltcG9ydCB7IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzIH0gZnJvbSAnLi9LYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcyc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCwgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3Mge1xuICAgIGFkdWx0Q29udGVudD8gOiBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcztcblx0ZmVlZERlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZmVlZExhbmRpbmdQYWdlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnkgOiBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzO1xuXHRhZHVsdENvbnRlbnQgOiBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcztcblx0ZmVlZERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRmZWVkTGFuZGluZ1BhZ2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWQnIH0sXG5cdFx0XHRcdGNhdGVnb3J5IDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzLCBzdWJUeXBlIDogJ0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMnIH0sXG5cdFx0XHRcdGFkdWx0Q29udGVudCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzLCBzdWJUeXBlIDogJ0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJyB9LFxuXHRcdFx0XHRmZWVkRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExhbmRpbmdQYWdlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZCddID0gS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkOyJdfQ==