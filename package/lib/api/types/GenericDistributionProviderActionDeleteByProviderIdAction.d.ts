import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionDeleteByProviderIdActionArgs extends KalturaRequestArgs {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'deleteByProviderId'.
 *
 * Usage: Delete Generic Distribution Provider Action by provider id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionDeleteByProviderIdAction extends KalturaRequest<void> {
    genericDistributionProviderId: number;
    actionType: KalturaDistributionAction;
    constructor(data: GenericDistributionProviderActionDeleteByProviderIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}