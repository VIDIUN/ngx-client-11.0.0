/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaUnicornDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.domainName;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.channelGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.apiHostUrl;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.domainGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.adFreeApplicationGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.remoteAssetParamsId;
/** @type {?|undefined} */
KalturaUnicornDistributionProfileArgs.prototype.storageProfileId;
var KalturaUnicornDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUnicornDistributionProfile, _super);
    function KalturaUnicornDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUnicornDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUnicornDistributionProfile' },
            username: { type: 's' },
            password: { type: 's' },
            domainName: { type: 's' },
            channelGuid: { type: 's' },
            apiHostUrl: { type: 's' },
            domainGuid: { type: 's' },
            adFreeApplicationGuid: { type: 's' },
            remoteAssetParamsId: { type: 'n' },
            storageProfileId: { type: 's' }
        });
        return result;
    };
    return KalturaUnicornDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaUnicornDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.domainName;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.channelGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.apiHostUrl;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.domainGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.adFreeApplicationGuid;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.remoteAssetParamsId;
    /** @type {?} */
    KalturaUnicornDistributionProfile.prototype.storageProfileId;
}
typesMappingStorage['KalturaUnicornDistributionProfile'] = KalturaUnicornDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWU5SSxJQUFBO0lBQXVELDZEQUFzQztJQVl6RiwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBckRMO0VBaUJ1RCxzQ0FBc0MsRUFxQzVGLENBQUE7QUFyQ0QsNkNBcUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgdXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdGRvbWFpbk5hbWU/IDogc3RyaW5nO1xuXHRjaGFubmVsR3VpZD8gOiBzdHJpbmc7XG5cdGFwaUhvc3RVcmw/IDogc3RyaW5nO1xuXHRkb21haW5HdWlkPyA6IHN0cmluZztcblx0YWRGcmVlQXBwbGljYXRpb25HdWlkPyA6IHN0cmluZztcblx0cmVtb3RlQXNzZXRQYXJhbXNJZD8gOiBudW1iZXI7XG5cdHN0b3JhZ2VQcm9maWxlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICB1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGRvbWFpbk5hbWUgOiBzdHJpbmc7XG5cdGNoYW5uZWxHdWlkIDogc3RyaW5nO1xuXHRhcGlIb3N0VXJsIDogc3RyaW5nO1xuXHRkb21haW5HdWlkIDogc3RyaW5nO1xuXHRhZEZyZWVBcHBsaWNhdGlvbkd1aWQgOiBzdHJpbmc7XG5cdHJlbW90ZUFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cdHN0b3JhZ2VQcm9maWxlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRvbWFpbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEd1aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBpSG9zdFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb21haW5HdWlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkRnJlZUFwcGxpY2F0aW9uR3VpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVBc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0b3JhZ2VQcm9maWxlSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvblByb2ZpbGU7Il19