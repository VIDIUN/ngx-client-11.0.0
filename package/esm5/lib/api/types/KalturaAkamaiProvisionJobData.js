/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaProvisionJobData } from './KalturaProvisionJobData';
/**
 * @record
 */
export function KalturaAkamaiProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.wsdlUsername;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.wsdlPassword;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.cpcode;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.emailId;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.primaryContact;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.secondaryContact;
var KalturaAkamaiProvisionJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAkamaiProvisionJobData, _super);
    function KalturaAkamaiProvisionJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAkamaiProvisionJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAkamaiProvisionJobData' },
            wsdlUsername: { type: 's' },
            wsdlPassword: { type: 's' },
            cpcode: { type: 's' },
            emailId: { type: 's' },
            primaryContact: { type: 's' },
            secondaryContact: { type: 's' }
        });
        return result;
    };
    return KalturaAkamaiProvisionJobData;
}(KalturaProvisionJobData));
export { KalturaAkamaiProvisionJobData };
if (false) {
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.wsdlUsername;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.wsdlPassword;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.cpcode;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.emailId;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.primaryContact;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.secondaryContact;
}
typesMappingStorage['KalturaAkamaiProvisionJobData'] = KalturaAkamaiProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFrYW1haVByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZakcsSUFBQTtJQUFtRCx5REFBdUI7SUFTdEUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBNUNMO0VBY21ELHVCQUF1QixFQStCekUsQ0FBQTtBQS9CRCx5Q0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEsIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YUFyZ3Mge1xuICAgIHdzZGxVc2VybmFtZT8gOiBzdHJpbmc7XG5cdHdzZGxQYXNzd29yZD8gOiBzdHJpbmc7XG5cdGNwY29kZT8gOiBzdHJpbmc7XG5cdGVtYWlsSWQ/IDogc3RyaW5nO1xuXHRwcmltYXJ5Q29udGFjdD8gOiBzdHJpbmc7XG5cdHNlY29uZGFyeUNvbnRhY3Q/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWthbWFpUHJvdmlzaW9uSm9iRGF0YSBleHRlbmRzIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhIHtcblxuICAgIHdzZGxVc2VybmFtZSA6IHN0cmluZztcblx0d3NkbFBhc3N3b3JkIDogc3RyaW5nO1xuXHRjcGNvZGUgOiBzdHJpbmc7XG5cdGVtYWlsSWQgOiBzdHJpbmc7XG5cdHByaW1hcnlDb250YWN0IDogc3RyaW5nO1xuXHRzZWNvbmRhcnlDb250YWN0IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWthbWFpUHJvdmlzaW9uSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWthbWFpUHJvdmlzaW9uSm9iRGF0YScgfSxcblx0XHRcdFx0d3NkbFVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdzZGxQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcGNvZGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWxJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmltYXJ5Q29udGFjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWNvbmRhcnlDb250YWN0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhJ10gPSBLYWx0dXJhQWthbWFpUHJvdmlzaW9uSm9iRGF0YTsiXX0=