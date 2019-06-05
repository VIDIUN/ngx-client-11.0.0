import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaMediaEntryFilter;
}
/**
 * Build request payload for service 'media' action 'count'.
 *
 * Usage: Count media entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class MediaCountAction extends KalturaRequest<number> {
    filter: KalturaMediaEntryFilter;
    constructor(data?: MediaCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
