/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';
import { KalturaBeaconEnhanceFilter } from './KalturaBeaconEnhanceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BeaconEnhanceSearchActionArgs() { }
/** @type {?|undefined} */
BeaconEnhanceSearchActionArgs.prototype.filter;
/** @type {?|undefined} */
BeaconEnhanceSearchActionArgs.prototype.pager;
/**
 * Build request payload for service 'beacon' action 'enhanceSearch'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'beacon' action 'enhanceSearch'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
BeaconEnhanceSearchAction = /** @class */ (function (_super) {
    tslib_1.__extends(BeaconEnhanceSearchAction, _super);
    function BeaconEnhanceSearchAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBeaconListResponse', responseConstructor: KalturaBeaconListResponse }) || this;
    }
    /**
     * @return {?}
     */
    BeaconEnhanceSearchAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'beacon_beacon' },
            action: { type: 'c', default: 'enhanceSearch' },
            filter: { type: 'o', subTypeConstructor: KalturaBeaconEnhanceFilter, subType: 'KalturaBeaconEnhanceFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return BeaconEnhanceSearchAction;
}(KalturaRequest));
/**
 * Build request payload for service 'beacon' action 'enhanceSearch'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
export { BeaconEnhanceSearchAction };
if (false) {
    /** @type {?} */
    BeaconEnhanceSearchAction.prototype.filter;
    /** @type {?} */
    BeaconEnhanceSearchAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhY29uRW5oYW5jZVNlYXJjaEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmVhY29uRW5oYW5jZVNlYXJjaEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUF5QztJQUtwRixtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRyx5QkFBeUIsRUFBRyxDQUFDO0tBQ3RJOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQy9ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNoSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQTVDTDtFQXFCK0MsY0FBYyxFQXdCNUQsQ0FBQTs7Ozs7Ozs7O0FBeEJELHFDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUJlYWNvbkVuaGFuY2VGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvbkVuaGFuY2VTZWFyY2hBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiZWFjb24nIGFjdGlvbiAnZW5oYW5jZVNlYXJjaCcuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJlYWNvbkxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmVhY29uRW5oYW5jZVNlYXJjaEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCZWFjb25MaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogQmVhY29uRW5oYW5jZVNlYXJjaEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbkxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiZWFjb25fYmVhY29uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZW5oYW5jZVNlYXJjaCcgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmVhY29uRW5oYW5jZUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQmVhY29uRW5oYW5jZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==