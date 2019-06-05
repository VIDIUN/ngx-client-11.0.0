/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaMediaInfo extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDbEYsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7SUFzQ25ELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMzRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQzNHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCaXRSYXRlTW9kZSB9IGZyb20gJy4vS2FsdHVyYUJpdFJhdGVNb2RlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWVkaWFJbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRmaWxlU2l6ZT8gOiBudW1iZXI7XG5cdGNvbnRhaW5lckZvcm1hdD8gOiBzdHJpbmc7XG5cdGNvbnRhaW5lcklkPyA6IHN0cmluZztcblx0Y29udGFpbmVyUHJvZmlsZT8gOiBzdHJpbmc7XG5cdGNvbnRhaW5lckR1cmF0aW9uPyA6IG51bWJlcjtcblx0Y29udGFpbmVyQml0UmF0ZT8gOiBudW1iZXI7XG5cdHZpZGVvRm9ybWF0PyA6IHN0cmluZztcblx0dmlkZW9Db2RlY0lkPyA6IHN0cmluZztcblx0dmlkZW9EdXJhdGlvbj8gOiBudW1iZXI7XG5cdHZpZGVvQml0UmF0ZT8gOiBudW1iZXI7XG5cdHZpZGVvQml0UmF0ZU1vZGU/IDogS2FsdHVyYUJpdFJhdGVNb2RlO1xuXHR2aWRlb1dpZHRoPyA6IG51bWJlcjtcblx0dmlkZW9IZWlnaHQ/IDogbnVtYmVyO1xuXHR2aWRlb0ZyYW1lUmF0ZT8gOiBudW1iZXI7XG5cdHZpZGVvRGFyPyA6IG51bWJlcjtcblx0dmlkZW9Sb3RhdGlvbj8gOiBudW1iZXI7XG5cdGF1ZGlvRm9ybWF0PyA6IHN0cmluZztcblx0YXVkaW9Db2RlY0lkPyA6IHN0cmluZztcblx0YXVkaW9EdXJhdGlvbj8gOiBudW1iZXI7XG5cdGF1ZGlvQml0UmF0ZT8gOiBudW1iZXI7XG5cdGF1ZGlvQml0UmF0ZU1vZGU/IDogS2FsdHVyYUJpdFJhdGVNb2RlO1xuXHRhdWRpb0NoYW5uZWxzPyA6IG51bWJlcjtcblx0YXVkaW9TYW1wbGluZ1JhdGU/IDogbnVtYmVyO1xuXHRhdWRpb1Jlc29sdXRpb24/IDogbnVtYmVyO1xuXHR3cml0aW5nTGliPyA6IHN0cmluZztcblx0cmF3RGF0YT8gOiBzdHJpbmc7XG5cdG11bHRpU3RyZWFtSW5mbz8gOiBzdHJpbmc7XG5cdHNjYW5UeXBlPyA6IG51bWJlcjtcblx0bXVsdGlTdHJlYW0/IDogc3RyaW5nO1xuXHRpc0Zhc3RTdGFydD8gOiBudW1iZXI7XG5cdGNvbnRlbnRTdHJlYW1zPyA6IHN0cmluZztcblx0Y29tcGxleGl0eVZhbHVlPyA6IG51bWJlcjtcblx0bWF4R09QPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhSW5mbyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRmaWxlU2l6ZSA6IG51bWJlcjtcblx0Y29udGFpbmVyRm9ybWF0IDogc3RyaW5nO1xuXHRjb250YWluZXJJZCA6IHN0cmluZztcblx0Y29udGFpbmVyUHJvZmlsZSA6IHN0cmluZztcblx0Y29udGFpbmVyRHVyYXRpb24gOiBudW1iZXI7XG5cdGNvbnRhaW5lckJpdFJhdGUgOiBudW1iZXI7XG5cdHZpZGVvRm9ybWF0IDogc3RyaW5nO1xuXHR2aWRlb0NvZGVjSWQgOiBzdHJpbmc7XG5cdHZpZGVvRHVyYXRpb24gOiBudW1iZXI7XG5cdHZpZGVvQml0UmF0ZSA6IG51bWJlcjtcblx0dmlkZW9CaXRSYXRlTW9kZSA6IEthbHR1cmFCaXRSYXRlTW9kZTtcblx0dmlkZW9XaWR0aCA6IG51bWJlcjtcblx0dmlkZW9IZWlnaHQgOiBudW1iZXI7XG5cdHZpZGVvRnJhbWVSYXRlIDogbnVtYmVyO1xuXHR2aWRlb0RhciA6IG51bWJlcjtcblx0dmlkZW9Sb3RhdGlvbiA6IG51bWJlcjtcblx0YXVkaW9Gb3JtYXQgOiBzdHJpbmc7XG5cdGF1ZGlvQ29kZWNJZCA6IHN0cmluZztcblx0YXVkaW9EdXJhdGlvbiA6IG51bWJlcjtcblx0YXVkaW9CaXRSYXRlIDogbnVtYmVyO1xuXHRhdWRpb0JpdFJhdGVNb2RlIDogS2FsdHVyYUJpdFJhdGVNb2RlO1xuXHRhdWRpb0NoYW5uZWxzIDogbnVtYmVyO1xuXHRhdWRpb1NhbXBsaW5nUmF0ZSA6IG51bWJlcjtcblx0YXVkaW9SZXNvbHV0aW9uIDogbnVtYmVyO1xuXHR3cml0aW5nTGliIDogc3RyaW5nO1xuXHRyYXdEYXRhIDogc3RyaW5nO1xuXHRtdWx0aVN0cmVhbUluZm8gOiBzdHJpbmc7XG5cdHNjYW5UeXBlIDogbnVtYmVyO1xuXHRtdWx0aVN0cmVhbSA6IHN0cmluZztcblx0aXNGYXN0U3RhcnQgOiBudW1iZXI7XG5cdGNvbnRlbnRTdHJlYW1zIDogc3RyaW5nO1xuXHRjb21wbGV4aXR5VmFsdWUgOiBudW1iZXI7XG5cdG1heEdPUCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1lZGlhSW5mb0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWVkaWFJbmZvJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGFpbmVyRm9ybWF0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRhaW5lcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRhaW5lclByb2ZpbGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGFpbmVyRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGFpbmVyQml0UmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0Zvcm1hdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2aWRlb0NvZGVjSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmlkZW9EdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0JpdFJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9CaXRSYXRlTW9kZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCaXRSYXRlTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhQml0UmF0ZU1vZGUnIH0sXG5cdFx0XHRcdHZpZGVvV2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9IZWlnaHQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9GcmFtZVJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9EYXIgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9Sb3RhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0Zvcm1hdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhdWRpb0NvZGVjSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXVkaW9EdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0JpdFJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXVkaW9CaXRSYXRlTW9kZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCaXRSYXRlTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhQml0UmF0ZU1vZGUnIH0sXG5cdFx0XHRcdGF1ZGlvQ2hhbm5lbHMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXVkaW9TYW1wbGluZ1JhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXVkaW9SZXNvbHV0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdyaXRpbmdMaWIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmF3RGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtdWx0aVN0cmVhbUluZm8gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NhblR5cGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bXVsdGlTdHJlYW0gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNGYXN0U3RhcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGVudFN0cmVhbXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29tcGxleGl0eVZhbHVlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1heEdPUCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWVkaWFJbmZvJ10gPSBLYWx0dXJhTWVkaWFJbmZvOyJdfQ==