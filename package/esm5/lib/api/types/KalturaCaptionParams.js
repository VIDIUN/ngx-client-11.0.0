/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaCaptionParamsArgs() { }
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.language;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.label;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.format;
/** @type {?|undefined} */
KalturaCaptionParamsArgs.prototype.sourceParamsId;
var KalturaCaptionParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionParams, _super);
    function KalturaCaptionParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionParams' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            label: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            sourceParamsId: { type: 'n' }
        });
        return result;
    };
    return KalturaCaptionParams;
}(KalturaAssetParams));
export { KalturaCaptionParams };
if (false) {
    /** @type {?} */
    KalturaCaptionParams.prototype.language;
    /** @type {?} */
    KalturaCaptionParams.prototype.isDefault;
    /** @type {?} */
    KalturaCaptionParams.prototype.label;
    /** @type {?} */
    KalturaCaptionParams.prototype.format;
    /** @type {?} */
    KalturaCaptionParams.prototype.sourceParamsId;
}
typesMappingStorage['KalturaCaptionParams'] = KalturaCaptionParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQTBDLGdEQUFrQjtJQVF4RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM3RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM1RyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ2pHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE1Q0w7RUFnQjBDLGtCQUFrQixFQTZCM0QsQ0FBQTtBQTdCRCxnQ0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zLCBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXB0aW9uUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIHtcbiAgICBsYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdGlzRGVmYXVsdD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRsYWJlbD8gOiBzdHJpbmc7XG5cdGZvcm1hdD8gOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdHNvdXJjZVBhcmFtc0lkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhcHRpb25QYXJhbXMgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXMge1xuXG4gICAgbGFuZ3VhZ2UgOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdGlzRGVmYXVsdCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRmb3JtYXQgOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdHNvdXJjZVBhcmFtc0lkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2FwdGlvblBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdGlvblBhcmFtcycgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRpc0RlZmF1bHQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGxhYmVsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZvcm1hdCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvblR5cGUnIH0sXG5cdFx0XHRcdHNvdXJjZVBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uUGFyYW1zJ10gPSBLYWx0dXJhQ2FwdGlvblBhcmFtczsiXX0=