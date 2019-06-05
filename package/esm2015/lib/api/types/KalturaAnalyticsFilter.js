/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportFilter } from './KalturaReportFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAnalyticsFilterArgs() { }
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.from_time;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.to_time;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.metrics;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.utcOffset;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.dimensions;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.filters;
/** @type {?|undefined} */
KalturaAnalyticsFilterArgs.prototype.orderBy;
export class KalturaAnalyticsFilter extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.filters === 'undefined')
            this.filters = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAnalyticsFilter' },
            from_time: { type: 's' },
            to_time: { type: 's' },
            metrics: { type: 's' },
            utcOffset: { type: 'n' },
            dimensions: { type: 's' },
            filters: { type: 'a', subTypeConstructor: KalturaReportFilter, subType: 'KalturaReportFilter' },
            orderBy: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.from_time;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.to_time;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.metrics;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.utcOffset;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.dimensions;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.filters;
    /** @type {?} */
    KalturaAnalyticsFilter.prototype.orderBy;
}
typesMappingStorage['KalturaAnalyticsFilter'] = KalturaAnalyticsFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuYWx5dGljc0ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFuYWx5dGljc0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixNQUFNLDZCQUE4QixTQUFRLGlCQUFpQjs7OztJQVV6RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUM5RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ25HLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQW5hbHl0aWNzRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZyb21fdGltZT8gOiBzdHJpbmc7XG5cdHRvX3RpbWU/IDogc3RyaW5nO1xuXHRtZXRyaWNzPyA6IHN0cmluZztcblx0dXRjT2Zmc2V0PyA6IG51bWJlcjtcblx0ZGltZW5zaW9ucz8gOiBzdHJpbmc7XG5cdGZpbHRlcnM/IDogS2FsdHVyYVJlcG9ydEZpbHRlcltdO1xuXHRvcmRlckJ5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFuYWx5dGljc0ZpbHRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZyb21fdGltZSA6IHN0cmluZztcblx0dG9fdGltZSA6IHN0cmluZztcblx0bWV0cmljcyA6IHN0cmluZztcblx0dXRjT2Zmc2V0IDogbnVtYmVyO1xuXHRkaW1lbnNpb25zIDogc3RyaW5nO1xuXHRmaWx0ZXJzIDogS2FsdHVyYVJlcG9ydEZpbHRlcltdO1xuXHRvcmRlckJ5IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQW5hbHl0aWNzRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBbmFseXRpY3NGaWx0ZXInIH0sXG5cdFx0XHRcdGZyb21fdGltZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0b190aW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldHJpY3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXRjT2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRpbWVuc2lvbnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsdGVycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0RmlsdGVyJyB9LFxuXHRcdFx0XHRvcmRlckJ5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBbmFseXRpY3NGaWx0ZXInXSA9IEthbHR1cmFBbmFseXRpY3NGaWx0ZXI7Il19