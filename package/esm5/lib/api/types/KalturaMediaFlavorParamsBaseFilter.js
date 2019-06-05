/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter } from './KalturaFlavorParamsFilter';
/**
 * @record
 */
export function KalturaMediaFlavorParamsBaseFilterArgs() { }
var KalturaMediaFlavorParamsBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaFlavorParamsBaseFilter, _super);
    function KalturaMediaFlavorParamsBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMediaFlavorParamsBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaFlavorParamsBaseFilter' }
        });
        return result;
    };
    return KalturaMediaFlavorParamsBaseFilter;
}(KalturaFlavorParamsFilter));
export { KalturaMediaFlavorParamsBaseFilter };
typesMappingStorage['KalturaMediaFlavorParamsBaseFilter'] = KalturaMediaFlavorParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBT3ZHLElBQUE7SUFBd0QsOERBQXlCO0lBSTdFLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E1Qkw7RUFTd0QseUJBQXlCLEVBb0JoRixDQUFBO0FBcEJELDhDQW9CQztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlciwgS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZWRpYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZWRpYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlciddID0gS2FsdHVyYU1lZGlhRmxhdm9yUGFyYW1zQmFzZUZpbHRlcjsiXX0=