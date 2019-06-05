import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'documents' action 'delete'.
 *
 * Usage: Delete a document entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsDeleteAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: DocumentsDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}