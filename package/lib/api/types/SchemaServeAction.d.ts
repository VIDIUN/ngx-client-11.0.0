import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSchemaType } from './KalturaSchemaType';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface SchemaServeActionArgs extends KalturaFileRequestArgs {
    type: KalturaSchemaType;
}
/**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class SchemaServeAction extends KalturaFileRequest {
    type: KalturaSchemaType;
    constructor(data: SchemaServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}