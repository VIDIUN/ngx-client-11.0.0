/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';
import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EventNotificationTemplateListTemplatesActionArgs() { }
/** @type {?|undefined} */
EventNotificationTemplateListTemplatesActionArgs.prototype.filter;
/** @type {?|undefined} */
EventNotificationTemplateListTemplatesActionArgs.prototype.pager;
/**
 * Build request payload for service 'eventNotificationTemplate' action 'listTemplates'.
 *
 * Usage: Action lists the template partner event notification templates
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eventNotificationTemplate' action 'listTemplates'.
 *
 * Usage: Action lists the template partner event notification templates
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
EventNotificationTemplateListTemplatesAction = /** @class */ (function (_super) {
    tslib_1.__extends(EventNotificationTemplateListTemplatesAction, _super);
    function EventNotificationTemplateListTemplatesAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEventNotificationTemplateListResponse', responseConstructor: KalturaEventNotificationTemplateListResponse }) || this;
    }
    /**
     * @return {?}
     */
    EventNotificationTemplateListTemplatesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'eventnotification_eventnotificationtemplate' },
            action: { type: 'c', default: 'listTemplates' },
            filter: { type: 'o', subTypeConstructor: KalturaEventNotificationTemplateFilter, subType: 'KalturaEventNotificationTemplateFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return EventNotificationTemplateListTemplatesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eventNotificationTemplate' action 'listTemplates'.
 *
 * Usage: Action lists the template partner event notification templates
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
export { EventNotificationTemplateListTemplatesAction };
if (false) {
    /** @type {?} */
    EventNotificationTemplateListTemplatesAction.prototype.filter;
    /** @type {?} */
    EventNotificationTemplateListTemplatesAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUxpc3RUZW1wbGF0ZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0V2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0VGVtcGxhdGVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFOUcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBa0Usd0VBQTREO0lBSzFILHNEQUFZLElBQXdEO2VBRWhFLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhDQUE4QyxFQUFFLG1CQUFtQixFQUFHLDRDQUE0QyxFQUFHLENBQUM7S0FDNUs7Ozs7SUFFUyxtRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUM3RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDeEksS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1REE1Q0w7RUFxQmtFLGNBQWMsRUF3Qi9FLENBQUE7Ozs7Ozs7OztBQXhCRCx3REF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0VGVtcGxhdGVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZScgYWN0aW9uICdsaXN0VGVtcGxhdGVzJy5cbiAqXG4gKiBVc2FnZTogQWN0aW9uIGxpc3RzIHRoZSB0ZW1wbGF0ZSBwYXJ0bmVyIGV2ZW50IG5vdGlmaWNhdGlvbiB0ZW1wbGF0ZXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUxpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUxpc3RUZW1wbGF0ZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlTGlzdFRlbXBsYXRlc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V2ZW50bm90aWZpY2F0aW9uX2V2ZW50bm90aWZpY2F0aW9udGVtcGxhdGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0VGVtcGxhdGVzJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19