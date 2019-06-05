import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface GenericDistributionProviderActionAddResultsTransformFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    transformFile: File;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddResultsTransformFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    transformFile: File;
    constructor(data: GenericDistributionProviderActionAddResultsTransformFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}