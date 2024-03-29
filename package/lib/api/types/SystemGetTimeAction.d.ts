import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SystemGetTimeActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'system' action 'getTime'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class SystemGetTimeAction extends KalturaRequest<number> {
    constructor(data?: SystemGetTimeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
