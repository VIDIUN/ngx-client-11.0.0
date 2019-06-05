import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaClientNotification } from './KalturaClientNotification';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface NotificationGetClientNotificationActionArgs extends KalturaRequestArgs {
    entryId: string;
    type: KalturaNotificationType;
}
/**
 * Build request payload for service 'notification' action 'getClientNotification'.
 *
 * Usage: Return the notifications for a specific entry id and type
 *
 * Server response type:         KalturaClientNotification
 * Server failure response type: KalturaAPIException
 */
export declare class NotificationGetClientNotificationAction extends KalturaRequest<KalturaClientNotification> {
    entryId: string;
    type: KalturaNotificationType;
    constructor(data: NotificationGetClientNotificationActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
