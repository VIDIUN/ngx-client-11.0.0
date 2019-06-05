/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAssetServeOptionsArgs() { }
/** @type {?|undefined} */
KalturaAssetServeOptionsArgs.prototype.download;
/** @type {?|undefined} */
KalturaAssetServeOptionsArgs.prototype.referrer;
var KalturaAssetServeOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetServeOptions, _super);
    function KalturaAssetServeOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetServeOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetServeOptions' },
            download: { type: 'b' },
            referrer: { type: 's' }
        });
        return result;
    };
    return KalturaAssetServeOptions;
}(KalturaObjectBase));
export { KalturaAssetServeOptions };
if (false) {
    /** @type {?} */
    KalturaAssetServeOptions.prototype.download;
    /** @type {?} */
    KalturaAssetServeOptions.prototype.referrer;
}
typesMappingStorage['KalturaAssetServeOptions'] = KalturaAssetServeOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRTZXJ2ZU9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUE4QyxvREFBaUI7SUFLM0Qsa0NBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0FoQ0w7RUFVOEMsaUJBQWlCLEVBdUI5RCxDQUFBO0FBdkJELG9DQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldFNlcnZlT3B0aW9uc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBkb3dubG9hZD8gOiBib29sZWFuO1xuXHRyZWZlcnJlcj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldFNlcnZlT3B0aW9ucyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGRvd25sb2FkIDogYm9vbGVhbjtcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFNlcnZlT3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXRTZXJ2ZU9wdGlvbnMnIH0sXG5cdFx0XHRcdGRvd25sb2FkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldFNlcnZlT3B0aW9ucyddID0gS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zOyJdfQ==