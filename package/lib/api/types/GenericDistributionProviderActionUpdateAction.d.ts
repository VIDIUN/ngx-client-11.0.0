import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'update'.
 *
 * Usage: Update Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionUpdateAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    genericDistributionProviderAction: KalturaGenericDistributionProviderAction;
    constructor(data: GenericDistributionProviderActionUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
