import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionAddMrssTransformActionArgs extends KalturaRequestArgs {
    id: number;
    xslData: string;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransform'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddMrssTransformAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    xslData: string;
    constructor(data: GenericDistributionProviderActionAddMrssTransformActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}