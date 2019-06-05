import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionAddActionArgs extends KalturaRequestArgs {
    entryDistribution: KalturaEntryDistribution;
}
/**
 * Build request payload for service 'entryDistribution' action 'add'.
 *
 * Usage: Add new Entry Distribution
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionAddAction extends KalturaRequest<KalturaEntryDistribution> {
    entryDistribution: KalturaEntryDistribution;
    constructor(data: EntryDistributionAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
