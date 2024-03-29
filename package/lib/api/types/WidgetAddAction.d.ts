import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidgetAddActionArgs extends KalturaRequestArgs {
    widget: KalturaWidget;
}
/**
 * Build request payload for service 'widget' action 'add'.
 *
 * Usage: Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export declare class WidgetAddAction extends KalturaRequest<KalturaWidget> {
    widget: KalturaWidget;
    constructor(data: WidgetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
