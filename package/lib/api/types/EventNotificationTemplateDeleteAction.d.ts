import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'delete'.
 *
 * Usage: Delete an event notification template object
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: EventNotificationTemplateDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
