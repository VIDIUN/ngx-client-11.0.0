/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseEntryBaseFilter } from './KalturaBaseEntryBaseFilter';
/**
 * @record
 */
export function KalturaBaseEntryFilterArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.isRoot;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.categoriesFullNameIn;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.categoryAncestorIdIn;
/** @type {?|undefined} */
KalturaBaseEntryFilterArgs.prototype.redirectFromEntryId;
export class KalturaBaseEntryFilter extends KalturaBaseEntryBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaBaseEntryFilter' },
            freeText: { type: 's' },
            isRoot: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            categoriesFullNameIn: { type: 's' },
            categoryAncestorIdIn: { type: 's' },
            redirectFromEntryId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.freeText;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.isRoot;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.categoriesFullNameIn;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.categoryAncestorIdIn;
    /** @type {?} */
    KalturaBaseEntryFilter.prototype.redirectFromEntryId;
}
typesMappingStorage['KalturaBaseEntryFilter'] = KalturaBaseEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhc2VFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzFHLE1BQU0sNkJBQThCLFNBQVEsMEJBQTBCOzs7O0lBUWxFLFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekcsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlCYXNlRmlsdGVyLCBLYWx0dXJhQmFzZUVudHJ5QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5QmFzZUZpbHRlckFyZ3Mge1xuICAgIGZyZWVUZXh0PyA6IHN0cmluZztcblx0aXNSb290PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGNhdGVnb3JpZXNGdWxsTmFtZUluPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlBbmNlc3RvcklkSW4/IDogc3RyaW5nO1xuXHRyZWRpcmVjdEZyb21FbnRyeUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhc2VFbnRyeUZpbHRlciBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlCYXNlRmlsdGVyIHtcblxuICAgIGZyZWVUZXh0IDogc3RyaW5nO1xuXHRpc1Jvb3QgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjYXRlZ29yaWVzRnVsbE5hbWVJbiA6IHN0cmluZztcblx0Y2F0ZWdvcnlBbmNlc3RvcklkSW4gOiBzdHJpbmc7XG5cdHJlZGlyZWN0RnJvbUVudHJ5SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhc2VFbnRyeUZpbHRlcicgfSxcblx0XHRcdFx0ZnJlZVRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNSb290IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRjYXRlZ29yaWVzRnVsbE5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUFuY2VzdG9ySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWRpcmVjdEZyb21FbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInXSA9IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7Il19