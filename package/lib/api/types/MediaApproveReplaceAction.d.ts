import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaApproveReplaceActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'media' action 'approveReplace'.
 *
 * Usage: Approves media replacement
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaApproveReplaceAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    constructor(data: MediaApproveReplaceActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}