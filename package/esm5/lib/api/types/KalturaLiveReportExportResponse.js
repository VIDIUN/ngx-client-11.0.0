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
export function KalturaLiveReportExportResponseArgs() { }
/** @type {?|undefined} */
KalturaLiveReportExportResponseArgs.prototype.referenceJobId;
/** @type {?|undefined} */
KalturaLiveReportExportResponseArgs.prototype.reportEmail;
var KalturaLiveReportExportResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveReportExportResponse, _super);
    function KalturaLiveReportExportResponse(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveReportExportResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveReportExportResponse' },
            referenceJobId: { type: 'n' },
            reportEmail: { type: 's' }
        });
        return result;
    };
    return KalturaLiveReportExportResponse;
}(KalturaObjectBase));
export { KalturaLiveReportExportResponse };
if (false) {
    /** @type {?} */
    KalturaLiveReportExportResponse.prototype.referenceJobId;
    /** @type {?} */
    KalturaLiveReportExportResponse.prototype.reportEmail;
}
typesMappingStorage['KalturaLiveReportExportResponse'] = KalturaLiveReportExportResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixJQUFBO0lBQXFELDJEQUFpQjtJQUtsRSx5Q0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQWhDTDtFQVVxRCxpQkFBaUIsRUF1QnJFLENBQUE7QUF2QkQsMkNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICByZWZlcmVuY2VKb2JJZD8gOiBudW1iZXI7XG5cdHJlcG9ydEVtYWlsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlZmVyZW5jZUpvYklkIDogbnVtYmVyO1xuXHRyZXBvcnRFbWFpbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlJyB9LFxuXHRcdFx0XHRyZWZlcmVuY2VKb2JJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZXBvcnRFbWFpbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlJ10gPSBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlOyJdfQ==