/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperator } from './KalturaSearchOperator';
/**
 * @record
 */
export function KalturaDynamicObjectSearchItemArgs() { }
/** @type {?|undefined} */
KalturaDynamicObjectSearchItemArgs.prototype.field;
var KalturaDynamicObjectSearchItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDynamicObjectSearchItem, _super);
    function KalturaDynamicObjectSearchItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDynamicObjectSearchItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDynamicObjectSearchItem' },
            field: { type: 's' }
        });
        return result;
    };
    return KalturaDynamicObjectSearchItem;
}(KalturaSearchOperator));
export { KalturaDynamicObjectSearchItem };
if (false) {
    /** @type {?} */
    KalturaDynamicObjectSearchItem.prototype.field;
}
typesMappingStorage['KalturaDynamicObjectSearchItem'] = KalturaDynamicObjectSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLElBQUE7SUFBb0QsMERBQXFCO0lBSXJFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBN0JMO0VBU29ELHFCQUFxQixFQXFCeEUsQ0FBQTtBQXJCRCwwQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoT3BlcmF0b3IsIEthbHR1cmFTZWFyY2hPcGVyYXRvckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hPcGVyYXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzIHtcbiAgICBmaWVsZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEeW5hbWljT2JqZWN0U2VhcmNoSXRlbSBleHRlbmRzIEthbHR1cmFTZWFyY2hPcGVyYXRvciB7XG5cbiAgICBmaWVsZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEeW5hbWljT2JqZWN0U2VhcmNoSXRlbScgfSxcblx0XHRcdFx0ZmllbGQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtJ10gPSBLYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW07Il19