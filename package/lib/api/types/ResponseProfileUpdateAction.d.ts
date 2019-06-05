import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    updateResponseProfile: KalturaResponseProfile;
}
/**
 * Build request payload for service 'responseProfile' action 'update'.
 *
 * Usage: Update response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileUpdateAction extends KalturaRequest<KalturaResponseProfile> {
    id: number;
    updateResponseProfile: KalturaResponseProfile;
    constructor(data: ResponseProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}