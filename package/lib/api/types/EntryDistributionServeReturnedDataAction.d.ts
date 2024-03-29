import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface EntryDistributionServeReturnedDataActionArgs extends KalturaFileRequestArgs {
    id: number;
    actionType: KalturaDistributionAction;
}
/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionServeReturnedDataAction extends KalturaFileRequest {
    id: number;
    actionType: KalturaDistributionAction;
    constructor(data: EntryDistributionServeReturnedDataActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
