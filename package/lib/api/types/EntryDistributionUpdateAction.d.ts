import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    entryDistribution: KalturaEntryDistribution;
}
/**
 * Build request payload for service 'entryDistribution' action 'update'.
 *
 * Usage: Update Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionUpdateAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    entryDistribution: KalturaEntryDistribution;
    constructor(data: EntryDistributionUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}