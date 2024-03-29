import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface MetadataServeActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadata' action 'serve'.
 *
 * Usage: Serves metadata XML file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataServeAction extends KalturaFileRequest {
    id: number;
    constructor(data: MetadataServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
