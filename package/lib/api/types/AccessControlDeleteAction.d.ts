import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'accessControl' action 'delete'.
 *
 * Usage: Delete Access Control Profile by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: AccessControlDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}