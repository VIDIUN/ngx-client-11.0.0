/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseEntryBaseFilter } from './KalturaBaseEntryBaseFilter';
/**
 * @record
 */
export function KalturaBaseEntryFilterArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.isRoot;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.categoriesFullNameIn;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.categoryAncestorIdIn;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.redirectFromEntryId;
var KalturaBaseEntryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseEntryFilter, _super);
    function KalturaBaseEntryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseEntryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseEntryFilter' },
            freeText: { type: 's' },
            isRoot: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            categoriesFullNameIn: { type: 's' },
            categoryAncestorIdIn: { type: 's' },
            redirectFromEntryId: { type: 's' }
        });
        return result;
    };
    return KalturaBaseEntryFilter;
}(KalturaBaseEntryBaseFilter));
export { KalturaBaseEntryFilter };
if (false) {
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.freeText;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.isRoot;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.categoriesFullNameIn;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.categoryAncestorIdIn;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.redirectFromEntryId;
}
typesMappingStorage['KalturaBaseEntryFilter'] = KalturaBaseEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhc2VFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVcxRyxJQUFBO0lBQTRDLGtEQUEwQjtJQVFsRSxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekcsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0ExQ0w7RUFjNEMsMEJBQTBCLEVBNkJyRSxDQUFBO0FBN0JELGtDQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5QmFzZUZpbHRlciwgS2FsdHVyYUJhc2VFbnRyeUJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhc2VFbnRyeUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUJhc2VGaWx0ZXJBcmdzIHtcbiAgICBmcmVlVGV4dD8gOiBzdHJpbmc7XG5cdGlzUm9vdD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjYXRlZ29yaWVzRnVsbE5hbWVJbj8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5QW5jZXN0b3JJZEluPyA6IHN0cmluZztcblx0cmVkaXJlY3RGcm9tRW50cnlJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCYXNlRW50cnlGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5QmFzZUZpbHRlciB7XG5cbiAgICBmcmVlVGV4dCA6IHN0cmluZztcblx0aXNSb290IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y2F0ZWdvcmllc0Z1bGxOYW1lSW4gOiBzdHJpbmc7XG5cdGNhdGVnb3J5QW5jZXN0b3JJZEluIDogc3RyaW5nO1xuXHRyZWRpcmVjdEZyb21FbnRyeUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdGZyZWVUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzUm9vdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0Y2F0ZWdvcmllc0Z1bGxOYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlBbmNlc3RvcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVkaXJlY3RGcm9tRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmFzZUVudHJ5RmlsdGVyJ10gPSBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyOyJdfQ==