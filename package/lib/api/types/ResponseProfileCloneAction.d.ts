import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileCloneActionArgs extends KalturaRequestArgs {
    id: number;
    profile: KalturaResponseProfile;
}
/**
 * Build request payload for service 'responseProfile' action 'clone'.
 *
 * Usage: Clone an existing response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileCloneAction extends KalturaRequest<KalturaResponseProfile> {
    id: number;
    profile: KalturaResponseProfile;
    constructor(data: ResponseProfileCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}