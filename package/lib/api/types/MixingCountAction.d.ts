import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaMediaEntryFilter;
}
/**
 * Build request payload for service 'mixing' action 'count'.
 *
 * Usage: Count mix entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class MixingCountAction extends KalturaRequest<number> {
    filter: KalturaMediaEntryFilter;
    constructor(data?: MixingCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}