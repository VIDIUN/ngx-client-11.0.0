import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'thumbParams' action 'delete'.
 *
 * Usage: Delete Thumb Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: ThumbParamsDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
