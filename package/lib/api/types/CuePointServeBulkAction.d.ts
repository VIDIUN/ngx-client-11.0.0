import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface CuePointServeBulkActionArgs extends KalturaFileRequestArgs {
    filter?: KalturaCuePointFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'cuePoint' action 'serveBulk'.
 *
 * Usage: Download multiple cue points objects as XML definitions
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointServeBulkAction extends KalturaFileRequest {
    filter: KalturaCuePointFilter;
    pager: KalturaFilterPager;
    constructor(data?: CuePointServeBulkActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
