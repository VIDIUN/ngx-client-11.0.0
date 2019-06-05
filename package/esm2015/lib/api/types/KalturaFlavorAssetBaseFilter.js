/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaFlavorAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.flavorParamsIdEqual;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.flavorParamsIdIn;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusNotIn;
export class KalturaFlavorAssetBaseFilter extends KalturaAssetFilter {
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
            objectType: { type: 'c', default: 'KalturaFlavorAssetBaseFilter' },
            flavorParamsIdEqual: { type: 'n' },
            flavorParamsIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaFlavorAssetStatus, subType: 'KalturaFlavorAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.flavorParamsIdEqual;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.flavorParamsIdIn;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaFlavorAssetBaseFilter'] = KalturaFlavorAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sbUNBQW9DLFNBQVEsa0JBQWtCOzs7O0lBUWhFLFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDbEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RmlsdGVyLCBLYWx0dXJhQXNzZXRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlckFyZ3Mge1xuICAgIGZsYXZvclBhcmFtc0lkRXF1YWw/IDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNJZEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlciB7XG5cbiAgICBmbGF2b3JQYXJhbXNJZEVxdWFsIDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNJZEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFGbGF2b3JBc3NldFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yQXNzZXRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXI7Il19