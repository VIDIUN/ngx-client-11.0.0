import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'annotation' action 'delete'.
 *
 * Usage: delete cue point by id, and delete all children cue points
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: AnnotationDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}