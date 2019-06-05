/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAuditTrailBaseFilter extends KalturaRelatedFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ3hGLE1BQU0sa0NBQW1DLFNBQVEsb0JBQW9COzs7O0lBd0NqRSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFB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LDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbEFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQ29udGV4dCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHBhcnNlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cGFyc2VkQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRhdWRpdE9iamVjdFR5cGVFcXVhbD8gOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdGF1ZGl0T2JqZWN0VHlwZUluPyA6IHN0cmluZztcblx0b2JqZWN0SWRFcXVhbD8gOiBzdHJpbmc7XG5cdG9iamVjdElkSW4/IDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RJZEluPyA6IHN0cmluZztcblx0cmVsYXRlZE9iamVjdFR5cGVFcXVhbD8gOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdHJlbGF0ZWRPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkSW4/IDogc3RyaW5nO1xuXHRtYXN0ZXJQYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdG1hc3RlclBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdHJlcXVlc3RJZEVxdWFsPyA6IHN0cmluZztcblx0cmVxdWVzdElkSW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0YWN0aW9uRXF1YWw/IDogS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb247XG5cdGFjdGlvbkluPyA6IHN0cmluZztcblx0a3NFcXVhbD8gOiBzdHJpbmc7XG5cdGNvbnRleHRFcXVhbD8gOiBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQ7XG5cdGNvbnRleHRJbj8gOiBzdHJpbmc7XG5cdGVudHJ5UG9pbnRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5UG9pbnRJbj8gOiBzdHJpbmc7XG5cdHNlcnZlck5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHNlcnZlck5hbWVJbj8gOiBzdHJpbmc7XG5cdGlwQWRkcmVzc0VxdWFsPyA6IHN0cmluZztcblx0aXBBZGRyZXNzSW4/IDogc3RyaW5nO1xuXHRjbGllbnRUYWdFcXVhbD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdWRpdFRyYWlsQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHBhcnNlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJzZWRBdExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGF1ZGl0T2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlO1xuXHRhdWRpdE9iamVjdFR5cGVJbiA6IHN0cmluZztcblx0b2JqZWN0SWRFcXVhbCA6IHN0cmluZztcblx0b2JqZWN0SWRJbiA6IHN0cmluZztcblx0cmVsYXRlZE9iamVjdElkRXF1YWwgOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RJZEluIDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlO1xuXHRyZWxhdGVkT2JqZWN0VHlwZUluIDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGVudHJ5SWRJbiA6IHN0cmluZztcblx0bWFzdGVyUGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdG1hc3RlclBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdHJlcXVlc3RJZEVxdWFsIDogc3RyaW5nO1xuXHRyZXF1ZXN0SWRJbiA6IHN0cmluZztcblx0dXNlcklkRXF1YWwgOiBzdHJpbmc7XG5cdHVzZXJJZEluIDogc3RyaW5nO1xuXHRhY3Rpb25FcXVhbCA6IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uO1xuXHRhY3Rpb25JbiA6IHN0cmluZztcblx0a3NFcXVhbCA6IHN0cmluZztcblx0Y29udGV4dEVxdWFsIDogS2FsdHVyYUF1ZGl0VHJhaWxDb250ZXh0O1xuXHRjb250ZXh0SW4gOiBzdHJpbmc7XG5cdGVudHJ5UG9pbnRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlQb2ludEluIDogc3RyaW5nO1xuXHRzZXJ2ZXJOYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHNlcnZlck5hbWVJbiA6IHN0cmluZztcblx0aXBBZGRyZXNzRXF1YWwgOiBzdHJpbmc7XG5cdGlwQWRkcmVzc0luIDogc3RyaW5nO1xuXHRjbGllbnRUYWdFcXVhbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHBhcnNlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnNlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1ZGl0T2JqZWN0VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0YXVkaXRPYmplY3RUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRyZWxhdGVkT2JqZWN0VHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWFzdGVyUGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWFzdGVyUGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVxdWVzdElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVxdWVzdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWN0aW9uRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbEFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbEFjdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a3NFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZXh0RXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxDb250ZXh0JyB9LFxuXHRcdFx0XHRjb250ZXh0SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlQb2ludEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5UG9pbnRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJOYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVyTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlwQWRkcmVzc0VxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlwQWRkcmVzc0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNsaWVudFRhZ0VxdWFsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdWRpdFRyYWlsQmFzZUZpbHRlciddID0gS2FsdHVyYUF1ZGl0VHJhaWxCYXNlRmlsdGVyOyJdfQ==