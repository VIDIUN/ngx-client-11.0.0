import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetServeAdStitchCmdActionArgs extends KalturaRequestArgs {
    assetId: string;
    ffprobeJson?: string;
    duration?: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'serveAdStitchCmd'.
 *
 * Usage: serve cmd line to transcode the ad
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetServeAdStitchCmdAction extends KalturaRequest<string> {
    assetId: string;
    ffprobeJson: string;
    duration: string;
    constructor(data: FlavorAssetServeAdStitchCmdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
