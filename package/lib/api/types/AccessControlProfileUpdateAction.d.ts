import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    accessControlProfile: KalturaAccessControlProfile;
}
/**
 * Build request payload for service 'accessControlProfile' action 'update'.
 *
 * Usage: Update access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlProfileUpdateAction extends KalturaRequest<KalturaAccessControlProfile> {
    id: number;
    accessControlProfile: KalturaAccessControlProfile;
    constructor(data: AccessControlProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
