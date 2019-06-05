/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedFilter } from './KalturaGenericSyndicationFeedFilter';
/**
 * @record
 */
export function KalturaGenericXsltSyndicationFeedBaseFilterArgs() { }
var KalturaGenericXsltSyndicationFeedBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericXsltSyndicationFeedBaseFilter, _super);
    function KalturaGenericXsltSyndicationFeedBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericXsltSyndicationFeedBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericXsltSyndicationFeedBaseFilter' }
        });
        return result;
    };
    return KalturaGenericXsltSyndicationFeedBaseFilter;
}(KalturaGenericSyndicationFeedFilter));
export { KalturaGenericXsltSyndicationFeedBaseFilter };
typesMappingStorage['KalturaGenericXsltSyndicationFeedBaseFilter'] = KalturaGenericXsltSyndicationFeedBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQTJDLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBT3JJLElBQUE7SUFBaUUsdUVBQW1DO0lBSWhHLHFEQUFZLElBQXVEO2VBRS9ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzREE1Qkw7RUFTaUUsbUNBQW1DLEVBb0JuRyxDQUFBO0FBcEJELHVEQW9CQztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXIsIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljWHNsdFN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljWHNsdFN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyOyJdfQ==