import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidevineDrmGetLicenseActionArgs extends KalturaRequestArgs {
    flavorAssetId: string;
    referrer?: string;
}
/**
 * Build request payload for service 'widevineDrm' action 'getLicense'.
 *
 * Usage: Get license for encrypted content playback
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class WidevineDrmGetLicenseAction extends KalturaRequest<string> {
    flavorAssetId: string;
    referrer: string;
    constructor(data: WidevineDrmGetLicenseActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}