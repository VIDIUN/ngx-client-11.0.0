/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStreamListResponse } from './KalturaLiveStreamListResponse';
import { KalturaLiveStreamEntryFilter } from './KalturaLiveStreamEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamListActionArgs() { }
/** @type {?|undefined} */
LiveStreamListActionArgs.prototype.filter;
/** @type {?|undefined} */
LiveStreamListActionArgs.prototype.pager;
/**
 * Build request payload for service 'liveStream' action 'list'.
 *
 * Usage: List live stream entries by filter with paging support
 *
 * Server response type:         KalturaLiveStreamListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'list'.
 *
 * Usage: List live stream entries by filter with paging support
 *
 * Server response type:         KalturaLiveStreamListResponse
 * Server failure response type: KalturaAPIException
 */
LiveStreamListAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamListAction, _super);
    function LiveStreamListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamListResponse', responseConstructor: KalturaLiveStreamListResponse }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaLiveStreamEntryFilter, subType: 'KalturaLiveStreamEntryFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return LiveStreamListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'list'.
 *
 * Usage: List live stream entries by filter with paging support
 *
 * Server response type:         KalturaLiveStreamListResponse
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamListAction };
if (false) {
    /** @type {?} */
    LiveStreamListAction.prototype.filter;
    /** @type {?} */
    LiveStreamListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1MaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQTZDO0lBS25GLDhCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLCtCQUErQixFQUFFLG1CQUFtQixFQUFHLDZCQUE2QixFQUFHLENBQUM7S0FDOUk7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3BILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBNUNMO0VBcUIwQyxjQUFjLEVBd0J2RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsZ0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbUxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogVXNhZ2U6IExpc3QgbGl2ZSBzdHJlYW0gZW50cmllcyBieSBmaWx0ZXIgd2l0aCBwYWdpbmcgc3VwcG9ydFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlU3RyZWFtTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlU3RyZWFtTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogTGl2ZVN0cmVhbUxpc3RBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdCcgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=