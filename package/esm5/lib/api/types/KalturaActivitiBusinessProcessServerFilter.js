/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaActivitiBusinessProcessServerBaseFilter } from './KalturaActivitiBusinessProcessServerBaseFilter';
/**
 * @record
 */
export function KalturaActivitiBusinessProcessServerFilterArgs() { }
var KalturaActivitiBusinessProcessServerFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaActivitiBusinessProcessServerFilter, _super);
    function KalturaActivitiBusinessProcessServerFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaActivitiBusinessProcessServerFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaActivitiBusinessProcessServerFilter' }
        });
        return result;
    };
    return KalturaActivitiBusinessProcessServerFilter;
}(KalturaActivitiBusinessProcessServerBaseFilter));
export { KalturaActivitiBusinessProcessServerFilter };
typesMappingStorage['KalturaActivitiBusinessProcessServerFilter'] = KalturaActivitiBusinessProcessServerFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7OztBQU90SyxJQUFBO0lBQWdFLHNFQUE4QztJQUkxRyxvREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBNUJMO0VBU2dFLDhDQUE4QyxFQW9CN0csQ0FBQTtBQXBCRCxzREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXIsIEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBY3Rpdml0aUJ1c2luZXNzUHJvY2Vzc1NlcnZlckZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFjdGl2aXRpQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyJ10gPSBLYWx0dXJhQWN0aXZpdGlCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJGaWx0ZXI7Il19