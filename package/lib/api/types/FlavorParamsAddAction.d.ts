import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsAddActionArgs extends KalturaRequestArgs {
    flavorParams: KalturaFlavorParams;
}
/**
 * Build request payload for service 'flavorParams' action 'add'.
 *
 * Usage: Add new Flavor Params
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsAddAction extends KalturaRequest<KalturaFlavorParams> {
    flavorParams: KalturaFlavorParams;
    constructor(data: FlavorParamsAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}