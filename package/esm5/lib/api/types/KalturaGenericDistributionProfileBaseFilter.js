/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter } from './KalturaDistributionProfileFilter';
/**
 * @record
 */
export function KalturaGenericDistributionProfileBaseFilterArgs() { }
var KalturaGenericDistributionProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProfileBaseFilter, _super);
    function KalturaGenericDistributionProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfileBaseFilter' }
        });
        return result;
    };
    return KalturaGenericDistributionProfileBaseFilter;
}(KalturaDistributionProfileFilter));
export { KalturaGenericDistributionProfileBaseFilter };
typesMappingStorage['KalturaGenericDistributionProfileBaseFilter'] = KalturaGenericDistributionProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzVILElBQUE7SUFBaUUsdUVBQWdDO0lBSTdGLHFEQUFZLElBQXVEO2VBRS9ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzREE1Qkw7RUFTaUUsZ0NBQWdDLEVBb0JoRyxDQUFBO0FBcEJELHVEQW9CQztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIsIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==