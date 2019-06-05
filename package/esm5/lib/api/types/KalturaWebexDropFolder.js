/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaWebexDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWebexDropFolder, _super);
    function KalturaWebexDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWebexDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaWebexDropFolder;
}(KalturaDropFolder));
export { KalturaWebexDropFolder };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdlYmV4RHJvcEZvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQi9FLElBQUE7SUFBNEMsa0RBQWlCO0lBYXpELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBeERMO0VBa0I0QyxpQkFBaUIsRUF1QzVELENBQUE7QUF2Q0Qsa0NBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXIsIEthbHR1cmFEcm9wRm9sZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXZWJleERyb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyQXJncyB7XG4gICAgd2ViZXhVc2VySWQ/IDogc3RyaW5nO1xuXHR3ZWJleFBhc3N3b3JkPyA6IHN0cmluZztcblx0d2ViZXhTaXRlSWQ/IDogbnVtYmVyO1xuXHR3ZWJleFBhcnRuZXJJZD8gOiBzdHJpbmc7XG5cdHdlYmV4U2VydmljZVVybD8gOiBzdHJpbmc7XG5cdHdlYmV4SG9zdElkTWV0YWRhdGFGaWVsZE5hbWU/IDogc3RyaW5nO1xuXHRkZWxldGVGcm9tUmVjeWNsZUJpbj8gOiBib29sZWFuO1xuXHR3ZWJleFNlcnZpY2VUeXBlPyA6IHN0cmluZztcblx0d2ViZXhTaXRlTmFtZT8gOiBzdHJpbmc7XG5cdGRlbGV0ZUZyb21UaW1lc3RhbXA/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdlYmV4RHJvcEZvbGRlciBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyIHtcblxuICAgIHdlYmV4VXNlcklkIDogc3RyaW5nO1xuXHR3ZWJleFBhc3N3b3JkIDogc3RyaW5nO1xuXHR3ZWJleFNpdGVJZCA6IG51bWJlcjtcblx0d2ViZXhQYXJ0bmVySWQgOiBzdHJpbmc7XG5cdHdlYmV4U2VydmljZVVybCA6IHN0cmluZztcblx0d2ViZXhIb3N0SWRNZXRhZGF0YUZpZWxkTmFtZSA6IHN0cmluZztcblx0ZGVsZXRlRnJvbVJlY3ljbGVCaW4gOiBib29sZWFuO1xuXHR3ZWJleFNlcnZpY2VUeXBlIDogc3RyaW5nO1xuXHR3ZWJleFNpdGVOYW1lIDogc3RyaW5nO1xuXHRkZWxldGVGcm9tVGltZXN0YW1wIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmV4RHJvcEZvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2ViZXhEcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHR3ZWJleFVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJleFBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdlYmV4U2l0ZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdlYmV4UGFydG5lcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdlYmV4U2VydmljZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJleEhvc3RJZE1ldGFkYXRhRmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlbGV0ZUZyb21SZWN5Y2xlQmluIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHdlYmV4U2VydmljZVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2ViZXhTaXRlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWxldGVGcm9tVGltZXN0YW1wIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXZWJleERyb3BGb2xkZXInXSA9IEthbHR1cmFXZWJleERyb3BGb2xkZXI7Il19