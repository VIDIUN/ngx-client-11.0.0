import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionSubmitDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'submitDelete'.
 *
 * Usage: Deletes Entry Distribution from the remote destination
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionSubmitDeleteAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    constructor(data: EntryDistributionSubmitDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}