/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaFreewheelDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.apikey;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.email;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.sftpPass;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.sftpLogin;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.accountId;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.metadataProfileId;
var KalturaFreewheelDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFreewheelDistributionProfile, _super);
    function KalturaFreewheelDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFreewheelDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFreewheelDistributionProfile' },
            apikey: { type: 's' },
            email: { type: 's' },
            sftpPass: { type: 's' },
            sftpLogin: { type: 's' },
            accountId: { type: 's' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    };
    return KalturaFreewheelDistributionProfile;
}(KalturaDistributionProfile));
export { KalturaFreewheelDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.apikey;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.email;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.sftpPass;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.sftpLogin;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.accountId;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.metadataProfileId;
}
typesMappingStorage['KalturaFreewheelDistributionProfile'] = KalturaFreewheelDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZMUcsSUFBQTtJQUF5RCwrREFBMEI7SUFTL0UsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBNUNMO0VBY3lELDBCQUEwQixFQStCbEYsQ0FBQTtBQS9CRCwrQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGFwaWtleT8gOiBzdHJpbmc7XG5cdGVtYWlsPyA6IHN0cmluZztcblx0c2Z0cFBhc3M/IDogc3RyaW5nO1xuXHRzZnRwTG9naW4/IDogc3RyaW5nO1xuXHRhY2NvdW50SWQ/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgYXBpa2V5IDogc3RyaW5nO1xuXHRlbWFpbCA6IHN0cmluZztcblx0c2Z0cFBhc3MgOiBzdHJpbmc7XG5cdHNmdHBMb2dpbiA6IHN0cmluZztcblx0YWNjb3VudElkIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGFwaWtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUGFzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwTG9naW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWNjb3VudElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=