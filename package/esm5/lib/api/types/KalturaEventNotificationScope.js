/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaScope } from './KalturaScope';
/**
 * @record
 */
export function KalturaEventNotificationScopeArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationScopeArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaEventNotificationScopeArgs.prototype.scopeObjectType;
var KalturaEventNotificationScope = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventNotificationScope, _super);
    function KalturaEventNotificationScope(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEventNotificationScope.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationScope' },
            objectId: { type: 's' },
            scopeObjectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' }
        });
        return result;
    };
    return KalturaEventNotificationScope;
}(KalturaScope));
export { KalturaEventNotificationScope };
if (false) {
    /** @type {?} */
    KalturaEventNotificationScope.prototype.objectId;
    /** @type {?} */
    KalturaEventNotificationScope.prototype.scopeObjectType;
}
typesMappingStorage['KalturaEventNotificationScope'] = KalturaEventNotificationScope;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uU2NvcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblNjb3BlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVFoRSxJQUFBO0lBQW1ELHlEQUFZO0lBSzNELHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVDQUF1QyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtTQUMzSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQWpDTDtFQVdtRCxZQUFZLEVBdUI5RCxDQUFBO0FBdkJELHlDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNjb3BlLCBLYWx0dXJhU2NvcGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2NvcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblNjb3BlQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2NvcGVBcmdzIHtcbiAgICBvYmplY3RJZD8gOiBzdHJpbmc7XG5cdHNjb3BlT2JqZWN0VHlwZT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblNjb3BlIGV4dGVuZHMgS2FsdHVyYVNjb3BlIHtcblxuICAgIG9iamVjdElkIDogc3RyaW5nO1xuXHRzY29wZU9iamVjdFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblNjb3BlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblNjb3BlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY29wZU9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZlbnROb3RpZmljYXRpb25TY29wZSddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uU2NvcGU7Il19