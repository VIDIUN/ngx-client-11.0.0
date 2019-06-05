/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDropFolderFile extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJGaWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlckZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmxGLE1BQU0sNEJBQTZCLFNBQVEsaUJBQWlCOzs7O0lBMkJ4RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ25ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDcEksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN0SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDNUgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm9wRm9sZGVyRmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBkcm9wRm9sZGVySWQ/IDogbnVtYmVyO1xuXHRmaWxlTmFtZT8gOiBzdHJpbmc7XG5cdGZpbGVTaXplPyA6IG51bWJlcjtcblx0cGFyc2VkU2x1Zz8gOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvcj8gOiBzdHJpbmc7XG5cdHBhcnNlZFVzZXJJZD8gOiBzdHJpbmc7XG5cdGxlYWREcm9wRm9sZGVyRmlsZUlkPyA6IG51bWJlcjtcblx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWQ/IDogbnVtYmVyO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcblx0ZXJyb3JDb2RlPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZTtcblx0ZXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGxhc3RNb2RpZmljYXRpb25UaW1lPyA6IHN0cmluZztcblx0dXBsb2FkU3RhcnREZXRlY3RlZEF0PyA6IERhdGU7XG5cdHVwbG9hZEVuZERldGVjdGVkQXQ/IDogRGF0ZTtcblx0aW1wb3J0U3RhcnRlZEF0PyA6IERhdGU7XG5cdGltcG9ydEVuZGVkQXQ/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURyb3BGb2xkZXJGaWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZHJvcEZvbGRlcklkIDogbnVtYmVyO1xuXHRmaWxlTmFtZSA6IHN0cmluZztcblx0ZmlsZVNpemUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGZpbGVTaXplTGFzdFNldEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzO1xuXHRyZWFkb25seSB0eXBlIDogS2FsdHVyYURyb3BGb2xkZXJUeXBlO1xuXHRwYXJzZWRTbHVnIDogc3RyaW5nO1xuXHRwYXJzZWRGbGF2b3IgOiBzdHJpbmc7XG5cdHBhcnNlZFVzZXJJZCA6IHN0cmluZztcblx0bGVhZERyb3BGb2xkZXJGaWxlSWQgOiBudW1iZXI7XG5cdGRlbGV0ZWREcm9wRm9sZGVyRmlsZUlkIDogbnVtYmVyO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXHRlcnJvckNvZGUgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGU7XG5cdGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGxhc3RNb2RpZmljYXRpb25UaW1lIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHR1cGxvYWRTdGFydERldGVjdGVkQXQgOiBEYXRlO1xuXHR1cGxvYWRFbmREZXRlY3RlZEF0IDogRGF0ZTtcblx0aW1wb3J0U3RhcnRlZEF0IDogRGF0ZTtcblx0aW1wb3J0RW5kZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGJhdGNoSm9iSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZHJvcEZvbGRlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVTaXplIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVTaXplTGFzdFNldEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJUeXBlJyB9LFxuXHRcdFx0XHRwYXJzZWRTbHVnIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZEZsYXZvciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRVc2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGVhZERyb3BGb2xkZXJGaWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvckNvZGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlJyB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhc3RNb2RpZmljYXRpb25UaW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwbG9hZFN0YXJ0RGV0ZWN0ZWRBdCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGxvYWRFbmREZXRlY3RlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGltcG9ydFN0YXJ0ZWRBdCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRpbXBvcnRFbmRlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGJhdGNoSm9iSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlckZpbGUnXSA9IEthbHR1cmFEcm9wRm9sZGVyRmlsZTsiXX0=