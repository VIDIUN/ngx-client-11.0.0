import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    conversionProfile: KalturaConversionProfile;
}
/**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileUpdateAction extends KalturaRequest<KalturaConversionProfile> {
    id: number;
    conversionProfile: KalturaConversionProfile;
    constructor(data: ConversionProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
