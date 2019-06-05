import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'get'.
 *
 * Usage: Get Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionGetAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    constructor(data: EntryDistributionGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}