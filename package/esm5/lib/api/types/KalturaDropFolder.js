/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderStatus } from './KalturaDropFolderStatus';
import { KalturaDropFolderFileDeletePolicy } from './KalturaDropFolderFileDeletePolicy';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
import { KalturaDropFolderErrorCode } from './KalturaDropFolderErrorCode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDropFolderArgs() { }
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.name;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.description;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.type;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.status;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.dc;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.path;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.fileSizeCheckInterval;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.fileDeletePolicy;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.autoFileDeleteDays;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.fileHandlerType;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.fileNamePatterns;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.fileHandlerConfig;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.tags;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.errorDescription;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.ignoreFileNamePatterns;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.lastAccessedAt;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.incremental;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.lastFileTimestamp;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.categoriesMetadataFieldName;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.enforceEntitlement;
/** @type {?|undefined} */
KalturaDropFolderArgs.prototype.shouldValidateKS;
var KalturaDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolder, _super);
    function KalturaDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolder' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n' },
            name: { type: 's' },
            description: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaDropFolderType, subType: 'KalturaDropFolderType' },
            status: { type: 'en', subTypeConstructor: KalturaDropFolderStatus, subType: 'KalturaDropFolderStatus' },
            conversionProfileId: { type: 'n' },
            dc: { type: 'n' },
            path: { type: 's' },
            fileSizeCheckInterval: { type: 'n' },
            fileDeletePolicy: { type: 'en', subTypeConstructor: KalturaDropFolderFileDeletePolicy, subType: 'KalturaDropFolderFileDeletePolicy' },
            autoFileDeleteDays: { type: 'n' },
            fileHandlerType: { type: 'es', subTypeConstructor: KalturaDropFolderFileHandlerType, subType: 'KalturaDropFolderFileHandlerType' },
            fileNamePatterns: { type: 's' },
            fileHandlerConfig: { type: 'o', subTypeConstructor: KalturaDropFolderFileHandlerConfig, subType: 'KalturaDropFolderFileHandlerConfig' },
            tags: { type: 's' },
            errorCode: { type: 'es', subTypeConstructor: KalturaDropFolderErrorCode, subType: 'KalturaDropFolderErrorCode' },
            errorDescription: { type: 's' },
            ignoreFileNamePatterns: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            lastAccessedAt: { type: 'n' },
            incremental: { type: 'b' },
            lastFileTimestamp: { type: 'n' },
            metadataProfileId: { type: 'n' },
            categoriesMetadataFieldName: { type: 's' },
            enforceEntitlement: { type: 'b' },
            shouldValidateKS: { type: 'b' }
        });
        return result;
    };
    return KalturaDropFolder;
}(KalturaObjectBase));
export { KalturaDropFolder };
if (false) {
    /** @type {?} */
    KalturaDropFolder.prototype.id;
    /** @type {?} */
    KalturaDropFolder.prototype.partnerId;
    /** @type {?} */
    KalturaDropFolder.prototype.name;
    /** @type {?} */
    KalturaDropFolder.prototype.description;
    /** @type {?} */
    KalturaDropFolder.prototype.type;
    /** @type {?} */
    KalturaDropFolder.prototype.status;
    /** @type {?} */
    KalturaDropFolder.prototype.conversionProfileId;
    /** @type {?} */
    KalturaDropFolder.prototype.dc;
    /** @type {?} */
    KalturaDropFolder.prototype.path;
    /** @type {?} */
    KalturaDropFolder.prototype.fileSizeCheckInterval;
    /** @type {?} */
    KalturaDropFolder.prototype.fileDeletePolicy;
    /** @type {?} */
    KalturaDropFolder.prototype.autoFileDeleteDays;
    /** @type {?} */
    KalturaDropFolder.prototype.fileHandlerType;
    /** @type {?} */
    KalturaDropFolder.prototype.fileNamePatterns;
    /** @type {?} */
    KalturaDropFolder.prototype.fileHandlerConfig;
    /** @type {?} */
    KalturaDropFolder.prototype.tags;
    /** @type {?} */
    KalturaDropFolder.prototype.errorCode;
    /** @type {?} */
    KalturaDropFolder.prototype.errorDescription;
    /** @type {?} */
    KalturaDropFolder.prototype.ignoreFileNamePatterns;
    /** @type {?} */
    KalturaDropFolder.prototype.createdAt;
    /** @type {?} */
    KalturaDropFolder.prototype.updatedAt;
    /** @type {?} */
    KalturaDropFolder.prototype.lastAccessedAt;
    /** @type {?} */
    KalturaDropFolder.prototype.incremental;
    /** @type {?} */
    KalturaDropFolder.prototype.lastFileTimestamp;
    /** @type {?} */
    KalturaDropFolder.prototype.metadataProfileId;
    /** @type {?} */
    KalturaDropFolder.prototype.categoriesMetadataFieldName;
    /** @type {?} */
    KalturaDropFolder.prototype.enforceEntitlement;
    /** @type {?} */
    KalturaDropFolder.prototype.shouldValidateKS;
}
typesMappingStorage['KalturaDropFolder'] = KalturaDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCbEYsSUFBQTtJQUF1Qyw2Q0FBaUI7SUErQnBELDJCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3JHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDekksa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3RJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzNJLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDcEgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBakhMO0VBdUN1QyxpQkFBaUIsRUEyRXZELENBQUE7QUEzRUQsNkJBMkVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlRGVsZXRlUG9saWN5JztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhRHJvcEZvbGRlclR5cGU7XG5cdHN0YXR1cz8gOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cztcblx0Y29udmVyc2lvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGRjPyA6IG51bWJlcjtcblx0cGF0aD8gOiBzdHJpbmc7XG5cdGZpbGVTaXplQ2hlY2tJbnRlcnZhbD8gOiBudW1iZXI7XG5cdGZpbGVEZWxldGVQb2xpY3k/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlRGVsZXRlUG9saWN5O1xuXHRhdXRvRmlsZURlbGV0ZURheXM/IDogbnVtYmVyO1xuXHRmaWxlSGFuZGxlclR5cGU/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGU7XG5cdGZpbGVOYW1lUGF0dGVybnM/IDogc3RyaW5nO1xuXHRmaWxlSGFuZGxlckNvbmZpZz8gOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnO1xuXHR0YWdzPyA6IHN0cmluZztcblx0ZXJyb3JDb2RlPyA6IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0aWdub3JlRmlsZU5hbWVQYXR0ZXJucz8gOiBzdHJpbmc7XG5cdGxhc3RBY2Nlc3NlZEF0PyA6IG51bWJlcjtcblx0aW5jcmVtZW50YWw/IDogYm9vbGVhbjtcblx0bGFzdEZpbGVUaW1lc3RhbXA/IDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGNhdGVnb3JpZXNNZXRhZGF0YUZpZWxkTmFtZT8gOiBzdHJpbmc7XG5cdGVuZm9yY2VFbnRpdGxlbWVudD8gOiBib29sZWFuO1xuXHRzaG91bGRWYWxpZGF0ZUtTPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGU7XG5cdHN0YXR1cyA6IEthbHR1cmFEcm9wRm9sZGVyU3RhdHVzO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRkYyA6IG51bWJlcjtcblx0cGF0aCA6IHN0cmluZztcblx0ZmlsZVNpemVDaGVja0ludGVydmFsIDogbnVtYmVyO1xuXHRmaWxlRGVsZXRlUG9saWN5IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlRGVsZXRlUG9saWN5O1xuXHRhdXRvRmlsZURlbGV0ZURheXMgOiBudW1iZXI7XG5cdGZpbGVIYW5kbGVyVHlwZSA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlO1xuXHRmaWxlTmFtZVBhdHRlcm5zIDogc3RyaW5nO1xuXHRmaWxlSGFuZGxlckNvbmZpZyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdGVycm9yQ29kZSA6IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlO1xuXHRlcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRpZ25vcmVGaWxlTmFtZVBhdHRlcm5zIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRsYXN0QWNjZXNzZWRBdCA6IG51bWJlcjtcblx0aW5jcmVtZW50YWwgOiBib29sZWFuO1xuXHRsYXN0RmlsZVRpbWVzdGFtcCA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdGNhdGVnb3JpZXNNZXRhZGF0YUZpZWxkTmFtZSA6IHN0cmluZztcblx0ZW5mb3JjZUVudGl0bGVtZW50IDogYm9vbGVhbjtcblx0c2hvdWxkVmFsaWRhdGVLUyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlclN0YXR1cycgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkYyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVTaXplQ2hlY2tJbnRlcnZhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlRGVsZXRlUG9saWN5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlRGVsZXRlUG9saWN5LCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeScgfSxcblx0XHRcdFx0YXV0b0ZpbGVEZWxldGVEYXlzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVIYW5kbGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlJyB9LFxuXHRcdFx0XHRmaWxlTmFtZVBhdHRlcm5zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVIYW5kbGVyQ29uZmlnIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JDb2RlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWdub3JlRmlsZU5hbWVQYXR0ZXJucyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsYXN0QWNjZXNzZWRBdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpbmNyZW1lbnRhbCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRsYXN0RmlsZVRpbWVzdGFtcCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjYXRlZ29yaWVzTWV0YWRhdGFGaWVsZE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5mb3JjZUVudGl0bGVtZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHNob3VsZFZhbGlkYXRlS1MgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURyb3BGb2xkZXInXSA9IEthbHR1cmFEcm9wRm9sZGVyOyJdfQ==