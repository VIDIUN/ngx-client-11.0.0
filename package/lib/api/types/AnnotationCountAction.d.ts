import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaCuePointFilter;
}
/**
 * Build request payload for service 'annotation' action 'count'.
 *
 * Usage: count cue point objects by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationCountAction extends KalturaRequest<number> {
    filter: KalturaCuePointFilter;
    constructor(data?: AnnotationCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
