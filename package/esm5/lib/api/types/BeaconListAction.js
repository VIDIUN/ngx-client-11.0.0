/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';
import { KalturaBeaconFilter } from './KalturaBeaconFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BeaconListActionArgs() { }
/** @type {?|undefined} */
BeaconListActionArgs.prototype.filter;
/** @type {?|undefined} */
BeaconListActionArgs.prototype.pager;
/**
 * Build request payload for service 'beacon' action 'list'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'beacon' action 'list'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
BeaconListAction = /** @class */ (function (_super) {
    tslib_1.__extends(BeaconListAction, _super);
    function BeaconListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBeaconListResponse', responseConstructor: KalturaBeaconListResponse }) || this;
    }
    /**
     * @return {?}
     */
    BeaconListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'beacon_beacon' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaBeaconFilter, subType: 'KalturaBeaconFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return BeaconListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'beacon' action 'list'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
export { BeaconListAction };
if (false) {
    /** @type {?} */
    BeaconListAction.prototype.filter;
    /** @type {?} */
    BeaconListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhY29uTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmVhY29uTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXNDLDRDQUF5QztJQUszRSwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRyx5QkFBeUIsRUFBRyxDQUFDO0tBQ3RJOzs7O0lBRVMsdUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQy9ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNsRyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQTVDTDtFQXFCc0MsY0FBYyxFQXdCbkQsQ0FBQTs7Ozs7Ozs7O0FBeEJELDRCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUJlYWNvbkZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUJlYWNvbkZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCZWFjb25MaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhQmVhY29uRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiZWFjb24nIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJlYWNvbkxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmVhY29uTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCZWFjb25MaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFCZWFjb25GaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBCZWFjb25MaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmVhY29uTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCZWFjb25MaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2JlYWNvbl9iZWFjb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCZWFjb25GaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbkZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==