/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamEntryBaseFilter } from './KalturaLiveStreamEntryBaseFilter';
/**
 * @record
 */
export function KalturaLiveStreamEntryFilterArgs() { }
var KalturaLiveStreamEntryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamEntryFilter, _super);
    function KalturaLiveStreamEntryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamEntryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamEntryFilter' }
        });
        return result;
    };
    return KalturaLiveStreamEntryFilter;
}(KalturaLiveStreamEntryBaseFilter));
export { KalturaLiveStreamEntryFilter };
typesMappingStorage['KalturaLiveStreamEntryFilter'] = KalturaLiveStreamEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzVILElBQUE7SUFBa0Qsd0RBQWdDO0lBSTlFLHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDeEUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0E1Qkw7RUFTa0QsZ0NBQWdDLEVBb0JqRixDQUFBO0FBcEJELHdDQW9CQztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUJhc2VGaWx0ZXIsIEthbHR1cmFMaXZlU3RyZWFtRW50cnlCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFMaXZlU3RyZWFtRW50cnlCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtRW50cnlGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5QmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5RmlsdGVyJ10gPSBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5RmlsdGVyOyJdfQ==