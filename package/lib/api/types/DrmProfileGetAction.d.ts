import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileGetActionArgs extends KalturaRequestArgs {
    drmProfileId: number;
}
/**
 * Build request payload for service 'drmProfile' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by ID
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileGetAction extends KalturaRequest<KalturaDrmProfile> {
    drmProfileId: number;
    constructor(data: DrmProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
