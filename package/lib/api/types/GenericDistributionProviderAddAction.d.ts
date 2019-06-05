import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderAddActionArgs extends KalturaRequestArgs {
    genericDistributionProvider: KalturaGenericDistributionProvider;
}
/**
 * Build request payload for service 'genericDistributionProvider' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderAddAction extends KalturaRequest<KalturaGenericDistributionProvider> {
    genericDistributionProvider: KalturaGenericDistributionProvider;
    constructor(data: GenericDistributionProviderAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
