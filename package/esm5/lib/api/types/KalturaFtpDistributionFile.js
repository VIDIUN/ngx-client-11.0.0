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
export function KalturaFtpDistributionFileArgs() { }
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.filename;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.contents;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.localFilePath;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.version;
/** @type {?|undefined} */
KalturaFtpDistributionFileArgs.prototype.hash;
var KalturaFtpDistributionFile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFtpDistributionFile, _super);
    function KalturaFtpDistributionFile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFtpDistributionFile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFtpDistributionFile' },
            assetId: { type: 's' },
            filename: { type: 's' },
            contents: { type: 's' },
            localFilePath: { type: 's' },
            version: { type: 's' },
            hash: { type: 's' }
        });
        return result;
    };
    return KalturaFtpDistributionFile;
}(KalturaObjectBase));
export { KalturaFtpDistributionFile };
if (false) {
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.assetId;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.filename;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.contents;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.localFilePath;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.version;
    /** @type {?} */
    KalturaFtpDistributionFile.prototype.hash;
}
typesMappingStorage['KalturaFtpDistributionFile'] = KalturaFtpDistributionFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEYsSUFBQTtJQUFnRCxzREFBaUI7SUFTN0Qsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBNUNMO0VBY2dELGlCQUFpQixFQStCaEUsQ0FBQTtBQS9CRCxzQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGFzc2V0SWQ/IDogc3RyaW5nO1xuXHRmaWxlbmFtZT8gOiBzdHJpbmc7XG5cdGNvbnRlbnRzPyA6IHN0cmluZztcblx0bG9jYWxGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHZlcnNpb24/IDogc3RyaW5nO1xuXHRoYXNoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBhc3NldElkIDogc3RyaW5nO1xuXHRmaWxlbmFtZSA6IHN0cmluZztcblx0Y29udGVudHMgOiBzdHJpbmc7XG5cdGxvY2FsRmlsZVBhdGggOiBzdHJpbmc7XG5cdHZlcnNpb24gOiBzdHJpbmc7XG5cdGhhc2ggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvY2FsRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRoYXNoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlJ10gPSBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uRmlsZTsiXX0=