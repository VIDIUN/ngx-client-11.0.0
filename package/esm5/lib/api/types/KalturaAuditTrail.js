/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaAuditTrail = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrail, _super);
    function KalturaAuditTrail(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrail.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaAuditTrail;
}(KalturaObjectBase));
export { KalturaAuditTrail };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdWRpdFRyYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsSUFBQTtJQUF1Qyw2Q0FBaUI7SUEyQnBELDJCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1SCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUM1SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUM5SCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDM0csSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDcEcsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDL0gsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzVDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM1QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN6QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQXpGTDtFQXVCdUMsaUJBQWlCLEVBbUV2RCxDQUFBO0FBbkVELDZCQW1FQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsSW5mbyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxJbmZvJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dCB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxDb250ZXh0JztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXVkaXRUcmFpbEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBhdWRpdE9iamVjdFR5cGU/IDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RJZD8gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RUeXBlPyA6IEthbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZTtcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdGFjdGlvbj8gOiBLYWx0dXJhQXVkaXRUcmFpbEFjdGlvbjtcblx0ZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbEluZm87XG5cdGNsaWVudFRhZz8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWwgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgcGFyc2VkQXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFBdWRpdFRyYWlsU3RhdHVzO1xuXHRhdWRpdE9iamVjdFR5cGUgOiBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0SWQgOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RUeXBlIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBtYXN0ZXJQYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcmVxdWVzdElkIDogc3RyaW5nO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdGFjdGlvbiA6IEthbHR1cmFBdWRpdFRyYWlsQWN0aW9uO1xuXHRkYXRhIDogS2FsdHVyYUF1ZGl0VHJhaWxJbmZvO1xuXHRyZWFkb25seSBrcyA6IHN0cmluZztcblx0cmVhZG9ubHkgY29udGV4dCA6IEthbHR1cmFBdWRpdFRyYWlsQ29udGV4dDtcblx0cmVhZG9ubHkgZW50cnlQb2ludCA6IHN0cmluZztcblx0cmVhZG9ubHkgc2VydmVyTmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgaXBBZGRyZXNzIDogc3RyaW5nO1xuXHRyZWFkb25seSB1c2VyQWdlbnQgOiBzdHJpbmc7XG5cdGNsaWVudFRhZyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBdWRpdFRyYWlsQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnNlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbFN0YXR1cycgfSxcblx0XHRcdFx0YXVkaXRPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVsYXRlZE9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYXN0ZXJQYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZXF1ZXN0SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxBY3Rpb24nIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbEluZm8nIH0sXG5cdFx0XHRcdGtzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y29udGV4dCA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF1ZGl0VHJhaWxDb250ZXh0LCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsQ29udGV4dCcgfSxcblx0XHRcdFx0ZW50cnlQb2ludCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNlcnZlck5hbWUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpcEFkZHJlc3MgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1c2VyQWdlbnQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjbGllbnRUYWcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdWRpdFRyYWlsJ10gPSBLYWx0dXJhQXVkaXRUcmFpbDsiXX0=