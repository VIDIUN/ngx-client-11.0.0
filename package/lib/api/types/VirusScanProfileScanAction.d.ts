import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileScanActionArgs extends KalturaRequestArgs {
    flavorAssetId: string;
    virusScanProfileId?: number;
}
/**
 * Build request payload for service 'virusScanProfile' action 'scan'.
 *
 * Usage: Scan flavor asset according to virus scan profile
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileScanAction extends KalturaRequest<number> {
    flavorAssetId: string;
    virusScanProfileId: number;
    constructor(data: VirusScanProfileScanActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}