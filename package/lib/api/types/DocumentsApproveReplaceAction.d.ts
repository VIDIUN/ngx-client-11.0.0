import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsApproveReplaceActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'documents' action 'approveReplace'.
 *
 * Usage: Approves document replacement
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsApproveReplaceAction extends KalturaRequest<KalturaDocumentEntry> {
    entryId: string;
    constructor(data: DocumentsApproveReplaceActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
