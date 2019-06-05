/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetParamsDeletePolicy } from './KalturaAssetParamsDeletePolicy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConversionProfileAssetParamsArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.origin;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.forceNoneComplied;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.deletePolicy;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.isEncrypted;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.contentAwareness;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.chunkedEncodeMode;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.twoPass;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.tags;
var KalturaConversionProfileAssetParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConversionProfileAssetParams, _super);
    function KalturaConversionProfileAssetParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConversionProfileAssetParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConversionProfileAssetParams' },
            conversionProfileId: { type: 'n', readOnly: true },
            assetParamsId: { type: 'n', readOnly: true },
            readyBehavior: { type: 'en', subTypeConstructor: KalturaFlavorReadyBehaviorType, subType: 'KalturaFlavorReadyBehaviorType' },
            origin: { type: 'en', subTypeConstructor: KalturaAssetParamsOrigin, subType: 'KalturaAssetParamsOrigin' },
            systemName: { type: 's' },
            forceNoneComplied: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            deletePolicy: { type: 'en', subTypeConstructor: KalturaAssetParamsDeletePolicy, subType: 'KalturaAssetParamsDeletePolicy' },
            isEncrypted: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            contentAwareness: { type: 'n' },
            chunkedEncodeMode: { type: 'n' },
            twoPass: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            tags: { type: 's' }
        });
        return result;
    };
    return KalturaConversionProfileAssetParams;
}(KalturaObjectBase));
export { KalturaConversionProfileAssetParams };
if (false) {
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.conversionProfileId;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.assetParamsId;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.readyBehavior;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.origin;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.systemName;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.forceNoneComplied;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.deletePolicy;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.isEncrypted;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.contentAwareness;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.chunkedEncodeMode;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.twoPass;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.tags;
}
typesMappingStorage['KalturaConversionProfileAssetParams'] = KalturaConversionProfileAssetParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsSUFBQTtJQUF5RCwrREFBaUI7SUFldEUsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0MsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0csVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3BILFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQy9ILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDMUcsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBaEVMO0VBc0J5RCxpQkFBaUIsRUEyQ3pFLENBQUE7QUEzQ0QsK0NBMkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZSB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc09yaWdpbiB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zRGVsZXRlUG9saWN5IH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNEZWxldGVQb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHJlYWR5QmVoYXZpb3I/IDogS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlO1xuXHRvcmlnaW4/IDogS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0Zm9yY2VOb25lQ29tcGxpZWQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0ZGVsZXRlUG9saWN5PyA6IEthbHR1cmFBc3NldFBhcmFtc0RlbGV0ZVBvbGljeTtcblx0aXNFbmNyeXB0ZWQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y29udGVudEF3YXJlbmVzcz8gOiBudW1iZXI7XG5cdGNodW5rZWRFbmNvZGVNb2RlPyA6IG51bWJlcjtcblx0dHdvUGFzcz8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHR0YWdzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBhc3NldFBhcmFtc0lkIDogbnVtYmVyO1xuXHRyZWFkeUJlaGF2aW9yIDogS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlO1xuXHRvcmlnaW4gOiBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW47XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGZvcmNlTm9uZUNvbXBsaWVkIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0ZGVsZXRlUG9saWN5IDogS2FsdHVyYUFzc2V0UGFyYW1zRGVsZXRlUG9saWN5O1xuXHRpc0VuY3J5cHRlZCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGNvbnRlbnRBd2FyZW5lc3MgOiBudW1iZXI7XG5cdGNodW5rZWRFbmNvZGVNb2RlIDogbnVtYmVyO1xuXHR0d29QYXNzIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dGFncyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVhZHlCZWhhdmlvciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUnIH0sXG5cdFx0XHRcdG9yaWdpbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBc3NldFBhcmFtc09yaWdpbiwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4nIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9yY2VOb25lQ29tcGxpZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGRlbGV0ZVBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBc3NldFBhcmFtc0RlbGV0ZVBvbGljeSwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRQYXJhbXNEZWxldGVQb2xpY3knIH0sXG5cdFx0XHRcdGlzRW5jcnlwdGVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRjb250ZW50QXdhcmVuZXNzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNodW5rZWRFbmNvZGVNb2RlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHR3b1Bhc3MgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnXSA9IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zOyJdfQ==