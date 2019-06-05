/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDropFolderFileArgs() { }
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.dropFolderId;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.fileName;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.fileSize;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.parsedSlug;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.parsedFlavor;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.parsedUserId;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.leadDropFolderFileId;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.deletedDropFolderFileId;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.errorDescription;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.lastModificationTime;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.uploadStartDetectedAt;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.uploadEndDetectedAt;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.importStartedAt;
/** @type {?|undefined} */
KalturaDropFolderFileArgs.prototype.importEndedAt;
var KalturaDropFolderFile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderFile, _super);
    function KalturaDropFolderFile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderFile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderFile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            dropFolderId: { type: 'n' },
            fileName: { type: 's' },
            fileSize: { type: 'n' },
            fileSizeLastSetAt: { type: 'd', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaDropFolderFileStatus, subType: 'KalturaDropFolderFileStatus' },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaDropFolderType, subType: 'KalturaDropFolderType' },
            parsedSlug: { type: 's' },
            parsedFlavor: { type: 's' },
            parsedUserId: { type: 's' },
            leadDropFolderFileId: { type: 'n' },
            deletedDropFolderFileId: { type: 'n' },
            entryId: { type: 's' },
            errorCode: { type: 'es', subTypeConstructor: KalturaDropFolderFileErrorCode, subType: 'KalturaDropFolderFileErrorCode' },
            errorDescription: { type: 's' },
            lastModificationTime: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            uploadStartDetectedAt: { type: 'd' },
            uploadEndDetectedAt: { type: 'd' },
            importStartedAt: { type: 'd' },
            importEndedAt: { type: 'd' },
            batchJobId: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaDropFolderFile;
}(KalturaObjectBase));
export { KalturaDropFolderFile };
if (false) {
    /** @type {?} */
    KalturaDropFolderFile.prototype.id;
    /** @type {?} */
    KalturaDropFolderFile.prototype.partnerId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.dropFolderId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.fileName;
    /** @type {?} */
    KalturaDropFolderFile.prototype.fileSize;
    /** @type {?} */
    KalturaDropFolderFile.prototype.fileSizeLastSetAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.status;
    /** @type {?} */
    KalturaDropFolderFile.prototype.type;
    /** @type {?} */
    KalturaDropFolderFile.prototype.parsedSlug;
    /** @type {?} */
    KalturaDropFolderFile.prototype.parsedFlavor;
    /** @type {?} */
    KalturaDropFolderFile.prototype.parsedUserId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.leadDropFolderFileId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.deletedDropFolderFileId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.entryId;
    /** @type {?} */
    KalturaDropFolderFile.prototype.errorCode;
    /** @type {?} */
    KalturaDropFolderFile.prototype.errorDescription;
    /** @type {?} */
    KalturaDropFolderFile.prototype.lastModificationTime;
    /** @type {?} */
    KalturaDropFolderFile.prototype.createdAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.updatedAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.uploadStartDetectedAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.uploadEndDetectedAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.importStartedAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.importEndedAt;
    /** @type {?} */
    KalturaDropFolderFile.prototype.batchJobId;
}
typesMappingStorage['KalturaDropFolderFile'] = KalturaDropFolderFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJGaWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlckZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JsRixJQUFBO0lBQTJDLGlEQUFpQjtJQTJCeEQsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ25ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDcEksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN0SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDNUgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQTdGTDtFQTJCMkMsaUJBQWlCLEVBbUUzRCxDQUFBO0FBbkVELGlDQW1FQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGRyb3BGb2xkZXJJZD8gOiBudW1iZXI7XG5cdGZpbGVOYW1lPyA6IHN0cmluZztcblx0ZmlsZVNpemU/IDogbnVtYmVyO1xuXHRwYXJzZWRTbHVnPyA6IHN0cmluZztcblx0cGFyc2VkRmxhdm9yPyA6IHN0cmluZztcblx0cGFyc2VkVXNlcklkPyA6IHN0cmluZztcblx0bGVhZERyb3BGb2xkZXJGaWxlSWQ/IDogbnVtYmVyO1xuXHRkZWxldGVkRHJvcEZvbGRlckZpbGVJZD8gOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRlcnJvckNvZGU/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0bGFzdE1vZGlmaWNhdGlvblRpbWU/IDogc3RyaW5nO1xuXHR1cGxvYWRTdGFydERldGVjdGVkQXQ/IDogRGF0ZTtcblx0dXBsb2FkRW5kRGV0ZWN0ZWRBdD8gOiBEYXRlO1xuXHRpbXBvcnRTdGFydGVkQXQ/IDogRGF0ZTtcblx0aW1wb3J0RW5kZWRBdD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlckZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRkcm9wRm9sZGVySWQgOiBudW1iZXI7XG5cdGZpbGVOYW1lIDogc3RyaW5nO1xuXHRmaWxlU2l6ZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmlsZVNpemVMYXN0U2V0QXQgOiBEYXRlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXM7XG5cdHJlYWRvbmx5IHR5cGUgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGU7XG5cdHBhcnNlZFNsdWcgOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvciA6IHN0cmluZztcblx0cGFyc2VkVXNlcklkIDogc3RyaW5nO1xuXHRsZWFkRHJvcEZvbGRlckZpbGVJZCA6IG51bWJlcjtcblx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdGVycm9yQ29kZSA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZTtcblx0ZXJyb3JEZXNjcmlwdGlvbiA6IHN0cmluZztcblx0bGFzdE1vZGlmaWNhdGlvblRpbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHVwbG9hZFN0YXJ0RGV0ZWN0ZWRBdCA6IERhdGU7XG5cdHVwbG9hZEVuZERldGVjdGVkQXQgOiBEYXRlO1xuXHRpbXBvcnRTdGFydGVkQXQgOiBEYXRlO1xuXHRpbXBvcnRFbmRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgYmF0Y2hKb2JJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkcm9wRm9sZGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZVNpemVMYXN0U2V0QXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlclR5cGUnIH0sXG5cdFx0XHRcdHBhcnNlZFNsdWcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyc2VkRmxhdm9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZFVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsZWFkRHJvcEZvbGRlckZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZWxldGVkRHJvcEZvbGRlckZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yQ29kZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFzdE1vZGlmaWNhdGlvblRpbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBsb2FkU3RhcnREZXRlY3RlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwbG9hZEVuZERldGVjdGVkQXQgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0aW1wb3J0U3RhcnRlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGltcG9ydEVuZGVkQXQgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0YmF0Y2hKb2JJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm9wRm9sZGVyRmlsZSddID0gS2FsdHVyYURyb3BGb2xkZXJGaWxlOyJdfQ==