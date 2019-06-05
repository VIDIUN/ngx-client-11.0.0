/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBatchHistoryDataArgs() { }
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.workerId;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.batchIndex;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.timeStamp;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.message;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.errType;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.errNumber;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.hostName;
/** @type {?|undefined} */
KalturaBatchHistoryDataArgs.prototype.sessionId;
export class KalturaBatchHistoryData extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaBatchHistoryData' },
            schedulerId: { type: 'n' },
            workerId: { type: 'n' },
            batchIndex: { type: 'n' },
            timeStamp: { type: 'n' },
            message: { type: 's' },
            errType: { type: 'n' },
            errNumber: { type: 'n' },
            hostName: { type: 's' },
            sessionId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBatchHistoryData.prototype.schedulerId;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.workerId;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.batchIndex;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.timeStamp;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.message;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.errType;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.errNumber;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.hostName;
    /** @type {?} */
    KalturaBatchHistoryData.prototype.sessionId;
}
typesMappingStorage['KalturaBatchHistoryData'] = KalturaBatchHistoryData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXRjaEhpc3RvcnlEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRixNQUFNLDhCQUErQixTQUFRLGlCQUFpQjs7OztJQVkxRCxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXRjaEhpc3RvcnlEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNjaGVkdWxlcklkPyA6IG51bWJlcjtcblx0d29ya2VySWQ/IDogbnVtYmVyO1xuXHRiYXRjaEluZGV4PyA6IG51bWJlcjtcblx0dGltZVN0YW1wPyA6IG51bWJlcjtcblx0bWVzc2FnZT8gOiBzdHJpbmc7XG5cdGVyclR5cGU/IDogbnVtYmVyO1xuXHRlcnJOdW1iZXI/IDogbnVtYmVyO1xuXHRob3N0TmFtZT8gOiBzdHJpbmc7XG5cdHNlc3Npb25JZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCYXRjaEhpc3RvcnlEYXRhIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgc2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHdvcmtlcklkIDogbnVtYmVyO1xuXHRiYXRjaEluZGV4IDogbnVtYmVyO1xuXHR0aW1lU3RhbXAgOiBudW1iZXI7XG5cdG1lc3NhZ2UgOiBzdHJpbmc7XG5cdGVyclR5cGUgOiBudW1iZXI7XG5cdGVyck51bWJlciA6IG51bWJlcjtcblx0aG9zdE5hbWUgOiBzdHJpbmc7XG5cdHNlc3Npb25JZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhdGNoSGlzdG9yeURhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEnIH0sXG5cdFx0XHRcdHNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdvcmtlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhdGNoSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGltZVN0YW1wIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1lc3NhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlcnJOdW1iZXIgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aG9zdE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vzc2lvbklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXRjaEhpc3RvcnlEYXRhJ10gPSBLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YTsiXX0=