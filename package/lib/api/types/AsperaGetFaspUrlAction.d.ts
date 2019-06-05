import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AsperaGetFaspUrlActionArgs extends KalturaRequestArgs {
    flavorAssetId: string;
}
/**
 * Build request payload for service 'aspera' action 'getFaspUrl'.
 *
 *
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class AsperaGetFaspUrlAction extends KalturaRequest<string> {
    flavorAssetId: string;
    constructor(data: AsperaGetFaspUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
