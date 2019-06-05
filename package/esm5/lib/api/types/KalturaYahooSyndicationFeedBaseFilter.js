/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
/**
 * @record
 */
export function KalturaYahooSyndicationFeedBaseFilterArgs() { }
var KalturaYahooSyndicationFeedBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYahooSyndicationFeedBaseFilter, _super);
    function KalturaYahooSyndicationFeedBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYahooSyndicationFeedBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYahooSyndicationFeedBaseFilter' }
        });
        return result;
    };
    return KalturaYahooSyndicationFeedBaseFilter;
}(KalturaBaseSyndicationFeedFilter));
export { KalturaYahooSyndicationFeedBaseFilter };
typesMappingStorage['KalturaYahooSyndicationFeedBaseFilter'] = KalturaYahooSyndicationFeedBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzVILElBQUE7SUFBMkQsaUVBQWdDO0lBSXZGLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE1Qkw7RUFTMkQsZ0NBQWdDLEVBb0IxRixDQUFBO0FBcEJELGlEQW9CQztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXIsIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZYWhvb1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlhaG9vU3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhWWFob29TeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyOyJdfQ==