/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
/**
 * @record
 */
export function KalturaPushEventNotificationParameterArgs() { }
/** @type {?|undefined} */
KalturaPushEventNotificationParameterArgs.prototype.queueKeyToken;
export class KalturaPushEventNotificationParameter extends KalturaEventNotificationParameter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushEventNotificationParameter' },
            queueKeyToken: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPushEventNotificationParameter.prototype.queueKeyToken;
}
typesMappingStorage['KalturaPushEventNotificationParameter'] = KalturaPushEventNotificationParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7OztBQU8vSCxNQUFNLDRDQUE2QyxTQUFRLGlDQUFpQzs7OztJQUl4RixZQUFZLElBQWlEO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIHtcbiAgICBxdWV1ZUtleVRva2VuPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciB7XG5cbiAgICBxdWV1ZUtleVRva2VuIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHF1ZXVlS2V5VG9rZW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciddID0gS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcjsiXX0=