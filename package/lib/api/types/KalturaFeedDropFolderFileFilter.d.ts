import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeedDropFolderFileBaseFilter, KalturaFeedDropFolderFileBaseFilterArgs } from './KalturaFeedDropFolderFileBaseFilter';
export interface KalturaFeedDropFolderFileFilterArgs extends KalturaFeedDropFolderFileBaseFilterArgs {
}
export declare class KalturaFeedDropFolderFileFilter extends KalturaFeedDropFolderFileBaseFilter {
    constructor(data?: KalturaFeedDropFolderFileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
