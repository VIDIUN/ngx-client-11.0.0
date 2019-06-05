/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventGetConflictsActionArgs() { }
/** @type {?} */
ScheduleEventGetConflictsActionArgs.prototype.resourceIds;
/** @type {?} */
ScheduleEventGetConflictsActionArgs.prototype.scheduleEvent;
/** @type {?|undefined} */
ScheduleEventGetConflictsActionArgs.prototype.scheduleEventIdToIgnore;
/**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
ScheduleEventGetConflictsAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventGetConflictsAction, _super);
    function ScheduleEventGetConflictsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEventListResponse', responseConstructor: KalturaScheduleEventListResponse }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventGetConflictsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleevent' },
            action: { type: 'c', default: 'getConflicts' },
            resourceIds: { type: 's' },
            scheduleEvent: { type: 'o', subTypeConstructor: KalturaScheduleEvent, subType: 'KalturaScheduleEvent' },
            scheduleEventIdToIgnore: { type: 's' }
        });
        return result;
    };
    return ScheduleEventGetConflictsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventGetConflictsAction };
if (false) {
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.resourceIds;
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.scheduleEvent;
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.scheduleEventIdToIgnore;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQXFELDJEQUFnRDtJQU1qRyx5Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBRyxnQ0FBZ0MsRUFBRyxDQUFDO0tBQ3BKOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBOUNMO0VBcUJxRCxjQUFjLEVBMEJsRSxDQUFBOzs7Ozs7Ozs7QUExQkQsMkNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50TGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudExpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50IH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZUV2ZW50R2V0Q29uZmxpY3RzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHJlc291cmNlSWRzIDogc3RyaW5nO1xuXHRzY2hlZHVsZUV2ZW50IDogS2FsdHVyYVNjaGVkdWxlRXZlbnQ7XG5cdHNjaGVkdWxlRXZlbnRJZFRvSWdub3JlPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlRXZlbnQnIGFjdGlvbiAnZ2V0Q29uZmxpY3RzJy5cbiAqXG4gKiBVc2FnZTogTGlzdCBjb25mbGljdGluZyBldmVudHMgZm9yIHJlc291cmNlc0lkcyBieSBldmVudCdzIGRhdGVzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNjaGVkdWxlRXZlbnRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlRXZlbnRHZXRDb25mbGljdHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2NoZWR1bGVFdmVudExpc3RSZXNwb25zZT4ge1xuXG4gICAgcmVzb3VyY2VJZHMgOiBzdHJpbmc7XG5cdHNjaGVkdWxlRXZlbnQgOiBLYWx0dXJhU2NoZWR1bGVFdmVudDtcblx0c2NoZWR1bGVFdmVudElkVG9JZ25vcmUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlZXZlbnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRDb25mbGljdHMnIH0sXG5cdFx0XHRcdHJlc291cmNlSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNjaGVkdWxlRXZlbnQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50LCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50JyB9LFxuXHRcdFx0XHRzY2hlZHVsZUV2ZW50SWRUb0lnbm9yZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=