/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaPushNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaPushNotificationTemplateArgs.prototype.queueNameParameters;
/** @type {?|undefined} */
KalturaPushNotificationTemplateArgs.prototype.queueKeyParameters;
/** @type {?|undefined} */
KalturaPushNotificationTemplateArgs.prototype.apiObjectType;
/** @type {?|undefined} */
KalturaPushNotificationTemplateArgs.prototype.objectFormat;
/** @type {?|undefined} */
KalturaPushNotificationTemplateArgs.prototype.responseProfileId;
export class KalturaPushNotificationTemplate extends KalturaEventNotificationTemplate {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.queueNameParameters === 'undefined')
            this.queueNameParameters = [];
        if (typeof this.queueKeyParameters === 'undefined')
            this.queueKeyParameters = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushNotificationTemplate' },
            queueNameParameters: { type: 'a', subTypeConstructor: KalturaPushEventNotificationParameter, subType: 'KalturaPushEventNotificationParameter' },
            queueKeyParameters: { type: 'a', subTypeConstructor: KalturaPushEventNotificationParameter, subType: 'KalturaPushEventNotificationParameter' },
            apiObjectType: { type: 's' },
            objectFormat: { type: 'en', subTypeConstructor: KalturaResponseType, subType: 'KalturaResponseType' },
            responseProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPushNotificationTemplate.prototype.queueNameParameters;
    /** @type {?} */
    KalturaPushNotificationTemplate.prototype.queueKeyParameters;
    /** @type {?} */
    KalturaPushNotificationTemplate.prototype.apiObjectType;
    /** @type {?} */
    KalturaPushNotificationTemplate.prototype.objectFormat;
    /** @type {?} */
    KalturaPushNotificationTemplate.prototype.responseProfileId;
}
typesMappingStorage['KalturaPushNotificationTemplate'] = KalturaPushNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hOb3RpZmljYXRpb25UZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVB1c2hOb3RpZmljYXRpb25UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzVILE1BQU0sc0NBQXVDLFNBQVEsZ0NBQWdDOzs7O0lBUWpGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6RixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0tBQzlFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUNBQXFDLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ25KLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQ0FBcUMsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDbEosYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN6RyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyIH0gZnJvbSAnLi9LYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVR5cGUgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUsIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQdXNoTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB7XG4gICAgcXVldWVOYW1lUGFyYW1ldGVycz8gOiBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyW107XG5cdHF1ZXVlS2V5UGFyYW1ldGVycz8gOiBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyW107XG5cdGFwaU9iamVjdFR5cGU/IDogc3RyaW5nO1xuXHRvYmplY3RGb3JtYXQ/IDogS2FsdHVyYVJlc3BvbnNlVHlwZTtcblx0cmVzcG9uc2VQcm9maWxlSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblRlbXBsYXRlIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUge1xuXG4gICAgcXVldWVOYW1lUGFyYW1ldGVycyA6IEthbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcblx0cXVldWVLZXlQYXJhbWV0ZXJzIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcltdO1xuXHRhcGlPYmplY3RUeXBlIDogc3RyaW5nO1xuXHRvYmplY3RGb3JtYXQgOiBLYWx0dXJhUmVzcG9uc2VUeXBlO1xuXHRyZXNwb25zZVByb2ZpbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVB1c2hOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnF1ZXVlTmFtZVBhcmFtZXRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnF1ZXVlTmFtZVBhcmFtZXRlcnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMucXVldWVLZXlQYXJhbWV0ZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5xdWV1ZUtleVBhcmFtZXRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHRxdWV1ZU5hbWVQYXJhbWV0ZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLCBzdWJUeXBlIDogJ0thbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHF1ZXVlS2V5UGFyYW1ldGVycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJyB9LFxuXHRcdFx0XHRhcGlPYmplY3RUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdEZvcm1hdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNwb25zZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlVHlwZScgfSxcblx0XHRcdFx0cmVzcG9uc2VQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVB1c2hOb3RpZmljYXRpb25UZW1wbGF0ZSddID0gS2FsdHVyYVB1c2hOb3RpZmljYXRpb25UZW1wbGF0ZTsiXX0=