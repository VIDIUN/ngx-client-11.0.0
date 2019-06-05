import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'flavorParams' action 'get'.
 *
 * Usage: Get Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsGetAction extends KalturaRequest<KalturaFlavorParams> {
    id: number;
    constructor(data: FlavorParamsGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
