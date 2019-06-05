import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeedDropFolderBaseFilter, KalturaFeedDropFolderBaseFilterArgs } from './KalturaFeedDropFolderBaseFilter';
export interface KalturaFeedDropFolderFilterArgs extends KalturaFeedDropFolderBaseFilterArgs {
}
export declare class KalturaFeedDropFolderFilter extends KalturaFeedDropFolderBaseFilter {
    constructor(data?: KalturaFeedDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
