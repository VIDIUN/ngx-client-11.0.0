import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface DocumentsServeByFlavorParamsIdActionArgs extends KalturaFileRequestArgs {
    entryId: string;
    flavorParamsId?: string;
    forceProxy?: boolean;
}
/**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsServeByFlavorParamsIdAction extends KalturaFileRequest {
    entryId: string;
    flavorParamsId: string;
    forceProxy: boolean;
    constructor(data: DocumentsServeByFlavorParamsIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}