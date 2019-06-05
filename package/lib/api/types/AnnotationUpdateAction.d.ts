import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    annotation: KalturaCuePoint;
}
/**
 * Build request payload for service 'annotation' action 'update'.
 *
 * Usage: Update annotation by id
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationUpdateAction extends KalturaRequest<KalturaAnnotation> {
    id: string;
    annotation: KalturaCuePoint;
    constructor(data: AnnotationUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
