/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAuditTrailArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.auditObjectType;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.relatedObjectId;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.relatedObjectType;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.userId;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.action;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.data;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.clientTag;
/** @type {?|undefined} */
KalturaAuditTrailArgs.prototype.description;
export class KalturaAuditTrail extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaAuditTrail' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            parsedAt: { type: 'n', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaAuditTrailStatus, subType: 'KalturaAuditTrailStatus' },
            auditObjectType: { type: 'es', subTypeConstructor: KalturaAuditTrailObjectType, subType: 'KalturaAuditTrailObjectType' },
            objectId: { type: 's' },
            relatedObjectId: { type: 's' },
            relatedObjectType: { type: 'es', subTypeConstructor: KalturaAuditTrailObjectType, subType: 'KalturaAuditTrailObjectType' },
            entryId: { type: 's' },
            masterPartnerId: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            requestId: { type: 's', readOnly: true },
            userId: { type: 's' },
            action: { type: 'es', subTypeConstructor: KalturaAuditTrailAction, subType: 'KalturaAuditTrailAction' },
            data: { type: 'o', subTypeConstructor: KalturaAuditTrailInfo, subType: 'KalturaAuditTrailInfo' },
            ks: { type: 's', readOnly: true },
            context: { type: 'en', readOnly: true, subTypeConstructor: KalturaAuditTrailContext, subType: 'KalturaAuditTrailContext' },
            entryPoint: { type: 's', readOnly: true },
            serverName: { type: 's', readOnly: true },
            ipAddress: { type: 's', readOnly: true },
            userAgent: { type: 's', readOnly: true },
            clientTag: { type: 's' },
            description: { type: 's' },
            errorDescription: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuditTrail.prototype.id;
    /** @type {?} */
    KalturaAuditTrail.prototype.createdAt;
    /** @type {?} */
    KalturaAuditTrail.prototype.parsedAt;
    /** @type {?} */
    KalturaAuditTrail.prototype.status;
    /** @type {?} */
    KalturaAuditTrail.prototype.auditObjectType;
    /** @type {?} */
    KalturaAuditTrail.prototype.objectId;
    /** @type {?} */
    KalturaAuditTrail.prototype.relatedObjectId;
    /** @type {?} */
    KalturaAuditTrail.prototype.relatedObjectType;
    /** @type {?} */
    KalturaAuditTrail.prototype.entryId;
    /** @type {?} */
    KalturaAuditTrail.prototype.masterPartnerId;
    /** @type {?} */
    KalturaAuditTrail.prototype.partnerId;
    /** @type {?} */
    KalturaAuditTrail.prototype.requestId;
    /** @type {?} */
    KalturaAuditTrail.prototype.userId;
    /** @type {?} */
    KalturaAuditTrail.prototype.action;
    /** @type {?} */
    KalturaAuditTrail.prototype.data;
    /** @type {?} */
    KalturaAuditTrail.prototype.ks;
    /** @type {?} */
    KalturaAuditTrail.prototype.context;
    /** @type {?} */
    KalturaAuditTrail.prototype.entryPoint;
    /** @type {?} */
    KalturaAuditTrail.prototype.serverName;
    /** @type {?} */
    KalturaAuditTrail.prototype.ipAddress;
    /** @type {?} */
    KalturaAuditTrail.prototype.userAgent;
    /** @type {?} */
    KalturaAuditTrail.prototype.clientTag;
    /** @type {?} */
    KalturaAuditTrail.prototype.description;
    /** @type {?} */
    KalturaAuditTrail.prototype.errorDescription;
}
typesMappingStorage['KalturaAuditTrail'] = KalturaAuditTrail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdWRpdFRyYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRixNQUFNLHdCQUF5QixTQUFRLGlCQUFpQjs7OztJQTJCcEQsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1SCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUM1SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUM5SCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDM0csSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDcEcsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDL0gsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzVDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM1QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN6QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbEFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbEluZm8gfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQ29udGV4dCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1ZGl0VHJhaWxBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYXVkaXRPYmplY3RUeXBlPyA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZTtcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0VHlwZT8gOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRhY3Rpb24/IDogS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb247XG5cdGRhdGE/IDogS2FsdHVyYUF1ZGl0VHJhaWxJbmZvO1xuXHRjbGllbnRUYWc/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdWRpdFRyYWlsIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHBhcnNlZEF0IDogbnVtYmVyO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cztcblx0YXVkaXRPYmplY3RUeXBlIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0cmVsYXRlZE9iamVjdElkIDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0VHlwZSA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZTtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgbWFzdGVyUGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHJlcXVlc3RJZCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHRhY3Rpb24gOiBLYWx0dXJhQXVkaXRUcmFpbEFjdGlvbjtcblx0ZGF0YSA6IEthbHR1cmFBdWRpdFRyYWlsSW5mbztcblx0cmVhZG9ubHkga3MgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNvbnRleHQgOiBLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQ7XG5cdHJlYWRvbmx5IGVudHJ5UG9pbnQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHNlcnZlck5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGlwQWRkcmVzcyA6IHN0cmluZztcblx0cmVhZG9ubHkgdXNlckFnZW50IDogc3RyaW5nO1xuXHRjbGllbnRUYWcgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBlcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXVkaXRUcmFpbCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJzZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMnIH0sXG5cdFx0XHRcdGF1ZGl0T2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWxhdGVkT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWFzdGVyUGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVxdWVzdElkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsQWN0aW9uJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbEluZm8sIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxJbmZvJyB9LFxuXHRcdFx0XHRrcyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNvbnRleHQgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dCwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbENvbnRleHQnIH0sXG5cdFx0XHRcdGVudHJ5UG9pbnQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzZXJ2ZXJOYW1lIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXBBZGRyZXNzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlckFnZW50IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y2xpZW50VGFnIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXVkaXRUcmFpbCddID0gS2FsdHVyYUF1ZGl0VHJhaWw7Il19