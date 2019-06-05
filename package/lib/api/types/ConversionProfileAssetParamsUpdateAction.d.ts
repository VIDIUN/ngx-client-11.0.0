import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParams } from './KalturaConversionProfileAssetParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileAssetParamsUpdateActionArgs extends KalturaRequestArgs {
    conversionProfileId: number;
    assetParamsId: number;
    conversionProfileAssetParams: KalturaConversionProfileAssetParams;
}
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'update'.
 *
 * Usage: Update asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParams
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileAssetParamsUpdateAction extends KalturaRequest<KalturaConversionProfileAssetParams> {
    conversionProfileId: number;
    assetParamsId: number;
    conversionProfileAssetParams: KalturaConversionProfileAssetParams;
    constructor(data: ConversionProfileAssetParamsUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
