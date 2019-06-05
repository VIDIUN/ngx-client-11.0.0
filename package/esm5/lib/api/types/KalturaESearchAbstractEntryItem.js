/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryBaseItem } from './KalturaESearchEntryBaseItem';
/**
 * @record
 */
export function KalturaESearchAbstractEntryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchAbstractEntryItemArgs.prototype.searchTerm;
/** @type {?|undefined} */
KalturaESearchAbstractEntryItemArgs.prototype.itemType;
/** @type {?|undefined} */
KalturaESearchAbstractEntryItemArgs.prototype.range;
/** @type {?|undefined} */
KalturaESearchAbstractEntryItemArgs.prototype.addHighlight;
var KalturaESearchAbstractEntryItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchAbstractEntryItem, _super);
    function KalturaESearchAbstractEntryItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchAbstractEntryItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchAbstractEntryItem' },
            searchTerm: { type: 's' },
            itemType: { type: 'en', subTypeConstructor: KalturaESearchItemType, subType: 'KalturaESearchItemType' },
            range: { type: 'o', subTypeConstructor: KalturaESearchRange, subType: 'KalturaESearchRange' },
            addHighlight: { type: 'b' }
        });
        return result;
    };
    return KalturaESearchAbstractEntryItem;
}(KalturaESearchEntryBaseItem));
export { KalturaESearchAbstractEntryItem };
if (false) {
    /** @type {?} */
    KalturaESearchAbstractEntryItem.prototype.searchTerm;
    /** @type {?} */
    KalturaESearchAbstractEntryItem.prototype.itemType;
    /** @type {?} */
    KalturaESearchAbstractEntryItem.prototype.range;
    /** @type {?} */
    KalturaESearchAbstractEntryItem.prototype.addHighlight;
}
typesMappingStorage['KalturaESearchAbstractEntryItem'] = KalturaESearchAbstractEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVN0csSUFBQTtJQUFxRCwyREFBMkI7SUFPNUUseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ2pHLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0F4Q0w7RUFjcUQsMkJBQTJCLEVBMkIvRSxDQUFBO0FBM0JELDJDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoSXRlbVR5cGUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoSXRlbVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hSYW5nZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hSYW5nZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5QmFzZUl0ZW0sIEthbHR1cmFFU2VhcmNoRW50cnlCYXNlSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlCYXNlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUJhc2VJdGVtQXJncyB7XG4gICAgc2VhcmNoVGVybT8gOiBzdHJpbmc7XG5cdGl0ZW1UeXBlPyA6IEthbHR1cmFFU2VhcmNoSXRlbVR5cGU7XG5cdHJhbmdlPyA6IEthbHR1cmFFU2VhcmNoUmFuZ2U7XG5cdGFkZEhpZ2hsaWdodD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUJhc2VJdGVtIHtcblxuICAgIHNlYXJjaFRlcm0gOiBzdHJpbmc7XG5cdGl0ZW1UeXBlIDogS2FsdHVyYUVTZWFyY2hJdGVtVHlwZTtcblx0cmFuZ2UgOiBLYWx0dXJhRVNlYXJjaFJhbmdlO1xuXHRhZGRIaWdobGlnaHQgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0nIH0sXG5cdFx0XHRcdHNlYXJjaFRlcm0gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoSXRlbVR5cGUnIH0sXG5cdFx0XHRcdHJhbmdlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFJhbmdlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoUmFuZ2UnIH0sXG5cdFx0XHRcdGFkZEhpZ2hsaWdodCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaEFic3RyYWN0RW50cnlJdGVtOyJdfQ==