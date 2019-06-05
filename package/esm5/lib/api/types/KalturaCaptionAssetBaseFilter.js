/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaCaptionAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.captionParamsIdEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.captionParamsIdIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.formatIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusNotIn;
var KalturaCaptionAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionAssetBaseFilter, _super);
    function KalturaCaptionAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionAssetBaseFilter' },
            captionParamsIdEqual: { type: 'n' },
            captionParamsIdIn: { type: 's' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            formatIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCaptionAssetStatus, subType: 'KalturaCaptionAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaCaptionAssetBaseFilter;
}(KalturaAssetFilter));
export { KalturaCaptionAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.captionParamsIdEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.captionParamsIdIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.formatIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaCaptionAssetBaseFilter'] = KalturaCaptionAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixJQUFBO0lBQW1ELHlEQUFrQjtJQVVqRSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNwSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0FqREw7RUFpQm1ELGtCQUFrQixFQWlDcEUsQ0FBQTtBQWpDRCx5Q0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldEZpbHRlciwgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdGlvbkFzc2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB7XG4gICAgY2FwdGlvblBhcmFtc0lkRXF1YWw/IDogbnVtYmVyO1xuXHRjYXB0aW9uUGFyYW1zSWRJbj8gOiBzdHJpbmc7XG5cdGZvcm1hdEVxdWFsPyA6IEthbHR1cmFDYXB0aW9uVHlwZTtcblx0Zm9ybWF0SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRGaWx0ZXIge1xuXG4gICAgY2FwdGlvblBhcmFtc0lkRXF1YWwgOiBudW1iZXI7XG5cdGNhcHRpb25QYXJhbXNJZEluIDogc3RyaW5nO1xuXHRmb3JtYXRFcXVhbCA6IEthbHR1cmFDYXB0aW9uVHlwZTtcblx0Zm9ybWF0SW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2FwdGlvbkFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Y2FwdGlvblBhcmFtc0lkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2FwdGlvblBhcmFtc0lkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9ybWF0RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25UeXBlJyB9LFxuXHRcdFx0XHRmb3JtYXRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFDYXB0aW9uQXNzZXRCYXNlRmlsdGVyOyJdfQ==