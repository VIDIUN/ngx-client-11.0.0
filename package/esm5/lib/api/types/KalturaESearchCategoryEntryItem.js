/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryEntryFieldName } from './KalturaESearchCategoryEntryFieldName';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaESearchAbstractEntryItem } from './KalturaESearchAbstractEntryItem';
/**
 * @record
 */
export function KalturaESearchCategoryEntryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryEntryItemArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaESearchCategoryEntryItemArgs.prototype.categoryEntryStatus;
var KalturaESearchCategoryEntryItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryEntryItem, _super);
    function KalturaESearchCategoryEntryItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryEntryItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryEntryItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryEntryFieldName, subType: 'KalturaESearchCategoryEntryFieldName' },
            categoryEntryStatus: { type: 'en', subTypeConstructor: KalturaCategoryEntryStatus, subType: 'KalturaCategoryEntryStatus' }
        });
        return result;
    };
    return KalturaESearchCategoryEntryItem;
}(KalturaESearchAbstractEntryItem));
export { KalturaESearchCategoryEntryItem };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryEntryItem.prototype.fieldName;
    /** @type {?} */
    KalturaESearchCategoryEntryItem.prototype.categoryEntryStatus;
}
typesMappingStorage['KalturaESearchCategoryEntryItem'] = KalturaESearchCategoryEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQXVDLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7OztBQVF6SCxJQUFBO0lBQXFELDJEQUErQjtJQUtoRix5Q0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0NBQW9DLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3hJLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDckgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0FsQ0w7RUFZcUQsK0JBQStCLEVBdUJuRixDQUFBO0FBdkJELDJDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlGaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtQXJncyB7XG4gICAgZmllbGROYW1lPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUZpZWxkTmFtZTtcblx0Y2F0ZWdvcnlFbnRyeVN0YXR1cz8gOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5RmllbGROYW1lO1xuXHRjYXRlZ29yeUVudHJ5U3RhdHVzIDogS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5RmllbGROYW1lLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUZpZWxkTmFtZScgfSxcblx0XHRcdFx0Y2F0ZWdvcnlFbnRyeVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlJdGVtOyJdfQ==