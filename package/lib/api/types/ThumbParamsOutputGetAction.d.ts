import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsOutputGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'thumbParamsOutput' action 'get'.
 *
 * Usage: Get thumb params output object by ID
 *
 * Server response type:         KalturaThumbParamsOutput
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsOutputGetAction extends KalturaRequest<KalturaThumbParamsOutput> {
    id: number;
    constructor(data: ThumbParamsOutputGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
