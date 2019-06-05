/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractCategoryItem } from './KalturaESearchAbstractCategoryItem';
/**
 * @record
 */
export function KalturaESearchCategoryMetadataItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryMetadataItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchCategoryMetadataItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchCategoryMetadataItemArgs.prototype.metadataFieldId;
var KalturaESearchCategoryMetadataItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryMetadataItem, _super);
    function KalturaESearchCategoryMetadataItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryMetadataItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchCategoryMetadataItem;
}(KalturaESearchAbstractCategoryItem));
export { KalturaESearchCategoryMetadataItem };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchCategoryMetadataItem'] = KalturaESearchCategoryMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7O0FBU2xJLElBQUE7SUFBd0QsOERBQWtDO0lBTXRGLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQW5DTDtFQVd3RCxrQ0FBa0MsRUF5QnpGLENBQUE7QUF6QkQsOENBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5TWV0YWRhdGFJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtQXJncyB7XG4gICAgeHBhdGg/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhRmllbGRJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtIHtcblxuICAgIHhwYXRoIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5TWV0YWRhdGFJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW0nIH0sXG5cdFx0XHRcdHhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhRmllbGRJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhdGVnb3J5TWV0YWRhdGFJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5TWV0YWRhdGFJdGVtOyJdfQ==