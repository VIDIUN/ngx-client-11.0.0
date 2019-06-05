/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaExternalMediaEntryListResponse } from './KalturaExternalMediaEntryListResponse';
import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ExternalMediaListActionArgs() { }
/** @type {?|undefined} */
ExternalMediaListActionArgs.prototype.filter;
/** @type {?|undefined} */
ExternalMediaListActionArgs.prototype.pager;
/**
 * Build request payload for service 'externalMedia' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaExternalMediaEntryListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'externalMedia' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaExternalMediaEntryListResponse
 * Server failure response type: KalturaAPIException
 */
ExternalMediaListAction = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalMediaListAction, _super);
    function ExternalMediaListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaExternalMediaEntryListResponse', responseConstructor: KalturaExternalMediaEntryListResponse }) || this;
    }
    /**
     * @return {?}
     */
    ExternalMediaListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'externalmedia_externalmedia' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaExternalMediaEntryFilter, subType: 'KalturaExternalMediaEntryFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return ExternalMediaListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'externalMedia' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaExternalMediaEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export { ExternalMediaListAction };
if (false) {
    /** @type {?} */
    ExternalMediaListAction.prototype.filter;
    /** @type {?} */
    ExternalMediaListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZXJuYWxNZWRpYUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0V4dGVybmFsTWVkaWFMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBNkMsbURBQXFEO0lBSzlGLGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVDQUF1QyxFQUFFLG1CQUFtQixFQUFHLHFDQUFxQyxFQUFHLENBQUM7S0FDOUo7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUM3RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDMUgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0E1Q0w7RUFxQjZDLGNBQWMsRUF3QjFELENBQUE7Ozs7Ozs7OztBQXhCRCxtQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZXJuYWxNZWRpYUxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2V4dGVybmFsTWVkaWEnIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogVXNhZ2U6IExpc3QgbWVkaWEgZW50cmllcyBieSBmaWx0ZXIgd2l0aCBwYWdpbmcgc3VwcG9ydFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsTWVkaWFMaXN0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEV4dGVybmFsTWVkaWFMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5TGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4dGVybmFsbWVkaWFfZXh0ZXJuYWxtZWRpYScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19