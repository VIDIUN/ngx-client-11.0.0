/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryAdvancedOrderBy } from './KalturaCategoryEntryAdvancedOrderBy';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaCategoryEntryAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoriesMatchOr;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoryEntryStatusIn;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.orderBy;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoryIdEqual;
export class KalturaCategoryEntryAdvancedFilter extends KalturaSearchItem {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryEntryAdvancedFilter' },
            categoriesMatchOr: { type: 's' },
            categoryEntryStatusIn: { type: 's' },
            orderBy: { type: 'es', subTypeConstructor: KalturaCategoryEntryAdvancedOrderBy, subType: 'KalturaCategoryEntryAdvancedOrderBy' },
            categoryIdEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoriesMatchOr;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoryEntryStatusIn;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.orderBy;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoryIdEqual;
}
typesMappingStorage['KalturaCategoryEntryAdvancedFilter'] = KalturaCategoryEntryAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVUvRSxNQUFNLHlDQUEwQyxTQUFRLGlCQUFpQjs7OztJQU9yRSxZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3BJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZE9yZGVyQnkgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRPcmRlckJ5JztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbUFyZ3Mge1xuICAgIGNhdGVnb3JpZXNNYXRjaE9yPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlFbnRyeVN0YXR1c0luPyA6IHN0cmluZztcblx0b3JkZXJCeT8gOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkT3JkZXJCeTtcblx0Y2F0ZWdvcnlJZEVxdWFsPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlciBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIGNhdGVnb3JpZXNNYXRjaE9yIDogc3RyaW5nO1xuXHRjYXRlZ29yeUVudHJ5U3RhdHVzSW4gOiBzdHJpbmc7XG5cdG9yZGVyQnkgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkT3JkZXJCeTtcblx0Y2F0ZWdvcnlJZEVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRGaWx0ZXInIH0sXG5cdFx0XHRcdGNhdGVnb3JpZXNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3J5RW50cnlTdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvcmRlckJ5IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZE9yZGVyQnksIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZE9yZGVyQnknIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkRmlsdGVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkRmlsdGVyOyJdfQ==