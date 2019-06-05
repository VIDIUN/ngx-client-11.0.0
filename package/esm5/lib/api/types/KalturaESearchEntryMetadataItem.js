/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryAbstractNestedItem } from './KalturaESearchEntryAbstractNestedItem';
/**
 * @record
 */
export function KalturaESearchEntryMetadataItemArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryMetadataItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchEntryMetadataItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchEntryMetadataItemArgs.prototype.metadataFieldId;
var KalturaESearchEntryMetadataItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryMetadataItem, _super);
    function KalturaESearchEntryMetadataItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryMetadataItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchEntryMetadataItem;
}(KalturaESearchEntryAbstractNestedItem));
export { KalturaESearchEntryMetadataItem };
if (false) {
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchEntryMetadataItem'] = KalturaESearchEntryMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQTZDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7O0FBUzNJLElBQUE7SUFBcUQsMkRBQXFDO0lBTXRGLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQW5DTDtFQVdxRCxxQ0FBcUMsRUF5QnpGLENBQUE7QUF6QkQsMkNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0sIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEVudHJ5TWV0YWRhdGFJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtQXJncyB7XG4gICAgeHBhdGg/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhRmllbGRJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtIHtcblxuICAgIHhwYXRoIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEVudHJ5TWV0YWRhdGFJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW0nIH0sXG5cdFx0XHRcdHhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhRmllbGRJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEVudHJ5TWV0YWRhdGFJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaEVudHJ5TWV0YWRhdGFJdGVtOyJdfQ==