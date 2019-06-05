import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileAddActionArgs extends KalturaRequestArgs {
    addResponseProfile: KalturaResponseProfile;
}
/**
 * Build request payload for service 'responseProfile' action 'add'.
 *
 * Usage: Add new response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileAddAction extends KalturaRequest<KalturaResponseProfile> {
    addResponseProfile: KalturaResponseProfile;
    constructor(data: ResponseProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}