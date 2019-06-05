import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVideoCodec } from './KalturaVideoCodec';
import { KalturaAudioCodec } from './KalturaAudioCodec';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';
export interface KalturaFlavorParamsArgs extends KalturaAssetParamsArgs {
    videoCodec?: KalturaVideoCodec;
    videoBitrate?: number;
    audioCodec?: KalturaAudioCodec;
    audioBitrate?: number;
    audioChannels?: number;
    audioSampleRate?: number;
    width?: number;
    height?: number;
    frameRate?: number;
    gopSize?: number;
    conversionEngines?: string;
    conversionEnginesExtraParams?: string;
    twoPass?: boolean;
    deinterlice?: number;
    rotate?: number;
    operators?: string;
    engineVersion?: number;
    format?: KalturaContainerFormat;
    aspectRatioProcessingMode?: number;
    forceFrameToMultiplication16?: number;
    isGopInSec?: number;
    isAvoidVideoShrinkFramesizeToSource?: number;
    isAvoidVideoShrinkBitrateToSource?: number;
    isVideoFrameRateForLowBrAppleHls?: number;
    multiStream?: string;
    anamorphicPixels?: number;
    isAvoidForcedKeyFrames?: number;
    forcedKeyFramesMode?: number;
    isCropIMX?: number;
    optimizationPolicy?: number;
    maxFrameRate?: number;
    videoConstantBitrate?: number;
    videoBitrateTolerance?: number;
    watermarkData?: string;
    subtitlesData?: string;
    isEncrypted?: number;
    contentAwareness?: number;
    chunkedEncodeMode?: number;
    clipOffset?: number;
    clipDuration?: number;
}
export declare class KalturaFlavorParams extends KalturaAssetParams {
    videoCodec: KalturaVideoCodec;
    videoBitrate: number;
    audioCodec: KalturaAudioCodec;
    audioBitrate: number;
    audioChannels: number;
    audioSampleRate: number;
    width: number;
    height: number;
    frameRate: number;
    gopSize: number;
    conversionEngines: string;
    conversionEnginesExtraParams: string;
    twoPass: boolean;
    deinterlice: number;
    rotate: number;
    operators: string;
    engineVersion: number;
    format: KalturaContainerFormat;
    aspectRatioProcessingMode: number;
    forceFrameToMultiplication16: number;
    isGopInSec: number;
    isAvoidVideoShrinkFramesizeToSource: number;
    isAvoidVideoShrinkBitrateToSource: number;
    isVideoFrameRateForLowBrAppleHls: number;
    multiStream: string;
    anamorphicPixels: number;
    isAvoidForcedKeyFrames: number;
    forcedKeyFramesMode: number;
    isCropIMX: number;
    optimizationPolicy: number;
    maxFrameRate: number;
    videoConstantBitrate: number;
    videoBitrateTolerance: number;
    watermarkData: string;
    subtitlesData: string;
    isEncrypted: number;
    contentAwareness: number;
    chunkedEncodeMode: number;
    clipOffset: number;
    clipDuration: number;
    constructor(data?: KalturaFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
