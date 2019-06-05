import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'uiConf' action 'delete'.
 *
 * Usage: Delete an existing UIConf
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: UiConfDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}