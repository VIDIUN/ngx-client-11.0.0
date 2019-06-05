/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointBaseFilter } from './KalturaCuePointBaseFilter';
/**
 * @record
 */
export function KalturaCuePointFilterArgs() { }
/** @type {?|undefined} */
KalturaCuePointFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaCuePointFilterArgs.prototype.userIdEqualCurrent;
/** @type {?|undefined} */
KalturaCuePointFilterArgs.prototype.userIdCurrent;
var KalturaCuePointFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCuePointFilter, _super);
    function KalturaCuePointFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCuePointFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCuePointFilter' },
            freeText: { type: 's' },
            userIdEqualCurrent: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            userIdCurrent: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaCuePointFilter;
}(KalturaCuePointBaseFilter));
export { KalturaCuePointFilter };
if (false) {
    /** @type {?} */
    KalturaCuePointFilter.prototype.freeText;
    /** @type {?} */
    KalturaCuePointFilter.prototype.userIdEqualCurrent;
    /** @type {?} */
    KalturaCuePointFilter.prototype.userIdCurrent;
}
typesMappingStorage['KalturaCuePointFilter'] = KalturaCuePointFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUN1ZVBvaW50RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7OztBQVN2RyxJQUFBO0lBQTJDLGlEQUF5QjtJQU1oRSwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNySCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN2RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQXBDTDtFQVkyQyx5QkFBeUIsRUF5Qm5FLENBQUE7QUF6QkQsaUNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlciwgS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlckFyZ3Mge1xuICAgIGZyZWVUZXh0PyA6IHN0cmluZztcblx0dXNlcklkRXF1YWxDdXJyZW50PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHVzZXJJZEN1cnJlbnQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUN1ZVBvaW50RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlciB7XG5cbiAgICBmcmVlVGV4dCA6IHN0cmluZztcblx0dXNlcklkRXF1YWxDdXJyZW50IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dXNlcklkQ3VycmVudCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ3VlUG9pbnRGaWx0ZXInIH0sXG5cdFx0XHRcdGZyZWVUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsQ3VycmVudCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0dXNlcklkQ3VycmVudCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUN1ZVBvaW50RmlsdGVyJ10gPSBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXI7Il19