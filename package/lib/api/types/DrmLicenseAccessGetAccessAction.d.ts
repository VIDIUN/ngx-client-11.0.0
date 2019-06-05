import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmLicenseAccessDetails } from './KalturaDrmLicenseAccessDetails';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmLicenseAccessGetAccessActionArgs extends KalturaRequestArgs {
    entryId: string;
    flavorIds: string;
    referrer: string;
}
/**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 */
export declare class DrmLicenseAccessGetAccessAction extends KalturaRequest<KalturaDrmLicenseAccessDetails> {
    entryId: string;
    flavorIds: string;
    referrer: string;
    constructor(data: DrmLicenseAccessGetAccessActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}