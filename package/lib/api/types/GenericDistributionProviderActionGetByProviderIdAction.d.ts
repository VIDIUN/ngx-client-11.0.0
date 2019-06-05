import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionGetByProviderIdActionArgs extends KalturaRequestArgs {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'getByProviderId'.
 *
 * Usage: Get Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionGetByProviderIdAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
    constructor(data: GenericDistributionProviderActionGetByProviderIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}