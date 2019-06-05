/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCaptionAssetItemArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.asset;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.entry;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.content;
export class KalturaCaptionAssetItem extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaCaptionAssetItem' },
            asset: { type: 'o', subTypeConstructor: KalturaCaptionAsset, subType: 'KalturaCaptionAsset' },
            entry: { type: 'o', subTypeConstructor: KalturaBaseEntry, subType: 'KalturaBaseEntry' },
            startTime: { type: 'n' },
            endTime: { type: 'n' },
            content: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.asset;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.entry;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.startTime;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.endTime;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.content;
}
typesMappingStorage['KalturaCaptionAssetItem'] = KalturaCaptionAssetItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsTUFBTSw4QkFBK0IsU0FBUSxpQkFBaUI7Ozs7SUFRMUQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDakcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDM0YsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXQgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXQnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYXNzZXQ/IDogS2FsdHVyYUNhcHRpb25Bc3NldDtcblx0ZW50cnk/IDogS2FsdHVyYUJhc2VFbnRyeTtcblx0c3RhcnRUaW1lPyA6IG51bWJlcjtcblx0ZW5kVGltZT8gOiBudW1iZXI7XG5cdGNvbnRlbnQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGFzc2V0IDogS2FsdHVyYUNhcHRpb25Bc3NldDtcblx0ZW50cnkgOiBLYWx0dXJhQmFzZUVudHJ5O1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGVuZFRpbWUgOiBudW1iZXI7XG5cdGNvbnRlbnQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtJyB9LFxuXHRcdFx0XHRhc3NldCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0JyB9LFxuXHRcdFx0XHRlbnRyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JyB9LFxuXHRcdFx0XHRzdGFydFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250ZW50IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtJ10gPSBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbTsiXX0=