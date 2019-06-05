import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsCancelReplaceActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'documents' action 'cancelReplace'.
 *
 * Usage: Cancels document replacement
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsCancelReplaceAction extends KalturaRequest<KalturaDocumentEntry> {
    entryId: string;
    constructor(data: DocumentsCancelReplaceActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}