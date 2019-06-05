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
export function KalturaDeliveryProfileAkamaiAppleHttpManifestArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileAkamaiAppleHttpManifestArgs.prototype.supportClipping;
var KalturaDeliveryProfileAkamaiAppleHttpManifest = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileAkamaiAppleHttpManifest, _super);
    function KalturaDeliveryProfileAkamaiAppleHttpManifest(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileAkamaiAppleHttpManifest.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileAkamaiAppleHttpManifest' },
            supportClipping: { type: 'b' }
        });
        return result;
    };
    return KalturaDeliveryProfileAkamaiAppleHttpManifest;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileAkamaiAppleHttpManifest };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileAkamaiAppleHttpManifest.prototype.supportClipping;
}
typesMappingStorage['KalturaDeliveryProfileAkamaiAppleHttpManifest'] = KalturaDeliveryProfileAkamaiAppleHttpManifest;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFrYW1haUFwcGxlSHR0cE1hbmlmZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpQXBwbGVIdHRwTWFuaWZlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLElBQUE7SUFBbUUseUVBQXNCO0lBSXJGLHVEQUFZLElBQXlEO2VBRWpFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dEQTdCTDtFQVNtRSxzQkFBc0IsRUFxQnhGLENBQUE7QUFyQkQseURBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlBcHBsZUh0dHBNYW5pZmVzdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3Mge1xuICAgIHN1cHBvcnRDbGlwcGluZz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpQXBwbGVIdHRwTWFuaWZlc3QgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIHtcblxuICAgIHN1cHBvcnRDbGlwcGluZyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlBcHBsZUh0dHBNYW5pZmVzdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpQXBwbGVIdHRwTWFuaWZlc3QnIH0sXG5cdFx0XHRcdHN1cHBvcnRDbGlwcGluZyA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsaXZlcnlQcm9maWxlQWthbWFpQXBwbGVIdHRwTWFuaWZlc3QnXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBa2FtYWlBcHBsZUh0dHBNYW5pZmVzdDsiXX0=