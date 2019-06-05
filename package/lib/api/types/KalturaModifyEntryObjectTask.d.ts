import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaModifyEntryObjectTaskArgs extends KalturaObjectTaskArgs {
    inputMetadataProfileId?: number;
    inputMetadata?: KalturaKeyValue[];
    outputMetadataProfileId?: number;
    outputMetadata?: KalturaKeyValue[];
    inputUserId?: string;
    inputEntitledUsersEdit?: string;
    inputEntitledUsersPublish?: string;
}
export declare class KalturaModifyEntryObjectTask extends KalturaObjectTask {
    inputMetadataProfileId: number;
    inputMetadata: KalturaKeyValue[];
    outputMetadataProfileId: number;
    outputMetadata: KalturaKeyValue[];
    inputUserId: string;
    inputEntitledUsersEdit: string;
    inputEntitledUsersPublish: string;
    constructor(data?: KalturaModifyEntryObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
