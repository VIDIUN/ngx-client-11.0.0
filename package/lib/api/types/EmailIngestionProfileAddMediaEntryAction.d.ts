import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileAddMediaEntryActionArgs extends KalturaRequestArgs {
    mediaEntry: KalturaMediaEntry;
    uploadTokenId: string;
    emailProfId: number;
    fromAddress: string;
    emailMsgId: string;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'addMediaEntry'.
 *
 * Usage: add KalturaMediaEntry from email ingestion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileAddMediaEntryAction extends KalturaRequest<KalturaMediaEntry> {
    mediaEntry: KalturaMediaEntry;
    uploadTokenId: string;
    emailProfId: number;
    fromAddress: string;
    emailMsgId: string;
    constructor(data: EmailIngestionProfileAddMediaEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
