import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'documents' action 'get'.
 *
 * Usage: Get document entry by ID
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsGetAction extends KalturaRequest<KalturaDocumentEntry> {
    entryId: string;
    version: number;
    constructor(data: DocumentsGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
