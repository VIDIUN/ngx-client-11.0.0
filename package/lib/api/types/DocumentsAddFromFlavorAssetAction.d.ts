import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsAddFromFlavorAssetActionArgs extends KalturaRequestArgs {
    sourceFlavorAssetId: string;
    documentEntry?: KalturaDocumentEntry;
}
/**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsAddFromFlavorAssetAction extends KalturaRequest<KalturaDocumentEntry> {
    sourceFlavorAssetId: string;
    documentEntry: KalturaDocumentEntry;
    constructor(data: DocumentsAddFromFlavorAssetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
