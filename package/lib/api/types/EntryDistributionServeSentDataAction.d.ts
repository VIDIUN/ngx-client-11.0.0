import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface EntryDistributionServeSentDataActionArgs extends KalturaFileRequestArgs {
    id: number;
    actionType: KalturaDistributionAction;
}
/**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionServeSentDataAction extends KalturaFileRequest {
    id: number;
    actionType: KalturaDistributionAction;
    constructor(data: EntryDistributionServeSentDataActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
