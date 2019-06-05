import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsGetByConversionProfileIdActionArgs extends KalturaRequestArgs {
    conversionProfileId: number;
}
/**
 * Build request payload for service 'flavorParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Flavor Params by Conversion Profile ID
 *
 * Server response type:         KalturaFlavorParams[]
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaFlavorParams[]> {
    conversionProfileId: number;
    constructor(data: FlavorParamsGetByConversionProfileIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
