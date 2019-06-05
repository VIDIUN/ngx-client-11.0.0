import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsConvertActionArgs extends KalturaRequestArgs {
    entryId: string;
    conversionProfileId?: number;
    dynamicConversionAttributes?: KalturaConversionAttribute[];
}
/**
 * Build request payload for service 'documents' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsConvertAction extends KalturaRequest<number> {
    entryId: string;
    conversionProfileId: number;
    dynamicConversionAttributes: KalturaConversionAttribute[];
    constructor(data: DocumentsConvertActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
