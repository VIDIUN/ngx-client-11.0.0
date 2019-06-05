/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaLiveReportInputFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveReportInputFilter, _super);
    function KalturaLiveReportInputFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveReportInputFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveReportInputFilter' },
            entryIds: { type: 's' },
            fromTime: { type: 'd' },
            toTime: { type: 'd' },
            live: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            orderBy: { type: 'es', subTypeConstructor: KalturaLiveReportOrderBy, subType: 'KalturaLiveReportOrderBy' }
        });
        return result;
    };
    return KalturaLiveReportInputFilter;
}(KalturaObjectBase));
export { KalturaLiveReportInputFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQWtELHdEQUFpQjtJQVEvRCxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3ZHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBM0NMO0VBZWtELGlCQUFpQixFQTZCbEUsQ0FBQTtBQTdCRCx3Q0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVSZXBvcnRPcmRlckJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVJlcG9ydE9yZGVyQnknO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlUmVwb3J0SW5wdXRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZW50cnlJZHM/IDogc3RyaW5nO1xuXHRmcm9tVGltZT8gOiBEYXRlO1xuXHR0b1RpbWU/IDogRGF0ZTtcblx0bGl2ZT8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRvcmRlckJ5PyA6IEthbHR1cmFMaXZlUmVwb3J0T3JkZXJCeTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGVudHJ5SWRzIDogc3RyaW5nO1xuXHRmcm9tVGltZSA6IERhdGU7XG5cdHRvVGltZSA6IERhdGU7XG5cdGxpdmUgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRvcmRlckJ5IDogS2FsdHVyYUxpdmVSZXBvcnRPcmRlckJ5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdGVudHJ5SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyb21UaW1lIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRvVGltZSA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRsaXZlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRvcmRlckJ5IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVSZXBvcnRPcmRlckJ5LCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlUmVwb3J0T3JkZXJCeScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlciddID0gS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcjsiXX0=