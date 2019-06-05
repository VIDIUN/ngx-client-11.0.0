import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    genericDistributionProvider: KalturaGenericDistributionProvider;
}
/**
 * Build request payload for service 'genericDistributionProvider' action 'update'.
 *
 * Usage: Update Generic Distribution Provider by id
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderUpdateAction extends KalturaRequest<KalturaGenericDistributionProvider> {
    id: number;
    genericDistributionProvider: KalturaGenericDistributionProvider;
    constructor(data: GenericDistributionProviderUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}