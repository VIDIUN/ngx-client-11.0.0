/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaPodcastDistributionProviderArgs() { }
var KalturaPodcastDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPodcastDistributionProvider, _super);
    function KalturaPodcastDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPodcastDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPodcastDistributionProvider' }
        });
        return result;
    };
    return KalturaPodcastDistributionProvider;
}(KalturaDistributionProvider));
export { KalturaPodcastDistributionProvider };
typesMappingStorage['KalturaPodcastDistributionProvider'] = KalturaPodcastDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBvZGNhc3REaXN0cmlidXRpb25Qcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBvZGNhc3REaXN0cmlidXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBTzdHLElBQUE7SUFBd0QsOERBQTJCO0lBSS9FLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E1Qkw7RUFTd0QsMkJBQTJCLEVBb0JsRixDQUFBO0FBcEJELDhDQW9CQztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb3ZpZGVyIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUG9kY2FzdERpc3RyaWJ1dGlvblByb3ZpZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvdmlkZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvdmlkZXInXSA9IEthbHR1cmFQb2RjYXN0RGlzdHJpYnV0aW9uUHJvdmlkZXI7Il19