import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface MetadataProfileServeActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'serve'.
 *
 * Usage: Serves metadata profile XSD file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileServeAction extends KalturaFileRequest {
    id: number;
    constructor(data: MetadataProfileServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
