/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConvertCollectionFlavorDataArgs() { }
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.flavorParamsOutputId;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.videoBitrate;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.audioBitrate;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.destFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertCollectionFlavorDataArgs.prototype.destFileSyncRemoteUrl;
export class KalturaConvertCollectionFlavorData extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaConvertCollectionFlavorData' },
            flavorAssetId: { type: 's' },
            flavorParamsOutputId: { type: 'n' },
            readyBehavior: { type: 'n' },
            videoBitrate: { type: 'n' },
            audioBitrate: { type: 'n' },
            destFileSyncLocalPath: { type: 's' },
            destFileSyncRemoteUrl: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.flavorParamsOutputId;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.readyBehavior;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.videoBitrate;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.audioBitrate;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.destFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertCollectionFlavorData.prototype.destFileSyncRemoteUrl;
}
typesMappingStorage['KalturaConvertCollectionFlavorData'] = KalturaConvertCollectionFlavorData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixNQUFNLHlDQUEwQyxTQUFRLGlCQUFpQjs7OztJQVVyRSxZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNPdXRwdXRJZD8gOiBudW1iZXI7XG5cdHJlYWR5QmVoYXZpb3I/IDogbnVtYmVyO1xuXHR2aWRlb0JpdHJhdGU/IDogbnVtYmVyO1xuXHRhdWRpb0JpdHJhdGU/IDogbnVtYmVyO1xuXHRkZXN0RmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRkZXN0RmlsZVN5bmNSZW1vdGVVcmw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zT3V0cHV0SWQgOiBudW1iZXI7XG5cdHJlYWR5QmVoYXZpb3IgOiBudW1iZXI7XG5cdHZpZGVvQml0cmF0ZSA6IG51bWJlcjtcblx0YXVkaW9CaXRyYXRlIDogbnVtYmVyO1xuXHRkZXN0RmlsZVN5bmNMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGRlc3RGaWxlU3luY1JlbW90ZVVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc091dHB1dElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3IgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlkZW9CaXRyYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF1ZGlvQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXN0RmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVTeW5jUmVtb3RlVXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkZsYXZvckRhdGEnXSA9IEthbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkZsYXZvckRhdGE7Il19