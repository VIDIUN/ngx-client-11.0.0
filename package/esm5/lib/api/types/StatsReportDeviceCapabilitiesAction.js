/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StatsReportDeviceCapabilitiesActionArgs() { }
/** @type {?} */
StatsReportDeviceCapabilitiesActionArgs.prototype.data;
/**
 * Build request payload for service 'stats' action 'reportDeviceCapabilities'.
 *
 * Usage: Use this action to report device capabilities to the kaltura server
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'stats' action 'reportDeviceCapabilities'.
 *
 * Usage: Use this action to report device capabilities to the kaltura server
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
StatsReportDeviceCapabilitiesAction = /** @class */ (function (_super) {
    tslib_1.__extends(StatsReportDeviceCapabilitiesAction, _super);
    function StatsReportDeviceCapabilitiesAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    StatsReportDeviceCapabilitiesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'stats' },
            action: { type: 'c', default: 'reportDeviceCapabilities' },
            data: { type: 's' }
        });
        return result;
    };
    return StatsReportDeviceCapabilitiesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'stats' action 'reportDeviceCapabilities'.
 *
 * Usage: Use this action to report device capabilities to the kaltura server
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { StatsReportDeviceCapabilitiesAction };
if (false) {
    /** @type {?} */
    StatsReportDeviceCapabilitiesAction.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNSZXBvcnREZXZpY2VDYXBhYmlsaXRpZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1N0YXRzUmVwb3J0RGV2aWNlQ2FwYWJpbGl0aWVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXlELCtEQUFvQjtJQUl6RSw2Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0QsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBdkNMO0VBa0J5RCxjQUFjLEVBc0J0RSxDQUFBOzs7Ozs7Ozs7QUF0QkQsK0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0c1JlcG9ydERldmljZUNhcGFiaWxpdGllc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBkYXRhIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc3RhdHMnIGFjdGlvbiAncmVwb3J0RGV2aWNlQ2FwYWJpbGl0aWVzJy5cbiAqXG4gKiBVc2FnZTogVXNlIHRoaXMgYWN0aW9uIHRvIHJlcG9ydCBkZXZpY2UgY2FwYWJpbGl0aWVzIHRvIHRoZSBrYWx0dXJhIHNlcnZlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRzUmVwb3J0RGV2aWNlQ2FwYWJpbGl0aWVzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgZGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTdGF0c1JlcG9ydERldmljZUNhcGFiaWxpdGllc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhdHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnREZXZpY2VDYXBhYmlsaXRpZXMnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19