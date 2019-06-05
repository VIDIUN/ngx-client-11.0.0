import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileUpdateActionArgs extends KalturaRequestArgs {
    drmProfileId: number;
    drmProfile: KalturaDrmProfile;
}
/**
 * Build request payload for service 'drmProfile' action 'update'.
 *
 * Usage: Update an existing KalturaDrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileUpdateAction extends KalturaRequest<KalturaDrmProfile> {
    drmProfileId: number;
    drmProfile: KalturaDrmProfile;
    constructor(data: DrmProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
