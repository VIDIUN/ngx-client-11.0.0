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
export function ScheduleEventCancelActionArgs() { }
/** @type {?} */
ScheduleEventCancelActionArgs.prototype.scheduleEventId;
/**
 * Build request payload for service 'scheduleEvent' action 'cancel'.
 *
 * Usage: Mark the KalturaScheduleEvent object as cancelled
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEvent' action 'cancel'.
 *
 * Usage: Mark the KalturaScheduleEvent object as cancelled
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
ScheduleEventCancelAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventCancelAction, _super);
    function ScheduleEventCancelAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEvent', responseConstructor: KalturaScheduleEvent }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventCancelAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleevent' },
            action: { type: 'c', default: 'cancel' },
            scheduleEventId: { type: 'n' }
        });
        return result;
    };
    return ScheduleEventCancelAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEvent' action 'cancel'.
 *
 * Usage: Mark the KalturaScheduleEvent object as cancelled
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventCancelAction };
if (false) {
    /** @type {?} */
    ScheduleEventCancelAction.prototype.scheduleEventId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudENhbmNlbEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVFdmVudENhbmNlbEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBb0M7SUFJL0UsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBdkNMO0VBa0IrQyxjQUFjLEVBc0I1RCxDQUFBOzs7Ozs7Ozs7QUF0QkQscUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50IH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlRXZlbnRDYW5jZWxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVFdmVudCcgYWN0aW9uICdjYW5jZWwnLlxuICpcbiAqIFVzYWdlOiBNYXJrIHRoZSBLYWx0dXJhU2NoZWR1bGVFdmVudCBvYmplY3QgYXMgY2FuY2VsbGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNjaGVkdWxlRXZlbnRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlRXZlbnRDYW5jZWxBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2NoZWR1bGVFdmVudD4ge1xuXG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNjaGVkdWxlRXZlbnRDYW5jZWxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZV9zY2hlZHVsZWV2ZW50JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2FuY2VsJyB9LFxuXHRcdFx0XHRzY2hlZHVsZUV2ZW50SWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19