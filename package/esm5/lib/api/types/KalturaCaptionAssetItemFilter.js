/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaCaptionAssetFilter } from './KalturaCaptionAssetFilter';
/**
 * @record
 */
export function KalturaCaptionAssetItemFilterArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.contentLike;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.contentMultiLikeOr;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.contentMultiLikeAnd;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.partnerDescriptionLike;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.partnerDescriptionMultiLikeOr;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.partnerDescriptionMultiLikeAnd;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.languageEqual;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.languageIn;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.labelEqual;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.labelIn;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.startTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.startTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCaptionAssetItemFilterArgs.prototype.endTimeLessThanOrEqual;
var KalturaCaptionAssetItemFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionAssetItemFilter, _super);
    function KalturaCaptionAssetItemFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionAssetItemFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionAssetItemFilter' },
            contentLike: { type: 's' },
            contentMultiLikeOr: { type: 's' },
            contentMultiLikeAnd: { type: 's' },
            partnerDescriptionLike: { type: 's' },
            partnerDescriptionMultiLikeOr: { type: 's' },
            partnerDescriptionMultiLikeAnd: { type: 's' },
            languageEqual: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            languageIn: { type: 's' },
            labelEqual: { type: 's' },
            labelIn: { type: 's' },
            startTimeGreaterThanOrEqual: { type: 'n' },
            startTimeLessThanOrEqual: { type: 'n' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaCaptionAssetItemFilter;
}(KalturaCaptionAssetFilter));
export { KalturaCaptionAssetItemFilter };
if (false) {
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.contentLike;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.contentMultiLikeOr;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.contentMultiLikeAnd;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.partnerDescriptionLike;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.partnerDescriptionMultiLikeOr;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.partnerDescriptionMultiLikeAnd;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.languageEqual;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.languageIn;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.labelEqual;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.labelIn;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.startTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.startTimeLessThanOrEqual;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaCaptionAssetItemFilter.prototype.endTimeLessThanOrEqual;
}
typesMappingStorage['KalturaCaptionAssetItemFilter'] = KalturaCaptionAssetItemFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdkcsSUFBQTtJQUFtRCx5REFBeUI7SUFpQnhFLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNsRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0FyRUw7RUF1Qm1ELHlCQUF5QixFQStDM0UsQ0FBQTtBQS9DRCx5Q0ErQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXRGaWx0ZXIsIEthbHR1cmFDYXB0aW9uQXNzZXRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNhcHRpb25Bc3NldEZpbHRlckFyZ3Mge1xuICAgIGNvbnRlbnRMaWtlPyA6IHN0cmluZztcblx0Y29udGVudE11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0Y29udGVudE11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHBhcnRuZXJEZXNjcmlwdGlvbkxpa2U/IDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb25NdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJEZXNjcmlwdGlvbk11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGxhbmd1YWdlRXF1YWw/IDogS2FsdHVyYUxhbmd1YWdlO1xuXHRsYW5ndWFnZUluPyA6IHN0cmluZztcblx0bGFiZWxFcXVhbD8gOiBzdHJpbmc7XG5cdGxhYmVsSW4/IDogc3RyaW5nO1xuXHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUNhcHRpb25Bc3NldEZpbHRlciB7XG5cbiAgICBjb250ZW50TGlrZSA6IHN0cmluZztcblx0Y29udGVudE11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRjb250ZW50TXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb25MaWtlIDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb25NdWx0aUxpa2VPciA6IHN0cmluZztcblx0cGFydG5lckRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRsYW5ndWFnZUVxdWFsIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRsYW5ndWFnZUluIDogc3RyaW5nO1xuXHRsYWJlbEVxdWFsIDogc3RyaW5nO1xuXHRsYWJlbEluIDogc3RyaW5nO1xuXHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXInIH0sXG5cdFx0XHRcdGNvbnRlbnRMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50TXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJEZXNjcmlwdGlvbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lckRlc2NyaXB0aW9uTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lckRlc2NyaXB0aW9uTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhbmd1YWdlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRsYW5ndWFnZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhYmVsRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFiZWxJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlciddID0gS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI7Il19