/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaThumbCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionMultiLikeOr;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.descriptionMultiLikeAnd;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleLike;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleMultiLikeOr;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.titleMultiLikeAnd;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.subTypeEqual;
/** @type {?|undefined} */
KalturaThumbCuePointBaseFilterArgs.prototype.subTypeIn;
var KalturaThumbCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbCuePointBaseFilter, _super);
    function KalturaThumbCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbCuePointBaseFilter' },
            descriptionLike: { type: 's' },
            descriptionMultiLikeOr: { type: 's' },
            descriptionMultiLikeAnd: { type: 's' },
            titleLike: { type: 's' },
            titleMultiLikeOr: { type: 's' },
            titleMultiLikeAnd: { type: 's' },
            subTypeEqual: { type: 'en', subTypeConstructor: KalturaThumbCuePointSubType, subType: 'KalturaThumbCuePointSubType' },
            subTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaThumbCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaThumbCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionMultiLikeOr;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.descriptionMultiLikeAnd;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleLike;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleMultiLikeOr;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.titleMultiLikeAnd;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.subTypeEqual;
    /** @type {?} */
    KalturaThumbCuePointBaseFilter.prototype.subTypeIn;
}
typesMappingStorage['KalturaThumbCuePointBaseFilter'] = KalturaThumbCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjM0YsSUFBQTtJQUFvRCwwREFBcUI7SUFXckUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3pILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0FuREw7RUFpQm9ELHFCQUFxQixFQW1DeEUsQ0FBQTtBQW5DRCwwQ0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYkN1ZVBvaW50U3ViVHlwZSB9IGZyb20gJy4vS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludEZpbHRlciwgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJDdWVQb2ludEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIGRlc2NyaXB0aW9uTGlrZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHRpdGxlTGlrZT8gOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHN1YlR5cGVFcXVhbD8gOiBLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGU7XG5cdHN1YlR5cGVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUaHVtYkN1ZVBvaW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBkZXNjcmlwdGlvbkxpa2UgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHR0aXRsZUxpa2UgOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRzdWJUeXBlRXF1YWwgOiBLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGU7XG5cdHN1YlR5cGVJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRodW1iQ3VlUG9pbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUaHVtYkN1ZVBvaW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb25MaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb25NdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGl0bGVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGl0bGVNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3ViVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYkN1ZVBvaW50U3ViVHlwZScgfSxcblx0XHRcdFx0c3ViVHlwZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUaHVtYkN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYVRodW1iQ3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==