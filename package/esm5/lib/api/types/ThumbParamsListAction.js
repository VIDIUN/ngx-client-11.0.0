/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParamsListResponse } from './KalturaThumbParamsListResponse';
import { KalturaThumbParamsFilter } from './KalturaThumbParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsListActionArgs() { }
/** @type {?|undefined} */
ThumbParamsListActionArgs.prototype.filter;
/** @type {?|undefined} */
ThumbParamsListActionArgs.prototype.pager;
/**
 * Build request payload for service 'thumbParams' action 'list'.
 *
 * Usage: List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaThumbParamsListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParams' action 'list'.
 *
 * Usage: List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaThumbParamsListResponse
 * Server failure response type: KalturaAPIException
 */
ThumbParamsListAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsListAction, _super);
    function ThumbParamsListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaThumbParamsListResponse', responseConstructor: KalturaThumbParamsListResponse }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparams' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaThumbParamsFilter, subType: 'KalturaThumbParamsFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return ThumbParamsListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParams' action 'list'.
 *
 * Usage: List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaThumbParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsListAction };
if (false) {
    /** @type {?} */
    ThumbParamsListAction.prototype.filter;
    /** @type {?} */
    ThumbParamsListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNMaXN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9UaHVtYlBhcmFtc0xpc3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBOEM7SUFLckYsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsZ0NBQWdDLEVBQUUsbUJBQW1CLEVBQUcsOEJBQThCLEVBQUcsQ0FBQztLQUNoSjs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUM3RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDNUcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E1Q0w7RUFxQjJDLGNBQWMsRUF3QnhELENBQUE7Ozs7Ozs7OztBQXhCRCxpQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFUaHVtYlBhcmFtc0ZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBUaHVtYlBhcmFtc0xpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndGh1bWJQYXJhbXMnIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogVXNhZ2U6IExpc3QgVGh1bWIgUGFyYW1zIGJ5IGZpbHRlciB3aXRoIHBhZ2luZyBzdXBwb3J0IChCeSBkZWZhdWx0IC0gYWxsIHN5c3RlbSBkZWZhdWx0IHBhcmFtcyB3aWxsIGJlIGxpc3RlZCB0b28pXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYlBhcmFtc0xpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFRodW1iUGFyYW1zTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYlBhcmFtc0xpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJwYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=