/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaLiveReportExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaLiveReportExportJobDataArgs.prototype.timeReference;
/** @type {?|undefined} */
KalturaLiveReportExportJobDataArgs.prototype.timeZoneOffset;
/** @type {?|undefined} */
KalturaLiveReportExportJobDataArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaLiveReportExportJobDataArgs.prototype.outputPath;
/** @type {?|undefined} */
KalturaLiveReportExportJobDataArgs.prototype.recipientEmail;
export class KalturaLiveReportExportJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaLiveReportExportJobData' },
            timeReference: { type: 'd' },
            timeZoneOffset: { type: 'n' },
            entryIds: { type: 's' },
            outputPath: { type: 's' },
            recipientEmail: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveReportExportJobData.prototype.timeReference;
    /** @type {?} */
    KalturaLiveReportExportJobData.prototype.timeZoneOffset;
    /** @type {?} */
    KalturaLiveReportExportJobData.prototype.entryIds;
    /** @type {?} */
    KalturaLiveReportExportJobData.prototype.outputPath;
    /** @type {?} */
    KalturaLiveReportExportJobData.prototype.recipientEmail;
}
typesMappingStorage['KalturaLiveReportExportJobData'] = KalturaLiveReportExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdEUsTUFBTSxxQ0FBc0MsU0FBUSxjQUFjOzs7O0lBUTlELFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgdGltZVJlZmVyZW5jZT8gOiBEYXRlO1xuXHR0aW1lWm9uZU9mZnNldD8gOiBudW1iZXI7XG5cdGVudHJ5SWRzPyA6IHN0cmluZztcblx0b3V0cHV0UGF0aD8gOiBzdHJpbmc7XG5cdHJlY2lwaWVudEVtYWlsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgdGltZVJlZmVyZW5jZSA6IERhdGU7XG5cdHRpbWVab25lT2Zmc2V0IDogbnVtYmVyO1xuXHRlbnRyeUlkcyA6IHN0cmluZztcblx0b3V0cHV0UGF0aCA6IHN0cmluZztcblx0cmVjaXBpZW50RW1haWwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydEpvYkRhdGEnIH0sXG5cdFx0XHRcdHRpbWVSZWZlcmVuY2UgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dGltZVpvbmVPZmZzZXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3V0cHV0UGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNpcGllbnRFbWFpbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydEpvYkRhdGEnXSA9IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0Sm9iRGF0YTsiXX0=