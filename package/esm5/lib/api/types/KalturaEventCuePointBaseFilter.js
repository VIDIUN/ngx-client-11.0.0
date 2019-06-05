/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaEventCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEventCuePointBaseFilterArgs.prototype.eventTypeEqual;
/** @type {?|undefined} */
KalturaEventCuePointBaseFilterArgs.prototype.eventTypeIn;
var KalturaEventCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventCuePointBaseFilter, _super);
    function KalturaEventCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEventCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventCuePointBaseFilter' },
            eventTypeEqual: { type: 'es', subTypeConstructor: KalturaEventType, subType: 'KalturaEventType' },
            eventTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaEventCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaEventCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaEventCuePointBaseFilter.prototype.eventTypeEqual;
    /** @type {?} */
    KalturaEventCuePointBaseFilter.prototype.eventTypeIn;
}
typesMappingStorage['KalturaEventCuePointBaseFilter'] = KalturaEventCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXZlbnRDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7QUFRM0YsSUFBQTtJQUFvRCwwREFBcUI7SUFLckUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBakNMO0VBV29ELHFCQUFxQixFQXVCeEUsQ0FBQTtBQXZCRCwwQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50RmlsdGVyLCBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudEN1ZVBvaW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB7XG4gICAgZXZlbnRUeXBlRXF1YWw/IDogS2FsdHVyYUV2ZW50VHlwZTtcblx0ZXZlbnRUeXBlSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnRDdWVQb2ludEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIge1xuXG4gICAgZXZlbnRUeXBlRXF1YWwgOiBLYWx0dXJhRXZlbnRUeXBlO1xuXHRldmVudFR5cGVJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFdmVudEN1ZVBvaW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0ZXZlbnRUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudFR5cGUnIH0sXG5cdFx0XHRcdGV2ZW50VHlwZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudEN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYUV2ZW50Q3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==