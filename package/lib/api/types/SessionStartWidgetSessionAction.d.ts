import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStartWidgetSessionResponse } from './KalturaStartWidgetSessionResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SessionStartWidgetSessionActionArgs extends KalturaRequestArgs {
    widgetId: string;
    expiry?: number;
}
/**
 * Build request payload for service 'session' action 'startWidgetSession'.
 *
 * Usage: Start a session for Kaltura's flash widgets
 *
 * Server response type:         KalturaStartWidgetSessionResponse
 * Server failure response type: KalturaAPIException
 */
export declare class SessionStartWidgetSessionAction extends KalturaRequest<KalturaStartWidgetSessionResponse> {
    widgetId: string;
    expiry: number;
    constructor(data: SessionStartWidgetSessionActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
