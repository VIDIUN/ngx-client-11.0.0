/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaLiveToVodJobDataArgs() { }
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.vodEntryId;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.liveEntryId;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.totalVodDuration;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.lastSegmentDuration;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.amfArray;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.lastCuePointSyncTime;
/** @type {?|undefined} */
KalturaLiveToVodJobDataArgs.prototype.lastSegmentDrift;
export class KalturaLiveToVodJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaLiveToVodJobData' },
            vodEntryId: { type: 's' },
            liveEntryId: { type: 's' },
            totalVodDuration: { type: 'n' },
            lastSegmentDuration: { type: 'n' },
            amfArray: { type: 's' },
            lastCuePointSyncTime: { type: 'd' },
            lastSegmentDrift: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.vodEntryId;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.liveEntryId;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.totalVodDuration;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.lastSegmentDuration;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.amfArray;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.lastCuePointSyncTime;
    /** @type {?} */
    KalturaLiveToVodJobData.prototype.lastSegmentDrift;
}
typesMappingStorage['KalturaLiveToVodJobData'] = KalturaLiveToVodJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVUb1ZvZEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlVG9Wb2RKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF0RSxNQUFNLDhCQUErQixTQUFRLGNBQWM7Ozs7SUFVdkQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVRvVm9kSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICB2b2RFbnRyeUlkPyA6IHN0cmluZztcblx0bGl2ZUVudHJ5SWQ/IDogc3RyaW5nO1xuXHR0b3RhbFZvZER1cmF0aW9uPyA6IG51bWJlcjtcblx0bGFzdFNlZ21lbnREdXJhdGlvbj8gOiBudW1iZXI7XG5cdGFtZkFycmF5PyA6IHN0cmluZztcblx0bGFzdEN1ZVBvaW50U3luY1RpbWU/IDogRGF0ZTtcblx0bGFzdFNlZ21lbnREcmlmdD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlVG9Wb2RKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgdm9kRW50cnlJZCA6IHN0cmluZztcblx0bGl2ZUVudHJ5SWQgOiBzdHJpbmc7XG5cdHRvdGFsVm9kRHVyYXRpb24gOiBudW1iZXI7XG5cdGxhc3RTZWdtZW50RHVyYXRpb24gOiBudW1iZXI7XG5cdGFtZkFycmF5IDogc3RyaW5nO1xuXHRsYXN0Q3VlUG9pbnRTeW5jVGltZSA6IERhdGU7XG5cdGxhc3RTZWdtZW50RHJpZnQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlVG9Wb2RKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlVG9Wb2RKb2JEYXRhJyB9LFxuXHRcdFx0XHR2b2RFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxpdmVFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRvdGFsVm9kRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdFNlZ21lbnREdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhbWZBcnJheSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYXN0Q3VlUG9pbnRTeW5jVGltZSA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRsYXN0U2VnbWVudERyaWZ0IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlVG9Wb2RKb2JEYXRhJ10gPSBLYWx0dXJhTGl2ZVRvVm9kSm9iRGF0YTsiXX0=