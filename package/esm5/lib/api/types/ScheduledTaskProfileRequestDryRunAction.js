/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduledTaskProfileRequestDryRunActionArgs() { }
/** @type {?} */
ScheduledTaskProfileRequestDryRunActionArgs.prototype.scheduledTaskProfileId;
/** @type {?|undefined} */
ScheduledTaskProfileRequestDryRunActionArgs.prototype.maxResults;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'requestDryRun'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduledTaskProfile' action 'requestDryRun'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
ScheduledTaskProfileRequestDryRunAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduledTaskProfileRequestDryRunAction, _super);
    function ScheduledTaskProfileRequestDryRunAction(data) {
        var _this = _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.maxResults === 'undefined')
            _this.maxResults = 500;
        return _this;
    }
    /**
     * @return {?}
     */
    ScheduledTaskProfileRequestDryRunAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'requestDryRun' },
            scheduledTaskProfileId: { type: 'n' },
            maxResults: { type: 'n' }
        });
        return result;
    };
    return ScheduledTaskProfileRequestDryRunAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduledTaskProfile' action 'requestDryRun'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { ScheduledTaskProfileRequestDryRunAction };
if (false) {
    /** @type {?} */
    ScheduledTaskProfileRequestDryRunAction.prototype.scheduledTaskProfileId;
    /** @type {?} */
    ScheduledTaskProfileRequestDryRunAction.prototype.maxResults;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVSZXF1ZXN0RHJ5UnVuQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZWRUYXNrUHJvZmlsZVJlcXVlc3REcnlSdW5BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE2RCxtRUFBc0I7SUFLL0UsaURBQVksSUFBa0Q7UUFBOUQsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsU0FFdkY7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7O0tBQ3JFOzs7O0lBRVMsOERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDcEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xELHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBM0NMO0VBbUI2RCxjQUFjLEVBeUIxRSxDQUFBOzs7Ozs7Ozs7QUF6QkQsbURBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRUYXNrUHJvZmlsZVJlcXVlc3REcnlSdW5BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVkVGFza1Byb2ZpbGVJZCA6IG51bWJlcjtcblx0bWF4UmVzdWx0cz8gOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZWRUYXNrUHJvZmlsZScgYWN0aW9uICdyZXF1ZXN0RHJ5UnVuJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBudW1iZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlZFRhc2tQcm9maWxlUmVxdWVzdERyeVJ1bkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PG51bWJlcj4ge1xuXG4gICAgc2NoZWR1bGVkVGFza1Byb2ZpbGVJZCA6IG51bWJlcjtcblx0bWF4UmVzdWx0cyA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZWRUYXNrUHJvZmlsZVJlcXVlc3REcnlSdW5BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICduJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWF4UmVzdWx0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWF4UmVzdWx0cyA9IDUwMDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZWR0YXNrX3NjaGVkdWxlZHRhc2twcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVxdWVzdERyeVJ1bicgfSxcblx0XHRcdFx0c2NoZWR1bGVkVGFza1Byb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtYXhSZXN1bHRzIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==