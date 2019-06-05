import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyLicenseDetails } from './KalturaPlayReadyLicenseDetails';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlayReadyDrmGetLicenseDetailsActionArgs extends KalturaRequestArgs {
    keyId: string;
    deviceId: string;
    deviceType: number;
    entryId?: string;
    referrer?: string;
}
/**
 * Build request payload for service 'playReadyDrm' action 'getLicenseDetails'.
 *
 * Usage: Get Play Ready policy and dates for license creation
 *
 * Server response type:         KalturaPlayReadyLicenseDetails
 * Server failure response type: KalturaAPIException
 */
export declare class PlayReadyDrmGetLicenseDetailsAction extends KalturaRequest<KalturaPlayReadyLicenseDetails> {
    keyId: string;
    deviceId: string;
    deviceType: number;
    entryId: string;
    referrer: string;
    constructor(data: PlayReadyDrmGetLicenseDetailsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}