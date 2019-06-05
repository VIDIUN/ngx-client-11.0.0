/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCategoryEntryListResponse } from './KalturaCategoryEntryListResponse';
import { KalturaCategoryEntryFilter } from './KalturaCategoryEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryEntryListActionArgs() { }
/** @type {?|undefined} */
CategoryEntryListActionArgs.prototype.filter;
/** @type {?|undefined} */
CategoryEntryListActionArgs.prototype.pager;
/**
 * Build request payload for service 'categoryEntry' action 'list'.
 *
 * Usage: List all categoryEntry
 *
 * Server response type:         KalturaCategoryEntryListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryEntry' action 'list'.
 *
 * Usage: List all categoryEntry
 *
 * Server response type:         KalturaCategoryEntryListResponse
 * Server failure response type: KalturaAPIException
 */
CategoryEntryListAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryEntryListAction, _super);
    function CategoryEntryListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCategoryEntryListResponse', responseConstructor: KalturaCategoryEntryListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CategoryEntryListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryentry' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaCategoryEntryFilter, subType: 'KalturaCategoryEntryFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return CategoryEntryListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryEntry' action 'list'.
 *
 * Usage: List all categoryEntry
 *
 * Server response type:         KalturaCategoryEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export { CategoryEntryListAction };
if (false) {
    /** @type {?} */
    CategoryEntryListAction.prototype.filter;
    /** @type {?} */
    CategoryEntryListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlFbnRyeUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhdGVnb3J5RW50cnlMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBNkMsbURBQWdEO0lBS3pGLGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtDQUFrQyxFQUFFLG1CQUFtQixFQUFHLGdDQUFnQyxFQUFHLENBQUM7S0FDcEo7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQ2hILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBNUNMO0VBcUI2QyxjQUFjLEVBd0IxRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsbUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeUVudHJ5TGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlFbnRyeUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlFbnRyeUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUVudHJ5TGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUNhdGVnb3J5RW50cnlGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5RW50cnknIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogVXNhZ2U6IExpc3QgYWxsIGNhdGVnb3J5RW50cnlcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlFbnRyeUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ2F0ZWdvcnlFbnRyeUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYUNhdGVnb3J5RW50cnlGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBDYXRlZ29yeUVudHJ5TGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5RW50cnlMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5RW50cnlMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5ZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19