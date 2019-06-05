/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaFlavorParamsOutputBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorParamsOutputBaseFilter, _super);
    function KalturaFlavorParamsOutputBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorParamsOutputBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorParamsOutputBaseFilter' },
            flavorParamsIdEqual: { type: 'n' },
            flavorParamsVersionEqual: { type: 's' },
            flavorAssetIdEqual: { type: 's' },
            flavorAssetVersionEqual: { type: 's' }
        });
        return result;
    };
    return KalturaFlavorParamsOutputBaseFilter;
}(KalturaFlavorParamsFilter));
export { KalturaFlavorParamsOutputBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV2RyxJQUFBO0lBQXlELCtEQUF5QjtJQU85RSw2Q0FBWSxJQUErQztlQUV2RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQXRDTDtFQVl5RCx5QkFBeUIsRUEyQmpGLENBQUE7QUEzQkQsK0NBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlciwgS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyQXJncyB7XG4gICAgZmxhdm9yUGFyYW1zSWRFcXVhbD8gOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtc1ZlcnNpb25FcXVhbD8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0VmVyc2lvbkVxdWFsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyIHtcblxuICAgIGZsYXZvclBhcmFtc0lkRXF1YWwgOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtc1ZlcnNpb25FcXVhbCA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZEVxdWFsIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldFZlcnNpb25FcXVhbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zVmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldFZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlciddID0gS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXI7Il19