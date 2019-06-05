/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemSearchEntriesActionArgs() { }
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.entryFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
CaptionAssetItemSearchEntriesAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetItemSearchEntriesAction, _super);
    function CaptionAssetItemSearchEntriesAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntryListResponse', responseConstructor: KalturaBaseEntryListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetItemSearchEntriesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'captionsearch_captionassetitem' },
            action: { type: 'c', default: 'searchEntries' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return CaptionAssetItemSearchEntriesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetItemSearchEntriesAction };
if (false) {
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.entryFilter;
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEVudHJpZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldEl0ZW1TZWFyY2hFbnRyaWVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBeUQsK0RBQTRDO0lBTWpHLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUM7S0FDNUk7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNoRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDN0csc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN0SSxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBaERMO0VBdUJ5RCxjQUFjLEVBMEJ0RSxDQUFBOzs7Ozs7Ozs7QUExQkQsK0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uQXNzZXRJdGVtU2VhcmNoRW50cmllc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUZpbHRlcj8gOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtRmlsdGVyPyA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtUGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2FwdGlvbkFzc2V0SXRlbScgYWN0aW9uICdzZWFyY2hFbnRyaWVzJy5cbiAqXG4gKiBVc2FnZTogU2VhcmNoIGNhcHRpb24gYXNzZXQgaXRlbXMgYnkgZmlsdGVyLCBwYWdlciBhbmQgZnJlZSB0ZXh0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJhc2VFbnRyeUxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEVudHJpZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZUVudHJ5TGlzdFJlc3BvbnNlPiB7XG5cbiAgICBlbnRyeUZpbHRlciA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbVBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBDYXB0aW9uQXNzZXRJdGVtU2VhcmNoRW50cmllc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5TGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uc2VhcmNoX2NhcHRpb25hc3NldGl0ZW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2hFbnRyaWVzJyB9LFxuXHRcdFx0XHRlbnRyeUZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJdGVtRmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcicgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SXRlbVBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=