/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaDailymotionDistributionProviderArgs() { }
var KalturaDailymotionDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDailymotionDistributionProvider, _super);
    function KalturaDailymotionDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDailymotionDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionProvider' }
        });
        return result;
    };
    return KalturaDailymotionDistributionProvider;
}(KalturaDistributionProvider));
export { KalturaDailymotionDistributionProvider };
typesMappingStorage['KalturaDailymotionDistributionProvider'] = KalturaDailymotionDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFPN0csSUFBQTtJQUE0RCxrRUFBMkI7SUFJbkYsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtTQUNsRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQTVCTDtFQVM0RCwyQkFBMkIsRUFvQnRGLENBQUE7QUFwQkQsa0RBb0JDO0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIsIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm92aWRlciBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvdmlkZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb3ZpZGVyJ10gPSBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm92aWRlcjsiXX0=