/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageExportJobData } from './KalturaStorageExportJobData';
/**
 * @record
 */
export function KalturaKontikiStorageExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.contentMoid;
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.serviceToken;
export class KalturaKontikiStorageExportJobData extends KalturaStorageExportJobData {
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
            objectType: { type: 'c', default: 'KalturaKontikiStorageExportJobData' },
            flavorAssetId: { type: 's' },
            contentMoid: { type: 's' },
            serviceToken: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.contentMoid;
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.serviceToken;
}
typesMappingStorage['KalturaKontikiStorageExportJobData'] = KalturaKontikiStorageExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTN0csTUFBTSx5Q0FBMEMsU0FBUSwyQkFBMkI7Ozs7SUFNL0UsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSwgS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhS29udGlraVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGFBcmdzIHtcbiAgICBmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Y29udGVudE1vaWQ/IDogc3RyaW5nO1xuXHRzZXJ2aWNlVG9rZW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhS29udGlraVN0b3JhZ2VFeHBvcnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhIHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGNvbnRlbnRNb2lkIDogc3RyaW5nO1xuXHRzZXJ2aWNlVG9rZW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFLb250aWtpU3RvcmFnZUV4cG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YScgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50TW9pZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2aWNlVG9rZW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YSddID0gS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YTsiXX0=