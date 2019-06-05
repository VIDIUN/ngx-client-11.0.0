/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaDataEntryArgs() { }
/** @type {?|undefined} */
KalturaDataEntryArgs.prototype.dataContent;
/** @type {?|undefined} */
KalturaDataEntryArgs.prototype.retrieveDataContentByGet;
var KalturaDataEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDataEntry, _super);
    function KalturaDataEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDataEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDataEntry' },
            dataContent: { type: 's' },
            retrieveDataContentByGet: { type: 'b' }
        });
        return result;
    };
    return KalturaDataEntry;
}(KalturaBaseEntry));
export { KalturaDataEntry };
if (false) {
    /** @type {?} */
    KalturaDataEntry.prototype.dataContent;
    /** @type {?} */
    KalturaDataEntry.prototype.retrieveDataContentByGet;
}
typesMappingStorage['KalturaDataEntry'] = KalturaDataEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhdGFFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURhdGFFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztBQVE1RSxJQUFBO0lBQXNDLDRDQUFnQjtJQUtsRCwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkJBaENMO0VBVXNDLGdCQUFnQixFQXVCckQsQ0FBQTtBQXZCRCw0QkF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnksIEthbHR1cmFCYXNlRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGF0YUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5QXJncyB7XG4gICAgZGF0YUNvbnRlbnQ/IDogc3RyaW5nO1xuXHRyZXRyaWV2ZURhdGFDb250ZW50QnlHZXQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURhdGFFbnRyeSBleHRlbmRzIEthbHR1cmFCYXNlRW50cnkge1xuXG4gICAgZGF0YUNvbnRlbnQgOiBzdHJpbmc7XG5cdHJldHJpZXZlRGF0YUNvbnRlbnRCeUdldCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEYXRhRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURhdGFFbnRyeScgfSxcblx0XHRcdFx0ZGF0YUNvbnRlbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmV0cmlldmVEYXRhQ29udGVudEJ5R2V0IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEYXRhRW50cnknXSA9IEthbHR1cmFEYXRhRW50cnk7Il19