/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaAkamaiUniversalStreamType } from './KalturaAkamaiUniversalStreamType';
import { KalturaProvisionJobData } from './KalturaProvisionJobData';
/**
 * @record
 */
export function KalturaAkamaiUniversalProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.streamId;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.systemUserName;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.systemPassword;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.domainName;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.dvrEnabled;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.dvrWindow;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.primaryContact;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.secondaryContact;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.streamType;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.notificationEmail;
var KalturaAkamaiUniversalProvisionJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAkamaiUniversalProvisionJobData, _super);
    function KalturaAkamaiUniversalProvisionJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAkamaiUniversalProvisionJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAkamaiUniversalProvisionJobData' },
            streamId: { type: 'n' },
            systemUserName: { type: 's' },
            systemPassword: { type: 's' },
            domainName: { type: 's' },
            dvrEnabled: { type: 'en', subTypeConstructor: KalturaDVRStatus, subType: 'KalturaDVRStatus' },
            dvrWindow: { type: 'n' },
            primaryContact: { type: 's' },
            secondaryContact: { type: 's' },
            streamType: { type: 'es', subTypeConstructor: KalturaAkamaiUniversalStreamType, subType: 'KalturaAkamaiUniversalStreamType' },
            notificationEmail: { type: 's' }
        });
        return result;
    };
    return KalturaAkamaiUniversalProvisionJobData;
}(KalturaProvisionJobData));
export { KalturaAkamaiUniversalProvisionJobData };
if (false) {
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.streamId;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.systemUserName;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.systemPassword;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.domainName;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.dvrEnabled;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.dvrWindow;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.primaryContact;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.secondaryContact;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.streamType;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.notificationEmail;
}
typesMappingStorage['KalturaAkamaiUniversalProvisionJobData'] = KalturaAkamaiUniversalProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCakcsSUFBQTtJQUE0RCxrRUFBdUI7SUFhL0UsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2pHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDakksaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBMURMO0VBb0I0RCx1QkFBdUIsRUF1Q2xGLENBQUE7QUF2Q0Qsa0RBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURWUlN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURWUlN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQWthbWFpVW5pdmVyc2FsU3RyZWFtVHlwZSB9IGZyb20gJy4vS2FsdHVyYUFrYW1haVVuaXZlcnNhbFN0cmVhbVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEsIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YUFyZ3Mge1xuICAgIHN0cmVhbUlkPyA6IG51bWJlcjtcblx0c3lzdGVtVXNlck5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1QYXNzd29yZD8gOiBzdHJpbmc7XG5cdGRvbWFpbk5hbWU/IDogc3RyaW5nO1xuXHRkdnJFbmFibGVkPyA6IEthbHR1cmFEVlJTdGF0dXM7XG5cdGR2cldpbmRvdz8gOiBudW1iZXI7XG5cdHByaW1hcnlDb250YWN0PyA6IHN0cmluZztcblx0c2Vjb25kYXJ5Q29udGFjdD8gOiBzdHJpbmc7XG5cdHN0cmVhbVR5cGU/IDogS2FsdHVyYUFrYW1haVVuaXZlcnNhbFN0cmVhbVR5cGU7XG5cdG5vdGlmaWNhdGlvbkVtYWlsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YSB7XG5cbiAgICBzdHJlYW1JZCA6IG51bWJlcjtcblx0c3lzdGVtVXNlck5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbVBhc3N3b3JkIDogc3RyaW5nO1xuXHRkb21haW5OYW1lIDogc3RyaW5nO1xuXHRkdnJFbmFibGVkIDogS2FsdHVyYURWUlN0YXR1cztcblx0ZHZyV2luZG93IDogbnVtYmVyO1xuXHRwcmltYXJ5Q29udGFjdCA6IHN0cmluZztcblx0c2Vjb25kYXJ5Q29udGFjdCA6IHN0cmluZztcblx0c3RyZWFtVHlwZSA6IEthbHR1cmFBa2FtYWlVbml2ZXJzYWxTdHJlYW1UeXBlO1xuXHRub3RpZmljYXRpb25FbWFpbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdHN0cmVhbUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN5c3RlbVVzZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRvbWFpbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZHZyRW5hYmxlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEVlJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURWUlN0YXR1cycgfSxcblx0XHRcdFx0ZHZyV2luZG93IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW1hcnlDb250YWN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlY29uZGFyeUNvbnRhY3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBa2FtYWlVbml2ZXJzYWxTdHJlYW1UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBa2FtYWlVbml2ZXJzYWxTdHJlYW1UeXBlJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25FbWFpbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWthbWFpVW5pdmVyc2FsUHJvdmlzaW9uSm9iRGF0YSddID0gS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGE7Il19