/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaCategoryUserAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberIdEq;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberIdIn;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberPermissionsMatchOr;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberPermissionsMatchAnd;
export class KalturaCategoryUserAdvancedFilter extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaCategoryUserAdvancedFilter' },
            memberIdEq: { type: 's' },
            memberIdIn: { type: 's' },
            memberPermissionsMatchOr: { type: 's' },
            memberPermissionsMatchAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberIdEq;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberIdIn;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberPermissionsMatchOr;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberPermissionsMatchAnd;
}
typesMappingStorage['KalturaCategoryUserAdvancedFilter'] = KalturaCategoryUserAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckFkdmFuY2VkRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVL0UsTUFBTSx3Q0FBeUMsU0FBUSxpQkFBaUI7Ozs7SUFPcEUsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEl0ZW0sIEthbHR1cmFTZWFyY2hJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeVVzZXJBZHZhbmNlZEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBtZW1iZXJJZEVxPyA6IHN0cmluZztcblx0bWVtYmVySWRJbj8gOiBzdHJpbmc7XG5cdG1lbWJlclBlcm1pc3Npb25zTWF0Y2hPcj8gOiBzdHJpbmc7XG5cdG1lbWJlclBlcm1pc3Npb25zTWF0Y2hBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICBtZW1iZXJJZEVxIDogc3RyaW5nO1xuXHRtZW1iZXJJZEluIDogc3RyaW5nO1xuXHRtZW1iZXJQZXJtaXNzaW9uc01hdGNoT3IgOiBzdHJpbmc7XG5cdG1lbWJlclBlcm1pc3Npb25zTWF0Y2hBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJBZHZhbmNlZEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXInIH0sXG5cdFx0XHRcdG1lbWJlcklkRXEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVtYmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZW1iZXJQZXJtaXNzaW9uc01hdGNoT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVtYmVyUGVybWlzc2lvbnNNYXRjaEFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeVVzZXJBZHZhbmNlZEZpbHRlcjsiXX0=