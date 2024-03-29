import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlProfileAddActionArgs extends KalturaRequestArgs {
    accessControlProfile: KalturaAccessControlProfile;
}
/**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlProfileAddAction extends KalturaRequest<KalturaAccessControlProfile> {
    accessControlProfile: KalturaAccessControlProfile;
    constructor(data: AccessControlProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
