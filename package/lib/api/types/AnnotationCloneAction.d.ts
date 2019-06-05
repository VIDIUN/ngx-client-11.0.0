import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationCloneActionArgs extends KalturaRequestArgs {
    id: string;
    entryId: string;
}
/**
 * Build request payload for service 'annotation' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationCloneAction extends KalturaRequest<KalturaCuePoint> {
    id: string;
    entryId: string;
    constructor(data: AnnotationCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
