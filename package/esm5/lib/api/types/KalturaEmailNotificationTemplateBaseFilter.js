/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
/**
 * @record
 */
export function KalturaEmailNotificationTemplateBaseFilterArgs() { }
var KalturaEmailNotificationTemplateBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationTemplateBaseFilter, _super);
    function KalturaEmailNotificationTemplateBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationTemplateBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationTemplateBaseFilter' }
        });
        return result;
    };
    return KalturaEmailNotificationTemplateBaseFilter;
}(KalturaEventNotificationTemplateFilter));
export { KalturaEmailNotificationTemplateBaseFilter };
typesMappingStorage['KalturaEmailNotificationTemplateBaseFilter'] = KalturaEmailNotificationTemplateBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQU85SSxJQUFBO0lBQWdFLHNFQUFzQztJQUlsRyxvREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBNUJMO0VBU2dFLHNDQUFzQyxFQW9CckcsQ0FBQTtBQXBCRCxzREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlQmFzZUZpbHRlcjsiXX0=