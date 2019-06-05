/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeDistributionProviderBaseFilter } from './KalturaYouTubeDistributionProviderBaseFilter';
/**
 * @record
 */
export function KalturaYouTubeDistributionProviderFilterArgs() { }
var KalturaYouTubeDistributionProviderFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYouTubeDistributionProviderFilter, _super);
    function KalturaYouTubeDistributionProviderFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYouTubeDistributionProviderFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYouTubeDistributionProviderFilter' }
        });
        return result;
    };
    return KalturaYouTubeDistributionProviderFilter;
}(KalturaYouTubeDistributionProviderBaseFilter));
export { KalturaYouTubeDistributionProviderFilter };
typesMappingStorage['KalturaYouTubeDistributionProviderFilter'] = KalturaYouTubeDistributionProviderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNENBQTRDLEVBQW9ELE1BQU0sZ0RBQWdELENBQUM7Ozs7O0FBT2hLLElBQUE7SUFBOEQsb0VBQTRDO0lBSXRHLGtEQUFZLElBQW9EO2VBRTVELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7U0FDcEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREE1Qkw7RUFTOEQsNENBQTRDLEVBb0J6RyxDQUFBO0FBcEJELG9EQW9CQztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIsIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyJ10gPSBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyOyJdfQ==