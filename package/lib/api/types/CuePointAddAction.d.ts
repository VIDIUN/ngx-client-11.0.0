import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointAddActionArgs extends KalturaRequestArgs {
    cuePoint: KalturaCuePoint;
}
/**
 * Build request payload for service 'cuePoint' action 'add'.
 *
 * Usage: Allows you to add an cue point object associated with an entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointAddAction extends KalturaRequest<KalturaCuePoint> {
    cuePoint: KalturaCuePoint;
    constructor(data: CuePointAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
