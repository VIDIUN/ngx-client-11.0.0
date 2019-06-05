/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultCategoryEntryArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryEntryArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryEntryArgs.prototype.entryId;
var KalturaBulkUploadResultCategoryEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultCategoryEntry, _super);
    function KalturaBulkUploadResultCategoryEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultCategoryEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultCategoryEntry' },
            categoryId: { type: 'n' },
            entryId: { type: 's' }
        });
        return result;
    };
    return KalturaBulkUploadResultCategoryEntry;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultCategoryEntry };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultCategoryEntry.prototype.categoryId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryEntry.prototype.entryId;
}
typesMappingStorage['KalturaBulkUploadResultCategoryEntry'] = KalturaBulkUploadResultCategoryEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeUVudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5RW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7QUFRakcsSUFBQTtJQUEwRCxnRUFBdUI7SUFLN0UsOENBQVksSUFBZ0Q7ZUFFeEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQWhDTDtFQVUwRCx1QkFBdUIsRUF1QmhGLENBQUE7QUF2QkQsZ0RBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3Mge1xuICAgIGNhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeUVudHJ5IGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQge1xuXG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlFbnRyeScgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlFbnRyeSddID0gS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeUVudHJ5OyJdfQ==