/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue } from './KalturaValue';
/**
 * @record
 */
export function KalturaStringValueArgs() { }
/** @type {?|undefined} */
KalturaStringValueArgs.prototype.value;
var KalturaStringValue = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStringValue, _super);
    function KalturaStringValue(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStringValue.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStringValue' },
            value: { type: 's' }
        });
        return result;
    };
    return KalturaStringValue;
}(KalturaValue));
export { KalturaStringValue };
if (false) {
    /** @type {?} */
    KalturaStringValue.prototype.value;
}
typesMappingStorage['KalturaStringValue'] = KalturaStringValue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0cmluZ1ZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RyaW5nVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU9oRSxJQUFBO0lBQXdDLDhDQUFZO0lBSWhELDRCQUFZLElBQThCO2VBRXRDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkUsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBN0JMO0VBU3dDLFlBQVksRUFxQm5ELENBQUE7QUFyQkQsOEJBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZhbHVlLCBLYWx0dXJhVmFsdWVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVmFsdWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdHJpbmdWYWx1ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVZhbHVlQXJncyB7XG4gICAgdmFsdWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RyaW5nVmFsdWUgZXh0ZW5kcyBLYWx0dXJhVmFsdWUge1xuXG4gICAgdmFsdWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdHJpbmdWYWx1ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3RyaW5nVmFsdWUnIH0sXG5cdFx0XHRcdHZhbHVlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdHJpbmdWYWx1ZSddID0gS2FsdHVyYVN0cmluZ1ZhbHVlOyJdfQ==