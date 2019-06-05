import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationJobData } from './KalturaIntegrationJobData';
import { KalturaBatchJobObjectType } from './KalturaBatchJobObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface IntegrationDispatchActionArgs extends KalturaRequestArgs {
    data: KalturaIntegrationJobData;
    objectType: KalturaBatchJobObjectType;
    objectId: string;
}
/**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class IntegrationDispatchAction extends KalturaRequest<number> {
    data: KalturaIntegrationJobData;
    objectType: KalturaBatchJobObjectType;
    objectId: string;
    constructor(data: IntegrationDispatchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}