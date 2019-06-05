/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaScheduleEventRecurrence = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEventRecurrence, _super);
    function KalturaScheduleEventRecurrence(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEventRecurrence.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaScheduleEventRecurrence;
}(KalturaObjectBase));
export { KalturaScheduleEventRecurrence };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JsRixJQUFBO0lBQW9ELDBEQUFpQjtJQW1CakUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzlJLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDNUgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0E1RUw7RUEwQm9ELGlCQUFpQixFQW1EcEUsQ0FBQTtBQW5ERCwwQ0FtREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VGcmVxdWVuY3kgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUZyZXF1ZW5jeSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXkgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZURheSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRmcmVxdWVuY3k/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRnJlcXVlbmN5O1xuXHR1bnRpbD8gOiBEYXRlO1xuXHR0aW1lWm9uZT8gOiBzdHJpbmc7XG5cdGNvdW50PyA6IG51bWJlcjtcblx0aW50ZXJ2YWw/IDogbnVtYmVyO1xuXHRieVNlY29uZD8gOiBzdHJpbmc7XG5cdGJ5TWludXRlPyA6IHN0cmluZztcblx0YnlIb3VyPyA6IHN0cmluZztcblx0YnlEYXk/IDogc3RyaW5nO1xuXHRieU1vbnRoRGF5PyA6IHN0cmluZztcblx0YnlZZWFyRGF5PyA6IHN0cmluZztcblx0YnlXZWVrTnVtYmVyPyA6IHN0cmluZztcblx0YnlNb250aD8gOiBzdHJpbmc7XG5cdGJ5T2Zmc2V0PyA6IHN0cmluZztcblx0d2Vla1N0YXJ0RGF5PyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZURheTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbmFtZSA6IHN0cmluZztcblx0ZnJlcXVlbmN5IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRnJlcXVlbmN5O1xuXHR1bnRpbCA6IERhdGU7XG5cdHRpbWVab25lIDogc3RyaW5nO1xuXHRjb3VudCA6IG51bWJlcjtcblx0aW50ZXJ2YWwgOiBudW1iZXI7XG5cdGJ5U2Vjb25kIDogc3RyaW5nO1xuXHRieU1pbnV0ZSA6IHN0cmluZztcblx0YnlIb3VyIDogc3RyaW5nO1xuXHRieURheSA6IHN0cmluZztcblx0YnlNb250aERheSA6IHN0cmluZztcblx0YnlZZWFyRGF5IDogc3RyaW5nO1xuXHRieVdlZWtOdW1iZXIgOiBzdHJpbmc7XG5cdGJ5TW9udGggOiBzdHJpbmc7XG5cdGJ5T2Zmc2V0IDogc3RyaW5nO1xuXHR3ZWVrU3RhcnREYXkgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2UnIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnJlcXVlbmN5IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlRnJlcXVlbmN5LCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZUZyZXF1ZW5jeScgfSxcblx0XHRcdFx0dW50aWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dGltZVpvbmUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW50ZXJ2YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YnlTZWNvbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnlNaW51dGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnlIb3VyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5RGF5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5TW9udGhEYXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnlZZWFyRGF5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5V2Vla051bWJlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRieU1vbnRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ5T2Zmc2V0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdlZWtTdGFydERheSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZURheSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VEYXknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZSddID0gS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlOyJdfQ==