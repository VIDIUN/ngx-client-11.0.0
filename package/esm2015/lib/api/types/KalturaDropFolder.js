/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDropFolder extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JsRixNQUFNLHdCQUF5QixTQUFRLGlCQUFpQjs7OztJQStCcEQsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3JHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDekksa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3RJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzNJLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDcEgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVEZWxldGVQb2xpY3kgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm9wRm9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYURyb3BGb2xkZXJUeXBlO1xuXHRzdGF0dXM/IDogS2FsdHVyYURyb3BGb2xkZXJTdGF0dXM7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRkYz8gOiBudW1iZXI7XG5cdHBhdGg/IDogc3RyaW5nO1xuXHRmaWxlU2l6ZUNoZWNrSW50ZXJ2YWw/IDogbnVtYmVyO1xuXHRmaWxlRGVsZXRlUG9saWN5PyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeTtcblx0YXV0b0ZpbGVEZWxldGVEYXlzPyA6IG51bWJlcjtcblx0ZmlsZUhhbmRsZXJUeXBlPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlO1xuXHRmaWxlTmFtZVBhdHRlcm5zPyA6IHN0cmluZztcblx0ZmlsZUhhbmRsZXJDb25maWc/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdGVycm9yQ29kZT8gOiBLYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZTtcblx0ZXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGlnbm9yZUZpbGVOYW1lUGF0dGVybnM/IDogc3RyaW5nO1xuXHRsYXN0QWNjZXNzZWRBdD8gOiBudW1iZXI7XG5cdGluY3JlbWVudGFsPyA6IGJvb2xlYW47XG5cdGxhc3RGaWxlVGltZXN0YW1wPyA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRjYXRlZ29yaWVzTWV0YWRhdGFGaWVsZE5hbWU/IDogc3RyaW5nO1xuXHRlbmZvcmNlRW50aXRsZW1lbnQ/IDogYm9vbGVhbjtcblx0c2hvdWxkVmFsaWRhdGVLUz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYURyb3BGb2xkZXJUeXBlO1xuXHRzdGF0dXMgOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cztcblx0Y29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0ZGMgOiBudW1iZXI7XG5cdHBhdGggOiBzdHJpbmc7XG5cdGZpbGVTaXplQ2hlY2tJbnRlcnZhbCA6IG51bWJlcjtcblx0ZmlsZURlbGV0ZVBvbGljeSA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeTtcblx0YXV0b0ZpbGVEZWxldGVEYXlzIDogbnVtYmVyO1xuXHRmaWxlSGFuZGxlclR5cGUgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZTtcblx0ZmlsZU5hbWVQYXR0ZXJucyA6IHN0cmluZztcblx0ZmlsZUhhbmRsZXJDb25maWcgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRlcnJvckNvZGUgOiBLYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZTtcblx0ZXJyb3JEZXNjcmlwdGlvbiA6IHN0cmluZztcblx0aWdub3JlRmlsZU5hbWVQYXR0ZXJucyA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0bGFzdEFjY2Vzc2VkQXQgOiBudW1iZXI7XG5cdGluY3JlbWVudGFsIDogYm9vbGVhbjtcblx0bGFzdEZpbGVUaW1lc3RhbXAgOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRjYXRlZ29yaWVzTWV0YWRhdGFGaWVsZE5hbWUgOiBzdHJpbmc7XG5cdGVuZm9yY2VFbnRpdGxlbWVudCA6IGJvb2xlYW47XG5cdHNob3VsZFZhbGlkYXRlS1MgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyVHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZUNoZWNrSW50ZXJ2YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZURlbGV0ZVBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZURlbGV0ZVBvbGljeSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVEZWxldGVQb2xpY3knIH0sXG5cdFx0XHRcdGF1dG9GaWxlRGVsZXRlRGF5cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlSGFuZGxlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZScgfSxcblx0XHRcdFx0ZmlsZU5hbWVQYXR0ZXJucyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlSGFuZGxlckNvbmZpZyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZywgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yQ29kZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlJyB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlnbm9yZUZpbGVOYW1lUGF0dGVybnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGFzdEFjY2Vzc2VkQXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW5jcmVtZW50YWwgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bGFzdEZpbGVUaW1lc3RhbXAgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2F0ZWdvcmllc01ldGFkYXRhRmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZm9yY2VFbnRpdGxlbWVudCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzaG91bGRWYWxpZGF0ZUtTIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm9wRm9sZGVyJ10gPSBLYWx0dXJhRHJvcEZvbGRlcjsiXX0=