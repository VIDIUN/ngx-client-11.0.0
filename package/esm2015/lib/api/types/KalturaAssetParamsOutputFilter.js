/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsOutputBaseFilter } from './KalturaAssetParamsOutputBaseFilter';
/**
 * @record
 */
export function KalturaAssetParamsOutputFilterArgs() { }
export class KalturaAssetParamsOutputFilter extends KalturaAssetParamsOutputBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaAssetParamsOutputFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaAssetParamsOutputFilter'] = KalturaAssetParamsOutputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBT2xJLE1BQU0scUNBQXNDLFNBQVEsa0NBQWtDOzs7O0lBSWxGLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1NBQzFFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QmFzZUZpbHRlciwgS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldFBhcmFtc091dHB1dEJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldFBhcmFtc091dHB1dEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRGaWx0ZXInXSA9IEthbHR1cmFBc3NldFBhcmFtc091dHB1dEZpbHRlcjsiXX0=