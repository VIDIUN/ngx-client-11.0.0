import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'flavorParams' action 'delete'.
 *
 * Usage: Delete Flavor Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: FlavorParamsDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}