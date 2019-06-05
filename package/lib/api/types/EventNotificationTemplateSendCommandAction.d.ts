import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaPushNotificationCommandType } from './KalturaPushNotificationCommandType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateSendCommandActionArgs extends KalturaRequestArgs {
    notificationTemplateSystemName: string;
    pushNotificationParams: KalturaPushNotificationParams;
    command: KalturaPushNotificationCommandType;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'sendCommand'.
 *
 * Usage: Clear queue messages
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateSendCommandAction extends KalturaRequest<void> {
    notificationTemplateSystemName: string;
    pushNotificationParams: KalturaPushNotificationParams;
    command: KalturaPushNotificationCommandType;
    constructor(data: EventNotificationTemplateSendCommandActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}