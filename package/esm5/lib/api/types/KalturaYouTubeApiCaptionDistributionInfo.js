/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeApiDistributionCaptionAction } from './KalturaYouTubeApiDistributionCaptionAction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaYouTubeApiCaptionDistributionInfoArgs() { }
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.label;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.action;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.assetId;
var KalturaYouTubeApiCaptionDistributionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYouTubeApiCaptionDistributionInfo, _super);
    function KalturaYouTubeApiCaptionDistributionInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYouTubeApiCaptionDistributionInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYouTubeApiCaptionDistributionInfo' },
            language: { type: 's' },
            label: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            action: { type: 'en', subTypeConstructor: KalturaYouTubeApiDistributionCaptionAction, subType: 'KalturaYouTubeApiDistributionCaptionAction' },
            version: { type: 's' },
            assetId: { type: 's' }
        });
        return result;
    };
    return KalturaYouTubeApiCaptionDistributionInfo;
}(KalturaObjectBase));
export { KalturaYouTubeApiCaptionDistributionInfo };
if (false) {
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.language;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.label;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.filePath;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.action;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.version;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.assetId;
}
typesMappingStorage['KalturaYouTubeApiCaptionDistributionInfo'] = KalturaYouTubeApiCaptionDistributionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsSUFBQTtJQUE4RCxvRUFBaUI7SUFVM0Usa0RBQVksSUFBb0Q7ZUFFNUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMENBQTBDLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1lBQ2pKLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bURBaERMO0VBZ0I4RCxpQkFBaUIsRUFpQzlFLENBQUE7QUFqQ0Qsb0RBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdVR1YmVBcGlEaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhWW91VHViZUFwaURpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFZb3VUdWJlQXBpQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRsYWJlbD8gOiBzdHJpbmc7XG5cdGZpbGVQYXRoPyA6IHN0cmluZztcblx0cmVtb3RlSWQ/IDogc3RyaW5nO1xuXHRhY3Rpb24/IDogS2FsdHVyYVlvdVR1YmVBcGlEaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uO1xuXHR2ZXJzaW9uPyA6IHN0cmluZztcblx0YXNzZXRJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZb3VUdWJlQXBpQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBsYW5ndWFnZSA6IHN0cmluZztcblx0bGFiZWwgOiBzdHJpbmc7XG5cdGZpbGVQYXRoIDogc3RyaW5nO1xuXHRyZW1vdGVJZCA6IHN0cmluZztcblx0YWN0aW9uIDogS2FsdHVyYVlvdVR1YmVBcGlEaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uO1xuXHR2ZXJzaW9uIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZb3VUdWJlQXBpQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhYmVsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFZb3VUdWJlQXBpRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhWW91VHViZUFwaURpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24nIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvJ10gPSBLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvOyJdfQ==