/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryNestedBaseItem } from './KalturaESearchEntryNestedBaseItem';
/**
 * @record
 */
export function KalturaESearchEntryAbstractNestedItemArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryAbstractNestedItemArgs.prototype.searchTerm;
/** @type {?|undefined} */
KalturaESearchEntryAbstractNestedItemArgs.prototype.itemType;
/** @type {?|undefined} */
KalturaESearchEntryAbstractNestedItemArgs.prototype.range;
/** @type {?|undefined} */
KalturaESearchEntryAbstractNestedItemArgs.prototype.addHighlight;
export class KalturaESearchEntryAbstractNestedItem extends KalturaESearchEntryNestedBaseItem {
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
            objectType: { type: 'c', default: 'KalturaESearchEntryAbstractNestedItem' },
            searchTerm: { type: 's' },
            itemType: { type: 'en', subTypeConstructor: KalturaESearchItemType, subType: 'KalturaESearchItemType' },
            range: { type: 'o', subTypeConstructor: KalturaESearchRange, subType: 'KalturaESearchRange' },
            addHighlight: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchEntryAbstractNestedItem.prototype.searchTerm;
    /** @type {?} */
    KalturaESearchEntryAbstractNestedItem.prototype.itemType;
    /** @type {?} */
    KalturaESearchEntryAbstractNestedItem.prototype.range;
    /** @type {?} */
    KalturaESearchEntryAbstractNestedItem.prototype.addHighlight;
}
typesMappingStorage['KalturaESearchEntryAbstractNestedItem'] = KalturaESearchEntryAbstractNestedItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVUvSCxNQUFNLDRDQUE2QyxTQUFRLGlDQUFpQzs7OztJQU94RixZQUFZLElBQWlEO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ2pHLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hJdGVtVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hJdGVtVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFJhbmdlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFJhbmdlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbSwgS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEVudHJ5QWJzdHJhY3ROZXN0ZWRJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW1BcmdzIHtcbiAgICBzZWFyY2hUZXJtPyA6IHN0cmluZztcblx0aXRlbVR5cGU/IDogS2FsdHVyYUVTZWFyY2hJdGVtVHlwZTtcblx0cmFuZ2U/IDogS2FsdHVyYUVTZWFyY2hSYW5nZTtcblx0YWRkSGlnaGxpZ2h0PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW0ge1xuXG4gICAgc2VhcmNoVGVybSA6IHN0cmluZztcblx0aXRlbVR5cGUgOiBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlO1xuXHRyYW5nZSA6IEthbHR1cmFFU2VhcmNoUmFuZ2U7XG5cdGFkZEhpZ2hsaWdodCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbScgfSxcblx0XHRcdFx0c2VhcmNoVGVybSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoSXRlbVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hJdGVtVHlwZScgfSxcblx0XHRcdFx0cmFuZ2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoUmFuZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hSYW5nZScgfSxcblx0XHRcdFx0YWRkSGlnaGxpZ2h0IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW07Il19