/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaCondition } from './KalturaCondition';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEventNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.name;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.description;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.type;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.manualDispatchEnabled;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.automaticDispatchEnabled;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.eventType;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.eventObjectType;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.eventConditions;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.contentParameters;
/** @type {?|undefined} */
KalturaEventNotificationTemplateArgs.prototype.userParameters;
export class KalturaEventNotificationTemplate extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.eventConditions === 'undefined')
            this.eventConditions = [];
        if (typeof this.contentParameters === 'undefined')
            this.contentParameters = [];
        if (typeof this.userParameters === 'undefined')
            this.userParameters = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationTemplate' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaEventNotificationTemplateType, subType: 'KalturaEventNotificationTemplateType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaEventNotificationTemplateStatus, subType: 'KalturaEventNotificationTemplateStatus' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            manualDispatchEnabled: { type: 'b' },
            automaticDispatchEnabled: { type: 'b' },
            eventType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventType, subType: 'KalturaEventNotificationEventType' },
            eventObjectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            eventConditions: { type: 'a', subTypeConstructor: KalturaCondition, subType: 'KalturaCondition' },
            contentParameters: { type: 'a', subTypeConstructor: KalturaEventNotificationParameter, subType: 'KalturaEventNotificationParameter' },
            userParameters: { type: 'a', subTypeConstructor: KalturaEventNotificationParameter, subType: 'KalturaEventNotificationParameter' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.id;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.partnerId;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.name;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.systemName;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.description;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.type;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.status;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.createdAt;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.updatedAt;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.manualDispatchEnabled;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.automaticDispatchEnabled;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.eventType;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.eventObjectType;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.eventConditions;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.contentParameters;
    /** @type {?} */
    KalturaEventNotificationTemplate.prototype.userParameters;
}
typesMappingStorage['KalturaEventNotificationTemplate'] = KalturaEventNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxGLE1BQU0sdUNBQXdDLFNBQVEsaUJBQWlCOzs7O0lBbUJuRSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUNqRixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztLQUN0RTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUNuSSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0NBQXNDLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzFKLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUNsSSxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUNwSixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3pJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQ29uZGl0aW9uJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVR5cGU7XG5cdG1hbnVhbERpc3BhdGNoRW5hYmxlZD8gOiBib29sZWFuO1xuXHRhdXRvbWF0aWNEaXNwYXRjaEVuYWJsZWQ/IDogYm9vbGVhbjtcblx0ZXZlbnRUeXBlPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZTtcblx0ZXZlbnRPYmplY3RUeXBlPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZTtcblx0ZXZlbnRDb25kaXRpb25zPyA6IEthbHR1cmFDb25kaXRpb25bXTtcblx0Y29udGVudFBhcmFtZXRlcnM/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyW107XG5cdHVzZXJQYXJhbWV0ZXJzPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcltdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0bWFudWFsRGlzcGF0Y2hFbmFibGVkIDogYm9vbGVhbjtcblx0YXV0b21hdGljRGlzcGF0Y2hFbmFibGVkIDogYm9vbGVhbjtcblx0ZXZlbnRUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlO1xuXHRldmVudE9iamVjdFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdGV2ZW50Q29uZGl0aW9ucyA6IEthbHR1cmFDb25kaXRpb25bXTtcblx0Y29udGVudFBhcmFtZXRlcnMgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcblx0dXNlclBhcmFtZXRlcnMgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudENvbmRpdGlvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmV2ZW50Q29uZGl0aW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5jb250ZW50UGFyYW1ldGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29udGVudFBhcmFtZXRlcnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMudXNlclBhcmFtZXRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVzZXJQYXJhbWV0ZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU3RhdHVzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtYW51YWxEaXNwYXRjaEVuYWJsZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YXV0b21hdGljRGlzcGF0Y2hFbmFibGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGV2ZW50VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUnIH0sXG5cdFx0XHRcdGV2ZW50T2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdGV2ZW50Q29uZGl0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbmRpdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRjb250ZW50UGFyYW1ldGVycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcicgfSxcblx0XHRcdFx0dXNlclBhcmFtZXRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJ10gPSBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZTsiXX0=