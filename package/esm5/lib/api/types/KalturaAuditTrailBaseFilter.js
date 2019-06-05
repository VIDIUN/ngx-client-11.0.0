/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaAuditTrailBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.parsedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.parsedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.auditObjectTypeEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.auditObjectTypeIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.objectIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.objectIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.relatedObjectIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.relatedObjectIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.relatedObjectTypeEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.relatedObjectTypeIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.masterPartnerIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.masterPartnerIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.requestIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.requestIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.actionEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.actionIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.ksEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.contextEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.contextIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.entryPointEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.entryPointIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.serverNameEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.serverNameIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.ipAddressEqual;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.ipAddressIn;
/** @type {?|undefined} */
KalturaAuditTrailBaseFilterArgs.prototype.clientTagEqual;
var KalturaAuditTrailBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailBaseFilter, _super);
    function KalturaAuditTrailBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailBaseFilter' },
            idEqual: { type: 'n' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            parsedAtGreaterThanOrEqual: { type: 'n' },
            parsedAtLessThanOrEqual: { type: 'n' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaAuditTrailStatus, subType: 'KalturaAuditTrailStatus' },
            statusIn: { type: 's' },
            auditObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaAuditTrailObjectType, subType: 'KalturaAuditTrailObjectType' },
            auditObjectTypeIn: { type: 's' },
            objectIdEqual: { type: 's' },
            objectIdIn: { type: 's' },
            relatedObjectIdEqual: { type: 's' },
            relatedObjectIdIn: { type: 's' },
            relatedObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaAuditTrailObjectType, subType: 'KalturaAuditTrailObjectType' },
            relatedObjectTypeIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            masterPartnerIdEqual: { type: 'n' },
            masterPartnerIdIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            requestIdEqual: { type: 's' },
            requestIdIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            actionEqual: { type: 'es', subTypeConstructor: KalturaAuditTrailAction, subType: 'KalturaAuditTrailAction' },
            actionIn: { type: 's' },
            ksEqual: { type: 's' },
            contextEqual: { type: 'en', subTypeConstructor: KalturaAuditTrailContext, subType: 'KalturaAuditTrailContext' },
            contextIn: { type: 's' },
            entryPointEqual: { type: 's' },
            entryPointIn: { type: 's' },
            serverNameEqual: { type: 's' },
            serverNameIn: { type: 's' },
            ipAddressEqual: { type: 's' },
            ipAddressIn: { type: 's' },
            clientTagEqual: { type: 's' }
        });
        return result;
    };
    return KalturaAuditTrailBaseFilter;
}(KalturaRelatedFilter));
export { KalturaAuditTrailBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.parsedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.parsedAtLessThanOrEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.auditObjectTypeEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.auditObjectTypeIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.objectIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.objectIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.relatedObjectIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.relatedObjectIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.relatedObjectTypeEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.relatedObjectTypeIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.masterPartnerIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.masterPartnerIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.requestIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.requestIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.actionEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.actionIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.ksEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.contextEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.contextIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.entryPointEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.entryPointIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.serverNameEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.serverNameIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.ipAddressEqual;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.ipAddressIn;
    /** @type {?} */
    KalturaAuditTrailBaseFilter.prototype.clientTagEqual;
}
typesMappingStorage['KalturaAuditTrailBaseFilter'] = KalturaAuditTrailBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkN4RixJQUFBO0lBQWlELHVEQUFvQjtJQXdDakUscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7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Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dCB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxDb250ZXh0JztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXVkaXRUcmFpbEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0cGFyc2VkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJzZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFBdWRpdFRyYWlsU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGF1ZGl0T2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZTtcblx0YXVkaXRPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xuXHRvYmplY3RJZEVxdWFsPyA6IHN0cmluZztcblx0b2JqZWN0SWRJbj8gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RJZEVxdWFsPyA6IHN0cmluZztcblx0cmVsYXRlZE9iamVjdElkSW4/IDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZTtcblx0cmVsYXRlZE9iamVjdFR5cGVJbj8gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRJbj8gOiBzdHJpbmc7XG5cdG1hc3RlclBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0bWFzdGVyUGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0cmVxdWVzdElkRXF1YWw/IDogc3RyaW5nO1xuXHRyZXF1ZXN0SWRJbj8gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0dXNlcklkSW4/IDogc3RyaW5nO1xuXHRhY3Rpb25FcXVhbD8gOiBLYWx0dXJhQXVkaXRUcmFpbEFjdGlvbjtcblx0YWN0aW9uSW4/IDogc3RyaW5nO1xuXHRrc0VxdWFsPyA6IHN0cmluZztcblx0Y29udGV4dEVxdWFsPyA6IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dDtcblx0Y29udGV4dEluPyA6IHN0cmluZztcblx0ZW50cnlQb2ludEVxdWFsPyA6IHN0cmluZztcblx0ZW50cnlQb2ludEluPyA6IHN0cmluZztcblx0c2VydmVyTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c2VydmVyTmFtZUluPyA6IHN0cmluZztcblx0aXBBZGRyZXNzRXF1YWw/IDogc3RyaW5nO1xuXHRpcEFkZHJlc3NJbj8gOiBzdHJpbmc7XG5cdGNsaWVudFRhZ0VxdWFsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cGFyc2VkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBhcnNlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFBdWRpdFRyYWlsU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0YXVkaXRPYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdGF1ZGl0T2JqZWN0VHlwZUluIDogc3RyaW5nO1xuXHRvYmplY3RJZEVxdWFsIDogc3RyaW5nO1xuXHRvYmplY3RJZEluIDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0SWRFcXVhbCA6IHN0cmluZztcblx0cmVsYXRlZE9iamVjdElkSW4gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdHJlbGF0ZWRPYmplY3RUeXBlSW4gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlJZEluIDogc3RyaW5nO1xuXHRtYXN0ZXJQYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0bWFzdGVyUGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbiA6IHN0cmluZztcblx0cmVxdWVzdElkRXF1YWwgOiBzdHJpbmc7XG5cdHJlcXVlc3RJZEluIDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbCA6IHN0cmluZztcblx0dXNlcklkSW4gOiBzdHJpbmc7XG5cdGFjdGlvbkVxdWFsIDogS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb247XG5cdGFjdGlvbkluIDogc3RyaW5nO1xuXHRrc0VxdWFsIDogc3RyaW5nO1xuXHRjb250ZXh0RXF1YWwgOiBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQ7XG5cdGNvbnRleHRJbiA6IHN0cmluZztcblx0ZW50cnlQb2ludEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeVBvaW50SW4gOiBzdHJpbmc7XG5cdHNlcnZlck5hbWVFcXVhbCA6IHN0cmluZztcblx0c2VydmVyTmFtZUluIDogc3RyaW5nO1xuXHRpcEFkZHJlc3NFcXVhbCA6IHN0cmluZztcblx0aXBBZGRyZXNzSW4gOiBzdHJpbmc7XG5cdGNsaWVudFRhZ0VxdWFsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cGFyc2VkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFyc2VkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXVkaXRPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRhdWRpdE9iamVjdFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVsYXRlZE9iamVjdElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVsYXRlZE9iamVjdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVsYXRlZE9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYXN0ZXJQYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtYXN0ZXJQYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXF1ZXN0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXF1ZXN0SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY3Rpb25FcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsQWN0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb25JbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRrc0VxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRleHRFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dCwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQnIH0sXG5cdFx0XHRcdGNvbnRleHRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeVBvaW50RXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlQb2ludEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlck5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJOYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXBBZGRyZXNzRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXBBZGRyZXNzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2xpZW50VGFnRXF1YWwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQXVkaXRUcmFpbEJhc2VGaWx0ZXI7Il19