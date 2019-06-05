/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaConvertLiveSegmentJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.mediaServerIndex;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.fileIndex;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.srcFilePath;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.destFilePath;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaConvertLiveSegmentJobDataArgs.prototype.destDataFilePath;
export class KalturaConvertLiveSegmentJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaConvertLiveSegmentJobData' },
            entryId: { type: 's' },
            assetId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            fileIndex: { type: 'n' },
            srcFilePath: { type: 's' },
            destFilePath: { type: 's' },
            endTime: { type: 'n' },
            destDataFilePath: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.entryId;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.assetId;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.mediaServerIndex;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.fileIndex;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.srcFilePath;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.destFilePath;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.endTime;
    /** @type {?} */
    KalturaConvertLiveSegmentJobData.prototype.destDataFilePath;
}
typesMappingStorage['KalturaConvertLiveSegmentJobData'] = KalturaConvertLiveSegmentJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RFLE1BQU0sdUNBQXdDLFNBQVEsY0FBYzs7OztJQVdoRSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMzSCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4PyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRmaWxlSW5kZXg/IDogbnVtYmVyO1xuXHRzcmNGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdGRlc3RGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdGVuZFRpbWU/IDogbnVtYmVyO1xuXHRkZXN0RGF0YUZpbGVQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGZpbGVJbmRleCA6IG51bWJlcjtcblx0c3JjRmlsZVBhdGggOiBzdHJpbmc7XG5cdGRlc3RGaWxlUGF0aCA6IHN0cmluZztcblx0ZW5kVGltZSA6IG51bWJlcjtcblx0ZGVzdERhdGFGaWxlUGF0aCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnRMaXZlU2VnbWVudEpvYkRhdGEnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVNlcnZlckluZGV4IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnIH0sXG5cdFx0XHRcdGZpbGVJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzcmNGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXN0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXN0RGF0YUZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJ0TGl2ZVNlZ21lbnRKb2JEYXRhJ10gPSBLYWx0dXJhQ29udmVydExpdmVTZWdtZW50Sm9iRGF0YTsiXX0=