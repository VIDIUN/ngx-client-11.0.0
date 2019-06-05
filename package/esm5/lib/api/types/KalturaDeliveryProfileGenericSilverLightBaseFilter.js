/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericSilverLightBaseFilterArgs() { }
var KalturaDeliveryProfileGenericSilverLightBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileGenericSilverLightBaseFilter, _super);
    function KalturaDeliveryProfileGenericSilverLightBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileGenericSilverLightBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericSilverLightBaseFilter' }
        });
        return result;
    };
    return KalturaDeliveryProfileGenericSilverLightBaseFilter;
}(KalturaDeliveryProfileFilter));
export { KalturaDeliveryProfileGenericSilverLightBaseFilter };
typesMappingStorage['KalturaDeliveryProfileGenericSilverLightBaseFilter'] = KalturaDeliveryProfileGenericSilverLightBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljU2lsdmVyTGlnaHRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBb0MsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFPaEgsSUFBQTtJQUF3RSw4RUFBNEI7SUFJaEcsNERBQVksSUFBOEQ7ZUFFdEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvREFBb0QsRUFBRTtTQUM5RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZEQTVCTDtFQVN3RSw0QkFBNEIsRUFvQm5HLENBQUE7QUFwQkQsOERBb0JDO0FBRUQsbUJBQW1CLENBQUMsb0RBQW9ELENBQUMsR0FBRyxrREFBa0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlRmlsdGVyLCBLYWx0dXJhRGVsaXZlcnlQcm9maWxlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1NpbHZlckxpZ2h0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1NpbHZlckxpZ2h0QmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNTaWx2ZXJMaWdodEJhc2VGaWx0ZXInXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljU2lsdmVyTGlnaHRCYXNlRmlsdGVyOyJdfQ==