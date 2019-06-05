/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
/**
 * @record
 */
export function KalturaWebexDropFolderArgs() { }
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexUserId;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexPassword;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexSiteId;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexPartnerId;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexServiceUrl;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexHostIdMetadataFieldName;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.deleteFromRecycleBin;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexServiceType;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.webexSiteName;
/** @type {?|undefined} */
KalturaWebexDropFolderArgs.prototype.deleteFromTimestamp;
export class KalturaWebexDropFolder extends KalturaDropFolder {
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
            objectType: { type: 'c', default: 'KalturaWebexDropFolder' },
            webexUserId: { type: 's' },
            webexPassword: { type: 's' },
            webexSiteId: { type: 'n' },
            webexPartnerId: { type: 's' },
            webexServiceUrl: { type: 's' },
            webexHostIdMetadataFieldName: { type: 's' },
            deleteFromRecycleBin: { type: 'b' },
            webexServiceType: { type: 's' },
            webexSiteName: { type: 's' },
            deleteFromTimestamp: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexUserId;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexPassword;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexSiteId;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexPartnerId;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexServiceUrl;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexHostIdMetadataFieldName;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.deleteFromRecycleBin;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexServiceType;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.webexSiteName;
    /** @type {?} */
    KalturaWebexDropFolder.prototype.deleteFromTimestamp;
}
typesMappingStorage['KalturaWebexDropFolder'] = KalturaWebexDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdlYmV4RHJvcEZvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCL0UsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFhekQsWUFBWSxJQUFrQztRQUUxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyLCBLYWx0dXJhRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckFyZ3Mge1xuICAgIHdlYmV4VXNlcklkPyA6IHN0cmluZztcblx0d2ViZXhQYXNzd29yZD8gOiBzdHJpbmc7XG5cdHdlYmV4U2l0ZUlkPyA6IG51bWJlcjtcblx0d2ViZXhQYXJ0bmVySWQ/IDogc3RyaW5nO1xuXHR3ZWJleFNlcnZpY2VVcmw/IDogc3RyaW5nO1xuXHR3ZWJleEhvc3RJZE1ldGFkYXRhRmllbGROYW1lPyA6IHN0cmluZztcblx0ZGVsZXRlRnJvbVJlY3ljbGVCaW4/IDogYm9vbGVhbjtcblx0d2ViZXhTZXJ2aWNlVHlwZT8gOiBzdHJpbmc7XG5cdHdlYmV4U2l0ZU5hbWU/IDogc3RyaW5nO1xuXHRkZWxldGVGcm9tVGltZXN0YW1wPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXZWJleERyb3BGb2xkZXIgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlciB7XG5cbiAgICB3ZWJleFVzZXJJZCA6IHN0cmluZztcblx0d2ViZXhQYXNzd29yZCA6IHN0cmluZztcblx0d2ViZXhTaXRlSWQgOiBudW1iZXI7XG5cdHdlYmV4UGFydG5lcklkIDogc3RyaW5nO1xuXHR3ZWJleFNlcnZpY2VVcmwgOiBzdHJpbmc7XG5cdHdlYmV4SG9zdElkTWV0YWRhdGFGaWVsZE5hbWUgOiBzdHJpbmc7XG5cdGRlbGV0ZUZyb21SZWN5Y2xlQmluIDogYm9vbGVhbjtcblx0d2ViZXhTZXJ2aWNlVHlwZSA6IHN0cmluZztcblx0d2ViZXhTaXRlTmFtZSA6IHN0cmluZztcblx0ZGVsZXRlRnJvbVRpbWVzdGFtcCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXZWJleERyb3BGb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmV4RHJvcEZvbGRlcicgfSxcblx0XHRcdFx0d2ViZXhVc2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2ViZXhQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJleFNpdGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3ZWJleFBhcnRuZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJleFNlcnZpY2VVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2ViZXhIb3N0SWRNZXRhZGF0YUZpZWxkTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWxldGVGcm9tUmVjeWNsZUJpbiA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHR3ZWJleFNlcnZpY2VUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdlYmV4U2l0ZU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVsZXRlRnJvbVRpbWVzdGFtcCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2ViZXhEcm9wRm9sZGVyJ10gPSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyOyJdfQ==