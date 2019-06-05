import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionAddMrssValidateActionArgs extends KalturaRequestArgs {
    id: number;
    xsdData: string;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidate'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddMrssValidateAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    xsdData: string;
    constructor(data: GenericDistributionProviderActionAddMrssValidateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}