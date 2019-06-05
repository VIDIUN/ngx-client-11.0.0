import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileDeleteActionArgs extends KalturaRequestArgs {
    drmProfileId: number;
}
/**
 * Build request payload for service 'drmProfile' action 'delete'.
 *
 * Usage: Mark the KalturaDrmProfile object as deleted
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileDeleteAction extends KalturaRequest<KalturaDrmProfile> {
    drmProfileId: number;
    constructor(data: DrmProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}