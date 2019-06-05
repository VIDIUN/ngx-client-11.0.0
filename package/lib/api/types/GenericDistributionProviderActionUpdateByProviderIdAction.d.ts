import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionUpdateByProviderIdActionArgs extends KalturaRequestArgs {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'updateByProviderId'.
 *
 * Usage: Update Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionUpdateByProviderIdAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
    constructor(data: GenericDistributionProviderActionUpdateByProviderIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
