/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaThumbParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsBaseFilterArgs.prototype.formatEqual;
var KalturaThumbParamsBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbParamsBaseFilter, _super);
    function KalturaThumbParamsBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbParamsBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    };
    return KalturaThumbParamsBaseFilter;
}(KalturaAssetParamsFilter));
export { KalturaThumbParamsBaseFilter };
if (false) {
    /** @type {?} */
    KalturaThumbParamsBaseFilter.prototype.formatEqual;
}
typesMappingStorage['KalturaThumbParamsBaseFilter'] = KalturaThumbParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFPcEcsSUFBQTtJQUFrRCx3REFBd0I7SUFJdEUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNyRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTlCTDtFQVVrRCx3QkFBd0IsRUFxQnpFLENBQUE7QUFyQkQsd0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRhaW5lckZvcm1hdCB9IGZyb20gJy4vS2FsdHVyYUNvbnRhaW5lckZvcm1hdCc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXIsIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldFBhcmFtc0ZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB7XG4gICAgZm9ybWF0RXF1YWw/IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciB7XG5cbiAgICBmb3JtYXRFcXVhbCA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYlBhcmFtc0Jhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Zm9ybWF0RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFDb250YWluZXJGb3JtYXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUaHVtYlBhcmFtc0Jhc2VGaWx0ZXInXSA9IEthbHR1cmFUaHVtYlBhcmFtc0Jhc2VGaWx0ZXI7Il19