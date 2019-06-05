import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'annotation' action 'get'.
 *
 * Usage: Retrieve an CuePoint object by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationGetAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    constructor(data: AnnotationGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
