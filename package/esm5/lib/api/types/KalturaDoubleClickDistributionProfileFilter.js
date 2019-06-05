/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDoubleClickDistributionProfileBaseFilter } from './KalturaDoubleClickDistributionProfileBaseFilter';
/**
 * @record
 */
export function KalturaDoubleClickDistributionProfileFilterArgs() { }
var KalturaDoubleClickDistributionProfileFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDoubleClickDistributionProfileFilter, _super);
    function KalturaDoubleClickDistributionProfileFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDoubleClickDistributionProfileFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDoubleClickDistributionProfileFilter' }
        });
        return result;
    };
    return KalturaDoubleClickDistributionProfileFilter;
}(KalturaDoubleClickDistributionProfileBaseFilter));
export { KalturaDoubleClickDistributionProfileFilter };
typesMappingStorage['KalturaDoubleClickDistributionProfileFilter'] = KalturaDoubleClickDistributionProfileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0NBQStDLEVBQXVELE1BQU0sbURBQW1ELENBQUM7Ozs7O0FBT3pLLElBQUE7SUFBaUUsdUVBQStDO0lBSTVHLHFEQUFZLElBQXVEO2VBRS9ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzREE1Qkw7RUFTaUUsK0NBQStDLEVBb0IvRyxDQUFBO0FBcEJELHVEQW9CQztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXIsIEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJ10gPSBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyOyJdfQ==