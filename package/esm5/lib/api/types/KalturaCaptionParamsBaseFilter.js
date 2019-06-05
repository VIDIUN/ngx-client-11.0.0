/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaCaptionParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCaptionParamsBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaCaptionParamsBaseFilterArgs.prototype.formatIn;
var KalturaCaptionParamsBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionParamsBaseFilter, _super);
    function KalturaCaptionParamsBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionParamsBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            formatIn: { type: 's' }
        });
        return result;
    };
    return KalturaCaptionParamsBaseFilter;
}(KalturaAssetParamsFilter));
export { KalturaCaptionParamsBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCaptionParamsBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaCaptionParamsBaseFilter.prototype.formatIn;
}
typesMappingStorage['KalturaCaptionParamsBaseFilter'] = KalturaCaptionParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25QYXJhbXNCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7QUFRcEcsSUFBQTtJQUFvRCwwREFBd0I7SUFLeEUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN0RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBakNMO0VBV29ELHdCQUF3QixFQXVCM0UsQ0FBQTtBQXZCRCwwQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciwgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlckFyZ3Mge1xuICAgIGZvcm1hdEVxdWFsPyA6IEthbHR1cmFDYXB0aW9uVHlwZTtcblx0Zm9ybWF0SW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXIge1xuXG4gICAgZm9ybWF0RXF1YWwgOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdGZvcm1hdEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25QYXJhbXNCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRmb3JtYXRFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvblR5cGUnIH0sXG5cdFx0XHRcdGZvcm1hdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlciddID0gS2FsdHVyYUNhcHRpb25QYXJhbXNCYXNlRmlsdGVyOyJdfQ==