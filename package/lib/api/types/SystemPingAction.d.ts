import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SystemPingActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'system' action 'ping'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class SystemPingAction extends KalturaRequest<boolean> {
    constructor(data?: SystemPingActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}