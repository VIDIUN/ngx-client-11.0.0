/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventRecurrenceFrequency } from './KalturaScheduleEventRecurrenceFrequency';
import { KalturaScheduleEventRecurrenceDay } from './KalturaScheduleEventRecurrenceDay';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaScheduleEventRecurrenceArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.name;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.frequency;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.until;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.timeZone;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.count;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.interval;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.bySecond;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byMinute;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byHour;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byDay;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byMonthDay;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byYearDay;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byWeekNumber;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byMonth;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.byOffset;
/** @type {?|undefined} */
KalturaScheduleEventRecurrenceArgs.prototype.weekStartDay;
export class KalturaScheduleEventRecurrence extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaScheduleEventRecurrence' },
            name: { type: 's' },
            frequency: { type: 'es', subTypeConstructor: KalturaScheduleEventRecurrenceFrequency, subType: 'KalturaScheduleEventRecurrenceFrequency' },
            until: { type: 'd' },
            timeZone: { type: 's' },
            count: { type: 'n' },
            interval: { type: 'n' },
            bySecond: { type: 's' },
            byMinute: { type: 's' },
            byHour: { type: 's' },
            byDay: { type: 's' },
            byMonthDay: { type: 's' },
            byYearDay: { type: 's' },
            byWeekNumber: { type: 's' },
            byMonth: { type: 's' },
            byOffset: { type: 's' },
            weekStartDay: { type: 'es', subTypeConstructor: KalturaScheduleEventRecurrenceDay, subType: 'KalturaScheduleEventRecurrenceDay' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.name;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.frequency;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.until;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.timeZone;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.count;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.interval;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.bySecond;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byMinute;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byHour;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byDay;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byMonthDay;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byYearDay;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byWeekNumber;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byMonth;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.byOffset;
    /** @type {?} */
    KalturaScheduleEventRecurrence.prototype.weekStartDay;
}
typesMappingStorage['KalturaScheduleEventRecurrence'] = KalturaScheduleEventRecurrence;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmxGLE1BQU0scUNBQXNDLFNBQVEsaUJBQWlCOzs7O0lBbUJqRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzlJLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDNUgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRnJlcXVlbmN5IH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VGcmVxdWVuY3knO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRGF5IH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXknO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0ZnJlcXVlbmN5PyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUZyZXF1ZW5jeTtcblx0dW50aWw/IDogRGF0ZTtcblx0dGltZVpvbmU/IDogc3RyaW5nO1xuXHRjb3VudD8gOiBudW1iZXI7XG5cdGludGVydmFsPyA6IG51bWJlcjtcblx0YnlTZWNvbmQ/IDogc3RyaW5nO1xuXHRieU1pbnV0ZT8gOiBzdHJpbmc7XG5cdGJ5SG91cj8gOiBzdHJpbmc7XG5cdGJ5RGF5PyA6IHN0cmluZztcblx0YnlNb250aERheT8gOiBzdHJpbmc7XG5cdGJ5WWVhckRheT8gOiBzdHJpbmc7XG5cdGJ5V2Vla051bWJlcj8gOiBzdHJpbmc7XG5cdGJ5TW9udGg/IDogc3RyaW5nO1xuXHRieU9mZnNldD8gOiBzdHJpbmc7XG5cdHdlZWtTdGFydERheT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXk7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIG5hbWUgOiBzdHJpbmc7XG5cdGZyZXF1ZW5jeSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUZyZXF1ZW5jeTtcblx0dW50aWwgOiBEYXRlO1xuXHR0aW1lWm9uZSA6IHN0cmluZztcblx0Y291bnQgOiBudW1iZXI7XG5cdGludGVydmFsIDogbnVtYmVyO1xuXHRieVNlY29uZCA6IHN0cmluZztcblx0YnlNaW51dGUgOiBzdHJpbmc7XG5cdGJ5SG91ciA6IHN0cmluZztcblx0YnlEYXkgOiBzdHJpbmc7XG5cdGJ5TW9udGhEYXkgOiBzdHJpbmc7XG5cdGJ5WWVhckRheSA6IHN0cmluZztcblx0YnlXZWVrTnVtYmVyIDogc3RyaW5nO1xuXHRieU1vbnRoIDogc3RyaW5nO1xuXHRieU9mZnNldCA6IHN0cmluZztcblx0d2Vla1N0YXJ0RGF5IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRGF5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyZXF1ZW5jeSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUZyZXF1ZW5jeSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VGcmVxdWVuY3knIH0sXG5cdFx0XHRcdHVudGlsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRpbWVab25lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGludGVydmFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJ5U2Vjb25kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5TWludXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5SG91ciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRieURheSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRieU1vbnRoRGF5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5WWVhckRheSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRieVdlZWtOdW1iZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnlNb250aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRieU9mZnNldCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWVrU3RhcnREYXkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXksIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRGF5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UnXSA9IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZTsiXX0=