/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaHttpNotificationMethod } from './KalturaHttpNotificationMethod';
import { KalturaHttpNotificationAuthenticationMethod } from './KalturaHttpNotificationAuthenticationMethod';
import { KalturaHttpNotificationSslVersion } from './KalturaHttpNotificationSslVersion';
import { KalturaHttpNotificationCertificateType } from './KalturaHttpNotificationCertificateType';
import { KalturaHttpNotificationSslKeyType } from './KalturaHttpNotificationSslKeyType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData } from './KalturaEventNotificationDispatchJobData';
/**
 * @record
 */
export function KalturaHttpNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.url;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.method;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.data;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.timeout;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.connectTimeout;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.username;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.password;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.authenticationMethod;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslVersion;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslCertificate;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslCertificateType;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslCertificatePassword;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslEngine;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslEngineDefault;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslKeyType;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslKey;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.sslKeyPassword;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.customHeaders;
/** @type {?|undefined} */
KalturaHttpNotificationDispatchJobDataArgs.prototype.signSecret;
var KalturaHttpNotificationDispatchJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHttpNotificationDispatchJobData, _super);
    function KalturaHttpNotificationDispatchJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.customHeaders === 'undefined')
            _this.customHeaders = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaHttpNotificationDispatchJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationDispatchJobData' },
            url: { type: 's' },
            method: { type: 'en', subTypeConstructor: KalturaHttpNotificationMethod, subType: 'KalturaHttpNotificationMethod' },
            data: { type: 's' },
            timeout: { type: 'n' },
            connectTimeout: { type: 'n' },
            username: { type: 's' },
            password: { type: 's' },
            authenticationMethod: { type: 'en', subTypeConstructor: KalturaHttpNotificationAuthenticationMethod, subType: 'KalturaHttpNotificationAuthenticationMethod' },
            sslVersion: { type: 'en', subTypeConstructor: KalturaHttpNotificationSslVersion, subType: 'KalturaHttpNotificationSslVersion' },
            sslCertificate: { type: 's' },
            sslCertificateType: { type: 'es', subTypeConstructor: KalturaHttpNotificationCertificateType, subType: 'KalturaHttpNotificationCertificateType' },
            sslCertificatePassword: { type: 's' },
            sslEngine: { type: 's' },
            sslEngineDefault: { type: 's' },
            sslKeyType: { type: 'es', subTypeConstructor: KalturaHttpNotificationSslKeyType, subType: 'KalturaHttpNotificationSslKeyType' },
            sslKey: { type: 's' },
            sslKeyPassword: { type: 's' },
            customHeaders: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            signSecret: { type: 's' }
        });
        return result;
    };
    return KalturaHttpNotificationDispatchJobData;
}(KalturaEventNotificationDispatchJobData));
export { KalturaHttpNotificationDispatchJobData };
if (false) {
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.url;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.method;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.data;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.timeout;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.connectTimeout;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.username;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.password;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.authenticationMethod;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslVersion;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslCertificate;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslCertificateType;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslCertificatePassword;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslEngine;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslEngineDefault;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslKeyType;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslKey;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.sslKeyPassword;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.customHeaders;
    /** @type {?} */
    KalturaHttpNotificationDispatchJobData.prototype.signSecret;
}
typesMappingStorage['KalturaHttpNotificationDispatchJobData'] = KalturaHttpNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUNBQXVDLEVBQStDLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmpKLElBQUE7SUFBNEQsa0VBQXVDO0lBc0IvRixnREFBWSxJQUFrRDtRQUE5RCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztLQUMxRTs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkgsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQ0FBMkMsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDakssVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDbkksY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0NBQXNDLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQ3JKLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUNuSSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREExRkw7RUFpQzRELHVDQUF1QyxFQTBEbEcsQ0FBQTtBQTFERCxrREEwREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZCB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZCB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZCc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb24gfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbic7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzIHtcbiAgICB1cmw/IDogc3RyaW5nO1xuXHRtZXRob2Q/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2Q7XG5cdGRhdGE/IDogc3RyaW5nO1xuXHR0aW1lb3V0PyA6IG51bWJlcjtcblx0Y29ubmVjdFRpbWVvdXQ/IDogbnVtYmVyO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0YXV0aGVudGljYXRpb25NZXRob2Q/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZDtcblx0c3NsVmVyc2lvbj8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb247XG5cdHNzbENlcnRpZmljYXRlPyA6IHN0cmluZztcblx0c3NsQ2VydGlmaWNhdGVUeXBlPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlO1xuXHRzc2xDZXJ0aWZpY2F0ZVBhc3N3b3JkPyA6IHN0cmluZztcblx0c3NsRW5naW5lPyA6IHN0cmluZztcblx0c3NsRW5naW5lRGVmYXVsdD8gOiBzdHJpbmc7XG5cdHNzbEtleVR5cGU/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlO1xuXHRzc2xLZXk/IDogc3RyaW5nO1xuXHRzc2xLZXlQYXNzd29yZD8gOiBzdHJpbmc7XG5cdGN1c3RvbUhlYWRlcnM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdHNpZ25TZWNyZXQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSB7XG5cbiAgICB1cmwgOiBzdHJpbmc7XG5cdG1ldGhvZCA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kO1xuXHRkYXRhIDogc3RyaW5nO1xuXHR0aW1lb3V0IDogbnVtYmVyO1xuXHRjb25uZWN0VGltZW91dCA6IG51bWJlcjtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRhdXRoZW50aWNhdGlvbk1ldGhvZCA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2Q7XG5cdHNzbFZlcnNpb24gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb247XG5cdHNzbENlcnRpZmljYXRlIDogc3RyaW5nO1xuXHRzc2xDZXJ0aWZpY2F0ZVR5cGUgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZTtcblx0c3NsQ2VydGlmaWNhdGVQYXNzd29yZCA6IHN0cmluZztcblx0c3NsRW5naW5lIDogc3RyaW5nO1xuXHRzc2xFbmdpbmVEZWZhdWx0IDogc3RyaW5nO1xuXHRzc2xLZXlUeXBlIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlO1xuXHRzc2xLZXkgOiBzdHJpbmc7XG5cdHNzbEtleVBhc3N3b3JkIDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdHNpZ25TZWNyZXQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VzdG9tSGVhZGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY3VzdG9tSGVhZGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0aG9kIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZW91dCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb25uZWN0VGltZW91dCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhdXRoZW50aWNhdGlvbk1ldGhvZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2QsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZCcgfSxcblx0XHRcdFx0c3NsVmVyc2lvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbiwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb24nIH0sXG5cdFx0XHRcdHNzbENlcnRpZmljYXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbENlcnRpZmljYXRlVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlJyB9LFxuXHRcdFx0XHRzc2xDZXJ0aWZpY2F0ZVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbEVuZ2luZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xFbmdpbmVEZWZhdWx0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbEtleVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlJyB9LFxuXHRcdFx0XHRzc2xLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsS2V5UGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VzdG9tSGVhZGVycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0c2lnblNlY3JldCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSddID0gS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGE7Il19