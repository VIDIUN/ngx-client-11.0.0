import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryUpdateContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId?: number;
    advancedOptions?: KalturaEntryReplacementOptions;
}
/**
 * Build request payload for service 'baseEntry' action 'updateContent'.
 *
 * Usage: Update the content resource associated with the entry
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryUpdateContentAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    resource: KalturaResource;
    conversionProfileId: number;
    advancedOptions: KalturaEntryReplacementOptions;
    constructor(data: BaseEntryUpdateContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}