/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaCaptionAssetItemFilter extends KalturaCaptionAssetFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J2RyxNQUFNLG9DQUFxQyxTQUFRLHlCQUF5Qjs7OztJQWlCeEUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNsRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0RmlsdGVyLCBLYWx0dXJhQ2FwdGlvbkFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDYXB0aW9uQXNzZXRGaWx0ZXJBcmdzIHtcbiAgICBjb250ZW50TGlrZT8gOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb25MaWtlPyA6IHN0cmluZztcblx0cGFydG5lckRlc2NyaXB0aW9uTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb25NdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRsYW5ndWFnZUVxdWFsPyA6IEthbHR1cmFMYW5ndWFnZTtcblx0bGFuZ3VhZ2VJbj8gOiBzdHJpbmc7XG5cdGxhYmVsRXF1YWw/IDogc3RyaW5nO1xuXHRsYWJlbEluPyA6IHN0cmluZztcblx0c3RhcnRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlciBleHRlbmRzIEthbHR1cmFDYXB0aW9uQXNzZXRGaWx0ZXIge1xuXG4gICAgY29udGVudExpa2UgOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VPciA6IHN0cmluZztcblx0Y29udGVudE11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0cGFydG5lckRlc2NyaXB0aW9uTGlrZSA6IHN0cmluZztcblx0cGFydG5lckRlc2NyaXB0aW9uTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBhcnRuZXJEZXNjcmlwdGlvbk11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0bGFuZ3VhZ2VFcXVhbCA6IEthbHR1cmFMYW5ndWFnZTtcblx0bGFuZ3VhZ2VJbiA6IHN0cmluZztcblx0bGFiZWxFcXVhbCA6IHN0cmluZztcblx0bGFiZWxJbiA6IHN0cmluZztcblx0c3RhcnRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJyB9LFxuXHRcdFx0XHRjb250ZW50TGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50TXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudE11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRGVzY3JpcHRpb25MaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJEZXNjcmlwdGlvbk11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJEZXNjcmlwdGlvbk11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYW5ndWFnZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfSxcblx0XHRcdFx0bGFuZ3VhZ2VJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYWJlbEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhYmVsSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXInXSA9IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyOyJdfQ==