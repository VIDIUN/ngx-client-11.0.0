import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsOutputGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'flavorParamsOutput' action 'get'.
 *
 * Usage: Get flavor params output object by ID
 *
 * Server response type:         KalturaFlavorParamsOutput
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsOutputGetAction extends KalturaRequest<KalturaFlavorParamsOutput> {
    id: number;
    constructor(data: FlavorParamsOutputGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}