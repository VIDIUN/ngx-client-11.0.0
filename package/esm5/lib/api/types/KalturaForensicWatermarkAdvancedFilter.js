/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaForensicWatermarkAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaForensicWatermarkAdvancedFilterArgs.prototype.watermarkId;
var KalturaForensicWatermarkAdvancedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaForensicWatermarkAdvancedFilter, _super);
    function KalturaForensicWatermarkAdvancedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaForensicWatermarkAdvancedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaForensicWatermarkAdvancedFilter' },
            watermarkId: { type: 'n' }
        });
        return result;
    };
    return KalturaForensicWatermarkAdvancedFilter;
}(KalturaSearchItem));
export { KalturaForensicWatermarkAdvancedFilter };
if (false) {
    /** @type {?} */
    KalturaForensicWatermarkAdvancedFilter.prototype.watermarkId;
}
typesMappingStorage['KalturaForensicWatermarkAdvancedFilter'] = KalturaForensicWatermarkAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxJQUFBO0lBQTRELGtFQUFpQjtJQUl6RSxnREFBWSxJQUFrRDtlQUUxRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREE3Qkw7RUFTNEQsaUJBQWlCLEVBcUI1RSxDQUFBO0FBckJELGtEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRm9yZW5zaWNXYXRlcm1hcmtBZHZhbmNlZEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICB3YXRlcm1hcmtJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW0ge1xuXG4gICAgd2F0ZXJtYXJrSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyJyB9LFxuXHRcdFx0XHR3YXRlcm1hcmtJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRm9yZW5zaWNXYXRlcm1hcmtBZHZhbmNlZEZpbHRlciddID0gS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXI7Il19