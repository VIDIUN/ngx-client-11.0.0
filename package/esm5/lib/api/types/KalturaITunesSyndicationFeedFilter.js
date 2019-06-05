/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaITunesSyndicationFeedBaseFilter } from './KalturaITunesSyndicationFeedBaseFilter';
/**
 * @record
 */
export function KalturaITunesSyndicationFeedFilterArgs() { }
var KalturaITunesSyndicationFeedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaITunesSyndicationFeedFilter, _super);
    function KalturaITunesSyndicationFeedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaITunesSyndicationFeedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaITunesSyndicationFeedFilter' }
        });
        return result;
    };
    return KalturaITunesSyndicationFeedFilter;
}(KalturaITunesSyndicationFeedBaseFilter));
export { KalturaITunesSyndicationFeedFilter };
typesMappingStorage['KalturaITunesSyndicationFeedFilter'] = KalturaITunesSyndicationFeedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7O0FBTzlJLElBQUE7SUFBd0QsOERBQXNDO0lBSTFGLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E1Qkw7RUFTd0Qsc0NBQXNDLEVBb0I3RixDQUFBO0FBcEJELDhDQW9CQztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIsIEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFJVHVuZXNTeW5kaWNhdGlvbkZlZWRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUlUdW5lc1N5bmRpY2F0aW9uRmVlZEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkRmlsdGVyJ10gPSBLYWx0dXJhSVR1bmVzU3luZGljYXRpb25GZWVkRmlsdGVyOyJdfQ==