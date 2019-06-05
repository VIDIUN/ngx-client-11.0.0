/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageExportJobData } from './KalturaStorageExportJobData';
/**
 * @record
 */
export function KalturaAmazonS3StorageExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.filesPermissionInS3;
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.s3Region;
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.sseType;
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.sseKmsKeyId;
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.signatureType;
/** @type {?|undefined} */
KalturaAmazonS3StorageExportJobDataArgs.prototype.endPoint;
export class KalturaAmazonS3StorageExportJobData extends KalturaStorageExportJobData {
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
            objectType: { type: 'c', default: 'KalturaAmazonS3StorageExportJobData' },
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
    KalturaAmazonS3StorageExportJobData.prototype.filesPermissionInS3;
    /** @type {?} */
    KalturaAmazonS3StorageExportJobData.prototype.s3Region;
    /** @type {?} */
    KalturaAmazonS3StorageExportJobData.prototype.sseType;
    /** @type {?} */
    KalturaAmazonS3StorageExportJobData.prototype.sseKmsKeyId;
    /** @type {?} */
    KalturaAmazonS3StorageExportJobData.prototype.signatureType;
    /** @type {?} */
    KalturaAmazonS3StorageExportJobData.prototype.endPoint;
}
typesMappingStorage['KalturaAmazonS3StorageExportJobData'] = KalturaAmazonS3StorageExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFtYXpvblMzU3RvcmFnZUV4cG9ydEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBbWF6b25TM1N0b3JhZ2VFeHBvcnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEgsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVk3RyxNQUFNLDBDQUEyQyxTQUFRLDJCQUEyQjs7OztJQVNoRixZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaURBQWlELEVBQUUsT0FBTyxFQUFHLG1EQUFtRCxFQUFFO1lBQzVLLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbCB9IGZyb20gJy4vS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEsIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFtYXpvblMzU3RvcmFnZUV4cG9ydEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YUFyZ3Mge1xuICAgIGZpbGVzUGVybWlzc2lvbkluUzM/IDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbDtcblx0czNSZWdpb24/IDogc3RyaW5nO1xuXHRzc2VUeXBlPyA6IHN0cmluZztcblx0c3NlS21zS2V5SWQ/IDogc3RyaW5nO1xuXHRzaWduYXR1cmVUeXBlPyA6IHN0cmluZztcblx0ZW5kUG9pbnQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQW1hem9uUzNTdG9yYWdlRXhwb3J0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSB7XG5cbiAgICBmaWxlc1Blcm1pc3Npb25JblMzIDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVGaWxlc1Blcm1pc3Npb25MZXZlbDtcblx0czNSZWdpb24gOiBzdHJpbmc7XG5cdHNzZVR5cGUgOiBzdHJpbmc7XG5cdHNzZUttc0tleUlkIDogc3RyaW5nO1xuXHRzaWduYXR1cmVUeXBlIDogc3RyaW5nO1xuXHRlbmRQb2ludCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFtYXpvblMzU3RvcmFnZUV4cG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFtYXpvblMzU3RvcmFnZUV4cG9ydEpvYkRhdGEnIH0sXG5cdFx0XHRcdGZpbGVzUGVybWlzc2lvbkluUzMgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUZpbGVzUGVybWlzc2lvbkxldmVsLCBzdWJUeXBlIDogJ0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlRmlsZXNQZXJtaXNzaW9uTGV2ZWwnIH0sXG5cdFx0XHRcdHMzUmVnaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzZVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NlS21zS2V5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2lnbmF0dXJlVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmRQb2ludCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW1hem9uUzNTdG9yYWdlRXhwb3J0Sm9iRGF0YSddID0gS2FsdHVyYUFtYXpvblMzU3RvcmFnZUV4cG9ydEpvYkRhdGE7Il19