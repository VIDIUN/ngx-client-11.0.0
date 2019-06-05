/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBulkUploadResultScheduleResource extends KalturaBulkUploadResult {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZVJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNqRyxNQUFNLDhDQUErQyxTQUFRLHVCQUF1Qjs7OztJQVdoRixZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0LCBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB7XG4gICAgcmVzb3VyY2VJZD8gOiBzdHJpbmc7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHR0eXBlPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdHBhcmVudFR5cGU/IDogc3RyaW5nO1xuXHRwYXJlbnRTeXN0ZW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZVJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQge1xuXG4gICAgcmVzb3VyY2VJZCA6IHN0cmluZztcblx0bmFtZSA6IHN0cmluZztcblx0dHlwZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHBhcmVudFR5cGUgOiBzdHJpbmc7XG5cdHBhcmVudFN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHJlc291cmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudFN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZVJlc291cmNlJ10gPSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlUmVzb3VyY2U7Il19