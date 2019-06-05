import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationUpdateStatusActionArgs extends KalturaRequestArgs {
    id: string;
    status: KalturaCuePointStatus;
}
/**
 * Build request payload for service 'annotation' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationUpdateStatusAction extends KalturaRequest<void> {
    id: string;
    status: KalturaCuePointStatus;
    constructor(data: AnnotationUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}