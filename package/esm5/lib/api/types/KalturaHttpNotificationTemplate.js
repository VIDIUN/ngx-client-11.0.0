/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaHttpNotificationMethod } from './KalturaHttpNotificationMethod';
import { KalturaHttpNotificationData } from './KalturaHttpNotificationData';
import { KalturaHttpNotificationAuthenticationMethod } from './KalturaHttpNotificationAuthenticationMethod';
import { KalturaHttpNotificationSslVersion } from './KalturaHttpNotificationSslVersion';
import { KalturaHttpNotificationCertificateType } from './KalturaHttpNotificationCertificateType';
import { KalturaHttpNotificationSslKeyType } from './KalturaHttpNotificationSslKeyType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaHttpNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.url;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.method;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.data;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.timeout;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.connectTimeout;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.username;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.password;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.authenticationMethod;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslVersion;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslCertificate;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslCertificateType;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslCertificatePassword;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslEngine;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslEngineDefault;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslKeyType;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslKey;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.sslKeyPassword;
/** @type {?|undefined} */
KalturaHttpNotificationTemplateArgs.prototype.customHeaders;
var KalturaHttpNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHttpNotificationTemplate, _super);
    function KalturaHttpNotificationTemplate(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.customHeaders === 'undefined')
            _this.customHeaders = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaHttpNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationTemplate' },
            url: { type: 's' },
            method: { type: 'en', subTypeConstructor: KalturaHttpNotificationMethod, subType: 'KalturaHttpNotificationMethod' },
            data: { type: 'o', subTypeConstructor: KalturaHttpNotificationData, subType: 'KalturaHttpNotificationData' },
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
            customHeaders: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaHttpNotificationTemplate;
}(KalturaEventNotificationTemplate));
export { KalturaHttpNotificationTemplate };
if (false) {
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.url;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.method;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.data;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.timeout;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.connectTimeout;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.username;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.password;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.authenticationMethod;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslVersion;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslCertificate;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslCertificateType;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslCertificatePassword;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslEngine;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslEngineDefault;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslKeyType;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslKey;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.sslKeyPassword;
    /** @type {?} */
    KalturaHttpNotificationTemplate.prototype.customHeaders;
}
typesMappingStorage['KalturaHttpNotificationTemplate'] = KalturaHttpNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdDQUFnQyxFQUF3QyxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCNUgsSUFBQTtJQUFxRCwyREFBZ0M7SUFxQmpGLHlDQUFZLElBQTJDO1FBQXZELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O0tBQzFFOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN2SCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQ0FBMkMsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDakssVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDbkksY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0NBQXNDLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQ3JKLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUNuSSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ3hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBeEZMO0VBaUNxRCxnQ0FBZ0MsRUF3RHBGLENBQUE7QUF4REQsMkNBd0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZCc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbiB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIHtcbiAgICB1cmw/IDogc3RyaW5nO1xuXHRtZXRob2Q/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2Q7XG5cdGRhdGE/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhO1xuXHR0aW1lb3V0PyA6IG51bWJlcjtcblx0Y29ubmVjdFRpbWVvdXQ/IDogbnVtYmVyO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0YXV0aGVudGljYXRpb25NZXRob2Q/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZDtcblx0c3NsVmVyc2lvbj8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb247XG5cdHNzbENlcnRpZmljYXRlPyA6IHN0cmluZztcblx0c3NsQ2VydGlmaWNhdGVUeXBlPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlO1xuXHRzc2xDZXJ0aWZpY2F0ZVBhc3N3b3JkPyA6IHN0cmluZztcblx0c3NsRW5naW5lPyA6IHN0cmluZztcblx0c3NsRW5naW5lRGVmYXVsdD8gOiBzdHJpbmc7XG5cdHNzbEtleVR5cGU/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlO1xuXHRzc2xLZXk/IDogc3RyaW5nO1xuXHRzc2xLZXlQYXNzd29yZD8gOiBzdHJpbmc7XG5cdGN1c3RvbUhlYWRlcnM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGUgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB7XG5cbiAgICB1cmwgOiBzdHJpbmc7XG5cdG1ldGhvZCA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kO1xuXHRkYXRhIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhO1xuXHR0aW1lb3V0IDogbnVtYmVyO1xuXHRjb25uZWN0VGltZW91dCA6IG51bWJlcjtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRhdXRoZW50aWNhdGlvbk1ldGhvZCA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2Q7XG5cdHNzbFZlcnNpb24gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb247XG5cdHNzbENlcnRpZmljYXRlIDogc3RyaW5nO1xuXHRzc2xDZXJ0aWZpY2F0ZVR5cGUgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZTtcblx0c3NsQ2VydGlmaWNhdGVQYXNzd29yZCA6IHN0cmluZztcblx0c3NsRW5naW5lIDogc3RyaW5nO1xuXHRzc2xFbmdpbmVEZWZhdWx0IDogc3RyaW5nO1xuXHRzc2xLZXlUeXBlIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlO1xuXHRzc2xLZXkgOiBzdHJpbmc7XG5cdHNzbEtleVBhc3N3b3JkIDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXN0b21IZWFkZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5jdXN0b21IZWFkZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZScgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGhvZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhJyB9LFxuXHRcdFx0XHR0aW1lb3V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbm5lY3RUaW1lb3V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1dGhlbnRpY2F0aW9uTWV0aG9kIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZCwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kJyB9LFxuXHRcdFx0XHRzc2xWZXJzaW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbicgfSxcblx0XHRcdFx0c3NsQ2VydGlmaWNhdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsQ2VydGlmaWNhdGVUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUnIH0sXG5cdFx0XHRcdHNzbENlcnRpZmljYXRlUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsRW5naW5lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbEVuZ2luZURlZmF1bHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsS2V5VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUnIH0sXG5cdFx0XHRcdHNzbEtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xLZXlQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdXN0b21IZWFkZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblRlbXBsYXRlJ10gPSBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblRlbXBsYXRlOyJdfQ==