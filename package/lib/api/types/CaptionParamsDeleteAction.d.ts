import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionParamsDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'captionParams' action 'delete'.
 *
 * Usage: Delete Caption Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionParamsDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: CaptionParamsDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}