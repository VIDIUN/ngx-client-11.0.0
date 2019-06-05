/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSearchResultResponse } from './KalturaSearchResultResponse';
import { KalturaSearch } from './KalturaSearch';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchSearchActionArgs() { }
/** @type {?} */
SearchSearchActionArgs.prototype.search;
/** @type {?|undefined} */
SearchSearchActionArgs.prototype.pager;
/**
 * Build request payload for service 'search' action 'search'.
 *
 * Usage: Search for media in one of the supported media providers
 *
 * Server response type:         KalturaSearchResultResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'search' action 'search'.
 *
 * Usage: Search for media in one of the supported media providers
 *
 * Server response type:         KalturaSearchResultResponse
 * Server failure response type: KalturaAPIException
 */
SearchSearchAction = /** @class */ (function (_super) {
    tslib_1.__extends(SearchSearchAction, _super);
    function SearchSearchAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSearchResultResponse', responseConstructor: KalturaSearchResultResponse }) || this;
    }
    /**
     * @return {?}
     */
    SearchSearchAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'search' },
            action: { type: 'c', default: 'search' },
            search: { type: 'o', subTypeConstructor: KalturaSearch, subType: 'KalturaSearch' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return SearchSearchAction;
}(KalturaRequest));
/**
 * Build request payload for service 'search' action 'search'.
 *
 * Usage: Search for media in one of the supported media providers
 *
 * Server response type:         KalturaSearchResultResponse
 * Server failure response type: KalturaAPIException
 */
export { SearchSearchAction };
if (false) {
    /** @type {?} */
    SearchSearchAction.prototype.search;
    /** @type {?} */
    SearchSearchAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU2VhcmNoQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZWFyY2hTZWFyY2hBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQTJDO0lBSy9FLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDZCQUE2QixFQUFFLG1CQUFtQixFQUFHLDJCQUEyQixFQUFHLENBQUM7S0FDMUk7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDdEYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkE1Q0w7RUFxQndDLGNBQWMsRUF3QnJELENBQUE7Ozs7Ozs7OztBQXhCRCw4QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaFJlc3VsdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoUmVzdWx0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFNlYXJjaEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWFyY2ggOiBLYWx0dXJhU2VhcmNoO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZWFyY2gnIGFjdGlvbiAnc2VhcmNoJy5cbiAqXG4gKiBVc2FnZTogU2VhcmNoIGZvciBtZWRpYSBpbiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBtZWRpYSBwcm92aWRlcnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2VhcmNoUmVzdWx0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaFNlYXJjaEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZWFyY2hSZXN1bHRSZXNwb25zZT4ge1xuXG4gICAgc2VhcmNoIDogS2FsdHVyYVNlYXJjaDtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2VhcmNoU2VhcmNoQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoUmVzdWx0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFJlc3VsdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2gnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2gnIH0sXG5cdFx0XHRcdHNlYXJjaCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaCwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19