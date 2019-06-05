import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileAddActionArgs extends KalturaRequestArgs {
    conversionProfile: KalturaConversionProfile;
}
/**
 * Build request payload for service 'conversionProfile' action 'add'.
 *
 * Usage: Add new Conversion Profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileAddAction extends KalturaRequest<KalturaConversionProfile> {
    conversionProfile: KalturaConversionProfile;
    constructor(data: ConversionProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
