import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaBaseEntryFilter;
}
/**
 * Build request payload for service 'baseEntry' action 'count'.
 *
 * Usage: Count base entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryCountAction extends KalturaRequest<number> {
    filter: KalturaBaseEntryFilter;
    constructor(data?: BaseEntryCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}