import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaCuePointFilter;
}
/**
 * Build request payload for service 'cuePoint' action 'count'.
 *
 * Usage: count cue point objects by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointCountAction extends KalturaRequest<number> {
    filter: KalturaCuePointFilter;
    constructor(data?: CuePointCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}