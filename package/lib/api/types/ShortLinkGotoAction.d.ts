import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface ShortLinkGotoActionArgs extends KalturaFileRequestArgs {
    id: string;
    proxy?: boolean;
}
/**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkGotoAction extends KalturaFileRequest {
    id: string;
    proxy: boolean;
    constructor(data: ShortLinkGotoActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
