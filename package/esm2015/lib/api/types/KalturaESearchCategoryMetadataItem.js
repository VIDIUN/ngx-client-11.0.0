/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaESearchCategoryMetadataItem extends KalturaESearchAbstractCategoryItem {
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
            objectType: { type: 'c', default: 'KalturaESearchCategoryMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchCategoryMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchCategoryMetadataItem'] = KalturaESearchCategoryMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEksTUFBTSx5Q0FBMEMsU0FBUSxrQ0FBa0M7Ozs7SUFNdEYsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbSwgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW1BcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0ge1xuXG4gICAgeHBhdGggOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRtZXRhZGF0YUZpZWxkSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU1ldGFkYXRhSXRlbScgfSxcblx0XHRcdFx0eHBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFGaWVsZElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlNZXRhZGF0YUl0ZW07Il19