import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidgetCloneActionArgs extends KalturaRequestArgs {
    widget: KalturaWidget;
}
/**
 * Build request payload for service 'widget' action 'clone'.
 *
 * Usage: Add widget based on existing widget.
 * Must provide valid sourceWidgetId
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export declare class WidgetCloneAction extends KalturaRequest<KalturaWidget> {
    widget: KalturaWidget;
    constructor(data: WidgetCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
