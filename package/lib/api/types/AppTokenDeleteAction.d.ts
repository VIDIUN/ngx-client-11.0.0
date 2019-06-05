import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'appToken' action 'delete'.
 *
 * Usage: Delete application authentication token by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: AppTokenDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}