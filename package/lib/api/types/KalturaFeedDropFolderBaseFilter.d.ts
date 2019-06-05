import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';
export interface KalturaFeedDropFolderBaseFilterArgs extends KalturaDropFolderFilterArgs {
}
export declare class KalturaFeedDropFolderBaseFilter extends KalturaDropFolderFilter {
    constructor(data?: KalturaFeedDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
