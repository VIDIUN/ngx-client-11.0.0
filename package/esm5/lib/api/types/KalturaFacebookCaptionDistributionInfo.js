/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFacebookCaptionDistributionInfoArgs() { }
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.label;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.assetId;
var KalturaFacebookCaptionDistributionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFacebookCaptionDistributionInfo, _super);
    function KalturaFacebookCaptionDistributionInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFacebookCaptionDistributionInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFacebookCaptionDistributionInfo' },
            language: { type: 's' },
            label: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            version: { type: 's' },
            assetId: { type: 's' }
        });
        return result;
    };
    return KalturaFacebookCaptionDistributionInfo;
}(KalturaObjectBase));
export { KalturaFacebookCaptionDistributionInfo };
if (false) {
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.language;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.label;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.filePath;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.version;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.assetId;
}
typesMappingStorage['KalturaFacebookCaptionDistributionInfo'] = KalturaFacebookCaptionDistributionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsSUFBQTtJQUE0RCxrRUFBaUI7SUFTekUsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBNUNMO0VBYzRELGlCQUFpQixFQStCNUUsQ0FBQTtBQS9CRCxrREErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxhbmd1YWdlPyA6IHN0cmluZztcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRmaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHJlbW90ZUlkPyA6IHN0cmluZztcblx0dmVyc2lvbj8gOiBzdHJpbmc7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGxhbmd1YWdlIDogc3RyaW5nO1xuXHRsYWJlbCA6IHN0cmluZztcblx0ZmlsZVBhdGggOiBzdHJpbmc7XG5cdHJlbW90ZUlkIDogc3RyaW5nO1xuXHR2ZXJzaW9uIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mb0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbycgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFiZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVtb3RlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvJ10gPSBLYWx0dXJhRmFjZWJvb2tDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbzsiXX0=