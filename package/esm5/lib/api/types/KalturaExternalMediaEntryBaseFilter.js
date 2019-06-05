/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
/**
 * @record
 */
export function KalturaExternalMediaEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.externalSourceTypeEqual;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.externalSourceTypeIn;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.assetParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.assetParamsIdsMatchAnd;
var KalturaExternalMediaEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExternalMediaEntryBaseFilter, _super);
    function KalturaExternalMediaEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExternalMediaEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExternalMediaEntryBaseFilter' },
            externalSourceTypeEqual: { type: 'es', subTypeConstructor: KalturaExternalMediaSourceType, subType: 'KalturaExternalMediaSourceType' },
            externalSourceTypeIn: { type: 's' },
            assetParamsIdsMatchOr: { type: 's' },
            assetParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    };
    return KalturaExternalMediaEntryBaseFilter;
}(KalturaMediaEntryFilter));
export { KalturaExternalMediaEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.externalSourceTypeEqual;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.externalSourceTypeIn;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.assetParamsIdsMatchOr;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.assetParamsIdsMatchAnd;
}
typesMappingStorage['KalturaExternalMediaEntryBaseFilter'] = KalturaExternalMediaEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVqRyxJQUFBO0lBQXlELCtEQUF1QjtJQU81RSw2Q0FBWSxJQUErQztlQUV2RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDMUksb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4Q0F2Q0w7RUFheUQsdUJBQXVCLEVBMkIvRSxDQUFBO0FBM0JELCtDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyLCBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJBcmdzIHtcbiAgICBleHRlcm5hbFNvdXJjZVR5cGVFcXVhbD8gOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGU7XG5cdGV4dGVybmFsU291cmNlVHlwZUluPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaE9yPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaEFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXIge1xuXG4gICAgZXh0ZXJuYWxTb3VyY2VUeXBlRXF1YWwgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGU7XG5cdGV4dGVybmFsU291cmNlVHlwZUluIDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoT3IgOiBzdHJpbmc7XG5cdGFzc2V0UGFyYW1zSWRzTWF0Y2hBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRleHRlcm5hbFNvdXJjZVR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGUnIH0sXG5cdFx0XHRcdGV4dGVybmFsU291cmNlVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkc01hdGNoQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5QmFzZUZpbHRlcjsiXX0=