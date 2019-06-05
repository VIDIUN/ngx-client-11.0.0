/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStartWidgetSessionResponse } from './KalturaStartWidgetSessionResponse';
/**
 * @record
 */
export function KalturaSessionResponseArgs() { }
var KalturaSessionResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSessionResponse, _super);
    function KalturaSessionResponse(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSessionResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSessionResponse' }
        });
        return result;
    };
    return KalturaSessionResponse;
}(KalturaStartWidgetSessionResponse));
export { KalturaSessionResponse };
typesMappingStorage['KalturaSessionResponse'] = KalturaSessionResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlc3Npb25SZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlc3Npb25SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBTy9ILElBQUE7SUFBNEMsa0RBQWlDO0lBSXpFLGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDbEUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0E1Qkw7RUFTNEMsaUNBQWlDLEVBb0I1RSxDQUFBO0FBcEJELGtDQW9CQztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0YXJ0V2lkZ2V0U2Vzc2lvblJlc3BvbnNlLCBLYWx0dXJhU3RhcnRXaWRnZXRTZXNzaW9uUmVzcG9uc2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RhcnRXaWRnZXRTZXNzaW9uUmVzcG9uc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZXNzaW9uUmVzcG9uc2VBcmdzICBleHRlbmRzIEthbHR1cmFTdGFydFdpZGdldFNlc3Npb25SZXNwb25zZUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2Vzc2lvblJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYVN0YXJ0V2lkZ2V0U2Vzc2lvblJlc3BvbnNlIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2Vzc2lvblJlc3BvbnNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTZXNzaW9uUmVzcG9uc2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZXNzaW9uUmVzcG9uc2UnXSA9IEthbHR1cmFTZXNzaW9uUmVzcG9uc2U7Il19