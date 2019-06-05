/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaFlavorParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorParams, _super);
    function KalturaFlavorParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaFlavorParams;
}(KalturaAssetParams));
export { KalturaFlavorParams };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvclBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q2xGLElBQUE7SUFBeUMsK0NBQWtCO0lBMkN2RCw2QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxp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O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmlkZW9Db2RlYyB9IGZyb20gJy4vS2FsdHVyYVZpZGVvQ29kZWMnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGlvQ29kZWMgfSBmcm9tICcuL0thbHR1cmFBdWRpb0NvZGVjJztcbmltcG9ydCB7IEthbHR1cmFDb250YWluZXJGb3JtYXQgfSBmcm9tICcuL0thbHR1cmFDb250YWluZXJGb3JtYXQnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zLCBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0FyZ3Mge1xuICAgIHZpZGVvQ29kZWM/IDogS2FsdHVyYVZpZGVvQ29kZWM7XG5cdHZpZGVvQml0cmF0ZT8gOiBudW1iZXI7XG5cdGF1ZGlvQ29kZWM/IDogS2FsdHVyYUF1ZGlvQ29kZWM7XG5cdGF1ZGlvQml0cmF0ZT8gOiBudW1iZXI7XG5cdGF1ZGlvQ2hhbm5lbHM/IDogbnVtYmVyO1xuXHRhdWRpb1NhbXBsZVJhdGU/IDogbnVtYmVyO1xuXHR3aWR0aD8gOiBudW1iZXI7XG5cdGhlaWdodD8gOiBudW1iZXI7XG5cdGZyYW1lUmF0ZT8gOiBudW1iZXI7XG5cdGdvcFNpemU/IDogbnVtYmVyO1xuXHRjb252ZXJzaW9uRW5naW5lcz8gOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25FbmdpbmVzRXh0cmFQYXJhbXM/IDogc3RyaW5nO1xuXHR0d29QYXNzPyA6IGJvb2xlYW47XG5cdGRlaW50ZXJsaWNlPyA6IG51bWJlcjtcblx0cm90YXRlPyA6IG51bWJlcjtcblx0b3BlcmF0b3JzPyA6IHN0cmluZztcblx0ZW5naW5lVmVyc2lvbj8gOiBudW1iZXI7XG5cdGZvcm1hdD8gOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xuXHRhc3BlY3RSYXRpb1Byb2Nlc3NpbmdNb2RlPyA6IG51bWJlcjtcblx0Zm9yY2VGcmFtZVRvTXVsdGlwbGljYXRpb24xNj8gOiBudW1iZXI7XG5cdGlzR29wSW5TZWM/IDogbnVtYmVyO1xuXHRpc0F2b2lkVmlkZW9TaHJpbmtGcmFtZXNpemVUb1NvdXJjZT8gOiBudW1iZXI7XG5cdGlzQXZvaWRWaWRlb1Nocmlua0JpdHJhdGVUb1NvdXJjZT8gOiBudW1iZXI7XG5cdGlzVmlkZW9GcmFtZVJhdGVGb3JMb3dCckFwcGxlSGxzPyA6IG51bWJlcjtcblx0bXVsdGlTdHJlYW0/IDogc3RyaW5nO1xuXHRhbmFtb3JwaGljUGl4ZWxzPyA6IG51bWJlcjtcblx0aXNBdm9pZEZvcmNlZEtleUZyYW1lcz8gOiBudW1iZXI7XG5cdGZvcmNlZEtleUZyYW1lc01vZGU/IDogbnVtYmVyO1xuXHRpc0Nyb3BJTVg/IDogbnVtYmVyO1xuXHRvcHRpbWl6YXRpb25Qb2xpY3k/IDogbnVtYmVyO1xuXHRtYXhGcmFtZVJhdGU/IDogbnVtYmVyO1xuXHR2aWRlb0NvbnN0YW50Qml0cmF0ZT8gOiBudW1iZXI7XG5cdHZpZGVvQml0cmF0ZVRvbGVyYW5jZT8gOiBudW1iZXI7XG5cdHdhdGVybWFya0RhdGE/IDogc3RyaW5nO1xuXHRzdWJ0aXRsZXNEYXRhPyA6IHN0cmluZztcblx0aXNFbmNyeXB0ZWQ/IDogbnVtYmVyO1xuXHRjb250ZW50QXdhcmVuZXNzPyA6IG51bWJlcjtcblx0Y2h1bmtlZEVuY29kZU1vZGU/IDogbnVtYmVyO1xuXHRjbGlwT2Zmc2V0PyA6IG51bWJlcjtcblx0Y2xpcER1cmF0aW9uPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvclBhcmFtcyBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtcyB7XG5cbiAgICB2aWRlb0NvZGVjIDogS2FsdHVyYVZpZGVvQ29kZWM7XG5cdHZpZGVvQml0cmF0ZSA6IG51bWJlcjtcblx0YXVkaW9Db2RlYyA6IEthbHR1cmFBdWRpb0NvZGVjO1xuXHRhdWRpb0JpdHJhdGUgOiBudW1iZXI7XG5cdGF1ZGlvQ2hhbm5lbHMgOiBudW1iZXI7XG5cdGF1ZGlvU2FtcGxlUmF0ZSA6IG51bWJlcjtcblx0d2lkdGggOiBudW1iZXI7XG5cdGhlaWdodCA6IG51bWJlcjtcblx0ZnJhbWVSYXRlIDogbnVtYmVyO1xuXHRnb3BTaXplIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uRW5naW5lcyA6IHN0cmluZztcblx0Y29udmVyc2lvbkVuZ2luZXNFeHRyYVBhcmFtcyA6IHN0cmluZztcblx0dHdvUGFzcyA6IGJvb2xlYW47XG5cdGRlaW50ZXJsaWNlIDogbnVtYmVyO1xuXHRyb3RhdGUgOiBudW1iZXI7XG5cdG9wZXJhdG9ycyA6IHN0cmluZztcblx0ZW5naW5lVmVyc2lvbiA6IG51bWJlcjtcblx0Zm9ybWF0IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcblx0YXNwZWN0UmF0aW9Qcm9jZXNzaW5nTW9kZSA6IG51bWJlcjtcblx0Zm9yY2VGcmFtZVRvTXVsdGlwbGljYXRpb24xNiA6IG51bWJlcjtcblx0aXNHb3BJblNlYyA6IG51bWJlcjtcblx0aXNBdm9pZFZpZGVvU2hyaW5rRnJhbWVzaXplVG9Tb3VyY2UgOiBudW1iZXI7XG5cdGlzQXZvaWRWaWRlb1Nocmlua0JpdHJhdGVUb1NvdXJjZSA6IG51bWJlcjtcblx0aXNWaWRlb0ZyYW1lUmF0ZUZvckxvd0JyQXBwbGVIbHMgOiBudW1iZXI7XG5cdG11bHRpU3RyZWFtIDogc3RyaW5nO1xuXHRhbmFtb3JwaGljUGl4ZWxzIDogbnVtYmVyO1xuXHRpc0F2b2lkRm9yY2VkS2V5RnJhbWVzIDogbnVtYmVyO1xuXHRmb3JjZWRLZXlGcmFtZXNNb2RlIDogbnVtYmVyO1xuXHRpc0Nyb3BJTVggOiBudW1iZXI7XG5cdG9wdGltaXphdGlvblBvbGljeSA6IG51bWJlcjtcblx0bWF4RnJhbWVSYXRlIDogbnVtYmVyO1xuXHR2aWRlb0NvbnN0YW50Qml0cmF0ZSA6IG51bWJlcjtcblx0dmlkZW9CaXRyYXRlVG9sZXJhbmNlIDogbnVtYmVyO1xuXHR3YXRlcm1hcmtEYXRhIDogc3RyaW5nO1xuXHRzdWJ0aXRsZXNEYXRhIDogc3RyaW5nO1xuXHRpc0VuY3J5cHRlZCA6IG51bWJlcjtcblx0Y29udGVudEF3YXJlbmVzcyA6IG51bWJlcjtcblx0Y2h1bmtlZEVuY29kZU1vZGUgOiBudW1iZXI7XG5cdGNsaXBPZmZzZXQgOiBudW1iZXI7XG5cdGNsaXBEdXJhdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zJyB9LFxuXHRcdFx0XHR2aWRlb0NvZGVjIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpZGVvQ29kZWMsIHN1YlR5cGUgOiAnS2FsdHVyYVZpZGVvQ29kZWMnIH0sXG5cdFx0XHRcdHZpZGVvQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0NvZGVjIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGlvQ29kZWMsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGlvQ29kZWMnIH0sXG5cdFx0XHRcdGF1ZGlvQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0NoYW5uZWxzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF1ZGlvU2FtcGxlUmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoZWlnaHQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZnJhbWVSYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGdvcFNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udmVyc2lvbkVuZ2luZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udmVyc2lvbkVuZ2luZXNFeHRyYVBhcmFtcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0d29QYXNzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlaW50ZXJsaWNlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJvdGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvcGVyYXRvcnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5naW5lVmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFDb250YWluZXJGb3JtYXQnIH0sXG5cdFx0XHRcdGFzcGVjdFJhdGlvUHJvY2Vzc2luZ01vZGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VGcmFtZVRvTXVsdGlwbGljYXRpb24xNiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0dvcEluU2VjIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzQXZvaWRWaWRlb1Nocmlua0ZyYW1lc2l6ZVRvU291cmNlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzQXZvaWRWaWRlb1Nocmlua0JpdHJhdGVUb1NvdXJjZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc1ZpZGVvRnJhbWVSYXRlRm9yTG93QnJBcHBsZUhscyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtdWx0aVN0cmVhbSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbmFtb3JwaGljUGl4ZWxzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzQXZvaWRGb3JjZWRLZXlGcmFtZXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VkS2V5RnJhbWVzTW9kZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc0Nyb3BJTVggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b3B0aW1pemF0aW9uUG9saWN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1heEZyYW1lUmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0NvbnN0YW50Qml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0JpdHJhdGVUb2xlcmFuY2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2F0ZXJtYXJrRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdWJ0aXRsZXNEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzRW5jcnlwdGVkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnRlbnRBd2FyZW5lc3MgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2h1bmtlZEVuY29kZU1vZGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2xpcE9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjbGlwRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZsYXZvclBhcmFtcyddID0gS2FsdHVyYUZsYXZvclBhcmFtczsiXX0=