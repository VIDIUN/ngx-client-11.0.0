import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'get'.
 *
 * Usage: Get Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionGetAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    constructor(data: GenericDistributionProviderActionGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
