import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'cuePoint' action 'get'.
 *
 * Usage: Retrieve an CuePoint object by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointGetAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    constructor(data: CuePointGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
