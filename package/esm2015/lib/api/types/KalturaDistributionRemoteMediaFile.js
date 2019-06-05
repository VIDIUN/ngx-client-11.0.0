/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionRemoteMediaFileArgs() { }
/** @type {?|undefined} */
KalturaDistributionRemoteMediaFileArgs.prototype.version;
/** @type {?|undefined} */
KalturaDistributionRemoteMediaFileArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaDistributionRemoteMediaFileArgs.prototype.remoteId;
export class KalturaDistributionRemoteMediaFile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaDistributionRemoteMediaFile' },
            version: { type: 's' },
            assetId: { type: 's' },
            remoteId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionRemoteMediaFile.prototype.version;
    /** @type {?} */
    KalturaDistributionRemoteMediaFile.prototype.assetId;
    /** @type {?} */
    KalturaDistributionRemoteMediaFile.prototype.remoteId;
}
typesMappingStorage['KalturaDistributionRemoteMediaFile'] = KalturaDistributionRemoteMediaFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblJlbW90ZU1lZGlhRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblJlbW90ZU1lZGlhRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsTUFBTSx5Q0FBMEMsU0FBUSxpQkFBaUI7Ozs7SUFNckUsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uUmVtb3RlTWVkaWFGaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHZlcnNpb24/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcblx0cmVtb3RlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uUmVtb3RlTWVkaWFGaWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdmVyc2lvbiA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblx0cmVtb3RlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblJlbW90ZU1lZGlhRmlsZScgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGUnXSA9IEthbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGU7Il19