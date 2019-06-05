import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    cuePoint: KalturaCuePoint;
}
/**
 * Build request payload for service 'cuePoint' action 'update'.
 *
 * Usage: Update cue point by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointUpdateAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    cuePoint: KalturaCuePoint;
    constructor(data: CuePointUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}