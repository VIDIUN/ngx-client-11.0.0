/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemListActionArgs() { }
/** @type {?} */
CaptionAssetItemListActionArgs.prototype.captionAssetId;
/** @type {?|undefined} */
CaptionAssetItemListActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemListActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
CaptionAssetItemListAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetItemListAction, _super);
    function CaptionAssetItemListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionAssetItemListResponse', responseConstructor: KalturaCaptionAssetItemListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetItemListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'captionsearch_captionassetitem' },
            action: { type: 'c', default: 'list' },
            captionAssetId: { type: 's' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return CaptionAssetItemListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetItemListAction };
if (false) {
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetId;
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldEl0ZW1MaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFNUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQW1EO0lBTS9GLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFDQUFxQyxFQUFFLG1CQUFtQixFQUFHLG1DQUFtQyxFQUFHLENBQUM7S0FDMUo7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNoRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3RJLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0EvQ0w7RUFzQmdELGNBQWMsRUEwQjdELENBQUE7Ozs7Ozs7OztBQTFCRCxzQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldEl0ZW1MaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNhcHRpb25Bc3NldElkIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRJdGVtRmlsdGVyPyA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtUGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2FwdGlvbkFzc2V0SXRlbScgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdCBjYXB0aW9uIGFzc2V0IGl0ZW1zIGJ5IGZpbHRlciBhbmQgcGFnZXJcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2FwdGlvbkFzc2V0SXRlbUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZT4ge1xuXG4gICAgY2FwdGlvbkFzc2V0SWQgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbVBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhcHRpb25Bc3NldEl0ZW1MaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2FwdGlvbnNlYXJjaF9jYXB0aW9uYXNzZXRpdGVtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdCcgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXInIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEl0ZW1QYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19