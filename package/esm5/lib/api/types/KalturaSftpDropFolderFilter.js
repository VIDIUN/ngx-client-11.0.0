/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSftpDropFolderBaseFilter } from './KalturaSftpDropFolderBaseFilter';
/**
 * @record
 */
export function KalturaSftpDropFolderFilterArgs() { }
var KalturaSftpDropFolderFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSftpDropFolderFilter, _super);
    function KalturaSftpDropFolderFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSftpDropFolderFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSftpDropFolderFilter' }
        });
        return result;
    };
    return KalturaSftpDropFolderFilter;
}(KalturaSftpDropFolderBaseFilter));
export { KalturaSftpDropFolderFilter };
typesMappingStorage['KalturaSftpDropFolderFilter'] = KalturaSftpDropFolderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNmdHBEcm9wRm9sZGVyRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2Z0cERyb3BGb2xkZXJGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUF1QyxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU96SCxJQUFBO0lBQWlELHVEQUErQjtJQUk1RSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBNUJMO0VBU2lELCtCQUErQixFQW9CL0UsQ0FBQTtBQXBCRCx1Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZnRwRHJvcEZvbGRlckJhc2VGaWx0ZXIsIEthbHR1cmFTZnRwRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2Z0cERyb3BGb2xkZXJCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2Z0cERyb3BGb2xkZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZnRwRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNmdHBEcm9wRm9sZGVyRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNmdHBEcm9wRm9sZGVyQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNmdHBEcm9wRm9sZGVyRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTZnRwRHJvcEZvbGRlckZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNmdHBEcm9wRm9sZGVyRmlsdGVyJ10gPSBLYWx0dXJhU2Z0cERyb3BGb2xkZXJGaWx0ZXI7Il19