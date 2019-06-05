import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionAddResultsTransformActionArgs extends KalturaRequestArgs {
    id: number;
    transformData: string;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransform'.
 *
 * Usage: Add results transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddResultsTransformAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    transformData: string;
    constructor(data: GenericDistributionProviderActionAddResultsTransformActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}