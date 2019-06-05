import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionAddActionArgs extends KalturaRequestArgs {
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider Action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
    constructor(data: GenericDistributionProviderActionAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
