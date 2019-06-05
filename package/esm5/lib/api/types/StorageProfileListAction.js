/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaStorageProfileListResponse } from './KalturaStorageProfileListResponse';
import { KalturaStorageProfileFilter } from './KalturaStorageProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StorageProfileListActionArgs() { }
/** @type {?|undefined} */
StorageProfileListActionArgs.prototype.filter;
/** @type {?|undefined} */
StorageProfileListActionArgs.prototype.pager;
/**
 * Build request payload for service 'storageProfile' action 'list'.
 *
 *
 *
 * Server response type:         KalturaStorageProfileListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'storageProfile' action 'list'.
 *
 *
 *
 * Server response type:         KalturaStorageProfileListResponse
 * Server failure response type: KalturaAPIException
 */
StorageProfileListAction = /** @class */ (function (_super) {
    tslib_1.__extends(StorageProfileListAction, _super);
    function StorageProfileListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaStorageProfileListResponse', responseConstructor: KalturaStorageProfileListResponse }) || this;
    }
    /**
     * @return {?}
     */
    StorageProfileListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'storageprofile' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaStorageProfileFilter, subType: 'KalturaStorageProfileFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return StorageProfileListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'storageProfile' action 'list'.
 *
 *
 *
 * Server response type:         KalturaStorageProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export { StorageProfileListAction };
if (false) {
    /** @type {?} */
    StorageProfileListAction.prototype.filter;
    /** @type {?} */
    StorageProfileListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZVByb2ZpbGVMaXN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TdG9yYWdlUHJvZmlsZUxpc3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBaUQ7SUFLM0Ysa0NBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUNBQW1DLEVBQUUsbUJBQW1CLEVBQUcsaUNBQWlDLEVBQUcsQ0FBQztLQUN0Sjs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ2hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNsSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTVDTDtFQXFCOEMsY0FBYyxFQXdCM0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELG9DQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VQcm9maWxlTGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzdG9yYWdlUHJvZmlsZScgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU3RvcmFnZVByb2ZpbGVMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2VQcm9maWxlTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTdG9yYWdlUHJvZmlsZUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogU3RvcmFnZVByb2ZpbGVMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGVMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzdG9yYWdlcHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==