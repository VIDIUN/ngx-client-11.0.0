import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface IntegrationNotifyActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'integration' action 'notify'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class IntegrationNotifyAction extends KalturaRequest<void> {
    id: number;
    constructor(data: IntegrationNotifyActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
