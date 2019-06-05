/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaAnswerCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.quizUserEntryIdEqual;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.quizUserEntryIdIn;
export class KalturaAnswerCuePointBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaAnswerCuePointBaseFilter' },
            parentIdEqual: { type: 's' },
            parentIdIn: { type: 's' },
            quizUserEntryIdEqual: { type: 's' },
            quizUserEntryIdIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.quizUserEntryIdEqual;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.quizUserEntryIdIn;
}
typesMappingStorage['KalturaAnswerCuePointBaseFilter'] = KalturaAnswerCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVUzRixNQUFNLHNDQUF1QyxTQUFRLHFCQUFxQjs7OztJQU90RSxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIsIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB7XG4gICAgcGFyZW50SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHBhcmVudElkSW4/IDogc3RyaW5nO1xuXHRxdWl6VXNlckVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHF1aXpVc2VyRW50cnlJZEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBwYXJlbnRJZEVxdWFsIDogc3RyaW5nO1xuXHRwYXJlbnRJZEluIDogc3RyaW5nO1xuXHRxdWl6VXNlckVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0cXVpelVzZXJFbnRyeUlkSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGFyZW50SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1aXpVc2VyRW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1aXpVc2VyRW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXI7Il19