/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobData } from './KalturaDistributionJobData';
/**
 * @record
 */
export function KalturaDistributionFetchReportJobDataArgs() { }
/** @type {?|undefined} */
KalturaDistributionFetchReportJobDataArgs.prototype.plays;
/** @type {?|undefined} */
KalturaDistributionFetchReportJobDataArgs.prototype.views;
var KalturaDistributionFetchReportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionFetchReportJobData, _super);
    function KalturaDistributionFetchReportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionFetchReportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionFetchReportJobData' },
            plays: { type: 'n' },
            views: { type: 'n' }
        });
        return result;
    };
    return KalturaDistributionFetchReportJobData;
}(KalturaDistributionJobData));
export { KalturaDistributionFetchReportJobData };
if (false) {
    /** @type {?} */
    KalturaDistributionFetchReportJobData.prototype.plays;
    /** @type {?} */
    KalturaDistributionFetchReportJobData.prototype.views;
}
typesMappingStorage['KalturaDistributionFetchReportJobData'] = KalturaDistributionFetchReportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztBQVExRyxJQUFBO0lBQTJELGlFQUEwQjtJQUtqRiwrQ0FBWSxJQUFpRDtlQUV6RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDREQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQzFGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBaENMO0VBVTJELDBCQUEwQixFQXVCcEYsQ0FBQTtBQXZCRCxpREF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhLCBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uRmV0Y2hSZXBvcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iRGF0YUFyZ3Mge1xuICAgIHBsYXlzPyA6IG51bWJlcjtcblx0dmlld3M/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uRmV0Y2hSZXBvcnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEge1xuXG4gICAgcGxheXMgOiBudW1iZXI7XG5cdHZpZXdzIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uRmV0Y2hSZXBvcnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGEnIH0sXG5cdFx0XHRcdHBsYXlzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZXdzIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGEnXSA9IEthbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGE7Il19