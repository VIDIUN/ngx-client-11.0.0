import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryAddFromUploadedFileActionArgs extends KalturaRequestArgs {
    entry: KalturaBaseEntry;
    uploadTokenId: string;
    type?: KalturaEntryType;
}
/**
 * Build request payload for service 'baseEntry' action 'addFromUploadedFile'.
 *
 * Usage: Generic add entry using an uploaded file, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryAddFromUploadedFileAction extends KalturaRequest<KalturaBaseEntry> {
    entry: KalturaBaseEntry;
    uploadTokenId: string;
    type: KalturaEntryType;
    constructor(data: BaseEntryAddFromUploadedFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
