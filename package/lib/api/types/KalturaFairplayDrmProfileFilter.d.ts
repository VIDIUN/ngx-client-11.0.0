import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFairplayDrmProfileBaseFilter, KalturaFairplayDrmProfileBaseFilterArgs } from './KalturaFairplayDrmProfileBaseFilter';
export interface KalturaFairplayDrmProfileFilterArgs extends KalturaFairplayDrmProfileBaseFilterArgs {
}
export declare class KalturaFairplayDrmProfileFilter extends KalturaFairplayDrmProfileBaseFilter {
    constructor(data?: KalturaFairplayDrmProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
