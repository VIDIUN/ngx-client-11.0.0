import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryGetByIdsActionArgs extends KalturaRequestArgs {
    entryIds: string;
}
/**
 * Build request payload for service 'baseEntry' action 'getByIds'.
 *
 * Usage: Get an array of KalturaBaseEntry objects by a comma-separated list of ids
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryGetByIdsAction extends KalturaRequest<KalturaBaseEntry[]> {
    entryIds: string;
    constructor(data: BaseEntryGetByIdsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
