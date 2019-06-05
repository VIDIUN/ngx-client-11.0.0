import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsUpdateContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId?: number;
}
/**
 * Build request payload for service 'documents' action 'updateContent'.
 *
 * Usage: Replace content associated with the given document entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsUpdateContentAction extends KalturaRequest<KalturaDocumentEntry> {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId: number;
    constructor(data: DocumentsUpdateContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}