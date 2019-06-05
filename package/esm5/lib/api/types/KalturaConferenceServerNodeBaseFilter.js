/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeFilter } from './KalturaServerNodeFilter';
/**
 * @record
 */
export function KalturaConferenceServerNodeBaseFilterArgs() { }
var KalturaConferenceServerNodeBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConferenceServerNodeBaseFilter, _super);
    function KalturaConferenceServerNodeBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConferenceServerNodeBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConferenceServerNodeBaseFilter' }
        });
        return result;
    };
    return KalturaConferenceServerNodeBaseFilter;
}(KalturaServerNodeFilter));
export { KalturaConferenceServerNodeBaseFilter };
typesMappingStorage['KalturaConferenceServerNodeBaseFilter'] = KalturaConferenceServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBT2pHLElBQUE7SUFBMkQsaUVBQXVCO0lBSTlFLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE1Qkw7RUFTMkQsdUJBQXVCLEVBb0JqRixDQUFBO0FBcEJELGlEQW9CQztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGVGaWx0ZXIsIEthbHR1cmFTZXJ2ZXJOb2RlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlcnZlck5vZGVGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZXJ2ZXJOb2RlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VydmVyTm9kZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGVCYXNlRmlsdGVyOyJdfQ==