/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveReportOrderBy } from './KalturaLiveReportOrderBy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveReportInputFilterArgs() { }
/** @type {?|undefined} */
KalturaLiveReportInputFilterArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaLiveReportInputFilterArgs.prototype.fromTime;
/** @type {?|undefined} */
KalturaLiveReportInputFilterArgs.prototype.toTime;
/** @type {?|undefined} */
KalturaLiveReportInputFilterArgs.prototype.live;
/** @type {?|undefined} */
KalturaLiveReportInputFilterArgs.prototype.orderBy;
export class KalturaLiveReportInputFilter extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaLiveReportInputFilter' },
            entryIds: { type: 's' },
            fromTime: { type: 'd' },
            toTime: { type: 'd' },
            live: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            orderBy: { type: 'es', subTypeConstructor: KalturaLiveReportOrderBy, subType: 'KalturaLiveReportOrderBy' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveReportInputFilter.prototype.entryIds;
    /** @type {?} */
    KalturaLiveReportInputFilter.prototype.fromTime;
    /** @type {?} */
    KalturaLiveReportInputFilter.prototype.toTime;
    /** @type {?} */
    KalturaLiveReportInputFilter.prototype.live;
    /** @type {?} */
    KalturaLiveReportInputFilter.prototype.orderBy;
}
typesMappingStorage['KalturaLiveReportInputFilter'] = KalturaLiveReportInputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sbUNBQW9DLFNBQVEsaUJBQWlCOzs7O0lBUS9ELFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3ZHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydE9yZGVyQnkgfSBmcm9tICcuL0thbHR1cmFMaXZlUmVwb3J0T3JkZXJCeSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBlbnRyeUlkcz8gOiBzdHJpbmc7XG5cdGZyb21UaW1lPyA6IERhdGU7XG5cdHRvVGltZT8gOiBEYXRlO1xuXHRsaXZlPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdG9yZGVyQnk/IDogS2FsdHVyYUxpdmVSZXBvcnRPcmRlckJ5O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZW50cnlJZHMgOiBzdHJpbmc7XG5cdGZyb21UaW1lIDogRGF0ZTtcblx0dG9UaW1lIDogRGF0ZTtcblx0bGl2ZSA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdG9yZGVyQnkgOiBLYWx0dXJhTGl2ZVJlcG9ydE9yZGVyQnk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlUmVwb3J0SW5wdXRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0ZW50cnlJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnJvbVRpbWUgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dG9UaW1lIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGxpdmUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdG9yZGVyQnkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVJlcG9ydE9yZGVyQnksIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVSZXBvcnRPcmRlckJ5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyJ10gPSBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyOyJdfQ==