import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileGetDefaultActionArgs extends KalturaRequestArgs {
    type?: KalturaConversionProfileType;
}
/**
 * Build request payload for service 'conversionProfile' action 'getDefault'.
 *
 * Usage: Get the partner's default conversion profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileGetDefaultAction extends KalturaRequest<KalturaConversionProfile> {
    type: KalturaConversionProfileType;
    constructor(data?: ConversionProfileGetDefaultActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}