/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ScheduleEventGetConflictsAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaScheduleEventListResponse', responseConstructor: KalturaScheduleEventListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleevent' },
            action: { type: 'c', default: 'getConflicts' },
            resourceIds: { type: 's' },
            scheduleEvent: { type: 'o', subTypeConstructor: KalturaScheduleEvent, subType: 'KalturaScheduleEvent' },
            scheduleEventIdToIgnore: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.resourceIds;
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.scheduleEvent;
    /** @type {?} */
    ScheduleEventGetConflictsAction.prototype.scheduleEventIdToIgnore;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxzQ0FBdUMsU0FBUSxjQUFnRDs7OztJQU1qRyxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBRyxnQ0FBZ0MsRUFBRyxDQUFDLENBQUM7S0FDcko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzNHLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50TGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnQgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50JztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlRXZlbnRHZXRDb25mbGljdHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVzb3VyY2VJZHMgOiBzdHJpbmc7XG5cdHNjaGVkdWxlRXZlbnQgOiBLYWx0dXJhU2NoZWR1bGVFdmVudDtcblx0c2NoZWR1bGVFdmVudElkVG9JZ25vcmU/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVFdmVudCcgYWN0aW9uICdnZXRDb25mbGljdHMnLlxuICpcbiAqIFVzYWdlOiBMaXN0IGNvbmZsaWN0aW5nIGV2ZW50cyBmb3IgcmVzb3VyY2VzSWRzIGJ5IGV2ZW50J3MgZGF0ZXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVFdmVudExpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVFdmVudEdldENvbmZsaWN0c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZUV2ZW50TGlzdFJlc3BvbnNlPiB7XG5cbiAgICByZXNvdXJjZUlkcyA6IHN0cmluZztcblx0c2NoZWR1bGVFdmVudCA6IEthbHR1cmFTY2hlZHVsZUV2ZW50O1xuXHRzY2hlZHVsZUV2ZW50SWRUb0lnbm9yZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZUV2ZW50R2V0Q29uZmxpY3RzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudExpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudExpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVfc2NoZWR1bGVldmVudCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldENvbmZsaWN0cycgfSxcblx0XHRcdFx0cmVzb3VyY2VJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NoZWR1bGVFdmVudCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnQsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnQnIH0sXG5cdFx0XHRcdHNjaGVkdWxlRXZlbnRJZFRvSWdub3JlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==