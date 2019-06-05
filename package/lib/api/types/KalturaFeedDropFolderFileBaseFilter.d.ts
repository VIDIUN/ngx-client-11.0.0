import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileFilter, KalturaDropFolderFileFilterArgs } from './KalturaDropFolderFileFilter';
export interface KalturaFeedDropFolderFileBaseFilterArgs extends KalturaDropFolderFileFilterArgs {
}
export declare class KalturaFeedDropFolderFileBaseFilter extends KalturaDropFolderFileFilter {
    constructor(data?: KalturaFeedDropFolderFileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
