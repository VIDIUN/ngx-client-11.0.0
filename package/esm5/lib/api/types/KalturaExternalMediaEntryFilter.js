/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaEntryBaseFilter } from './KalturaExternalMediaEntryBaseFilter';
/**
 * @record
 */
export function KalturaExternalMediaEntryFilterArgs() { }
var KalturaExternalMediaEntryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExternalMediaEntryFilter, _super);
    function KalturaExternalMediaEntryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExternalMediaEntryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExternalMediaEntryFilter' }
        });
        return result;
    };
    return KalturaExternalMediaEntryFilter;
}(KalturaExternalMediaEntryBaseFilter));
export { KalturaExternalMediaEntryFilter };
typesMappingStorage['KalturaExternalMediaEntryFilter'] = KalturaExternalMediaEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQTJDLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBT3JJLElBQUE7SUFBcUQsMkRBQW1DO0lBSXBGLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E1Qkw7RUFTcUQsbUNBQW1DLEVBb0J2RixDQUFBO0FBcEJELDJDQW9CQztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXIsIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5QmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5RmlsdGVyJ10gPSBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5RmlsdGVyOyJdfQ==