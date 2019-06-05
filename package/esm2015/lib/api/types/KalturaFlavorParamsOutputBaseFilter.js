/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter } from './KalturaFlavorParamsFilter';
/**
 * @record
 */
export function KalturaFlavorParamsOutputBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsOutputBaseFilterArgs.prototype.flavorParamsIdEqual;
/** @type {?|undefined} */
KalturaFlavorParamsOutputBaseFilterArgs.prototype.flavorParamsVersionEqual;
/** @type {?|undefined} */
KalturaFlavorParamsOutputBaseFilterArgs.prototype.flavorAssetIdEqual;
/** @type {?|undefined} */
KalturaFlavorParamsOutputBaseFilterArgs.prototype.flavorAssetVersionEqual;
export class KalturaFlavorParamsOutputBaseFilter extends KalturaFlavorParamsFilter {
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
            objectType: { type: 'c', default: 'KalturaFlavorParamsOutputBaseFilter' },
            flavorParamsIdEqual: { type: 'n' },
            flavorParamsVersionEqual: { type: 's' },
            flavorAssetIdEqual: { type: 's' },
            flavorAssetVersionEqual: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorParamsOutputBaseFilter.prototype.flavorParamsIdEqual;
    /** @type {?} */
    KalturaFlavorParamsOutputBaseFilter.prototype.flavorParamsVersionEqual;
    /** @type {?} */
    KalturaFlavorParamsOutputBaseFilter.prototype.flavorAssetIdEqual;
    /** @type {?} */
    KalturaFlavorParamsOutputBaseFilter.prototype.flavorAssetVersionEqual;
}
typesMappingStorage['KalturaFlavorParamsOutputBaseFilter'] = KalturaFlavorParamsOutputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXZHLE1BQU0sMENBQTJDLFNBQVEseUJBQXlCOzs7O0lBTzlFLFlBQVksSUFBK0M7UUFFdkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyLCBLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXJBcmdzIHtcbiAgICBmbGF2b3JQYXJhbXNJZEVxdWFsPyA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zVmVyc2lvbkVxdWFsPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZEVxdWFsPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRWZXJzaW9uRXF1YWw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXIge1xuXG4gICAgZmxhdm9yUGFyYW1zSWRFcXVhbCA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zVmVyc2lvbkVxdWFsIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkRXF1YWwgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0VmVyc2lvbkVxdWFsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNWZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0VmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlcjsiXX0=