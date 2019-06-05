import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationScope } from './KalturaEventNotificationScope';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateDispatchActionArgs extends KalturaRequestArgs {
    id: number;
    scope: KalturaEventNotificationScope;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'dispatch'.
 *
 * Usage: Dispatch event notification object by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateDispatchAction extends KalturaRequest<number> {
    id: number;
    scope: KalturaEventNotificationScope;
    constructor(data: EventNotificationTemplateDispatchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
