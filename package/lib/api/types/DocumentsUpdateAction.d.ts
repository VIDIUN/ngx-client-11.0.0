import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    documentEntry: KalturaDocumentEntry;
}
/**
 * Build request payload for service 'documents' action 'update'.
 *
 * Usage: Update document entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsUpdateAction extends KalturaRequest<KalturaDocumentEntry> {
    entryId: string;
    documentEntry: KalturaDocumentEntry;
    constructor(data: DocumentsUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}