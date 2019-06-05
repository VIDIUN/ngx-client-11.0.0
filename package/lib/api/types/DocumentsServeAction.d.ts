import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface DocumentsServeActionArgs extends KalturaFileRequestArgs {
    entryId: string;
    flavorAssetId?: string;
    forceProxy?: boolean;
}
/**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsServeAction extends KalturaFileRequest {
    entryId: string;
    flavorAssetId: string;
    forceProxy: boolean;
    constructor(data: DocumentsServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
