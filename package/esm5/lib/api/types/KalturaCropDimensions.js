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
export function KalturaCropDimensionsArgs() { }
/** @type {?|undefined} */
KalturaCropDimensionsArgs.prototype.left;
/** @type {?|undefined} */
KalturaCropDimensionsArgs.prototype.top;
/** @type {?|undefined} */
KalturaCropDimensionsArgs.prototype.width;
/** @type {?|undefined} */
KalturaCropDimensionsArgs.prototype.height;
var KalturaCropDimensions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCropDimensions, _super);
    function KalturaCropDimensions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCropDimensions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCropDimensions' },
            left: { type: 'n' },
            top: { type: 'n' },
            width: { type: 'n' },
            height: { type: 'n' }
        });
        return result;
    };
    return KalturaCropDimensions;
}(KalturaObjectBase));
export { KalturaCropDimensions };
if (false) {
    /** @type {?} */
    KalturaCropDimensions.prototype.left;
    /** @type {?} */
    KalturaCropDimensions.prototype.top;
    /** @type {?} */
    KalturaCropDimensions.prototype.width;
    /** @type {?} */
    KalturaCropDimensions.prototype.height;
}
typesMappingStorage['KalturaCropDimensions'] = KalturaCropDimensions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNyb3BEaW1lbnNpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ3JvcERpbWVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLElBQUE7SUFBMkMsaURBQWlCO0lBT3hELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBdENMO0VBWTJDLGlCQUFpQixFQTJCM0QsQ0FBQTtBQTNCRCxpQ0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNyb3BEaW1lbnNpb25zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxlZnQ/IDogbnVtYmVyO1xuXHR0b3A/IDogbnVtYmVyO1xuXHR3aWR0aD8gOiBudW1iZXI7XG5cdGhlaWdodD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDcm9wRGltZW5zaW9ucyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGxlZnQgOiBudW1iZXI7XG5cdHRvcCA6IG51bWJlcjtcblx0d2lkdGggOiBudW1iZXI7XG5cdGhlaWdodCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNyb3BEaW1lbnNpb25zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDcm9wRGltZW5zaW9ucycgfSxcblx0XHRcdFx0bGVmdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0b3AgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aGVpZ2h0IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDcm9wRGltZW5zaW9ucyddID0gS2FsdHVyYUNyb3BEaW1lbnNpb25zOyJdfQ==