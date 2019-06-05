/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAsset } from './KalturaAsset';
/**
 * @record
 */
export function KalturaCaptionAssetArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.captionParamsId;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.language;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.label;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.format;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.accuracy;
var KalturaCaptionAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionAsset, _super);
    function KalturaCaptionAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionAsset' },
            captionParamsId: { type: 'n' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            languageCode: { type: 'es', readOnly: true, subTypeConstructor: KalturaLanguageCode, subType: 'KalturaLanguageCode' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            label: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCaptionAssetStatus, subType: 'KalturaCaptionAssetStatus' },
            parentId: { type: 's' },
            accuracy: { type: 'n' }
        });
        return result;
    };
    return KalturaCaptionAsset;
}(KalturaAsset));
export { KalturaCaptionAsset };
if (false) {
    /** @type {?} */
    KalturaCaptionAsset.prototype.captionParamsId;
    /** @type {?} */
    KalturaCaptionAsset.prototype.language;
    /** @type {?} */
    KalturaCaptionAsset.prototype.languageCode;
    /** @type {?} */
    KalturaCaptionAsset.prototype.isDefault;
    /** @type {?} */
    KalturaCaptionAsset.prototype.label;
    /** @type {?} */
    KalturaCaptionAsset.prototype.format;
    /** @type {?} */
    KalturaCaptionAsset.prototype.status;
    /** @type {?} */
    KalturaCaptionAsset.prototype.parentId;
    /** @type {?} */
    KalturaCaptionAsset.prototype.accuracy;
}
typesMappingStorage['KalturaCaptionAsset'] = KalturaCaptionAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhcHRpb25Bc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFoRSxJQUFBO0lBQXlDLCtDQUFZO0lBWWpELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDN0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUMxSCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM1RyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ2pHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDaEksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBeERMO0VBb0J5QyxZQUFZLEVBcUNwRCxDQUFBO0FBckNELCtCQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnLi9LYWx0dXJhTGFuZ3VhZ2VDb2RlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXQsIEthbHR1cmFBc3NldEFyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHRpb25Bc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0QXJncyB7XG4gICAgY2FwdGlvblBhcmFtc0lkPyA6IG51bWJlcjtcblx0bGFuZ3VhZ2U/IDogS2FsdHVyYUxhbmd1YWdlO1xuXHRpc0RlZmF1bHQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRmb3JtYXQ/IDogS2FsdHVyYUNhcHRpb25UeXBlO1xuXHRwYXJlbnRJZD8gOiBzdHJpbmc7XG5cdGFjY3VyYWN5PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhcHRpb25Bc3NldCBleHRlbmRzIEthbHR1cmFBc3NldCB7XG5cbiAgICBjYXB0aW9uUGFyYW1zSWQgOiBudW1iZXI7XG5cdGxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRyZWFkb25seSBsYW5ndWFnZUNvZGUgOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlO1xuXHRpc0RlZmF1bHQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRsYWJlbCA6IHN0cmluZztcblx0Zm9ybWF0IDogS2FsdHVyYUNhcHRpb25UeXBlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzO1xuXHRwYXJlbnRJZCA6IHN0cmluZztcblx0YWNjdXJhY3kgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXB0aW9uQXNzZXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25Bc3NldCcgfSxcblx0XHRcdFx0Y2FwdGlvblBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfSxcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZUNvZGUnIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0bGFiZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uVHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXMnIH0sXG5cdFx0XHRcdHBhcmVudElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjY3VyYWN5IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uQXNzZXQnXSA9IEthbHR1cmFDYXB0aW9uQXNzZXQ7Il19