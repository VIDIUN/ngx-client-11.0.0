import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'genericDistributionProvider' action 'delete'.
 *
 * Usage: Delete Generic Distribution Provider by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: GenericDistributionProviderDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}