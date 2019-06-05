import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'accessControlProfile' action 'get'.
 *
 * Usage: Get access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlProfileGetAction extends KalturaRequest<KalturaAccessControlProfile> {
    id: number;
    constructor(data: AccessControlProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}