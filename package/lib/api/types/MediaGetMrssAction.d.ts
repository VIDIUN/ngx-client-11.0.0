import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaGetMrssActionArgs extends KalturaRequestArgs {
    entryId: string;
    extendingItemsArray?: KalturaExtendingItemMrssParameter[];
    features?: string;
}
/**
 * Build request payload for service 'media' action 'getMrss'.
 *
 * Usage: Get MRSS by entry id
 * XML will return as an escaped string
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class MediaGetMrssAction extends KalturaRequest<string> {
    entryId: string;
    extendingItemsArray: KalturaExtendingItemMrssParameter[];
    features: string;
    constructor(data: MediaGetMrssActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}