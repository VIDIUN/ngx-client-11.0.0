/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmp } from './KalturaDeliveryProfileRtmp';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericRtmpArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileGenericRtmpArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaDeliveryProfileGenericRtmpArgs.prototype.rendererClass;
var KalturaDeliveryProfileGenericRtmp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileGenericRtmp, _super);
    function KalturaDeliveryProfileGenericRtmp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileGenericRtmp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericRtmp' },
            pattern: { type: 's' },
            rendererClass: { type: 's' }
        });
        return result;
    };
    return KalturaDeliveryProfileGenericRtmp;
}(KalturaDeliveryProfileRtmp));
export { KalturaDeliveryProfileGenericRtmp };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileGenericRtmp.prototype.pattern;
    /** @type {?} */
    KalturaDeliveryProfileGenericRtmp.prototype.rendererClass;
}
typesMappingStorage['KalturaDeliveryProfileGenericRtmp'] = KalturaDeliveryProfileGenericRtmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFRMUcsSUFBQTtJQUF1RCw2REFBMEI7SUFLN0UsMkNBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0FoQ0w7RUFVdUQsMEJBQTBCLEVBdUJoRixDQUFBO0FBdkJELDZDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXAsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEFyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBBcmdzIHtcbiAgICBwYXR0ZXJuPyA6IHN0cmluZztcblx0cmVuZGVyZXJDbGFzcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcCBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wIHtcblxuICAgIHBhdHRlcm4gOiBzdHJpbmc7XG5cdHJlbmRlcmVyQ2xhc3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXAnIH0sXG5cdFx0XHRcdHBhdHRlcm4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVuZGVyZXJDbGFzcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXAnXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcDsiXX0=