/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor } from './KalturaFileSyncDescriptor';
/**
 * @record
 */
export function KalturaSourceFileSyncDescriptorArgs() { }
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.actualFileSyncLocalPath;
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.assetParamsId;
export class KalturaSourceFileSyncDescriptor extends KalturaFileSyncDescriptor {
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
            objectType: { type: 'c', default: 'KalturaSourceFileSyncDescriptor' },
            actualFileSyncLocalPath: { type: 's' },
            assetId: { type: 's' },
            assetParamsId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.actualFileSyncLocalPath;
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.assetId;
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.assetParamsId;
}
typesMappingStorage['KalturaSourceFileSyncDescriptor'] = KalturaSourceFileSyncDescriptor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTdkcsTUFBTSxzQ0FBdUMsU0FBUSx5QkFBeUI7Ozs7SUFNMUUsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvciwgS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3JBcmdzICBleHRlbmRzIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3JBcmdzIHtcbiAgICBhY3R1YWxGaWxlU3luY0xvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvciBleHRlbmRzIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3Ige1xuXG4gICAgYWN0dWFsRmlsZVN5bmNMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGFzc2V0SWQgOiBzdHJpbmc7XG5cdGFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvcicgfSxcblx0XHRcdFx0YWN0dWFsRmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3InXSA9IEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3I7Il19