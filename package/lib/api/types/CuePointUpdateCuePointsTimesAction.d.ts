import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointUpdateCuePointsTimesActionArgs extends KalturaRequestArgs {
    id: string;
    startTime: number;
    endTime?: number;
}
/**
 * Build request payload for service 'cuePoint' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointUpdateCuePointsTimesAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    startTime: number;
    endTime: number;
    constructor(data: CuePointUpdateCuePointsTimesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}