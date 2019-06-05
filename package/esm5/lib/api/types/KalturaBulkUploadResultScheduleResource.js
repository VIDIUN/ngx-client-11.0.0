/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultScheduleResourceArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.resourceId;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.name;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.type;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.tags;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.parentType;
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleResourceArgs.prototype.parentSystemName;
var KalturaBulkUploadResultScheduleResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultScheduleResource, _super);
    function KalturaBulkUploadResultScheduleResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultScheduleResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultScheduleResource' },
            resourceId: { type: 's' },
            name: { type: 's' },
            type: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            parentType: { type: 's' },
            parentSystemName: { type: 's' }
        });
        return result;
    };
    return KalturaBulkUploadResultScheduleResource;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultScheduleResource };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.resourceId;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.name;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.type;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.systemName;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.description;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.tags;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.parentType;
    /** @type {?} */
    KalturaBulkUploadResultScheduleResource.prototype.parentSystemName;
}
typesMappingStorage['KalturaBulkUploadResultScheduleResource'] = KalturaBulkUploadResultScheduleResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZVJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakcsSUFBQTtJQUE2RCxtRUFBdUI7SUFXaEYsaURBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQWxETDtFQWdCNkQsdUJBQXVCLEVBbUNuRixDQUFBO0FBbkNELG1EQW1DQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQsIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVSZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIHtcbiAgICByZXNvdXJjZUlkPyA6IHN0cmluZztcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHR5cGU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0cGFyZW50VHlwZT8gOiBzdHJpbmc7XG5cdHBhcmVudFN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCB7XG5cbiAgICByZXNvdXJjZUlkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHR0eXBlIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0cGFyZW50VHlwZSA6IHN0cmluZztcblx0cGFyZW50U3lzdGVtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZVJlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVSZXNvdXJjZScgfSxcblx0XHRcdFx0cmVzb3VyY2VJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudFR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50U3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2UnXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVSZXNvdXJjZTsiXX0=