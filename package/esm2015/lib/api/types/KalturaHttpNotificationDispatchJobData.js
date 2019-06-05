/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaHttpNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCakosTUFBTSw2Q0FBOEMsU0FBUSx1Q0FBdUM7Ozs7SUFzQi9GLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0tBQzFFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3ZILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkNBQTJDLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ2pLLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ25JLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUNySixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDbkksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uTWV0aG9kIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZCc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbiB9IGZyb20gJy4vS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uJztcbmltcG9ydCB7IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkNlcnRpZmljYXRlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUgfSBmcm9tICcuL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEsIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3Mge1xuICAgIHVybD8gOiBzdHJpbmc7XG5cdG1ldGhvZD8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZDtcblx0ZGF0YT8gOiBzdHJpbmc7XG5cdHRpbWVvdXQ/IDogbnVtYmVyO1xuXHRjb25uZWN0VGltZW91dD8gOiBudW1iZXI7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRhdXRoZW50aWNhdGlvbk1ldGhvZD8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kO1xuXHRzc2xWZXJzaW9uPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbjtcblx0c3NsQ2VydGlmaWNhdGU/IDogc3RyaW5nO1xuXHRzc2xDZXJ0aWZpY2F0ZVR5cGU/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGU7XG5cdHNzbENlcnRpZmljYXRlUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRzc2xFbmdpbmU/IDogc3RyaW5nO1xuXHRzc2xFbmdpbmVEZWZhdWx0PyA6IHN0cmluZztcblx0c3NsS2V5VHlwZT8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGU7XG5cdHNzbEtleT8gOiBzdHJpbmc7XG5cdHNzbEtleVBhc3N3b3JkPyA6IHN0cmluZztcblx0Y3VzdG9tSGVhZGVycz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0c2lnblNlY3JldD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIHtcblxuICAgIHVybCA6IHN0cmluZztcblx0bWV0aG9kIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25NZXRob2Q7XG5cdGRhdGEgOiBzdHJpbmc7XG5cdHRpbWVvdXQgOiBudW1iZXI7XG5cdGNvbm5lY3RUaW1lb3V0IDogbnVtYmVyO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGF1dGhlbnRpY2F0aW9uTWV0aG9kIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZDtcblx0c3NsVmVyc2lvbiA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbjtcblx0c3NsQ2VydGlmaWNhdGUgOiBzdHJpbmc7XG5cdHNzbENlcnRpZmljYXRlVHlwZSA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQ2VydGlmaWNhdGVUeXBlO1xuXHRzc2xDZXJ0aWZpY2F0ZVBhc3N3b3JkIDogc3RyaW5nO1xuXHRzc2xFbmdpbmUgOiBzdHJpbmc7XG5cdHNzbEVuZ2luZURlZmF1bHQgOiBzdHJpbmc7XG5cdHNzbEtleVR5cGUgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGU7XG5cdHNzbEtleSA6IHN0cmluZztcblx0c3NsS2V5UGFzc3dvcmQgOiBzdHJpbmc7XG5cdGN1c3RvbUhlYWRlcnMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0c2lnblNlY3JldCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXN0b21IZWFkZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5jdXN0b21IZWFkZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRob2QgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZCwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbk1ldGhvZCcgfSxcblx0XHRcdFx0ZGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aW1lb3V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbm5lY3RUaW1lb3V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1dGhlbnRpY2F0aW9uTWV0aG9kIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25BdXRoZW50aWNhdGlvbk1ldGhvZCwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkF1dGhlbnRpY2F0aW9uTWV0aG9kJyB9LFxuXHRcdFx0XHRzc2xWZXJzaW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25Tc2xWZXJzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsVmVyc2lvbicgfSxcblx0XHRcdFx0c3NsQ2VydGlmaWNhdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsQ2VydGlmaWNhdGVUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25DZXJ0aWZpY2F0ZVR5cGUnIH0sXG5cdFx0XHRcdHNzbENlcnRpZmljYXRlUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsRW5naW5lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzbEVuZ2luZURlZmF1bHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NsS2V5VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uU3NsS2V5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblNzbEtleVR5cGUnIH0sXG5cdFx0XHRcdHNzbEtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2xLZXlQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdXN0b21IZWFkZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRzaWduU2VjcmV0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJ10gPSBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YTsiXX0=