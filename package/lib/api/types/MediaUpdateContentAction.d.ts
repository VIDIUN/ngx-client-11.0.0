import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaUpdateContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId?: number;
    advancedOptions?: KalturaEntryReplacementOptions;
}
/**
 * Build request payload for service 'media' action 'updateContent'.
 *
 * Usage: Replace content associated with the media entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateContentAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId: number;
    advancedOptions: KalturaEntryReplacementOptions;
    constructor(data: MediaUpdateContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}