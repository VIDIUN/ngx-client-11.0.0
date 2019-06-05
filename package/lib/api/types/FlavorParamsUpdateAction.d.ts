import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    flavorParams: KalturaFlavorParams;
}
/**
 * Build request payload for service 'flavorParams' action 'update'.
 *
 * Usage: Update Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsUpdateAction extends KalturaRequest<KalturaFlavorParams> {
    id: number;
    flavorParams: KalturaFlavorParams;
    constructor(data: FlavorParamsUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
