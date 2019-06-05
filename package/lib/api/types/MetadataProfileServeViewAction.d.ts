import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface MetadataProfileServeViewActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'serveView'.
 *
 * Usage: Serves metadata profile view file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileServeViewAction extends KalturaFileRequest {
    id: number;
    constructor(data: MetadataProfileServeViewActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}