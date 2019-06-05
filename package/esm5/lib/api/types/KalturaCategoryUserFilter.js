/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserBaseFilter } from './KalturaCategoryUserBaseFilter';
/**
 * @record
 */
export function KalturaCategoryUserFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.categoryDirectMembers;
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaCategoryUserFilterArgs.prototype.relatedGroupsByUserId;
var KalturaCategoryUserFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryUserFilter, _super);
    function KalturaCategoryUserFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryUserFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryUserFilter' },
            categoryDirectMembers: { type: 'b' },
            freeText: { type: 's' },
            relatedGroupsByUserId: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryUserFilter;
}(KalturaCategoryUserBaseFilter));
export { KalturaCategoryUserFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.categoryDirectMembers;
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.freeText;
    /** @type {?} */
    KalturaCategoryUserFilter.prototype.relatedGroupsByUserId;
}
typesMappingStorage['KalturaCategoryUserFilter'] = KalturaCategoryUserFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQXFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7O0FBU25ILElBQUE7SUFBK0MscURBQTZCO0lBTXhFLG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBbkNMO0VBVytDLDZCQUE2QixFQXlCM0UsQ0FBQTtBQXpCRCxxQ0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXIsIEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeVVzZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyQXJncyB7XG4gICAgY2F0ZWdvcnlEaXJlY3RNZW1iZXJzPyA6IGJvb2xlYW47XG5cdGZyZWVUZXh0PyA6IHN0cmluZztcblx0cmVsYXRlZEdyb3Vwc0J5VXNlcklkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlciBleHRlbmRzIEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyIHtcblxuICAgIGNhdGVnb3J5RGlyZWN0TWVtYmVycyA6IGJvb2xlYW47XG5cdGZyZWVUZXh0IDogc3RyaW5nO1xuXHRyZWxhdGVkR3JvdXBzQnlVc2VySWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhdGVnb3J5VXNlckZpbHRlcicgfSxcblx0XHRcdFx0Y2F0ZWdvcnlEaXJlY3RNZW1iZXJzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGZyZWVUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRHcm91cHNCeVVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlVc2VyRmlsdGVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlVc2VyRmlsdGVyOyJdfQ==