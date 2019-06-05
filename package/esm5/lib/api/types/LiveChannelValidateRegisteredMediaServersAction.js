/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveChannelValidateRegisteredMediaServersActionArgs() { }
/** @type {?} */
LiveChannelValidateRegisteredMediaServersActionArgs.prototype.entryId;
/**
 * Build request payload for service 'liveChannel' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveChannel' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
LiveChannelValidateRegisteredMediaServersAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveChannelValidateRegisteredMediaServersAction, _super);
    function LiveChannelValidateRegisteredMediaServersAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    LiveChannelValidateRegisteredMediaServersAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livechannel' },
            action: { type: 'c', default: 'validateRegisteredMediaServers' },
            entryId: { type: 's' }
        });
        return result;
    };
    return LiveChannelValidateRegisteredMediaServersAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveChannel' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { LiveChannelValidateRegisteredMediaServersAction };
if (false) {
    /** @type {?} */
    LiveChannelValidateRegisteredMediaServersAction.prototype.entryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUNoYW5uZWxWYWxpZGF0ZVJlZ2lzdGVyZWRNZWRpYVNlcnZlcnNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVDaGFubmVsVmFsaWRhdGVSZWdpc3RlcmVkTWVkaWFTZXJ2ZXJzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXFFLDJFQUFvQjtJQUlyRix5REFBWSxJQUEwRDtlQUVsRSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxzRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MERBdkNMO0VBa0JxRSxjQUFjLEVBc0JsRixDQUFBOzs7Ozs7Ozs7QUF0QkQsMkRBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlQ2hhbm5lbFZhbGlkYXRlUmVnaXN0ZXJlZE1lZGlhU2VydmVyc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZUNoYW5uZWwnIGFjdGlvbiAndmFsaWRhdGVSZWdpc3RlcmVkTWVkaWFTZXJ2ZXJzJy5cbiAqXG4gKiBVc2FnZTogVmFsaWRhdGVzIGFsbCByZWdpc3RlcmVkIG1lZGlhIHNlcnZlcnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlQ2hhbm5lbFZhbGlkYXRlUmVnaXN0ZXJlZE1lZGlhU2VydmVyc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHZvaWQ+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZUNoYW5uZWxWYWxpZGF0ZVJlZ2lzdGVyZWRNZWRpYVNlcnZlcnNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICd2JywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVjaGFubmVsJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndmFsaWRhdGVSZWdpc3RlcmVkTWVkaWFTZXJ2ZXJzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==