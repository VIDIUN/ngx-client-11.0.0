/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter } from './KalturaFlavorParamsOutputFilter';
/**
 * @record
 */
export function KalturaPdfFlavorParamsOutputBaseFilterArgs() { }
var KalturaPdfFlavorParamsOutputBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPdfFlavorParamsOutputBaseFilter, _super);
    function KalturaPdfFlavorParamsOutputBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPdfFlavorParamsOutputBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPdfFlavorParamsOutputBaseFilter' }
        });
        return result;
    };
    return KalturaPdfFlavorParamsOutputBaseFilter;
}(KalturaFlavorParamsOutputFilter));
export { KalturaPdfFlavorParamsOutputBaseFilter };
typesMappingStorage['KalturaPdfFlavorParamsOutputBaseFilter'] = KalturaPdfFlavorParamsOutputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBkZkZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQZGZGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBdUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFPekgsSUFBQTtJQUE0RCxrRUFBK0I7SUFJdkYsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtTQUNsRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQTVCTDtFQVM0RCwrQkFBK0IsRUFvQjFGLENBQUE7QUFwQkQsa0RBb0JDO0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0RmlsdGVyLCBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBkZkZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBkZkZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0RmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGRmRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGRmRmxhdm9yUGFyYW1zT3V0cHV0QmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBkZkZsYXZvclBhcmFtc091dHB1dEJhc2VGaWx0ZXInXSA9IEthbHR1cmFQZGZGbGF2b3JQYXJhbXNPdXRwdXRCYXNlRmlsdGVyOyJdfQ==