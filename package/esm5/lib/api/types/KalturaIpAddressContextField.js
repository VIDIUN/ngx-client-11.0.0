/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaIpAddressContextFieldArgs() { }
var KalturaIpAddressContextField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIpAddressContextField, _super);
    function KalturaIpAddressContextField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIpAddressContextField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIpAddressContextField' }
        });
        return result;
    };
    return KalturaIpAddressContextField;
}(KalturaStringField));
export { KalturaIpAddressContextField };
typesMappingStorage['KalturaIpAddressContextField'] = KalturaIpAddressContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlwQWRkcmVzc0NvbnRleHRGaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlwQWRkcmVzc0NvbnRleHRGaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBT2xGLElBQUE7SUFBa0Qsd0RBQWtCO0lBSWhFLHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDeEUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0E1Qkw7RUFTa0Qsa0JBQWtCLEVBb0JuRSxDQUFBO0FBcEJELHdDQW9CQztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ0ZpZWxkLCBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJcEFkZHJlc3NDb250ZXh0RmllbGRBcmdzICBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSXBBZGRyZXNzQ29udGV4dEZpZWxkIGV4dGVuZHMgS2FsdHVyYVN0cmluZ0ZpZWxkIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSXBBZGRyZXNzQ29udGV4dEZpZWxkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJcEFkZHJlc3NDb250ZXh0RmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJcEFkZHJlc3NDb250ZXh0RmllbGQnXSA9IEthbHR1cmFJcEFkZHJlc3NDb250ZXh0RmllbGQ7Il19