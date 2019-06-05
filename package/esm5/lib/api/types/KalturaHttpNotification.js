/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaHttpNotification = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHttpNotification, _super);
    function KalturaHttpNotification(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaHttpNotification.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaHttpNotification;
}(KalturaObjectBase));
export { KalturaHttpNotification };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixJQUFBO0lBQTZDLG1EQUFpQjtJQVUxRCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQzlGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ3BKLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQ3pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBakRMO0VBaUI2QyxpQkFBaUIsRUFpQzdELENBQUE7QUFqQ0QsbUNBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG9iamVjdD8gOiBLYWx0dXJhT2JqZWN0QmFzZTtcblx0ZXZlbnRPYmplY3RUeXBlPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZTtcblx0ZXZlbnROb3RpZmljYXRpb25Kb2JJZD8gOiBudW1iZXI7XG5cdHRlbXBsYXRlSWQ/IDogbnVtYmVyO1xuXHR0ZW1wbGF0ZU5hbWU/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRldmVudFR5cGU/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIG9iamVjdCA6IEthbHR1cmFPYmplY3RCYXNlO1xuXHRldmVudE9iamVjdFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdGV2ZW50Tm90aWZpY2F0aW9uSm9iSWQgOiBudW1iZXI7XG5cdHRlbXBsYXRlSWQgOiBudW1iZXI7XG5cdHRlbXBsYXRlTmFtZSA6IHN0cmluZztcblx0dGVtcGxhdGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRldmVudFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uJyB9LFxuXHRcdFx0XHRvYmplY3QgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPYmplY3RCYXNlLCBzdWJUeXBlIDogJ0thbHR1cmFPYmplY3RCYXNlJyB9LFxuXHRcdFx0XHRldmVudE9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRldmVudE5vdGlmaWNhdGlvbkpvYklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRlbXBsYXRlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGVtcGxhdGVOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRldmVudFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbiddID0gS2FsdHVyYUh0dHBOb3RpZmljYXRpb247Il19