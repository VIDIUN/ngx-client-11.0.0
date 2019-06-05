import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SystemPingDatabaseActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'system' action 'pingDatabase'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class SystemPingDatabaseAction extends KalturaRequest<boolean> {
    constructor(data?: SystemPingDatabaseActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
