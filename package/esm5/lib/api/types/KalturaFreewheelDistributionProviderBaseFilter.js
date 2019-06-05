/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
/**
 * @record
 */
export function KalturaFreewheelDistributionProviderBaseFilterArgs() { }
var KalturaFreewheelDistributionProviderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFreewheelDistributionProviderBaseFilter, _super);
    function KalturaFreewheelDistributionProviderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFreewheelDistributionProviderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFreewheelDistributionProviderBaseFilter' }
        });
        return result;
    };
    return KalturaFreewheelDistributionProviderBaseFilter;
}(KalturaDistributionProviderFilter));
export { KalturaFreewheelDistributionProviderBaseFilter };
typesMappingStorage['KalturaFreewheelDistributionProviderBaseFilter'] = KalturaFreewheelDistributionProviderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBTy9ILElBQUE7SUFBb0UsMEVBQWlDO0lBSWpHLHdEQUFZLElBQTBEO2VBRWxFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0RBQWdELEVBQUU7U0FDMUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5REE1Qkw7RUFTb0UsaUNBQWlDLEVBb0JwRyxDQUFBO0FBcEJELDBEQW9CQztBQUVELG1CQUFtQixDQUFDLGdEQUFnRCxDQUFDLEdBQUcsOENBQThDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXI7Il19