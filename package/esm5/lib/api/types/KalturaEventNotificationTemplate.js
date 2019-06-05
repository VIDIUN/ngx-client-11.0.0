/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaEventNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventNotificationTemplate, _super);
    function KalturaEventNotificationTemplate(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.eventConditions === 'undefined')
            _this.eventConditions = [];
        if (typeof _this.contentParameters === 'undefined')
            _this.contentParameters = [];
        if (typeof _this.userParameters === 'undefined')
            _this.userParameters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEventNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaEventNotificationTemplate;
}(KalturaObjectBase));
export { KalturaEventNotificationTemplate };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJsRixJQUFBO0lBQXNELDREQUFpQjtJQW1CbkUsMENBQVksSUFBNEM7UUFBeEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtRQUhHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUNqRixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzs7S0FDdEU7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0NBQW9DLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ25JLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDMUosU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ2xJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ3BKLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JHLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDekksY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0E5RUw7RUF5QnNELGlCQUFpQixFQXNEdEUsQ0FBQTtBQXRERCw0Q0FzREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmRpdGlvbiB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlO1xuXHRtYW51YWxEaXNwYXRjaEVuYWJsZWQ/IDogYm9vbGVhbjtcblx0YXV0b21hdGljRGlzcGF0Y2hFbmFibGVkPyA6IGJvb2xlYW47XG5cdGV2ZW50VHlwZT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGU7XG5cdGV2ZW50T2JqZWN0VHlwZT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdGV2ZW50Q29uZGl0aW9ucz8gOiBLYWx0dXJhQ29uZGl0aW9uW107XG5cdGNvbnRlbnRQYXJhbWV0ZXJzPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcltdO1xuXHR1c2VyUGFyYW1ldGVycz8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTdGF0dXM7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdG1hbnVhbERpc3BhdGNoRW5hYmxlZCA6IGJvb2xlYW47XG5cdGF1dG9tYXRpY0Rpc3BhdGNoRW5hYmxlZCA6IGJvb2xlYW47XG5cdGV2ZW50VHlwZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50VHlwZTtcblx0ZXZlbnRPYmplY3RUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlO1xuXHRldmVudENvbmRpdGlvbnMgOiBLYWx0dXJhQ29uZGl0aW9uW107XG5cdGNvbnRlbnRQYXJhbWV0ZXJzIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyW107XG5cdHVzZXJQYXJhbWV0ZXJzIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRDb25kaXRpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5ldmVudENvbmRpdGlvbnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuY29udGVudFBhcmFtZXRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNvbnRlbnRQYXJhbWV0ZXJzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnVzZXJQYXJhbWV0ZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy51c2VyUGFyYW1ldGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bWFudWFsRGlzcGF0Y2hFbmFibGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGF1dG9tYXRpY0Rpc3BhdGNoRW5hYmxlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRldmVudFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlJyB9LFxuXHRcdFx0XHRldmVudE9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRldmVudENvbmRpdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb25kaXRpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUNvbmRpdGlvbicgfSxcblx0XHRcdFx0Y29udGVudFBhcmFtZXRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHVzZXJQYXJhbWV0ZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGU7Il19