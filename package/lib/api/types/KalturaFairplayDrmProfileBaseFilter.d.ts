import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';
export interface KalturaFairplayDrmProfileBaseFilterArgs extends KalturaDrmProfileFilterArgs {
}
export declare class KalturaFairplayDrmProfileBaseFilter extends KalturaDrmProfileFilter {
    constructor(data?: KalturaFairplayDrmProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
