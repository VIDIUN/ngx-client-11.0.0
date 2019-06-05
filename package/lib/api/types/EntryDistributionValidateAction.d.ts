import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionValidateActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'validate'.
 *
 * Usage: Validates Entry Distribution by id for submission
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionValidateAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    constructor(data: EntryDistributionValidateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}