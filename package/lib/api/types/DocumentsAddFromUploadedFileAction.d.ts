import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsAddFromUploadedFileActionArgs extends KalturaRequestArgs {
    documentEntry: KalturaDocumentEntry;
    uploadTokenId: string;
}
/**
 * Build request payload for service 'documents' action 'addFromUploadedFile'.
 *
 * Usage: Add new document entry after the specific document file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsAddFromUploadedFileAction extends KalturaRequest<KalturaDocumentEntry> {
    documentEntry: KalturaDocumentEntry;
    uploadTokenId: string;
    constructor(data: DocumentsAddFromUploadedFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}