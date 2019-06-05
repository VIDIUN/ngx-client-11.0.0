import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'accessControlProfile' action 'delete'.
 *
 * Usage: Delete access control profile by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: AccessControlProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
