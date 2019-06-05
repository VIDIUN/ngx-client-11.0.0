/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ScheduledTaskProfileServeDryRunResultsActionArgs() { }
/** @type {?} */
ScheduledTaskProfileServeDryRunResultsActionArgs.prototype.requestId;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
ScheduledTaskProfileServeDryRunResultsAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduledTaskProfileServeDryRunResultsAction, _super);
    function ScheduledTaskProfileServeDryRunResultsAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    ScheduledTaskProfileServeDryRunResultsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'serveDryRunResults' },
            requestId: { type: 'n' }
        });
        return result;
    };
    return ScheduledTaskProfileServeDryRunResultsAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { ScheduledTaskProfileServeDryRunResultsAction };
if (false) {
    /** @type {?} */
    ScheduledTaskProfileServeDryRunResultsAction.prototype.requestId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVTZXJ2ZURyeVJ1blJlc3VsdHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVkdWxlZFRhc2tQcm9maWxlU2VydmVEcnlSdW5SZXN1bHRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjckY7Ozs7Ozs7O0FBQUE7SUFBa0Usd0VBQWtCO0lBSWhGLHNEQUFZLElBQXVEO2VBRS9ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDcEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VEQXZDTDtFQWtCa0Usa0JBQWtCLEVBc0JuRixDQUFBOzs7Ozs7Ozs7QUF0QkQsd0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVkVGFza1Byb2ZpbGVTZXJ2ZURyeVJ1blJlc3VsdHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIHJlcXVlc3RJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlZFRhc2tQcm9maWxlJyBhY3Rpb24gJ3NlcnZlRHJ5UnVuUmVzdWx0cycuXG4gKlxuICogVXNhZ2U6IFNlcnZlcyBkcnkgcnVuIHJlc3VsdHMgYnkgaXRzIHJlcXVlc3QgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlZFRhc2tQcm9maWxlU2VydmVEcnlSdW5SZXN1bHRzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIHJlcXVlc3RJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZWRUYXNrUHJvZmlsZVNlcnZlRHJ5UnVuUmVzdWx0c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZWR0YXNrX3NjaGVkdWxlZHRhc2twcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVEcnlSdW5SZXN1bHRzJyB9LFxuXHRcdFx0XHRyZXF1ZXN0SWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19