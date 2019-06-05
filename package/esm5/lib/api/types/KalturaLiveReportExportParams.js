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
export function KalturaLiveReportExportParamsArgs() { }
/** @type {?|undefined} */
KalturaLiveReportExportParamsArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaLiveReportExportParamsArgs.prototype.recpientEmail;
/** @type {?|undefined} */
KalturaLiveReportExportParamsArgs.prototype.timeZoneOffset;
/** @type {?|undefined} */
KalturaLiveReportExportParamsArgs.prototype.applicationUrlTemplate;
var KalturaLiveReportExportParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveReportExportParams, _super);
    function KalturaLiveReportExportParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveReportExportParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveReportExportParams' },
            entryIds: { type: 's' },
            recpientEmail: { type: 's' },
            timeZoneOffset: { type: 'n' },
            applicationUrlTemplate: { type: 's' }
        });
        return result;
    };
    return KalturaLiveReportExportParams;
}(KalturaObjectBase));
export { KalturaLiveReportExportParams };
if (false) {
    /** @type {?} */
    KalturaLiveReportExportParams.prototype.entryIds;
    /** @type {?} */
    KalturaLiveReportExportParams.prototype.recpientEmail;
    /** @type {?} */
    KalturaLiveReportExportParams.prototype.timeZoneOffset;
    /** @type {?} */
    KalturaLiveReportExportParams.prototype.applicationUrlTemplate;
}
typesMappingStorage['KalturaLiveReportExportParams'] = KalturaLiveReportExportParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQW1ELHlEQUFpQjtJQU9oRSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXRDTDtFQVltRCxpQkFBaUIsRUEyQm5FLENBQUE7QUEzQkQseUNBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGVudHJ5SWRzPyA6IHN0cmluZztcblx0cmVjcGllbnRFbWFpbD8gOiBzdHJpbmc7XG5cdHRpbWVab25lT2Zmc2V0PyA6IG51bWJlcjtcblx0YXBwbGljYXRpb25VcmxUZW1wbGF0ZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZW50cnlJZHMgOiBzdHJpbmc7XG5cdHJlY3BpZW50RW1haWwgOiBzdHJpbmc7XG5cdHRpbWVab25lT2Zmc2V0IDogbnVtYmVyO1xuXHRhcHBsaWNhdGlvblVybFRlbXBsYXRlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtcycgfSxcblx0XHRcdFx0ZW50cnlJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVjcGllbnRFbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aW1lWm9uZU9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvblVybFRlbXBsYXRlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zJ10gPSBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtczsiXX0=