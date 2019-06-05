/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter } from './KalturaEntryScheduleEventFilter';
/**
 * @record
 */
export function KalturaRecordScheduleEventBaseFilterArgs() { }
var KalturaRecordScheduleEventBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRecordScheduleEventBaseFilter, _super);
    function KalturaRecordScheduleEventBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRecordScheduleEventBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRecordScheduleEventBaseFilter' }
        });
        return result;
    };
    return KalturaRecordScheduleEventBaseFilter;
}(KalturaEntryScheduleEventFilter));
export { KalturaRecordScheduleEventBaseFilter };
typesMappingStorage['KalturaRecordScheduleEventBaseFilter'] = KalturaRecordScheduleEventBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUF1QyxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU96SCxJQUFBO0lBQTBELGdFQUErQjtJQUlyRiw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1NBQ2hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUJMO0VBUzBELCtCQUErQixFQW9CeEYsQ0FBQTtBQXBCRCxnREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXIsIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXI7Il19