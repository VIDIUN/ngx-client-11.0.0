/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaConversionProfileAssetParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.conversionProfileIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.conversionProfileIdIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.assetParamsIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.assetParamsIdIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.readyBehaviorEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.readyBehaviorIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.originEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.originIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.systemNameIn;
export class KalturaConversionProfileAssetParamsBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaConversionProfileAssetParamsBaseFilter' },
            conversionProfileIdEqual: { type: 'n' },
            conversionProfileIdIn: { type: 's' },
            assetParamsIdEqual: { type: 'n' },
            assetParamsIdIn: { type: 's' },
            readyBehaviorEqual: { type: 'en', subTypeConstructor: KalturaFlavorReadyBehaviorType, subType: 'KalturaFlavorReadyBehaviorType' },
            readyBehaviorIn: { type: 's' },
            originEqual: { type: 'en', subTypeConstructor: KalturaAssetParamsOrigin, subType: 'KalturaAssetParamsOrigin' },
            originIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.conversionProfileIdEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.conversionProfileIdIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.assetParamsIdEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.assetParamsIdIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.readyBehaviorEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.readyBehaviorIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.originEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.originIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.systemNameIn;
}
typesMappingStorage['KalturaConversionProfileAssetParamsBaseFilter'] = KalturaConversionProfileAssetParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0Jhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhGLE1BQU0sb0RBQXFELFNBQVEsb0JBQW9COzs7O0lBYW5GLFlBQVksSUFBeUQ7UUFFakUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1lBQ2xHLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNySSxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ2xILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZSB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc09yaWdpbiB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0Jhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgY29udmVyc2lvblByb2ZpbGVJZEVxdWFsPyA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVJZEluPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZEVxdWFsPyA6IG51bWJlcjtcblx0YXNzZXRQYXJhbXNJZEluPyA6IHN0cmluZztcblx0cmVhZHlCZWhhdmlvckVxdWFsPyA6IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZTtcblx0cmVhZHlCZWhhdmlvckluPyA6IHN0cmluZztcblx0b3JpZ2luRXF1YWw/IDogS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luO1xuXHRvcmlnaW5Jbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGNvbnZlcnNpb25Qcm9maWxlSWRFcXVhbCA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVJZEluIDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkRXF1YWwgOiBudW1iZXI7XG5cdGFzc2V0UGFyYW1zSWRJbiA6IHN0cmluZztcblx0cmVhZHlCZWhhdmlvckVxdWFsIDogS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlO1xuXHRyZWFkeUJlaGF2aW9ySW4gOiBzdHJpbmc7XG5cdG9yaWdpbkVxdWFsIDogS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luO1xuXHRvcmlnaW5JbiA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0Jhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9yRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9ySW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3JpZ2luRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4sIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luJyB9LFxuXHRcdFx0XHRvcmlnaW5JbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQmFzZUZpbHRlciddID0gS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyOyJdfQ==