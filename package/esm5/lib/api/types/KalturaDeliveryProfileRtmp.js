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
export function KalturaDeliveryProfileRtmpArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileRtmpArgs.prototype.enforceRtmpe;
/** @type {?|undefined} */
KalturaDeliveryProfileRtmpArgs.prototype.prefix;
var KalturaDeliveryProfileRtmp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileRtmp, _super);
    function KalturaDeliveryProfileRtmp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileRtmp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileRtmp' },
            enforceRtmpe: { type: 'b' },
            prefix: { type: 's' }
        });
        return result;
    };
    return KalturaDeliveryProfileRtmp;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileRtmp };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileRtmp.prototype.enforceRtmpe;
    /** @type {?} */
    KalturaDeliveryProfileRtmp.prototype.prefix;
}
typesMappingStorage['KalturaDeliveryProfileRtmp'] = KalturaDeliveryProfileRtmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBUTlGLElBQUE7SUFBZ0Qsc0RBQXNCO0lBS2xFLG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FoQ0w7RUFVZ0Qsc0JBQXNCLEVBdUJyRSxDQUFBO0FBdkJELHNDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyB7XG4gICAgZW5mb3JjZVJ0bXBlPyA6IGJvb2xlYW47XG5cdHByZWZpeD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSB7XG5cbiAgICBlbmZvcmNlUnRtcGUgOiBib29sZWFuO1xuXHRwcmVmaXggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wJyB9LFxuXHRcdFx0XHRlbmZvcmNlUnRtcGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cHJlZml4IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcDsiXX0=