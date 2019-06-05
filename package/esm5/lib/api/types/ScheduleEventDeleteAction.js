/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventDeleteActionArgs() { }
/** @type {?} */
ScheduleEventDeleteActionArgs.prototype.scheduleEventId;
/**
 * Build request payload for service 'scheduleEvent' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleEvent object as deleted
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEvent' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleEvent object as deleted
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
ScheduleEventDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventDeleteAction, _super);
    function ScheduleEventDeleteAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEvent', responseConstructor: KalturaScheduleEvent }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleevent' },
            action: { type: 'c', default: 'delete' },
            scheduleEventId: { type: 'n' }
        });
        return result;
    };
    return ScheduleEventDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEvent' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleEvent object as deleted
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventDeleteAction };
if (false) {
    /** @type {?} */
    ScheduleEventDeleteAction.prototype.scheduleEventId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudERlbGV0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVFdmVudERlbGV0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBb0M7SUFJL0UsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBdkNMO0VBa0IrQyxjQUFjLEVBc0I1RCxDQUFBOzs7Ozs7Ozs7QUF0QkQscUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50IH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlRXZlbnREZWxldGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVFdmVudCcgYWN0aW9uICdkZWxldGUnLlxuICpcbiAqIFVzYWdlOiBNYXJrIHRoZSBLYWx0dXJhU2NoZWR1bGVFdmVudCBvYmplY3QgYXMgZGVsZXRlZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTY2hlZHVsZUV2ZW50XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUV2ZW50RGVsZXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNjaGVkdWxlRXZlbnQ+IHtcblxuICAgIHNjaGVkdWxlRXZlbnRJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZUV2ZW50RGVsZXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVfc2NoZWR1bGVldmVudCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RlbGV0ZScgfSxcblx0XHRcdFx0c2NoZWR1bGVFdmVudElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==