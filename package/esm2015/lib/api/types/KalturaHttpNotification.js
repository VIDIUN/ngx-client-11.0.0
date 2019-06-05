/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaHttpNotificationArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.object;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.eventObjectType;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.eventNotificationJobId;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.templateId;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.templateName;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.templateSystemName;
/** @type {?|undefined} */
KalturaHttpNotificationArgs.prototype.eventType;
export class KalturaHttpNotification extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaHttpNotification' },
            object: { type: 'o', subTypeConstructor: KalturaObjectBase, subType: 'KalturaObjectBase' },
            eventObjectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            eventNotificationJobId: { type: 'n' },
            templateId: { type: 'n' },
            templateName: { type: 's' },
            templateSystemName: { type: 's' },
            eventType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventType, subType: 'KalturaEventNotificationEventType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaHttpNotification.prototype.object;
    /** @type {?} */
    KalturaHttpNotification.prototype.eventObjectType;
    /** @type {?} */
    KalturaHttpNotification.prototype.eventNotificationJobId;
    /** @type {?} */
    KalturaHttpNotification.prototype.templateId;
    /** @type {?} */
    KalturaHttpNotification.prototype.templateName;
    /** @type {?} */
    KalturaHttpNotification.prototype.templateSystemName;
    /** @type {?} */
    KalturaHttpNotification.prototype.eventType;
}
typesMappingStorage['KalturaHttpNotification'] = KalturaHttpNotification;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLE1BQU0sOEJBQStCLFNBQVEsaUJBQWlCOzs7O0lBVTFELFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQzlGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ3BKLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQ3pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBvYmplY3Q/IDogS2FsdHVyYU9iamVjdEJhc2U7XG5cdGV2ZW50T2JqZWN0VHlwZT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdGV2ZW50Tm90aWZpY2F0aW9uSm9iSWQ/IDogbnVtYmVyO1xuXHR0ZW1wbGF0ZUlkPyA6IG51bWJlcjtcblx0dGVtcGxhdGVOYW1lPyA6IHN0cmluZztcblx0dGVtcGxhdGVTeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZXZlbnRUeXBlPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUh0dHBOb3RpZmljYXRpb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBvYmplY3QgOiBLYWx0dXJhT2JqZWN0QmFzZTtcblx0ZXZlbnRPYmplY3RUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlO1xuXHRldmVudE5vdGlmaWNhdGlvbkpvYklkIDogbnVtYmVyO1xuXHR0ZW1wbGF0ZUlkIDogbnVtYmVyO1xuXHR0ZW1wbGF0ZU5hbWUgOiBzdHJpbmc7XG5cdHRlbXBsYXRlU3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZXZlbnRUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbicgfSxcblx0XHRcdFx0b2JqZWN0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0QmFzZSwgc3ViVHlwZSA6ICdLYWx0dXJhT2JqZWN0QmFzZScgfSxcblx0XHRcdFx0ZXZlbnRPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZScgfSxcblx0XHRcdFx0ZXZlbnROb3RpZmljYXRpb25Kb2JJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRlbXBsYXRlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXZlbnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUh0dHBOb3RpZmljYXRpb24nXSA9IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uOyJdfQ==