/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPartnerStatisticsArgs() { }
var KalturaPartnerStatistics = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPartnerStatistics, _super);
    function KalturaPartnerStatistics(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPartnerStatistics.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPartnerStatistics' },
            packageBandwidthAndStorage: { type: 'n', readOnly: true },
            hosting: { type: 'n', readOnly: true },
            bandwidth: { type: 'n', readOnly: true },
            usage: { type: 'n', readOnly: true },
            usagePercent: { type: 'n', readOnly: true },
            reachedLimitDate: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaPartnerStatistics;
}(KalturaObjectBase));
export { KalturaPartnerStatistics };
if (false) {
    /** @type {?} */
    KalturaPartnerStatistics.prototype.packageBandwidthAndStorage;
    /** @type {?} */
    KalturaPartnerStatistics.prototype.hosting;
    /** @type {?} */
    KalturaPartnerStatistics.prototype.bandwidth;
    /** @type {?} */
    KalturaPartnerStatistics.prototype.usage;
    /** @type {?} */
    KalturaPartnerStatistics.prototype.usagePercent;
    /** @type {?} */
    KalturaPartnerStatistics.prototype.reachedLimitDate;
}
typesMappingStorage['KalturaPartnerStatistics'] = KalturaPartnerStatistics;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXJTdGF0aXN0aWNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGFydG5lclN0YXRpc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9sRixJQUFBO0lBQThDLG9EQUFpQjtJQVMzRCxrQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzVELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3ZDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM5QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN6QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQXZDTDtFQVM4QyxpQkFBaUIsRUErQjlELENBQUE7QUEvQkQsb0NBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGFydG5lclN0YXRpc3RpY3NBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQYXJ0bmVyU3RhdGlzdGljcyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IHBhY2thZ2VCYW5kd2lkdGhBbmRTdG9yYWdlIDogbnVtYmVyO1xuXHRyZWFkb25seSBob3N0aW5nIDogbnVtYmVyO1xuXHRyZWFkb25seSBiYW5kd2lkdGggOiBudW1iZXI7XG5cdHJlYWRvbmx5IHVzYWdlIDogbnVtYmVyO1xuXHRyZWFkb25seSB1c2FnZVBlcmNlbnQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHJlYWNoZWRMaW1pdERhdGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQYXJ0bmVyU3RhdGlzdGljc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGFydG5lclN0YXRpc3RpY3MnIH0sXG5cdFx0XHRcdHBhY2thZ2VCYW5kd2lkdGhBbmRTdG9yYWdlIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aG9zdGluZyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGJhbmR3aWR0aCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVzYWdlIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNhZ2VQZXJjZW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVhY2hlZExpbWl0RGF0ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQYXJ0bmVyU3RhdGlzdGljcyddID0gS2FsdHVyYVBhcnRuZXJTdGF0aXN0aWNzOyJdfQ==