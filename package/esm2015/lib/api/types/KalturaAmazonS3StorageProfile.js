/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageProfile } from './KalturaStorageProfile';
/**
 * @record
 */
export function KalturaAmazonS3StorageProfileArgs() { }
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.filesPermissionInS3;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.s3Region;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.sseType;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.sseKmsKeyId;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.signatureType;
/** @type {?|undefined} */
KalturaAmazonS3StorageProfileArgs.prototype.endPoint;
export class KalturaAmazonS3StorageProfile extends KalturaStorageProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAmazonS3StorageProfile' },
            filesPermissionInS3: { type: 'es', subTypeConstructor: KalturaAmazonS3StorageProfileFilesPermissionLevel, subType: 'KalturaAmazonS3StorageProfileFilesPermissionLevel' },
            s3Region: { type: 's' },
            sseType: { type: 's' },
            sseKmsKeyId: { type: 's' },
            signatureType: { type: 's' },
            endPoint: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.filesPermissionInS3;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.s3Region;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.sseType;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.sseKmsKeyId;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.signatureType;
    /** @type {?} */
    KalturaAmazonS3StorageProfile.prototype.endPoint;
}
typesMappingStorage['KalturaAmazonS3StorageProfile'] = KalturaAmazonS3StorageProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVkzRixNQUFNLG9DQUFxQyxTQUFRLHFCQUFxQjs7OztJQVNwRSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaURBQWlELEVBQUUsT0FBTyxFQUFHLG1EQUFtRCxFQUFFO1lBQzVLLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbCB9IGZyb20gJy4vS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGUsIEthbHR1cmFTdG9yYWdlUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFTdG9yYWdlUHJvZmlsZUFyZ3Mge1xuICAgIGZpbGVzUGVybWlzc2lvbkluUzM/IDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbDtcblx0czNSZWdpb24/IDogc3RyaW5nO1xuXHRzc2VUeXBlPyA6IHN0cmluZztcblx0c3NlS21zS2V5SWQ/IDogc3RyaW5nO1xuXHRzaWduYXR1cmVUeXBlPyA6IHN0cmluZztcblx0ZW5kUG9pbnQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZSBleHRlbmRzIEthbHR1cmFTdG9yYWdlUHJvZmlsZSB7XG5cbiAgICBmaWxlc1Blcm1pc3Npb25JblMzIDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbDtcblx0czNSZWdpb24gOiBzdHJpbmc7XG5cdHNzZVR5cGUgOiBzdHJpbmc7XG5cdHNzZUttc0tleUlkIDogc3RyaW5nO1xuXHRzaWduYXR1cmVUeXBlIDogc3RyaW5nO1xuXHRlbmRQb2ludCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGUnIH0sXG5cdFx0XHRcdGZpbGVzUGVybWlzc2lvbkluUzMgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUZpbGVzUGVybWlzc2lvbkxldmVsLCBzdWJUeXBlIDogJ0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWwnIH0sXG5cdFx0XHRcdHMzUmVnaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzZVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NlS21zS2V5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2lnbmF0dXJlVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmRQb2ludCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZSddID0gS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGU7Il19