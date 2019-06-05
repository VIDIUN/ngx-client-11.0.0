import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'delete'.
 *
 * Usage: Delete Generic Distribution Provider Action by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: GenericDistributionProviderActionDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
