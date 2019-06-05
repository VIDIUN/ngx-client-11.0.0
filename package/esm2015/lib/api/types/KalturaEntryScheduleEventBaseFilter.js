/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventFilter } from './KalturaScheduleEventFilter';
/**
 * @record
 */
export function KalturaEntryScheduleEventBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.templateEntryIdEqual;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsMultiLikeAnd;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsMultiLikeAnd;
export class KalturaEntryScheduleEventBaseFilter extends KalturaScheduleEventFilter {
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
            objectType: { type: 'c', default: 'KalturaEntryScheduleEventBaseFilter' },
            templateEntryIdEqual: { type: 's' },
            entryIdsLike: { type: 's' },
            entryIdsMultiLikeOr: { type: 's' },
            entryIdsMultiLikeAnd: { type: 's' },
            categoryIdsLike: { type: 's' },
            categoryIdsMultiLikeOr: { type: 's' },
            categoryIdsMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.templateEntryIdEqual;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsMultiLikeAnd;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsMultiLikeAnd;
}
typesMappingStorage['KalturaEntryScheduleEventBaseFilter'] = KalturaEntryScheduleEventBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTFHLE1BQU0sMENBQTJDLFNBQVEsMEJBQTBCOzs7O0lBVS9FLFlBQVksSUFBK0M7UUFFdkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyLCBLYWx0dXJhU2NoZWR1bGVFdmVudEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzIHtcbiAgICB0ZW1wbGF0ZUVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRzTGlrZT8gOiBzdHJpbmc7XG5cdGVudHJ5SWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRlbnRyeUlkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzTGlrZT8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRjYXRlZ29yeUlkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXIge1xuXG4gICAgdGVtcGxhdGVFbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGVudHJ5SWRzTGlrZSA6IHN0cmluZztcblx0ZW50cnlJZHNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0ZW50cnlJZHNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzTGlrZSA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZHNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZHNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZHNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZHNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciddID0gS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXI7Il19