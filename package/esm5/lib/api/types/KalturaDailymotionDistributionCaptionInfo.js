/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionDistributionCaptionAction } from './KalturaDailymotionDistributionCaptionAction';
import { KalturaDailymotionDistributionCaptionFormat } from './KalturaDailymotionDistributionCaptionFormat';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDailymotionDistributionCaptionInfoArgs() { }
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.action;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaDailymotionDistributionCaptionInfoArgs.prototype.format;
var KalturaDailymotionDistributionCaptionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDailymotionDistributionCaptionInfo, _super);
    function KalturaDailymotionDistributionCaptionInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDailymotionDistributionCaptionInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionCaptionInfo' },
            language: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            action: { type: 'en', subTypeConstructor: KalturaDailymotionDistributionCaptionAction, subType: 'KalturaDailymotionDistributionCaptionAction' },
            version: { type: 's' },
            assetId: { type: 's' },
            format: { type: 'en', subTypeConstructor: KalturaDailymotionDistributionCaptionFormat, subType: 'KalturaDailymotionDistributionCaptionFormat' }
        });
        return result;
    };
    return KalturaDailymotionDistributionCaptionInfo;
}(KalturaObjectBase));
export { KalturaDailymotionDistributionCaptionInfo };
if (false) {
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.language;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.filePath;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.action;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.version;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.assetId;
    /** @type {?} */
    KalturaDailymotionDistributionCaptionInfo.prototype.format;
}
typesMappingStorage['KalturaDailymotionDistributionCaptionInfo'] = KalturaDailymotionDistributionCaptionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVHLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixJQUFBO0lBQStELHFFQUFpQjtJQVU1RSxtREFBWSxJQUFxRDtlQUU3RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQzlGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkNBQTJDLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ25KLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJDQUEyQyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtTQUMxSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQWpETDtFQWlCK0QsaUJBQWlCLEVBaUMvRSxDQUFBO0FBakNELHFEQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxHQUFHLHlDQUF5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24gfSBmcm9tICcuL0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkZvcm1hdCB9IGZyb20gJy4vS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkZvcm1hdCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm9BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRmaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHJlbW90ZUlkPyA6IHN0cmluZztcblx0YWN0aW9uPyA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb247XG5cdHZlcnNpb24/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcblx0Zm9ybWF0PyA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGZpbGVQYXRoIDogc3RyaW5nO1xuXHRyZW1vdGVJZCA6IHN0cmluZztcblx0YWN0aW9uIDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbjtcblx0dmVyc2lvbiA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblx0Zm9ybWF0IDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkZvcm1hdDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbicgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZvcm1hdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25Gb3JtYXQsIHN1YlR5cGUgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkZvcm1hdCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8nXSA9IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvOyJdfQ==