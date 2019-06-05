/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileForensicWatermarkArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.internalUrl;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionKey;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionIv;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionRegex;
var KalturaDeliveryProfileForensicWatermark = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileForensicWatermark, _super);
    function KalturaDeliveryProfileForensicWatermark(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.internalUrl === 'undefined')
            _this.internalUrl = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileForensicWatermark.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileForensicWatermark' },
            internalUrl: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            encryptionKey: { type: 's' },
            encryptionIv: { type: 's' },
            encryptionRegex: { type: 's' }
        });
        return result;
    };
    return KalturaDeliveryProfileForensicWatermark;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileForensicWatermark };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.internalUrl;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionKey;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionIv;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionRegex;
}
typesMappingStorage['KalturaDeliveryProfileForensicWatermark'] = KalturaDeliveryProfileForensicWatermark;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlRm9yZW5zaWNXYXRlcm1hcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVU5RixJQUFBO0lBQTZELG1FQUFzQjtJQU8vRSxpREFBWSxJQUFtRDtRQUEvRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztLQUN0RTs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUMvRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQXhDTDtFQWE2RCxzQkFBc0IsRUE0QmxGLENBQUE7QUE1QkQsbURBNEJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGb3JlbnNpY1dhdGVybWFya0FyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3Mge1xuICAgIGludGVybmFsVXJsPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRlbmNyeXB0aW9uS2V5PyA6IHN0cmluZztcblx0ZW5jcnlwdGlvbkl2PyA6IHN0cmluZztcblx0ZW5jcnlwdGlvblJlZ2V4PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSB7XG5cbiAgICBpbnRlcm5hbFVybCA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRlbmNyeXB0aW9uS2V5IDogc3RyaW5nO1xuXHRlbmNyeXB0aW9uSXYgOiBzdHJpbmc7XG5cdGVuY3J5cHRpb25SZWdleCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW50ZXJuYWxVcmwgPT09ICd1bmRlZmluZWQnKSB0aGlzLmludGVybmFsVXJsID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrJyB9LFxuXHRcdFx0XHRpbnRlcm5hbFVybCA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0ZW5jcnlwdGlvbktleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNyeXB0aW9uSXYgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jcnlwdGlvblJlZ2V4IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVGb3JlbnNpY1dhdGVybWFyayddID0gS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrOyJdfQ==