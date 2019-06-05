/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaHttpNotificationTemplate extends KalturaEventNotificationTemplate {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.customHeaders === 'undefined')
            this.customHeaders = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0I1SCxNQUFNLHNDQUF1QyxTQUFRLGdDQUFnQzs7OztJQXFCakYsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7S0FDMUU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkgsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEgsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkNBQTJDLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ2pLLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ25JLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUNySixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDbkksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YSB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2QgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2QnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZSB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3Mge1xuICAgIHVybD8gOiBzdHJpbmc7XG5cdG1ldGhvZD8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZDtcblx0ZGF0YT8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGE7XG5cdHRpbWVvdXQ/IDogbnVtYmVyO1xuXHRjb25uZWN0VGltZW91dD8gOiBudW1iZXI7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRhdXRoZW50aWNhdGlvbk1ldGhvZD8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kO1xuXHRzc2xWZXJzaW9uPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbjtcblx0c3NsQ2VydGlmaWNhdGU/IDogc3RyaW5nO1xuXHRzc2xDZXJ0aWZpY2F0ZVR5cGU/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGU7XG5cdHNzbENlcnRpZmljYXRlUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRzc2xFbmdpbmU/IDogc3RyaW5nO1xuXHRzc2xFbmdpbmVEZWZhdWx0PyA6IHN0cmluZztcblx0c3NsS2V5VHlwZT8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGU7XG5cdHNzbEtleT8gOiBzdHJpbmc7XG5cdHNzbEtleVBhc3N3b3JkPyA6IHN0cmluZztcblx0Y3VzdG9tSGVhZGVycz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZSBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIHtcblxuICAgIHVybCA6IHN0cmluZztcblx0bWV0aG9kIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2Q7XG5cdGRhdGEgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGE7XG5cdHRpbWVvdXQgOiBudW1iZXI7XG5cdGNvbm5lY3RUaW1lb3V0IDogbnVtYmVyO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGF1dGhlbnRpY2F0aW9uTWV0aG9kIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZDtcblx0c3NsVmVyc2lvbiA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbjtcblx0c3NsQ2VydGlmaWNhdGUgOiBzdHJpbmc7XG5cdHNzbENlcnRpZmljYXRlVHlwZSA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlO1xuXHRzc2xDZXJ0aWZpY2F0ZVBhc3N3b3JkIDogc3RyaW5nO1xuXHRzc2xFbmdpbmUgOiBzdHJpbmc7XG5cdHNzbEVuZ2luZURlZmF1bHQgOiBzdHJpbmc7XG5cdHNzbEtleVR5cGUgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGU7XG5cdHNzbEtleSA6IHN0cmluZztcblx0c3NsS2V5UGFzc3dvcmQgOiBzdHJpbmc7XG5cdGN1c3RvbUhlYWRlcnMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1c3RvbUhlYWRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmN1c3RvbUhlYWRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0aG9kIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2QnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEnIH0sXG5cdFx0XHRcdHRpbWVvdXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29ubmVjdFRpbWVvdXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXV0aGVudGljYXRpb25NZXRob2QgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uQXV0aGVudGljYXRpb25NZXRob2QnIH0sXG5cdFx0XHRcdHNzbFZlcnNpb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbFZlcnNpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uJyB9LFxuXHRcdFx0XHRzc2xDZXJ0aWZpY2F0ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xDZXJ0aWZpY2F0ZVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZScgfSxcblx0XHRcdFx0c3NsQ2VydGlmaWNhdGVQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xFbmdpbmUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsRW5naW5lRGVmYXVsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xLZXlUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xLZXlUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZScgfSxcblx0XHRcdFx0c3NsS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbEtleVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGN1c3RvbUhlYWRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGUnXSA9IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGU7Il19