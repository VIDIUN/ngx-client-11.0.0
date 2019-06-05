import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationUpdateCuePointsTimesActionArgs extends KalturaRequestArgs {
    id: string;
    startTime: number;
    endTime?: number;
}
/**
 * Build request payload for service 'annotation' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationUpdateCuePointsTimesAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    startTime: number;
    endTime: number;
    constructor(data: AnnotationUpdateCuePointsTimesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
