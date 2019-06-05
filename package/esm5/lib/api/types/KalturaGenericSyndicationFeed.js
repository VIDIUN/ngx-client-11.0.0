/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaGenericSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericSyndicationFeed, _super);
    function KalturaGenericSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericSyndicationFeed' },
            feedDescription: { type: 's' },
            feedLandingPage: { type: 's' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            pageSize: { type: 'n' }
        });
        return result;
    };
    return KalturaGenericSyndicationFeed;
}(KalturaBaseSyndicationFeed));
export { KalturaGenericSyndicationFeed };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVUxRyxJQUFBO0lBQW1ELHlEQUEwQjtJQU96RSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBdkNMO0VBYW1ELDBCQUEwQixFQTJCNUUsQ0FBQTtBQTNCRCx5Q0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRBcmdzIHtcbiAgICBmZWVkRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRmZWVkTGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xuXHRlbnRyeUZpbHRlcj8gOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyO1xuXHRwYWdlU2l6ZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgZmVlZERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRmZWVkTGFuZGluZ1BhZ2UgOiBzdHJpbmc7XG5cdGVudHJ5RmlsdGVyIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0cGFnZVNpemUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkJyB9LFxuXHRcdFx0XHRmZWVkRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExhbmRpbmdQYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VTaXplIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkJ10gPSBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZDsiXX0=