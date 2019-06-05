/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent } from './KalturaEntryScheduleEvent';
/**
 * @record
 */
export function KalturaLiveStreamScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamScheduleEventArgs.prototype.projectedAudience;
export class KalturaLiveStreamScheduleEvent extends KalturaEntryScheduleEvent {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamScheduleEvent' },
            projectedAudience: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveStreamScheduleEvent.prototype.projectedAudience;
}
typesMappingStorage['KalturaLiveStreamScheduleEvent'] = KalturaLiveStreamScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFPdkcsTUFBTSxxQ0FBc0MsU0FBUSx5QkFBeUI7Ozs7SUFJekUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQsIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRBcmdzIHtcbiAgICBwcm9qZWN0ZWRBdWRpZW5jZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudCBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQge1xuXG4gICAgcHJvamVjdGVkQXVkaWVuY2UgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnQnIH0sXG5cdFx0XHRcdHByb2plY3RlZEF1ZGllbmNlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudCddID0gS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50OyJdfQ==