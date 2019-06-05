import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileSetAsDefaultActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'conversionProfile' action 'setAsDefault'.
 *
 * Usage: Set Conversion Profile to be the partner default
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileSetAsDefaultAction extends KalturaRequest<KalturaConversionProfile> {
    id: number;
    constructor(data: ConversionProfileSetAsDefaultActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}