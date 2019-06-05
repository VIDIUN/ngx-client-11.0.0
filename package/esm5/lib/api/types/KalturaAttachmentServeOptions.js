/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetServeOptions } from './KalturaAssetServeOptions';
/**
 * @record
 */
export function KalturaAttachmentServeOptionsArgs() { }
var KalturaAttachmentServeOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttachmentServeOptions, _super);
    function KalturaAttachmentServeOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAttachmentServeOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttachmentServeOptions' }
        });
        return result;
    };
    return KalturaAttachmentServeOptions;
}(KalturaAssetServeOptions));
export { KalturaAttachmentServeOptions };
typesMappingStorage['KalturaAttachmentServeOptions'] = KalturaAttachmentServeOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFPcEcsSUFBQTtJQUFtRCx5REFBd0I7SUFJdkUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTVCTDtFQVNtRCx3QkFBd0IsRUFvQjFFLENBQUE7QUFwQkQseUNBb0JDO0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRTZXJ2ZU9wdGlvbnMsIEthbHR1cmFBc3NldFNlcnZlT3B0aW9uc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldFNlcnZlT3B0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFNlcnZlT3B0aW9uc0FyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9ucyBleHRlbmRzIEthbHR1cmFBc3NldFNlcnZlT3B0aW9ucyB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zJ10gPSBLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9uczsiXX0=