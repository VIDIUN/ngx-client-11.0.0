import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionSubmitUpdateActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'submitUpdate'.
 *
 * Usage: Submits Entry Distribution changes to the remote destination
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionSubmitUpdateAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    constructor(data: EntryDistributionSubmitUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
