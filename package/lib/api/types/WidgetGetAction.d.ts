import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidgetGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'widget' action 'get'.
 *
 * Usage: Get widget by id
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export declare class WidgetGetAction extends KalturaRequest<KalturaWidget> {
    id: string;
    constructor(data: WidgetGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}