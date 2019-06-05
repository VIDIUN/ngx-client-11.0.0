/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveReportExportParams extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveReportExportParams' },
            entryIds: { type: 's' },
            recpientEmail: { type: 's' },
            timeZoneOffset: { type: 'n' },
            applicationUrlTemplate: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLE1BQU0sb0NBQXFDLFNBQVEsaUJBQWlCOzs7O0lBT2hFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZW50cnlJZHM/IDogc3RyaW5nO1xuXHRyZWNwaWVudEVtYWlsPyA6IHN0cmluZztcblx0dGltZVpvbmVPZmZzZXQ/IDogbnVtYmVyO1xuXHRhcHBsaWNhdGlvblVybFRlbXBsYXRlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBlbnRyeUlkcyA6IHN0cmluZztcblx0cmVjcGllbnRFbWFpbCA6IHN0cmluZztcblx0dGltZVpvbmVPZmZzZXQgOiBudW1iZXI7XG5cdGFwcGxpY2F0aW9uVXJsVGVtcGxhdGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zJyB9LFxuXHRcdFx0XHRlbnRyeUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNwaWVudEVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpbWVab25lT2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFwcGxpY2F0aW9uVXJsVGVtcGxhdGUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMnXSA9IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UGFyYW1zOyJdfQ==