import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationAddActionArgs extends KalturaRequestArgs {
    annotation: KalturaCuePoint;
}
/**
 * Build request payload for service 'annotation' action 'add'.
 *
 * Usage: Allows you to add an annotation object associated with an entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationAddAction extends KalturaRequest<KalturaAnnotation> {
    annotation: KalturaCuePoint;
    constructor(data: AnnotationAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
