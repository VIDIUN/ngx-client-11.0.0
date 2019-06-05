/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileLiveAppleHttpArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileLiveAppleHttpArgs.prototype.disableExtraAttributes;
/** @type {?|undefined} */
KalturaDeliveryProfileLiveAppleHttpArgs.prototype.forceProxy;
var KalturaDeliveryProfileLiveAppleHttp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileLiveAppleHttp, _super);
    function KalturaDeliveryProfileLiveAppleHttp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileLiveAppleHttp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileLiveAppleHttp' },
            disableExtraAttributes: { type: 'b' },
            forceProxy: { type: 'b' }
        });
        return result;
    };
    return KalturaDeliveryProfileLiveAppleHttp;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileLiveAppleHttp };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileLiveAppleHttp.prototype.disableExtraAttributes;
    /** @type {?} */
    KalturaDeliveryProfileLiveAppleHttp.prototype.forceProxy;
}
typesMappingStorage['KalturaDeliveryProfileLiveAppleHttp'] = KalturaDeliveryProfileLiveAppleHttp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUxpdmVBcHBsZUh0dHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBUTlGLElBQUE7SUFBeUQsK0RBQXNCO0lBSzNFLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4Q0FoQ0w7RUFVeUQsc0JBQXNCLEVBdUI5RSxDQUFBO0FBdkJELCtDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyB7XG4gICAgZGlzYWJsZUV4dHJhQXR0cmlidXRlcz8gOiBib29sZWFuO1xuXHRmb3JjZVByb3h5PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSB7XG5cbiAgICBkaXNhYmxlRXh0cmFBdHRyaWJ1dGVzIDogYm9vbGVhbjtcblx0Zm9yY2VQcm94eSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwJyB9LFxuXHRcdFx0XHRkaXNhYmxlRXh0cmFBdHRyaWJ1dGVzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGZvcmNlUHJveHkgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUxpdmVBcHBsZUh0dHAnXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXZlQXBwbGVIdHRwOyJdfQ==