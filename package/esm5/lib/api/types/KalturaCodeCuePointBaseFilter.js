/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaCodeCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeLike;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeMultiLikeOr;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeMultiLikeAnd;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeIn;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionMultiLikeOr;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionMultiLikeAnd;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.endTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.durationLessThanOrEqual;
var KalturaCodeCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCodeCuePointBaseFilter, _super);
    function KalturaCodeCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCodeCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCodeCuePointBaseFilter' },
            codeLike: { type: 's' },
            codeMultiLikeOr: { type: 's' },
            codeMultiLikeAnd: { type: 's' },
            codeEqual: { type: 's' },
            codeIn: { type: 's' },
            descriptionLike: { type: 's' },
            descriptionMultiLikeOr: { type: 's' },
            descriptionMultiLikeAnd: { type: 's' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaCodeCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaCodeCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeLike;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeMultiLikeOr;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeMultiLikeAnd;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeIn;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionMultiLikeOr;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionMultiLikeAnd;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.endTimeLessThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.durationLessThanOrEqual;
}
typesMappingStorage['KalturaCodeCuePointBaseFilter'] = KalturaCodeCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvZGVDdWVQb2ludEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjNGLElBQUE7SUFBbUQseURBQXFCO0lBZXBFLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTlETDtFQW9CbUQscUJBQXFCLEVBMkN2RSxDQUFBO0FBM0NELHlDQTJDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIsIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvZGVDdWVQb2ludEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIGNvZGVMaWtlPyA6IHN0cmluZztcblx0Y29kZU11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0Y29kZU11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNvZGVFcXVhbD8gOiBzdHJpbmc7XG5cdGNvZGVJbj8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTGlrZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRkdXJhdGlvbkxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyIHtcblxuICAgIGNvZGVMaWtlIDogc3RyaW5nO1xuXHRjb2RlTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGNvZGVNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNvZGVFcXVhbCA6IHN0cmluZztcblx0Y29kZUluIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkxpa2UgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRjb2RlTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb2RlTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29kZU11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb2RlRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29kZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29kZUN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYUNvZGVDdWVQb2ludEJhc2VGaWx0ZXI7Il19