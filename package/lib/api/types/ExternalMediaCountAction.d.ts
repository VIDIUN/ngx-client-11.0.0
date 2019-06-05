import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaExternalMediaEntryFilter;
}
/**
 * Build request payload for service 'externalMedia' action 'count'.
 *
 * Usage: Count media entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaCountAction extends KalturaRequest<number> {
    filter: KalturaExternalMediaEntryFilter;
    constructor(data?: ExternalMediaCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}