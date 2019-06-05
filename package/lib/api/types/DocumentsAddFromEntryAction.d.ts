import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsAddFromEntryActionArgs extends KalturaRequestArgs {
    sourceEntryId: string;
    documentEntry?: KalturaDocumentEntry;
    sourceFlavorParamsId?: number;
}
/**
 * Build request payload for service 'documents' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsAddFromEntryAction extends KalturaRequest<KalturaDocumentEntry> {
    sourceEntryId: string;
    documentEntry: KalturaDocumentEntry;
    sourceFlavorParamsId: number;
    constructor(data: DocumentsAddFromEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}