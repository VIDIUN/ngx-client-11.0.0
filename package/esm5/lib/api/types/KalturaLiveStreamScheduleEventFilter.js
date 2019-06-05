/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamScheduleEventBaseFilter } from './KalturaLiveStreamScheduleEventBaseFilter';
/**
 * @record
 */
export function KalturaLiveStreamScheduleEventFilterArgs() { }
var KalturaLiveStreamScheduleEventFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamScheduleEventFilter, _super);
    function KalturaLiveStreamScheduleEventFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamScheduleEventFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamScheduleEventFilter' }
        });
        return result;
    };
    return KalturaLiveStreamScheduleEventFilter;
}(KalturaLiveStreamScheduleEventBaseFilter));
export { KalturaLiveStreamScheduleEventFilter };
typesMappingStorage['KalturaLiveStreamScheduleEventFilter'] = KalturaLiveStreamScheduleEventFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdDQUF3QyxFQUFnRCxNQUFNLDRDQUE0QyxDQUFDOzs7OztBQU9wSixJQUFBO0lBQTBELGdFQUF3QztJQUk5Riw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1NBQ2hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUJMO0VBUzBELHdDQUF3QyxFQW9CakcsQ0FBQTtBQXBCRCxnREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIsIEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50RmlsdGVyJ10gPSBLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRGaWx0ZXI7Il19