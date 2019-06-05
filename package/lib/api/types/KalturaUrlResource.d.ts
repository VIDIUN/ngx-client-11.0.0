import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaUrlResourceArgs extends KalturaContentResourceArgs {
    url?: string;
    forceAsyncDownload?: boolean;
}
export declare class KalturaUrlResource extends KalturaContentResource {
    url: string;
    forceAsyncDownload: boolean;
    constructor(data?: KalturaUrlResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
