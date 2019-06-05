import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    mixEntry: KalturaMixEntry;
}
/**
 * Build request payload for service 'mixing' action 'update'.
 *
 * Usage: Update mix entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MixingUpdateAction extends KalturaRequest<KalturaMixEntry> {
    entryId: string;
    mixEntry: KalturaMixEntry;
    constructor(data: MixingUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
