/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCoordinate } from './KalturaCoordinate';
import { KalturaEntryLiveStats } from './KalturaEntryLiveStats';
/**
 * @record
 */
export function KalturaGeoTimeLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaGeoTimeLiveStatsArgs.prototype.city;
/** @type {?|undefined} */
KalturaGeoTimeLiveStatsArgs.prototype.country;
var KalturaGeoTimeLiveStats = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGeoTimeLiveStats, _super);
    function KalturaGeoTimeLiveStats(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGeoTimeLiveStats.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGeoTimeLiveStats' },
            city: { type: 'o', subTypeConstructor: KalturaCoordinate, subType: 'KalturaCoordinate' },
            country: { type: 'o', subTypeConstructor: KalturaCoordinate, subType: 'KalturaCoordinate' }
        });
        return result;
    };
    return KalturaGeoTimeLiveStats;
}(KalturaEntryLiveStats));
export { KalturaGeoTimeLiveStats };
if (false) {
    /** @type {?} */
    KalturaGeoTimeLiveStats.prototype.city;
    /** @type {?} */
    KalturaGeoTimeLiveStats.prototype.country;
}
typesMappingStorage['KalturaGeoTimeLiveStats'] = KalturaGeoTimeLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW9UaW1lTGl2ZVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLElBQUE7SUFBNkMsbURBQXFCO0lBSzlELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDNUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0FqQ0w7RUFXNkMscUJBQXFCLEVBdUJqRSxDQUFBO0FBdkJELG1DQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvb3JkaW5hdGUgfSBmcm9tICcuL0thbHR1cmFDb29yZGluYXRlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeUxpdmVTdGF0cywgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzQXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5TGl2ZVN0YXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VvVGltZUxpdmVTdGF0c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzQXJncyB7XG4gICAgY2l0eT8gOiBLYWx0dXJhQ29vcmRpbmF0ZTtcblx0Y291bnRyeT8gOiBLYWx0dXJhQ29vcmRpbmF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHMgZXh0ZW5kcyBLYWx0dXJhRW50cnlMaXZlU3RhdHMge1xuXG4gICAgY2l0eSA6IEthbHR1cmFDb29yZGluYXRlO1xuXHRjb3VudHJ5IDogS2FsdHVyYUNvb3JkaW5hdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFHZW9UaW1lTGl2ZVN0YXRzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW9UaW1lTGl2ZVN0YXRzJyB9LFxuXHRcdFx0XHRjaXR5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29vcmRpbmF0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29vcmRpbmF0ZScgfSxcblx0XHRcdFx0Y291bnRyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvb3JkaW5hdGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvb3JkaW5hdGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW9UaW1lTGl2ZVN0YXRzJ10gPSBLYWx0dXJhR2VvVGltZUxpdmVTdGF0czsiXX0=