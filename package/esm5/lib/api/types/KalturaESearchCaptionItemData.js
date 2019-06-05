/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
/**
 * @record
 */
export function KalturaESearchCaptionItemDataArgs() { }
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.line;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.startsAt;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.endsAt;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.language;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.captionAssetId;
/** @type {?|undefined} */
KalturaESearchCaptionItemDataArgs.prototype.label;
var KalturaESearchCaptionItemData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCaptionItemData, _super);
    function KalturaESearchCaptionItemData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCaptionItemData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCaptionItemData' },
            line: { type: 's' },
            startsAt: { type: 'n' },
            endsAt: { type: 'n' },
            language: { type: 's' },
            captionAssetId: { type: 's' },
            label: { type: 's' }
        });
        return result;
    };
    return KalturaESearchCaptionItemData;
}(KalturaESearchItemData));
export { KalturaESearchCaptionItemData };
if (false) {
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.line;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.startsAt;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.endsAt;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.language;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.captionAssetId;
    /** @type {?} */
    KalturaESearchCaptionItemData.prototype.label;
}
typesMappingStorage['KalturaESearchCaptionItemData'] = KalturaESearchCaptionItemData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUYsSUFBQTtJQUFtRCx5REFBc0I7SUFTckUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBNUNMO0VBY21ELHNCQUFzQixFQStCeEUsQ0FBQTtBQS9CRCx5Q0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSwgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoSXRlbURhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB7XG4gICAgbGluZT8gOiBzdHJpbmc7XG5cdHN0YXJ0c0F0PyA6IG51bWJlcjtcblx0ZW5kc0F0PyA6IG51bWJlcjtcblx0bGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGxhYmVsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGEgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhIHtcblxuICAgIGxpbmUgOiBzdHJpbmc7XG5cdHN0YXJ0c0F0IDogbnVtYmVyO1xuXHRlbmRzQXQgOiBudW1iZXI7XG5cdGxhbmd1YWdlIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRJZCA6IHN0cmluZztcblx0bGFiZWwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQ2FwdGlvbkl0ZW1EYXRhJyB9LFxuXHRcdFx0XHRsaW5lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0c0F0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZHNBdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhcHRpb25JdGVtRGF0YSddID0gS2FsdHVyYUVTZWFyY2hDYXB0aW9uSXRlbURhdGE7Il19