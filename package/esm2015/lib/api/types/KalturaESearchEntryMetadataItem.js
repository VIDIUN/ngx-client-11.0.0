/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaESearchEntryMetadataItem extends KalturaESearchEntryAbstractNestedItem {
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
            objectType: { type: 'c', default: 'KalturaESearchEntryMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchEntryMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchEntryMetadataItem'] = KalturaESearchEntryMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBNkMsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFTM0ksTUFBTSxzQ0FBdUMsU0FBUSxxQ0FBcUM7Ozs7SUFNdEYsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbSwgS2FsdHVyYUVTZWFyY2hFbnRyeUFic3RyYWN0TmVzdGVkSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW1BcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlBYnN0cmFjdE5lc3RlZEl0ZW0ge1xuXG4gICAgeHBhdGggOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRtZXRhZGF0YUZpZWxkSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeU1ldGFkYXRhSXRlbScgfSxcblx0XHRcdFx0eHBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFGaWVsZElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoRW50cnlNZXRhZGF0YUl0ZW07Il19