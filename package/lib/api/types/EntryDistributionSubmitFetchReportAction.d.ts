import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionSubmitFetchReportActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryDistribution' action 'submitFetchReport'.
 *
 * Usage: Submits Entry Distribution report request
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionSubmitFetchReportAction extends KalturaRequest<KalturaEntryDistribution> {
    id: number;
    constructor(data: EntryDistributionSubmitFetchReportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
