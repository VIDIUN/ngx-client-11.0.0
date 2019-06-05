import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionSubmitAddActionArgs extends KalturaRequestArgs {
    id: number;
    submitWhenReady?: boolean;
}
/**
 * Build request payload for service 'entryDistribution' action 'submitAdd'.
 *
 * Usage: Submits Entry Distribution to the remote destination
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionSubmitAddAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    submitWhenReady: boolean;
    constructor(data: EntryDistributionSubmitAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}