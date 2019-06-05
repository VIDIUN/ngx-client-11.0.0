/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlLimitDeliveryProfilesActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlLimitDeliveryProfilesActionArgs.prototype.deliveryProfileIds;
/** @type {?|undefined} */
KalturaAccessControlLimitDeliveryProfilesActionArgs.prototype.isBlockedList;
var KalturaAccessControlLimitDeliveryProfilesAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlLimitDeliveryProfilesAction, _super);
    function KalturaAccessControlLimitDeliveryProfilesAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlLimitDeliveryProfilesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlLimitDeliveryProfilesAction' },
            deliveryProfileIds: { type: 's' },
            isBlockedList: { type: 'b' }
        });
        return result;
    };
    return KalturaAccessControlLimitDeliveryProfilesAction;
}(KalturaRuleAction));
export { KalturaAccessControlLimitDeliveryProfilesAction };
if (false) {
    /** @type {?} */
    KalturaAccessControlLimitDeliveryProfilesAction.prototype.deliveryProfileIds;
    /** @type {?} */
    KalturaAccessControlLimitDeliveryProfilesAction.prototype.isBlockedList;
}
typesMappingStorage['KalturaAccessControlLimitDeliveryProfilesAction'] = KalturaAccessControlLimitDeliveryProfilesAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0FBUS9FLElBQUE7SUFBcUUsMkVBQWlCO0lBS2xGLHlEQUFZLElBQTJEO2VBRW5FLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaURBQWlELEVBQUU7WUFDcEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswREFoQ0w7RUFVcUUsaUJBQWlCLEVBdUJyRixDQUFBO0FBdkJELDJEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlEQUFpRCxDQUFDLEdBQUcsK0NBQStDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24sIEthbHR1cmFSdWxlQWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbkFyZ3Mge1xuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcz8gOiBzdHJpbmc7XG5cdGlzQmxvY2tlZExpc3Q/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbiB7XG5cbiAgICBkZWxpdmVyeVByb2ZpbGVJZHMgOiBzdHJpbmc7XG5cdGlzQmxvY2tlZExpc3QgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0RGVsaXZlcnlQcm9maWxlc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0RGVsaXZlcnlQcm9maWxlc0FjdGlvbicgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcm9maWxlSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzQmxvY2tlZExpc3QgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb24nXSA9IEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uOyJdfQ==