/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
/**
 * @record
 */
export function KalturaEntryScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.templateEntryId;
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.categoryIds;
export class KalturaEntryScheduleEvent extends KalturaScheduleEvent {
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
            objectType: { type: 'c', default: 'KalturaEntryScheduleEvent' },
            templateEntryId: { type: 's' },
            entryIds: { type: 's' },
            categoryIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.templateEntryId;
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.entryIds;
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.categoryIds;
}
typesMappingStorage['KalturaEntryScheduleEvent'] = KalturaEntryScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTeEYsTUFBTSxnQ0FBaUMsU0FBUSxvQkFBb0I7Ozs7SUFNL0QsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50LCBLYWx0dXJhU2NoZWR1bGVFdmVudEFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhU2NoZWR1bGVFdmVudEFyZ3Mge1xuICAgIHRlbXBsYXRlRW50cnlJZD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRzPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50IGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnQge1xuXG4gICAgdGVtcGxhdGVFbnRyeUlkIDogc3RyaW5nO1xuXHRlbnRyeUlkcyA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudCcgfSxcblx0XHRcdFx0dGVtcGxhdGVFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQnXSA9IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQ7Il19