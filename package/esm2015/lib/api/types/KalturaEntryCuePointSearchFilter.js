/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaEntryCuePointSearchFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointsFreeText;
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointTypeIn;
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointSubTypeEqual;
export class KalturaEntryCuePointSearchFilter extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaEntryCuePointSearchFilter' },
            cuePointsFreeText: { type: 's' },
            cuePointTypeIn: { type: 's' },
            cuePointSubTypeEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointsFreeText;
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointTypeIn;
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointSubTypeEqual;
}
typesMappingStorage['KalturaEntryCuePointSearchFilter'] = KalturaEntryCuePointSearchFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUN1ZVBvaW50U2VhcmNoRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztBQVMvRSxNQUFNLHVDQUF3QyxTQUFRLGlCQUFpQjs7OztJQU1uRSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlDdWVQb2ludFNlYXJjaEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBjdWVQb2ludHNGcmVlVGV4dD8gOiBzdHJpbmc7XG5cdGN1ZVBvaW50VHlwZUluPyA6IHN0cmluZztcblx0Y3VlUG9pbnRTdWJUeXBlRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlDdWVQb2ludFNlYXJjaEZpbHRlciBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIGN1ZVBvaW50c0ZyZWVUZXh0IDogc3RyaW5nO1xuXHRjdWVQb2ludFR5cGVJbiA6IHN0cmluZztcblx0Y3VlUG9pbnRTdWJUeXBlRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeUN1ZVBvaW50U2VhcmNoRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeUN1ZVBvaW50U2VhcmNoRmlsdGVyJyB9LFxuXHRcdFx0XHRjdWVQb2ludHNGcmVlVGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdWVQb2ludFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdWVQb2ludFN1YlR5cGVFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlDdWVQb2ludFNlYXJjaEZpbHRlciddID0gS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXI7Il19