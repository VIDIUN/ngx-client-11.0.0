/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaReportInputBaseFilter } from './KalturaReportInputBaseFilter';
/**
 * @record
 */
export function KalturaReportInputFilterArgs() { }
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.keywords;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.searchInTags;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.searchInAdminTags;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.categories;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.timeZoneOffset;
/** @type {?|undefined} */
KalturaReportInputFilterArgs.prototype.interval;
export class KalturaReportInputFilter extends KalturaReportInputBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaReportInputFilter' },
            keywords: { type: 's' },
            searchInTags: { type: 'b' },
            searchInAdminTags: { type: 'b' },
            categories: { type: 's' },
            timeZoneOffset: { type: 'n' },
            interval: { type: 'es', subTypeConstructor: KalturaReportInterval, subType: 'KalturaReportInterval' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaReportInputFilter.prototype.keywords;
    /** @type {?} */
    KalturaReportInputFilter.prototype.searchInTags;
    /** @type {?} */
    KalturaReportInputFilter.prototype.searchInAdminTags;
    /** @type {?} */
    KalturaReportInputFilter.prototype.categories;
    /** @type {?} */
    KalturaReportInputFilter.prototype.timeZoneOffset;
    /** @type {?} */
    KalturaReportInputFilter.prototype.interval;
}
typesMappingStorage['KalturaReportInputFilter'] = KalturaReportInputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQW9DLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWhILE1BQU0sK0JBQWdDLFNBQVEsNEJBQTRCOzs7O0lBU3RFLFlBQVksSUFBb0M7UUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW50ZXJ2YWwgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnRlcnZhbCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyLCBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyQXJncyB7XG4gICAga2V5d29yZHM/IDogc3RyaW5nO1xuXHRzZWFyY2hJblRhZ3M/IDogYm9vbGVhbjtcblx0c2VhcmNoSW5BZG1pblRhZ3M/IDogYm9vbGVhbjtcblx0Y2F0ZWdvcmllcz8gOiBzdHJpbmc7XG5cdHRpbWVab25lT2Zmc2V0PyA6IG51bWJlcjtcblx0aW50ZXJ2YWw/IDogS2FsdHVyYVJlcG9ydEludGVydmFsO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyIHtcblxuICAgIGtleXdvcmRzIDogc3RyaW5nO1xuXHRzZWFyY2hJblRhZ3MgOiBib29sZWFuO1xuXHRzZWFyY2hJbkFkbWluVGFncyA6IGJvb2xlYW47XG5cdGNhdGVnb3JpZXMgOiBzdHJpbmc7XG5cdHRpbWVab25lT2Zmc2V0IDogbnVtYmVyO1xuXHRpbnRlcnZhbCA6IEthbHR1cmFSZXBvcnRJbnRlcnZhbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0a2V5d29yZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VhcmNoSW5UYWdzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHNlYXJjaEluQWRtaW5UYWdzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGNhdGVnb3JpZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZVpvbmVPZmZzZXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW50ZXJ2YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0SW50ZXJ2YWwsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEludGVydmFsJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInXSA9IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjsiXX0=