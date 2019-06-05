/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemSearchActionArgs() { }
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.entryFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
CaptionAssetItemSearchAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetItemSearchAction, _super);
    function CaptionAssetItemSearchAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionAssetItemListResponse', responseConstructor: KalturaCaptionAssetItemListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetItemSearchAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'captionsearch_captionassetitem' },
            action: { type: 'c', default: 'search' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return CaptionAssetItemSearchAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetItemSearchAction };
if (false) {
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.entryFilter;
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUFtRDtJQU1qRyxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRyxtQ0FBbUMsRUFBRyxDQUFDO0tBQzFKOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzdHLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdEkscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQWhETDtFQXVCa0QsY0FBYyxFQTBCL0QsQ0FBQTs7Ozs7Ozs7O0FBMUJELHdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uQXNzZXRJdGVtU2VhcmNoQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5RmlsdGVyPyA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI/IDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1QYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uQXNzZXRJdGVtJyBhY3Rpb24gJ3NlYXJjaCcuXG4gKlxuICogVXNhZ2U6IFNlYXJjaCBjYXB0aW9uIGFzc2V0IGl0ZW1zIGJ5IGZpbHRlciwgcGFnZXIgYW5kIGZyZWUgdGV4dFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uQXNzZXRJdGVtU2VhcmNoQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2U+IHtcblxuICAgIGVudHJ5RmlsdGVyIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtUGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IENhcHRpb25Bc3NldEl0ZW1TZWFyY2hBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uc2VhcmNoX2NhcHRpb25hc3NldGl0ZW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2gnIH0sXG5cdFx0XHRcdGVudHJ5RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJdGVtUGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==