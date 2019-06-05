/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventResourceUpdateActionArgs() { }
/** @type {?} */
ScheduleEventResourceUpdateActionArgs.prototype.scheduleEventId;
/** @type {?} */
ScheduleEventResourceUpdateActionArgs.prototype.scheduleResourceId;
/** @type {?} */
ScheduleEventResourceUpdateActionArgs.prototype.scheduleEventResource;
/**
 * Build request payload for service 'scheduleEventResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEventResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
ScheduleEventResourceUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventResourceUpdateAction, _super);
    function ScheduleEventResourceUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEventResource', responseConstructor: KalturaScheduleEventResource }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventResourceUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleeventresource' },
            action: { type: 'c', default: 'update' },
            scheduleEventId: { type: 'n' },
            scheduleResourceId: { type: 'n' },
            scheduleEventResource: { type: 'o', subTypeConstructor: KalturaScheduleEventResource, subType: 'KalturaScheduleEventResource' }
        });
        return result;
    };
    return ScheduleEventResourceUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEventResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventResourceUpdateAction };
if (false) {
    /** @type {?} */
    ScheduleEventResourceUpdateAction.prototype.scheduleEventId;
    /** @type {?} */
    ScheduleEventResourceUpdateAction.prototype.scheduleResourceId;
    /** @type {?} */
    ScheduleEventResourceUpdateAction.prototype.scheduleEventResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudFJlc291cmNlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZUV2ZW50UmVzb3VyY2VVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBNEM7SUFNL0YsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUcsNEJBQTRCLEVBQUcsQ0FBQztLQUM1STs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ2hGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQzFILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBN0NMO0VBb0J1RCxjQUFjLEVBMEJwRSxDQUFBOzs7Ozs7Ozs7QUExQkQsNkNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZUV2ZW50UmVzb3VyY2VVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xuXHRzY2hlZHVsZVJlc291cmNlSWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlRXZlbnRSZXNvdXJjZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2U7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZUV2ZW50UmVzb3VyY2UnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFuIGV4aXN0aW5nIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2Ugb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVFdmVudFJlc291cmNlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZT4ge1xuXG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xuXHRzY2hlZHVsZVJlc291cmNlSWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlRXZlbnRSZXNvdXJjZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVFdmVudFJlc291cmNlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlZXZlbnRyZXNvdXJjZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0c2NoZWR1bGVFdmVudElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlUmVzb3VyY2VJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZUV2ZW50UmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19