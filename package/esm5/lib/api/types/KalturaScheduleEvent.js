/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaScheduleEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEvent, _super);
    function KalturaScheduleEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaScheduleEvent;
}(KalturaObjectBase));
export { KalturaScheduleEvent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCbEYsSUFBQTtJQUEwQyxnREFBaUI7SUE0QnZELDhCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDbEksU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUNySixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3pJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNuSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQW5HTDtFQStCMEMsaUJBQWlCLEVBcUUxRCxDQUFBO0FBckVELGdDQXFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudENsYXNzaWZpY2F0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlRXZlbnRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgc3VtbWFyeT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0c3RhcnREYXRlPyA6IERhdGU7XG5cdGVuZERhdGU/IDogRGF0ZTtcblx0cmVmZXJlbmNlSWQ/IDogc3RyaW5nO1xuXHRjbGFzc2lmaWNhdGlvblR5cGU/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGU7XG5cdGdlb0xhdGl0dWRlPyA6IG51bWJlcjtcblx0Z2VvTG9uZ2l0dWRlPyA6IG51bWJlcjtcblx0bG9jYXRpb24/IDogc3RyaW5nO1xuXHRvcmdhbml6ZXI/IDogc3RyaW5nO1xuXHRvd25lcklkPyA6IHN0cmluZztcblx0cHJpb3JpdHk/IDogbnVtYmVyO1xuXHRzZXF1ZW5jZT8gOiBudW1iZXI7XG5cdHJlY3VycmVuY2VUeXBlPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGU7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0Y29udGFjdD8gOiBzdHJpbmc7XG5cdGNvbW1lbnQ/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0cmVjdXJyZW5jZT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2U7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZUV2ZW50IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFyZW50SWQgOiBudW1iZXI7XG5cdHN1bW1hcnkgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cztcblx0c3RhcnREYXRlIDogRGF0ZTtcblx0ZW5kRGF0ZSA6IERhdGU7XG5cdHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHRjbGFzc2lmaWNhdGlvblR5cGUgOiBLYWx0dXJhU2NoZWR1bGVFdmVudENsYXNzaWZpY2F0aW9uVHlwZTtcblx0Z2VvTGF0aXR1ZGUgOiBudW1iZXI7XG5cdGdlb0xvbmdpdHVkZSA6IG51bWJlcjtcblx0bG9jYXRpb24gOiBzdHJpbmc7XG5cdG9yZ2FuaXplciA6IHN0cmluZztcblx0b3duZXJJZCA6IHN0cmluZztcblx0cHJpb3JpdHkgOiBudW1iZXI7XG5cdHNlcXVlbmNlIDogbnVtYmVyO1xuXHRyZWN1cnJlbmNlVHlwZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGU7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRjb250YWN0IDogc3RyaW5nO1xuXHRjb21tZW50IDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWN1cnJlbmNlIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJlbnRJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN1bW1hcnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cycgfSxcblx0XHRcdFx0c3RhcnREYXRlIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGVuZERhdGUgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2xhc3NpZmljYXRpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRDbGFzc2lmaWNhdGlvblR5cGUnIH0sXG5cdFx0XHRcdGdlb0xhdGl0dWRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGdlb0xvbmdpdHVkZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsb2NhdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvcmdhbml6ZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3duZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZXF1ZW5jZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWN1cnJlbmNlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZScgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGFjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21tZW50IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVjdXJyZW5jZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlRXZlbnQnXSA9IEthbHR1cmFTY2hlZHVsZUV2ZW50OyJdfQ==