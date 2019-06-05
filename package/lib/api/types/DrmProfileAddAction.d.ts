import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileAddActionArgs extends KalturaRequestArgs {
    drmProfile: KalturaDrmProfile;
}
/**
 * Build request payload for service 'drmProfile' action 'add'.
 *
 * Usage: Allows you to add a new DrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileAddAction extends KalturaRequest<KalturaDrmProfile> {
    drmProfile: KalturaDrmProfile;
    constructor(data: DrmProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}