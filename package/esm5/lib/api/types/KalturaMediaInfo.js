/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBitRateMode } from './KalturaBitRateMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaMediaInfoArgs() { }
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.fileSize;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.containerFormat;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.containerId;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.containerProfile;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.containerDuration;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.containerBitRate;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoFormat;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoCodecId;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoDuration;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoBitRate;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoBitRateMode;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoWidth;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoHeight;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoFrameRate;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoDar;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.videoRotation;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioFormat;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioCodecId;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioDuration;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioBitRate;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioBitRateMode;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioChannels;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioSamplingRate;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.audioResolution;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.writingLib;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.rawData;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.multiStreamInfo;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.scanType;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.multiStream;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.isFastStart;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.contentStreams;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.complexityValue;
/** @type {?|undefined} */
KalturaMediaInfoArgs.prototype.maxGOP;
var KalturaMediaInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaInfo, _super);
    function KalturaMediaInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMediaInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaInfo' },
            id: { type: 'n', readOnly: true },
            flavorAssetId: { type: 's' },
            fileSize: { type: 'n' },
            containerFormat: { type: 's' },
            containerId: { type: 's' },
            containerProfile: { type: 's' },
            containerDuration: { type: 'n' },
            containerBitRate: { type: 'n' },
            videoFormat: { type: 's' },
            videoCodecId: { type: 's' },
            videoDuration: { type: 'n' },
            videoBitRate: { type: 'n' },
            videoBitRateMode: { type: 'en', subTypeConstructor: KalturaBitRateMode, subType: 'KalturaBitRateMode' },
            videoWidth: { type: 'n' },
            videoHeight: { type: 'n' },
            videoFrameRate: { type: 'n' },
            videoDar: { type: 'n' },
            videoRotation: { type: 'n' },
            audioFormat: { type: 's' },
            audioCodecId: { type: 's' },
            audioDuration: { type: 'n' },
            audioBitRate: { type: 'n' },
            audioBitRateMode: { type: 'en', subTypeConstructor: KalturaBitRateMode, subType: 'KalturaBitRateMode' },
            audioChannels: { type: 'n' },
            audioSamplingRate: { type: 'n' },
            audioResolution: { type: 'n' },
            writingLib: { type: 's' },
            rawData: { type: 's' },
            multiStreamInfo: { type: 's' },
            scanType: { type: 'n' },
            multiStream: { type: 's' },
            isFastStart: { type: 'n' },
            contentStreams: { type: 's' },
            complexityValue: { type: 'n' },
            maxGOP: { type: 'n' }
        });
        return result;
    };
    return KalturaMediaInfo;
}(KalturaObjectBase));
export { KalturaMediaInfo };
if (false) {
    /** @type {?} */
    KalturaMediaInfo.prototype.id;
    /** @type {?} */
    KalturaMediaInfo.prototype.flavorAssetId;
    /** @type {?} */
    KalturaMediaInfo.prototype.fileSize;
    /** @type {?} */
    KalturaMediaInfo.prototype.containerFormat;
    /** @type {?} */
    KalturaMediaInfo.prototype.containerId;
    /** @type {?} */
    KalturaMediaInfo.prototype.containerProfile;
    /** @type {?} */
    KalturaMediaInfo.prototype.containerDuration;
    /** @type {?} */
    KalturaMediaInfo.prototype.containerBitRate;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoFormat;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoCodecId;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoDuration;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoBitRate;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoBitRateMode;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoWidth;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoHeight;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoFrameRate;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoDar;
    /** @type {?} */
    KalturaMediaInfo.prototype.videoRotation;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioFormat;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioCodecId;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioDuration;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioBitRate;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioBitRateMode;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioChannels;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioSamplingRate;
    /** @type {?} */
    KalturaMediaInfo.prototype.audioResolution;
    /** @type {?} */
    KalturaMediaInfo.prototype.writingLib;
    /** @type {?} */
    KalturaMediaInfo.prototype.rawData;
    /** @type {?} */
    KalturaMediaInfo.prototype.multiStreamInfo;
    /** @type {?} */
    KalturaMediaInfo.prototype.scanType;
    /** @type {?} */
    KalturaMediaInfo.prototype.multiStream;
    /** @type {?} */
    KalturaMediaInfo.prototype.isFastStart;
    /** @type {?} */
    KalturaMediaInfo.prototype.contentStreams;
    /** @type {?} */
    KalturaMediaInfo.prototype.complexityValue;
    /** @type {?} */
    KalturaMediaInfo.prototype.maxGOP;
}
typesMappingStorage['KalturaMediaInfo'] = KalturaMediaInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q2xGLElBQUE7SUFBc0MsNENBQWlCO0lBc0NuRCwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMzRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQzNHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQW5JTDtFQTJDc0MsaUJBQWlCLEVBeUZ0RCxDQUFBO0FBekZELDRCQXlGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJpdFJhdGVNb2RlIH0gZnJvbSAnLi9LYWx0dXJhQml0UmF0ZU1vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZWRpYUluZm9BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGZpbGVTaXplPyA6IG51bWJlcjtcblx0Y29udGFpbmVyRm9ybWF0PyA6IHN0cmluZztcblx0Y29udGFpbmVySWQ/IDogc3RyaW5nO1xuXHRjb250YWluZXJQcm9maWxlPyA6IHN0cmluZztcblx0Y29udGFpbmVyRHVyYXRpb24/IDogbnVtYmVyO1xuXHRjb250YWluZXJCaXRSYXRlPyA6IG51bWJlcjtcblx0dmlkZW9Gb3JtYXQ/IDogc3RyaW5nO1xuXHR2aWRlb0NvZGVjSWQ/IDogc3RyaW5nO1xuXHR2aWRlb0R1cmF0aW9uPyA6IG51bWJlcjtcblx0dmlkZW9CaXRSYXRlPyA6IG51bWJlcjtcblx0dmlkZW9CaXRSYXRlTW9kZT8gOiBLYWx0dXJhQml0UmF0ZU1vZGU7XG5cdHZpZGVvV2lkdGg/IDogbnVtYmVyO1xuXHR2aWRlb0hlaWdodD8gOiBudW1iZXI7XG5cdHZpZGVvRnJhbWVSYXRlPyA6IG51bWJlcjtcblx0dmlkZW9EYXI/IDogbnVtYmVyO1xuXHR2aWRlb1JvdGF0aW9uPyA6IG51bWJlcjtcblx0YXVkaW9Gb3JtYXQ/IDogc3RyaW5nO1xuXHRhdWRpb0NvZGVjSWQ/IDogc3RyaW5nO1xuXHRhdWRpb0R1cmF0aW9uPyA6IG51bWJlcjtcblx0YXVkaW9CaXRSYXRlPyA6IG51bWJlcjtcblx0YXVkaW9CaXRSYXRlTW9kZT8gOiBLYWx0dXJhQml0UmF0ZU1vZGU7XG5cdGF1ZGlvQ2hhbm5lbHM/IDogbnVtYmVyO1xuXHRhdWRpb1NhbXBsaW5nUmF0ZT8gOiBudW1iZXI7XG5cdGF1ZGlvUmVzb2x1dGlvbj8gOiBudW1iZXI7XG5cdHdyaXRpbmdMaWI/IDogc3RyaW5nO1xuXHRyYXdEYXRhPyA6IHN0cmluZztcblx0bXVsdGlTdHJlYW1JbmZvPyA6IHN0cmluZztcblx0c2NhblR5cGU/IDogbnVtYmVyO1xuXHRtdWx0aVN0cmVhbT8gOiBzdHJpbmc7XG5cdGlzRmFzdFN0YXJ0PyA6IG51bWJlcjtcblx0Y29udGVudFN0cmVhbXM/IDogc3RyaW5nO1xuXHRjb21wbGV4aXR5VmFsdWU/IDogbnVtYmVyO1xuXHRtYXhHT1A/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWVkaWFJbmZvIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGZpbGVTaXplIDogbnVtYmVyO1xuXHRjb250YWluZXJGb3JtYXQgOiBzdHJpbmc7XG5cdGNvbnRhaW5lcklkIDogc3RyaW5nO1xuXHRjb250YWluZXJQcm9maWxlIDogc3RyaW5nO1xuXHRjb250YWluZXJEdXJhdGlvbiA6IG51bWJlcjtcblx0Y29udGFpbmVyQml0UmF0ZSA6IG51bWJlcjtcblx0dmlkZW9Gb3JtYXQgOiBzdHJpbmc7XG5cdHZpZGVvQ29kZWNJZCA6IHN0cmluZztcblx0dmlkZW9EdXJhdGlvbiA6IG51bWJlcjtcblx0dmlkZW9CaXRSYXRlIDogbnVtYmVyO1xuXHR2aWRlb0JpdFJhdGVNb2RlIDogS2FsdHVyYUJpdFJhdGVNb2RlO1xuXHR2aWRlb1dpZHRoIDogbnVtYmVyO1xuXHR2aWRlb0hlaWdodCA6IG51bWJlcjtcblx0dmlkZW9GcmFtZVJhdGUgOiBudW1iZXI7XG5cdHZpZGVvRGFyIDogbnVtYmVyO1xuXHR2aWRlb1JvdGF0aW9uIDogbnVtYmVyO1xuXHRhdWRpb0Zvcm1hdCA6IHN0cmluZztcblx0YXVkaW9Db2RlY0lkIDogc3RyaW5nO1xuXHRhdWRpb0R1cmF0aW9uIDogbnVtYmVyO1xuXHRhdWRpb0JpdFJhdGUgOiBudW1iZXI7XG5cdGF1ZGlvQml0UmF0ZU1vZGUgOiBLYWx0dXJhQml0UmF0ZU1vZGU7XG5cdGF1ZGlvQ2hhbm5lbHMgOiBudW1iZXI7XG5cdGF1ZGlvU2FtcGxpbmdSYXRlIDogbnVtYmVyO1xuXHRhdWRpb1Jlc29sdXRpb24gOiBudW1iZXI7XG5cdHdyaXRpbmdMaWIgOiBzdHJpbmc7XG5cdHJhd0RhdGEgOiBzdHJpbmc7XG5cdG11bHRpU3RyZWFtSW5mbyA6IHN0cmluZztcblx0c2NhblR5cGUgOiBudW1iZXI7XG5cdG11bHRpU3RyZWFtIDogc3RyaW5nO1xuXHRpc0Zhc3RTdGFydCA6IG51bWJlcjtcblx0Y29udGVudFN0cmVhbXMgOiBzdHJpbmc7XG5cdGNvbXBsZXhpdHlWYWx1ZSA6IG51bWJlcjtcblx0bWF4R09QIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWVkaWFJbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYUluZm8nIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250YWluZXJGb3JtYXQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGFpbmVySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGFpbmVyUHJvZmlsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250YWluZXJEdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250YWluZXJCaXRSYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZGVvRm9ybWF0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZpZGVvQ29kZWNJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2aWRlb0R1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZGVvQml0UmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0JpdFJhdGVNb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJpdFJhdGVNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFCaXRSYXRlTW9kZScgfSxcblx0XHRcdFx0dmlkZW9XaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0hlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0ZyYW1lUmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0RhciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb1JvdGF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF1ZGlvRm9ybWF0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1ZGlvQ29kZWNJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhdWRpb0R1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF1ZGlvQml0UmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0JpdFJhdGVNb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJpdFJhdGVNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFCaXRSYXRlTW9kZScgfSxcblx0XHRcdFx0YXVkaW9DaGFubmVscyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb1NhbXBsaW5nUmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb1Jlc29sdXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d3JpdGluZ0xpYiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyYXdEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG11bHRpU3RyZWFtSW5mbyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY2FuVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtdWx0aVN0cmVhbSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0Zhc3RTdGFydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250ZW50U3RyZWFtcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21wbGV4aXR5VmFsdWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWF4R09QIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYUluZm8nXSA9IEthbHR1cmFNZWRpYUluZm87Il19