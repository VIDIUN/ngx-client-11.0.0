/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaEventNotificationTemplateListResponseArgs() { }
var KalturaEventNotificationTemplateListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventNotificationTemplateListResponse, _super);
    function KalturaEventNotificationTemplateListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEventNotificationTemplateListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationTemplateListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaEventNotificationTemplate, subType: 'KalturaEventNotificationTemplate' }
        });
        return result;
    };
    return KalturaEventNotificationTemplateListResponse;
}(KalturaListResponse));
export { KalturaEventNotificationTemplateListResponse };
if (false) {
    /** @type {?} */
    KalturaEventNotificationTemplateListResponse.prototype.objects;
}
typesMappingStorage['KalturaEventNotificationTemplateListResponse'] = KalturaEventNotificationTemplateListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFPckYsSUFBQTtJQUFrRSx3RUFBbUI7SUFJakYsc0RBQVksSUFBd0Q7UUFBcEUsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyxtRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4Q0FBOEMsRUFBRTtZQUNqRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3JJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dURBL0JMO0VBVWtFLG1CQUFtQixFQXNCcEYsQ0FBQTtBQXRCRCx3REFzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOENBQThDLENBQUMsR0FBRyw0Q0FBNEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuaW1wb3J0IHsgS2FsdHVyYUxpc3RSZXNwb25zZSwgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXN0UmVzcG9uc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3RzID09PSAndW5kZWZpbmVkJykgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUxpc3RSZXNwb25zZTsiXX0=