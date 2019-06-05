/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetBaseFilter } from './KalturaAssetBaseFilter';
/**
 * @record
 */
export function KalturaAssetFilterArgs() { }
/** @type {?|undefined} */
KalturaAssetFilterArgs.prototype.typeIn;
var KalturaAssetFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetFilter, _super);
    function KalturaAssetFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetFilter' },
            typeIn: { type: 's' }
        });
        return result;
    };
    return KalturaAssetFilter;
}(KalturaAssetBaseFilter));
export { KalturaAssetFilter };
if (false) {
    /** @type {?} */
    KalturaAssetFilter.prototype.typeIn;
}
typesMappingStorage['KalturaAssetFilter'] = KalturaAssetFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLElBQUE7SUFBd0MsOENBQXNCO0lBSTFELDRCQUFZLElBQThCO2VBRXRDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBN0JMO0VBU3dDLHNCQUFzQixFQXFCN0QsQ0FBQTtBQXJCRCw4QkFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRCYXNlRmlsdGVyLCBLYWx0dXJhQXNzZXRCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRCYXNlRmlsdGVyQXJncyB7XG4gICAgdHlwZUluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFzc2V0RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0QmFzZUZpbHRlciB7XG5cbiAgICB0eXBlSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXRGaWx0ZXInIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRGaWx0ZXInXSA9IEthbHR1cmFBc3NldEZpbHRlcjsiXX0=