/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiHdsBaseFilter } from './KalturaDeliveryProfileAkamaiHdsBaseFilter';
/**
 * @record
 */
export function KalturaDeliveryProfileAkamaiHdsFilterArgs() { }
var KalturaDeliveryProfileAkamaiHdsFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileAkamaiHdsFilter, _super);
    function KalturaDeliveryProfileAkamaiHdsFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileAkamaiHdsFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileAkamaiHdsFilter' }
        });
        return result;
    };
    return KalturaDeliveryProfileAkamaiHdsFilter;
}(KalturaDeliveryProfileAkamaiHdsBaseFilter));
export { KalturaDeliveryProfileAkamaiHdsFilter };
typesMappingStorage['KalturaDeliveryProfileAkamaiHdsFilter'] = KalturaDeliveryProfileAkamaiHdsFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUhkc0ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUhkc0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBT3ZKLElBQUE7SUFBMkQsaUVBQXlDO0lBSWhHLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE1Qkw7RUFTMkQseUNBQXlDLEVBb0JuRyxDQUFBO0FBcEJELGlEQW9CQztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUhkc0Jhc2VGaWx0ZXIsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlIZHNCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUhkc0Jhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlIZHNGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlIZHNCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlIZHNGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpSGRzQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUhkc0ZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpSGRzRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpSGRzRmlsdGVyJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpSGRzRmlsdGVyOyJdfQ==