/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVideoCodec } from './KalturaVideoCodec';
import { KalturaAudioCodec } from './KalturaAudioCodec';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaFlavorParamsArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.videoCodec;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.videoBitrate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.audioCodec;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.audioBitrate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.audioChannels;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.audioSampleRate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.width;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.height;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.frameRate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.gopSize;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.conversionEngines;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.conversionEnginesExtraParams;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.twoPass;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.deinterlice;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.rotate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.operators;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.engineVersion;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.format;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.aspectRatioProcessingMode;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.forceFrameToMultiplication16;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isGopInSec;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isAvoidVideoShrinkFramesizeToSource;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isAvoidVideoShrinkBitrateToSource;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isVideoFrameRateForLowBrAppleHls;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.multiStream;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.anamorphicPixels;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isAvoidForcedKeyFrames;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.forcedKeyFramesMode;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isCropIMX;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.optimizationPolicy;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.maxFrameRate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.videoConstantBitrate;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.videoBitrateTolerance;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.watermarkData;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.subtitlesData;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.isEncrypted;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.contentAwareness;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.chunkedEncodeMode;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.clipOffset;
/** @type {?|undefined} */
KalturaFlavorParamsArgs.prototype.clipDuration;
export class KalturaFlavorParams extends KalturaAssetParams {
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
            objectType: { type: 'c', default: 'KalturaFlavorParams' },
            videoCodec: { type: 'es', subTypeConstructor: KalturaVideoCodec, subType: 'KalturaVideoCodec' },
            videoBitrate: { type: 'n' },
            audioCodec: { type: 'es', subTypeConstructor: KalturaAudioCodec, subType: 'KalturaAudioCodec' },
            audioBitrate: { type: 'n' },
            audioChannels: { type: 'n' },
            audioSampleRate: { type: 'n' },
            width: { type: 'n' },
            height: { type: 'n' },
            frameRate: { type: 'n' },
            gopSize: { type: 'n' },
            conversionEngines: { type: 's' },
            conversionEnginesExtraParams: { type: 's' },
            twoPass: { type: 'b' },
            deinterlice: { type: 'n' },
            rotate: { type: 'n' },
            operators: { type: 's' },
            engineVersion: { type: 'n' },
            format: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' },
            aspectRatioProcessingMode: { type: 'n' },
            forceFrameToMultiplication16: { type: 'n' },
            isGopInSec: { type: 'n' },
            isAvoidVideoShrinkFramesizeToSource: { type: 'n' },
            isAvoidVideoShrinkBitrateToSource: { type: 'n' },
            isVideoFrameRateForLowBrAppleHls: { type: 'n' },
            multiStream: { type: 's' },
            anamorphicPixels: { type: 'n' },
            isAvoidForcedKeyFrames: { type: 'n' },
            forcedKeyFramesMode: { type: 'n' },
            isCropIMX: { type: 'n' },
            optimizationPolicy: { type: 'n' },
            maxFrameRate: { type: 'n' },
            videoConstantBitrate: { type: 'n' },
            videoBitrateTolerance: { type: 'n' },
            watermarkData: { type: 's' },
            subtitlesData: { type: 's' },
            isEncrypted: { type: 'n' },
            contentAwareness: { type: 'n' },
            chunkedEncodeMode: { type: 'n' },
            clipOffset: { type: 'n' },
            clipDuration: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorParams.prototype.videoCodec;
    /** @type {?} */
    KalturaFlavorParams.prototype.videoBitrate;
    /** @type {?} */
    KalturaFlavorParams.prototype.audioCodec;
    /** @type {?} */
    KalturaFlavorParams.prototype.audioBitrate;
    /** @type {?} */
    KalturaFlavorParams.prototype.audioChannels;
    /** @type {?} */
    KalturaFlavorParams.prototype.audioSampleRate;
    /** @type {?} */
    KalturaFlavorParams.prototype.width;
    /** @type {?} */
    KalturaFlavorParams.prototype.height;
    /** @type {?} */
    KalturaFlavorParams.prototype.frameRate;
    /** @type {?} */
    KalturaFlavorParams.prototype.gopSize;
    /** @type {?} */
    KalturaFlavorParams.prototype.conversionEngines;
    /** @type {?} */
    KalturaFlavorParams.prototype.conversionEnginesExtraParams;
    /** @type {?} */
    KalturaFlavorParams.prototype.twoPass;
    /** @type {?} */
    KalturaFlavorParams.prototype.deinterlice;
    /** @type {?} */
    KalturaFlavorParams.prototype.rotate;
    /** @type {?} */
    KalturaFlavorParams.prototype.operators;
    /** @type {?} */
    KalturaFlavorParams.prototype.engineVersion;
    /** @type {?} */
    KalturaFlavorParams.prototype.format;
    /** @type {?} */
    KalturaFlavorParams.prototype.aspectRatioProcessingMode;
    /** @type {?} */
    KalturaFlavorParams.prototype.forceFrameToMultiplication16;
    /** @type {?} */
    KalturaFlavorParams.prototype.isGopInSec;
    /** @type {?} */
    KalturaFlavorParams.prototype.isAvoidVideoShrinkFramesizeToSource;
    /** @type {?} */
    KalturaFlavorParams.prototype.isAvoidVideoShrinkBitrateToSource;
    /** @type {?} */
    KalturaFlavorParams.prototype.isVideoFrameRateForLowBrAppleHls;
    /** @type {?} */
    KalturaFlavorParams.prototype.multiStream;
    /** @type {?} */
    KalturaFlavorParams.prototype.anamorphicPixels;
    /** @type {?} */
    KalturaFlavorParams.prototype.isAvoidForcedKeyFrames;
    /** @type {?} */
    KalturaFlavorParams.prototype.forcedKeyFramesMode;
    /** @type {?} */
    KalturaFlavorParams.prototype.isCropIMX;
    /** @type {?} */
    KalturaFlavorParams.prototype.optimizationPolicy;
    /** @type {?} */
    KalturaFlavorParams.prototype.maxFrameRate;
    /** @type {?} */
    KalturaFlavorParams.prototype.videoConstantBitrate;
    /** @type {?} */
    KalturaFlavorParams.prototype.videoBitrateTolerance;
    /** @type {?} */
    KalturaFlavorParams.prototype.watermarkData;
    /** @type {?} */
    KalturaFlavorParams.prototype.subtitlesData;
    /** @type {?} */
    KalturaFlavorParams.prototype.isEncrypted;
    /** @type {?} */
    KalturaFlavorParams.prototype.contentAwareness;
    /** @type {?} */
    KalturaFlavorParams.prototype.chunkedEncodeMode;
    /** @type {?} */
    KalturaFlavorParams.prototype.clipOffset;
    /** @type {?} */
    KalturaFlavorParams.prototype.clipDuration;
}
typesMappingStorage['KalturaFlavorParams'] = KalturaFlavorParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvclBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDbEYsTUFBTSwwQkFBMkIsU0FBUSxrQkFBa0I7Ozs7SUEyQ3ZELFlBQVksSUFBK0I7UUFFdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxr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LEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZpZGVvQ29kZWMgfSBmcm9tICcuL0thbHR1cmFWaWRlb0NvZGVjJztcbmltcG9ydCB7IEthbHR1cmFBdWRpb0NvZGVjIH0gZnJvbSAnLi9LYWx0dXJhQXVkaW9Db2RlYyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGFpbmVyRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhQ29udGFpbmVyRm9ybWF0JztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtcywgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIHtcbiAgICB2aWRlb0NvZGVjPyA6IEthbHR1cmFWaWRlb0NvZGVjO1xuXHR2aWRlb0JpdHJhdGU/IDogbnVtYmVyO1xuXHRhdWRpb0NvZGVjPyA6IEthbHR1cmFBdWRpb0NvZGVjO1xuXHRhdWRpb0JpdHJhdGU/IDogbnVtYmVyO1xuXHRhdWRpb0NoYW5uZWxzPyA6IG51bWJlcjtcblx0YXVkaW9TYW1wbGVSYXRlPyA6IG51bWJlcjtcblx0d2lkdGg/IDogbnVtYmVyO1xuXHRoZWlnaHQ/IDogbnVtYmVyO1xuXHRmcmFtZVJhdGU/IDogbnVtYmVyO1xuXHRnb3BTaXplPyA6IG51bWJlcjtcblx0Y29udmVyc2lvbkVuZ2luZXM/IDogc3RyaW5nO1xuXHRjb252ZXJzaW9uRW5naW5lc0V4dHJhUGFyYW1zPyA6IHN0cmluZztcblx0dHdvUGFzcz8gOiBib29sZWFuO1xuXHRkZWludGVybGljZT8gOiBudW1iZXI7XG5cdHJvdGF0ZT8gOiBudW1iZXI7XG5cdG9wZXJhdG9ycz8gOiBzdHJpbmc7XG5cdGVuZ2luZVZlcnNpb24/IDogbnVtYmVyO1xuXHRmb3JtYXQ/IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcblx0YXNwZWN0UmF0aW9Qcm9jZXNzaW5nTW9kZT8gOiBudW1iZXI7XG5cdGZvcmNlRnJhbWVUb011bHRpcGxpY2F0aW9uMTY/IDogbnVtYmVyO1xuXHRpc0dvcEluU2VjPyA6IG51bWJlcjtcblx0aXNBdm9pZFZpZGVvU2hyaW5rRnJhbWVzaXplVG9Tb3VyY2U/IDogbnVtYmVyO1xuXHRpc0F2b2lkVmlkZW9TaHJpbmtCaXRyYXRlVG9Tb3VyY2U/IDogbnVtYmVyO1xuXHRpc1ZpZGVvRnJhbWVSYXRlRm9yTG93QnJBcHBsZUhscz8gOiBudW1iZXI7XG5cdG11bHRpU3RyZWFtPyA6IHN0cmluZztcblx0YW5hbW9ycGhpY1BpeGVscz8gOiBudW1iZXI7XG5cdGlzQXZvaWRGb3JjZWRLZXlGcmFtZXM/IDogbnVtYmVyO1xuXHRmb3JjZWRLZXlGcmFtZXNNb2RlPyA6IG51bWJlcjtcblx0aXNDcm9wSU1YPyA6IG51bWJlcjtcblx0b3B0aW1pemF0aW9uUG9saWN5PyA6IG51bWJlcjtcblx0bWF4RnJhbWVSYXRlPyA6IG51bWJlcjtcblx0dmlkZW9Db25zdGFudEJpdHJhdGU/IDogbnVtYmVyO1xuXHR2aWRlb0JpdHJhdGVUb2xlcmFuY2U/IDogbnVtYmVyO1xuXHR3YXRlcm1hcmtEYXRhPyA6IHN0cmluZztcblx0c3VidGl0bGVzRGF0YT8gOiBzdHJpbmc7XG5cdGlzRW5jcnlwdGVkPyA6IG51bWJlcjtcblx0Y29udGVudEF3YXJlbmVzcz8gOiBudW1iZXI7XG5cdGNodW5rZWRFbmNvZGVNb2RlPyA6IG51bWJlcjtcblx0Y2xpcE9mZnNldD8gOiBudW1iZXI7XG5cdGNsaXBEdXJhdGlvbj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGbGF2b3JQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXMge1xuXG4gICAgdmlkZW9Db2RlYyA6IEthbHR1cmFWaWRlb0NvZGVjO1xuXHR2aWRlb0JpdHJhdGUgOiBudW1iZXI7XG5cdGF1ZGlvQ29kZWMgOiBLYWx0dXJhQXVkaW9Db2RlYztcblx0YXVkaW9CaXRyYXRlIDogbnVtYmVyO1xuXHRhdWRpb0NoYW5uZWxzIDogbnVtYmVyO1xuXHRhdWRpb1NhbXBsZVJhdGUgOiBudW1iZXI7XG5cdHdpZHRoIDogbnVtYmVyO1xuXHRoZWlnaHQgOiBudW1iZXI7XG5cdGZyYW1lUmF0ZSA6IG51bWJlcjtcblx0Z29wU2l6ZSA6IG51bWJlcjtcblx0Y29udmVyc2lvbkVuZ2luZXMgOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25FbmdpbmVzRXh0cmFQYXJhbXMgOiBzdHJpbmc7XG5cdHR3b1Bhc3MgOiBib29sZWFuO1xuXHRkZWludGVybGljZSA6IG51bWJlcjtcblx0cm90YXRlIDogbnVtYmVyO1xuXHRvcGVyYXRvcnMgOiBzdHJpbmc7XG5cdGVuZ2luZVZlcnNpb24gOiBudW1iZXI7XG5cdGZvcm1hdCA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cdGFzcGVjdFJhdGlvUHJvY2Vzc2luZ01vZGUgOiBudW1iZXI7XG5cdGZvcmNlRnJhbWVUb011bHRpcGxpY2F0aW9uMTYgOiBudW1iZXI7XG5cdGlzR29wSW5TZWMgOiBudW1iZXI7XG5cdGlzQXZvaWRWaWRlb1Nocmlua0ZyYW1lc2l6ZVRvU291cmNlIDogbnVtYmVyO1xuXHRpc0F2b2lkVmlkZW9TaHJpbmtCaXRyYXRlVG9Tb3VyY2UgOiBudW1iZXI7XG5cdGlzVmlkZW9GcmFtZVJhdGVGb3JMb3dCckFwcGxlSGxzIDogbnVtYmVyO1xuXHRtdWx0aVN0cmVhbSA6IHN0cmluZztcblx0YW5hbW9ycGhpY1BpeGVscyA6IG51bWJlcjtcblx0aXNBdm9pZEZvcmNlZEtleUZyYW1lcyA6IG51bWJlcjtcblx0Zm9yY2VkS2V5RnJhbWVzTW9kZSA6IG51bWJlcjtcblx0aXNDcm9wSU1YIDogbnVtYmVyO1xuXHRvcHRpbWl6YXRpb25Qb2xpY3kgOiBudW1iZXI7XG5cdG1heEZyYW1lUmF0ZSA6IG51bWJlcjtcblx0dmlkZW9Db25zdGFudEJpdHJhdGUgOiBudW1iZXI7XG5cdHZpZGVvQml0cmF0ZVRvbGVyYW5jZSA6IG51bWJlcjtcblx0d2F0ZXJtYXJrRGF0YSA6IHN0cmluZztcblx0c3VidGl0bGVzRGF0YSA6IHN0cmluZztcblx0aXNFbmNyeXB0ZWQgOiBudW1iZXI7XG5cdGNvbnRlbnRBd2FyZW5lc3MgOiBudW1iZXI7XG5cdGNodW5rZWRFbmNvZGVNb2RlIDogbnVtYmVyO1xuXHRjbGlwT2Zmc2V0IDogbnVtYmVyO1xuXHRjbGlwRHVyYXRpb24gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZsYXZvclBhcmFtcycgfSxcblx0XHRcdFx0dmlkZW9Db2RlYyA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaWRlb0NvZGVjLCBzdWJUeXBlIDogJ0thbHR1cmFWaWRlb0NvZGVjJyB9LFxuXHRcdFx0XHR2aWRlb0JpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXVkaW9Db2RlYyA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpb0NvZGVjLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpb0NvZGVjJyB9LFxuXHRcdFx0XHRhdWRpb0JpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXVkaW9DaGFubmVscyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb1NhbXBsZVJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZyYW1lUmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRnb3BTaXplIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25FbmdpbmVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25FbmdpbmVzRXh0cmFQYXJhbXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHdvUGFzcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkZWludGVybGljZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyb3RhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b3BlcmF0b3JzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZ2luZVZlcnNpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdCwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGFpbmVyRm9ybWF0JyB9LFxuXHRcdFx0XHRhc3BlY3RSYXRpb1Byb2Nlc3NpbmdNb2RlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZvcmNlRnJhbWVUb011bHRpcGxpY2F0aW9uMTYgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aXNHb3BJblNlYyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0F2b2lkVmlkZW9TaHJpbmtGcmFtZXNpemVUb1NvdXJjZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0F2b2lkVmlkZW9TaHJpbmtCaXRyYXRlVG9Tb3VyY2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aXNWaWRlb0ZyYW1lUmF0ZUZvckxvd0JyQXBwbGVIbHMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bXVsdGlTdHJlYW0gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YW5hbW9ycGhpY1BpeGVscyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0F2b2lkRm9yY2VkS2V5RnJhbWVzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZvcmNlZEtleUZyYW1lc01vZGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aXNDcm9wSU1YIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG9wdGltaXphdGlvblBvbGljeSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtYXhGcmFtZVJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9Db25zdGFudEJpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9CaXRyYXRlVG9sZXJhbmNlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdhdGVybWFya0RhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3VidGl0bGVzRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0VuY3J5cHRlZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250ZW50QXdhcmVuZXNzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNodW5rZWRFbmNvZGVNb2RlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNsaXBPZmZzZXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2xpcER1cmF0aW9uIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JQYXJhbXMnXSA9IEthbHR1cmFGbGF2b3JQYXJhbXM7Il19