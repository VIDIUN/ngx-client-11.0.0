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
export function KalturaBulkUploadObjectDataArgs() { }
var KalturaBulkUploadObjectData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadObjectData, _super);
    function KalturaBulkUploadObjectData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadObjectData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadObjectData' }
        });
        return result;
    };
    return KalturaBulkUploadObjectData;
}(KalturaObjectBase));
export { KalturaBulkUploadObjectData };
typesMappingStorage['KalturaBulkUploadObjectData'] = KalturaBulkUploadObjectData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9sRixJQUFBO0lBQWlELHVEQUFpQjtJQUk5RCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBNUJMO0VBU2lELGlCQUFpQixFQW9CakUsQ0FBQTtBQXBCRCx1Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGFBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEnXSA9IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YTsiXX0=