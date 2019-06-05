/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaEntryCuePointSearchFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointsFreeText;
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointTypeIn;
/** @type {?|undefined} */
KalturaEntryCuePointSearchFilterArgs.prototype.cuePointSubTypeEqual;
var KalturaEntryCuePointSearchFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryCuePointSearchFilter, _super);
    function KalturaEntryCuePointSearchFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryCuePointSearchFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryCuePointSearchFilter' },
            cuePointsFreeText: { type: 's' },
            cuePointTypeIn: { type: 's' },
            cuePointSubTypeEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaEntryCuePointSearchFilter;
}(KalturaSearchItem));
export { KalturaEntryCuePointSearchFilter };
if (false) {
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointsFreeText;
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointTypeIn;
    /** @type {?} */
    KalturaEntryCuePointSearchFilter.prototype.cuePointSubTypeEqual;
}
typesMappingStorage['KalturaEntryCuePointSearchFilter'] = KalturaEntryCuePointSearchFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUN1ZVBvaW50U2VhcmNoRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTL0UsSUFBQTtJQUFzRCw0REFBaUI7SUFNbkUsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0FuQ0w7RUFXc0QsaUJBQWlCLEVBeUJ0RSxDQUFBO0FBekJELDRDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoSXRlbSwgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgY3VlUG9pbnRzRnJlZVRleHQ/IDogc3RyaW5nO1xuXHRjdWVQb2ludFR5cGVJbj8gOiBzdHJpbmc7XG5cdGN1ZVBvaW50U3ViVHlwZUVxdWFsPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICBjdWVQb2ludHNGcmVlVGV4dCA6IHN0cmluZztcblx0Y3VlUG9pbnRUeXBlSW4gOiBzdHJpbmc7XG5cdGN1ZVBvaW50U3ViVHlwZUVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlDdWVQb2ludFNlYXJjaEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlDdWVQb2ludFNlYXJjaEZpbHRlcicgfSxcblx0XHRcdFx0Y3VlUG9pbnRzRnJlZVRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VlUG9pbnRUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VlUG9pbnRTdWJUeXBlRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5Q3VlUG9pbnRTZWFyY2hGaWx0ZXInXSA9IEthbHR1cmFFbnRyeUN1ZVBvaW50U2VhcmNoRmlsdGVyOyJdfQ==