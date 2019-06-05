import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidgetUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    widget: KalturaWidget;
}
/**
 * Build request payload for service 'widget' action 'update'.
 *
 * Usage: Update exisiting widget
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export declare class WidgetUpdateAction extends KalturaRequest<KalturaWidget> {
    id: string;
    widget: KalturaWidget;
    constructor(data: WidgetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}