import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'conversionProfile' action 'get'.
 *
 * Usage: Get Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileGetAction extends KalturaRequest<KalturaConversionProfile> {
    id: number;
    constructor(data: ConversionProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
