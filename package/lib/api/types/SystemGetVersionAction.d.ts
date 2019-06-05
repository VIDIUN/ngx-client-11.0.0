import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SystemGetVersionActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'system' action 'getVersion'.
 *
 *
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class SystemGetVersionAction extends KalturaRequest<string> {
    constructor(data?: SystemGetVersionActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}