import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface MediaGetVolumeMapActionArgs extends KalturaFileRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'media' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class MediaGetVolumeMapAction extends KalturaFileRequest {
    entryId: string;
    constructor(data: MediaGetVolumeMapActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
