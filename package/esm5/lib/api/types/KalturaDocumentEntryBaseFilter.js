/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
/**
 * @record
 */
export function KalturaDocumentEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.documentTypeEqual;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.documentTypeIn;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.assetParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.assetParamsIdsMatchAnd;
var KalturaDocumentEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDocumentEntryBaseFilter, _super);
    function KalturaDocumentEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDocumentEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDocumentEntryBaseFilter' },
            documentTypeEqual: { type: 'en', subTypeConstructor: KalturaDocumentType, subType: 'KalturaDocumentType' },
            documentTypeIn: { type: 's' },
            assetParamsIdsMatchOr: { type: 's' },
            assetParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    };
    return KalturaDocumentEntryBaseFilter;
}(KalturaBaseEntryFilter));
export { KalturaDocumentEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.documentTypeEqual;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.documentTypeIn;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.assetParamsIdsMatchOr;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.assetParamsIdsMatchAnd;
}
typesMappingStorage['KalturaDocumentEntryBaseFilter'] = KalturaDocumentEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTlGLElBQUE7SUFBb0QsMERBQXNCO0lBT3RFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUM5RyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0F2Q0w7RUFhb0Qsc0JBQXNCLEVBMkJ6RSxDQUFBO0FBM0JELDBDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEb2N1bWVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFEb2N1bWVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeUZpbHRlciwgS2FsdHVyYUJhc2VFbnRyeUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEb2N1bWVudEVudHJ5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUZpbHRlckFyZ3Mge1xuICAgIGRvY3VtZW50VHlwZUVxdWFsPyA6IEthbHR1cmFEb2N1bWVudFR5cGU7XG5cdGRvY3VtZW50VHlwZUluPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaE9yPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaEFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEb2N1bWVudEVudHJ5QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlGaWx0ZXIge1xuXG4gICAgZG9jdW1lbnRUeXBlRXF1YWwgOiBLYWx0dXJhRG9jdW1lbnRUeXBlO1xuXHRkb2N1bWVudFR5cGVJbiA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaE9yIDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRkb2N1bWVudFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURvY3VtZW50VHlwZScgfSxcblx0XHRcdFx0ZG9jdW1lbnRUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZHNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRzTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXI7Il19