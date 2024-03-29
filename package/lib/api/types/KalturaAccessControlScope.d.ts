import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlContextTypeHolder } from './KalturaAccessControlContextTypeHolder';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAccessControlScopeArgs extends KalturaObjectBaseArgs {
    referrer?: string;
    ip?: string;
    ks?: string;
    userAgent?: string;
    time?: number;
    contexts?: KalturaAccessControlContextTypeHolder[];
    hashes?: KalturaKeyValue[];
}
export declare class KalturaAccessControlScope extends KalturaObjectBase {
    referrer: string;
    ip: string;
    ks: string;
    userAgent: string;
    time: number;
    contexts: KalturaAccessControlContextTypeHolder[];
    hashes: KalturaKeyValue[];
    constructor(data?: KalturaAccessControlScopeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
