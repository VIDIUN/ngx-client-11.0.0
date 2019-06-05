/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaAnalyticsFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAnalyticsFilter, _super);
    function KalturaAnalyticsFilter(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.filters === 'undefined')
            _this.filters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAnalyticsFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaAnalyticsFilter;
}(KalturaObjectBase));
export { KalturaAnalyticsFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuYWx5dGljc0ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFuYWx5dGljc0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsSUFBQTtJQUE0QyxrREFBaUI7SUFVekQsZ0NBQVksSUFBa0M7UUFBOUMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDbkcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBakRMO0VBZ0I0QyxpQkFBaUIsRUFrQzVELENBQUE7QUFsQ0Qsa0NBa0NDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFuYWx5dGljc0ZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmcm9tX3RpbWU/IDogc3RyaW5nO1xuXHR0b190aW1lPyA6IHN0cmluZztcblx0bWV0cmljcz8gOiBzdHJpbmc7XG5cdHV0Y09mZnNldD8gOiBudW1iZXI7XG5cdGRpbWVuc2lvbnM/IDogc3RyaW5nO1xuXHRmaWx0ZXJzPyA6IEthbHR1cmFSZXBvcnRGaWx0ZXJbXTtcblx0b3JkZXJCeT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBbmFseXRpY3NGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBmcm9tX3RpbWUgOiBzdHJpbmc7XG5cdHRvX3RpbWUgOiBzdHJpbmc7XG5cdG1ldHJpY3MgOiBzdHJpbmc7XG5cdHV0Y09mZnNldCA6IG51bWJlcjtcblx0ZGltZW5zaW9ucyA6IHN0cmluZztcblx0ZmlsdGVycyA6IEthbHR1cmFSZXBvcnRGaWx0ZXJbXTtcblx0b3JkZXJCeSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFuYWx5dGljc0ZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQW5hbHl0aWNzRmlsdGVyJyB9LFxuXHRcdFx0XHRmcm9tX3RpbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dG9fdGltZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRyaWNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHV0Y09mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkaW1lbnNpb25zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbHRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEZpbHRlcicgfSxcblx0XHRcdFx0b3JkZXJCeSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW5hbHl0aWNzRmlsdGVyJ10gPSBLYWx0dXJhQW5hbHl0aWNzRmlsdGVyOyJdfQ==