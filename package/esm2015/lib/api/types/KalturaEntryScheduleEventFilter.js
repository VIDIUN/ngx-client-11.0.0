/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventBaseFilter } from './KalturaEntryScheduleEventBaseFilter';
/**
 * @record
 */
export function KalturaEntryScheduleEventFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsMultiLikeAnd;
export class KalturaEntryScheduleEventFilter extends KalturaEntryScheduleEventBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaEntryScheduleEventFilter' },
            parentCategoryIdsLike: { type: 's' },
            parentCategoryIdsMultiLikeOr: { type: 's' },
            parentCategoryIdsMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsMultiLikeAnd;
}
typesMappingStorage['KalturaEntryScheduleEventFilter'] = KalturaEntryScheduleEventFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBMkMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFTckksTUFBTSxzQ0FBdUMsU0FBUSxtQ0FBbUM7Ozs7SUFNcEYsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLCBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3Mge1xuICAgIHBhcmVudENhdGVnb3J5SWRzTGlrZT8gOiBzdHJpbmc7XG5cdHBhcmVudENhdGVnb3J5SWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciB7XG5cbiAgICBwYXJlbnRDYXRlZ29yeUlkc0xpa2UgOiBzdHJpbmc7XG5cdHBhcmVudENhdGVnb3J5SWRzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBhcmVudENhdGVnb3J5SWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcmVudENhdGVnb3J5SWRzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudENhdGVnb3J5SWRzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXInXSA9IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXI7Il19