import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'delete'.
 *
 * Usage: Delete Entry Distribution by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: EntryDistributionDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}