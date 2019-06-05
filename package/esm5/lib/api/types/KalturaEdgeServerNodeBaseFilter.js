/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryServerNodeFilter } from './KalturaDeliveryServerNodeFilter';
/**
 * @record
 */
export function KalturaEdgeServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainLike;
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainMultiLikeOr;
/** @type {?|undefined} */
KalturaEdgeServerNodeBaseFilterArgs.prototype.playbackDomainMultiLikeAnd;
var KalturaEdgeServerNodeBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEdgeServerNodeBaseFilter, _super);
    function KalturaEdgeServerNodeBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEdgeServerNodeBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEdgeServerNodeBaseFilter' },
            playbackDomainLike: { type: 's' },
            playbackDomainMultiLikeOr: { type: 's' },
            playbackDomainMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaEdgeServerNodeBaseFilter;
}(KalturaDeliveryServerNodeFilter));
export { KalturaEdgeServerNodeBaseFilter };
if (false) {
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainLike;
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainMultiLikeOr;
    /** @type {?} */
    KalturaEdgeServerNodeBaseFilter.prototype.playbackDomainMultiLikeAnd;
}
typesMappingStorage['KalturaEdgeServerNodeBaseFilter'] = KalturaEdgeServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQXVDLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7O0FBU3pILElBQUE7SUFBcUQsMkRBQStCO0lBTWhGLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0FuQ0w7RUFXcUQsK0JBQStCLEVBeUJuRixDQUFBO0FBekJELDJDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlRmlsdGVyLCBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZUZpbHRlckFyZ3Mge1xuICAgIHBsYXliYWNrRG9tYWluTGlrZT8gOiBzdHJpbmc7XG5cdHBsYXliYWNrRG9tYWluTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRwbGF5YmFja0RvbWFpbk11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFZGdlU2VydmVyTm9kZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlRmlsdGVyIHtcblxuICAgIHBsYXliYWNrRG9tYWluTGlrZSA6IHN0cmluZztcblx0cGxheWJhY2tEb21haW5NdWx0aUxpa2VPciA6IHN0cmluZztcblx0cGxheWJhY2tEb21haW5NdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFZGdlU2VydmVyTm9kZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGxheWJhY2tEb21haW5MaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBsYXliYWNrRG9tYWluTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGxheWJhY2tEb21haW5NdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlciddID0gS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQmFzZUZpbHRlcjsiXX0=