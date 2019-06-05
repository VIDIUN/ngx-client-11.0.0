/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventClassificationType } from './KalturaScheduleEventClassificationType';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaScheduleEventRecurrence } from './KalturaScheduleEventRecurrence';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.summary;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.description;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.startDate;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.endDate;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.classificationType;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.geoLatitude;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.geoLongitude;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.location;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.organizer;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.ownerId;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.priority;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.sequence;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.recurrenceType;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.duration;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.contact;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.comment;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.tags;
/** @type {?|undefined} */
KalturaScheduleEventArgs.prototype.recurrence;
export class KalturaScheduleEvent extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaScheduleEvent' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            parentId: { type: 'n', readOnly: true },
            summary: { type: 's' },
            description: { type: 's' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaScheduleEventStatus, subType: 'KalturaScheduleEventStatus' },
            startDate: { type: 'd' },
            endDate: { type: 'd' },
            referenceId: { type: 's' },
            classificationType: { type: 'en', subTypeConstructor: KalturaScheduleEventClassificationType, subType: 'KalturaScheduleEventClassificationType' },
            geoLatitude: { type: 'n' },
            geoLongitude: { type: 'n' },
            location: { type: 's' },
            organizer: { type: 's' },
            ownerId: { type: 's' },
            priority: { type: 'n' },
            sequence: { type: 'n' },
            recurrenceType: { type: 'en', subTypeConstructor: KalturaScheduleEventRecurrenceType, subType: 'KalturaScheduleEventRecurrenceType' },
            duration: { type: 'n' },
            contact: { type: 's' },
            comment: { type: 's' },
            tags: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            recurrence: { type: 'o', subTypeConstructor: KalturaScheduleEventRecurrence, subType: 'KalturaScheduleEventRecurrence' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduleEvent.prototype.id;
    /** @type {?} */
    KalturaScheduleEvent.prototype.partnerId;
    /** @type {?} */
    KalturaScheduleEvent.prototype.parentId;
    /** @type {?} */
    KalturaScheduleEvent.prototype.summary;
    /** @type {?} */
    KalturaScheduleEvent.prototype.description;
    /** @type {?} */
    KalturaScheduleEvent.prototype.status;
    /** @type {?} */
    KalturaScheduleEvent.prototype.startDate;
    /** @type {?} */
    KalturaScheduleEvent.prototype.endDate;
    /** @type {?} */
    KalturaScheduleEvent.prototype.referenceId;
    /** @type {?} */
    KalturaScheduleEvent.prototype.classificationType;
    /** @type {?} */
    KalturaScheduleEvent.prototype.geoLatitude;
    /** @type {?} */
    KalturaScheduleEvent.prototype.geoLongitude;
    /** @type {?} */
    KalturaScheduleEvent.prototype.location;
    /** @type {?} */
    KalturaScheduleEvent.prototype.organizer;
    /** @type {?} */
    KalturaScheduleEvent.prototype.ownerId;
    /** @type {?} */
    KalturaScheduleEvent.prototype.priority;
    /** @type {?} */
    KalturaScheduleEvent.prototype.sequence;
    /** @type {?} */
    KalturaScheduleEvent.prototype.recurrenceType;
    /** @type {?} */
    KalturaScheduleEvent.prototype.duration;
    /** @type {?} */
    KalturaScheduleEvent.prototype.contact;
    /** @type {?} */
    KalturaScheduleEvent.prototype.comment;
    /** @type {?} */
    KalturaScheduleEvent.prototype.tags;
    /** @type {?} */
    KalturaScheduleEvent.prototype.createdAt;
    /** @type {?} */
    KalturaScheduleEvent.prototype.updatedAt;
    /** @type {?} */
    KalturaScheduleEvent.prototype.recurrence;
}
typesMappingStorage['KalturaScheduleEvent'] = KalturaScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJsRixNQUFNLDJCQUE0QixTQUFRLGlCQUFpQjs7OztJQTRCdkQsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDbEksU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUNySixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3pJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNuSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50Q2xhc3NpZmljYXRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZUV2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHN1bW1hcnk/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHN0YXJ0RGF0ZT8gOiBEYXRlO1xuXHRlbmREYXRlPyA6IERhdGU7XG5cdHJlZmVyZW5jZUlkPyA6IHN0cmluZztcblx0Y2xhc3NpZmljYXRpb25UeXBlPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50Q2xhc3NpZmljYXRpb25UeXBlO1xuXHRnZW9MYXRpdHVkZT8gOiBudW1iZXI7XG5cdGdlb0xvbmdpdHVkZT8gOiBudW1iZXI7XG5cdGxvY2F0aW9uPyA6IHN0cmluZztcblx0b3JnYW5pemVyPyA6IHN0cmluZztcblx0b3duZXJJZD8gOiBzdHJpbmc7XG5cdHByaW9yaXR5PyA6IG51bWJlcjtcblx0c2VxdWVuY2U/IDogbnVtYmVyO1xuXHRyZWN1cnJlbmNlVHlwZT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlO1xuXHRkdXJhdGlvbj8gOiBudW1iZXI7XG5cdGNvbnRhY3Q/IDogc3RyaW5nO1xuXHRjb21tZW50PyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdHJlY3VycmVuY2U/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVFdmVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcmVudElkIDogbnVtYmVyO1xuXHRzdW1tYXJ5IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXM7XG5cdHN0YXJ0RGF0ZSA6IERhdGU7XG5cdGVuZERhdGUgOiBEYXRlO1xuXHRyZWZlcmVuY2VJZCA6IHN0cmluZztcblx0Y2xhc3NpZmljYXRpb25UeXBlIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGU7XG5cdGdlb0xhdGl0dWRlIDogbnVtYmVyO1xuXHRnZW9Mb25naXR1ZGUgOiBudW1iZXI7XG5cdGxvY2F0aW9uIDogc3RyaW5nO1xuXHRvcmdhbml6ZXIgOiBzdHJpbmc7XG5cdG93bmVySWQgOiBzdHJpbmc7XG5cdHByaW9yaXR5IDogbnVtYmVyO1xuXHRzZXF1ZW5jZSA6IG51bWJlcjtcblx0cmVjdXJyZW5jZVR5cGUgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblx0Y29udGFjdCA6IHN0cmluZztcblx0Y29tbWVudCA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVjdXJyZW5jZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdW1tYXJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXJ0RGF0ZSA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRlbmREYXRlIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNsYXNzaWZpY2F0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50Q2xhc3NpZmljYXRpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50Q2xhc3NpZmljYXRpb25UeXBlJyB9LFxuXHRcdFx0XHRnZW9MYXRpdHVkZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRnZW9Mb25naXR1ZGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bG9jYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3JnYW5pemVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpb3JpdHkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2VxdWVuY2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVjdXJyZW5jZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUnIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnRhY3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29tbWVudCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlY3VycmVuY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZUV2ZW50J10gPSBLYWx0dXJhU2NoZWR1bGVFdmVudDsiXX0=