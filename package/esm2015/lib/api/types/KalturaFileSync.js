/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncObjectType } from './KalturaFileSyncObjectType';
import { KalturaFileSyncStatus } from './KalturaFileSyncStatus';
import { KalturaFileSyncType } from './KalturaFileSyncType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFileSyncArgs() { }
/** @type {?|undefined} */
KalturaFileSyncArgs.prototype.status;
/** @type {?|undefined} */
KalturaFileSyncArgs.prototype.fileRoot;
/** @type {?|undefined} */
KalturaFileSyncArgs.prototype.filePath;
export class KalturaFileSync extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFileSync' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            fileObjectType: { type: 'es', readOnly: true, subTypeConstructor: KalturaFileSyncObjectType, subType: 'KalturaFileSyncObjectType' },
            objectId: { type: 's', readOnly: true },
            version: { type: 's', readOnly: true },
            objectSubType: { type: 'n', readOnly: true },
            dc: { type: 's', readOnly: true },
            original: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            readyAt: { type: 'n', readOnly: true },
            syncTime: { type: 'n', readOnly: true },
            status: { type: 'en', subTypeConstructor: KalturaFileSyncStatus, subType: 'KalturaFileSyncStatus' },
            fileType: { type: 'en', readOnly: true, subTypeConstructor: KalturaFileSyncType, subType: 'KalturaFileSyncType' },
            linkedId: { type: 'n', readOnly: true },
            linkCount: { type: 'n', readOnly: true },
            fileRoot: { type: 's' },
            filePath: { type: 's' },
            fileSize: { type: 'n', readOnly: true },
            fileUrl: { type: 's', readOnly: true },
            fileContent: { type: 's', readOnly: true },
            fileDiscSize: { type: 'n', readOnly: true },
            isCurrentDc: { type: 'b', readOnly: true },
            isDir: { type: 'b', readOnly: true },
            originalId: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFileSync.prototype.id;
    /** @type {?} */
    KalturaFileSync.prototype.partnerId;
    /** @type {?} */
    KalturaFileSync.prototype.fileObjectType;
    /** @type {?} */
    KalturaFileSync.prototype.objectId;
    /** @type {?} */
    KalturaFileSync.prototype.version;
    /** @type {?} */
    KalturaFileSync.prototype.objectSubType;
    /** @type {?} */
    KalturaFileSync.prototype.dc;
    /** @type {?} */
    KalturaFileSync.prototype.original;
    /** @type {?} */
    KalturaFileSync.prototype.createdAt;
    /** @type {?} */
    KalturaFileSync.prototype.updatedAt;
    /** @type {?} */
    KalturaFileSync.prototype.readyAt;
    /** @type {?} */
    KalturaFileSync.prototype.syncTime;
    /** @type {?} */
    KalturaFileSync.prototype.status;
    /** @type {?} */
    KalturaFileSync.prototype.fileType;
    /** @type {?} */
    KalturaFileSync.prototype.linkedId;
    /** @type {?} */
    KalturaFileSync.prototype.linkCount;
    /** @type {?} */
    KalturaFileSync.prototype.fileRoot;
    /** @type {?} */
    KalturaFileSync.prototype.filePath;
    /** @type {?} */
    KalturaFileSync.prototype.fileSize;
    /** @type {?} */
    KalturaFileSync.prototype.fileUrl;
    /** @type {?} */
    KalturaFileSync.prototype.fileContent;
    /** @type {?} */
    KalturaFileSync.prototype.fileDiscSize;
    /** @type {?} */
    KalturaFileSync.prototype.isCurrentDc;
    /** @type {?} */
    KalturaFileSync.prototype.isDir;
    /** @type {?} */
    KalturaFileSync.prototype.originalId;
}
typesMappingStorage['KalturaFileSync'] = KalturaFileSync;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmlsZVN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sc0JBQXVCLFNBQVEsaUJBQWlCOzs7O0lBNEJsRCxZQUFZLElBQTJCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDeEksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN0SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM3QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFGaWxlU3luY09iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVTeW5jU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRmlsZVN5bmNTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVTeW5jVHlwZSB9IGZyb20gJy4vS2FsdHVyYUZpbGVTeW5jVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZpbGVTeW5jQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHN0YXR1cz8gOiBLYWx0dXJhRmlsZVN5bmNTdGF0dXM7XG5cdGZpbGVSb290PyA6IHN0cmluZztcblx0ZmlsZVBhdGg/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZVN5bmMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBmaWxlT2JqZWN0VHlwZSA6IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGU7XG5cdHJlYWRvbmx5IG9iamVjdElkIDogc3RyaW5nO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBvYmplY3RTdWJUeXBlIDogbnVtYmVyO1xuXHRyZWFkb25seSBkYyA6IHN0cmluZztcblx0cmVhZG9ubHkgb3JpZ2luYWwgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHJlYWR5QXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN5bmNUaW1lIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhRmlsZVN5bmNTdGF0dXM7XG5cdHJlYWRvbmx5IGZpbGVUeXBlIDogS2FsdHVyYUZpbGVTeW5jVHlwZTtcblx0cmVhZG9ubHkgbGlua2VkSWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGxpbmtDb3VudCA6IG51bWJlcjtcblx0ZmlsZVJvb3QgOiBzdHJpbmc7XG5cdGZpbGVQYXRoIDogc3RyaW5nO1xuXHRyZWFkb25seSBmaWxlU2l6ZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmlsZVVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgZmlsZUNvbnRlbnQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpbGVEaXNjU2l6ZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgaXNDdXJyZW50RGMgOiBib29sZWFuO1xuXHRyZWFkb25seSBpc0RpciA6IGJvb2xlYW47XG5cdHJlYWRvbmx5IG9yaWdpbmFsSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlU3luY0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmlsZVN5bmMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmlsZU9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0b2JqZWN0U3ViVHlwZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRjIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0b3JpZ2luYWwgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZWFkeUF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3luY1RpbWUgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZVN5bmNTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jU3RhdHVzJyB9LFxuXHRcdFx0XHRmaWxlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVTeW5jVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZVN5bmNUeXBlJyB9LFxuXHRcdFx0XHRsaW5rZWRJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxpbmtDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVSb290IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVTaXplIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmlsZVVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVDb250ZW50IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmlsZURpc2NTaXplIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNDdXJyZW50RGMgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc0RpciA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG9yaWdpbmFsSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmlsZVN5bmMnXSA9IEthbHR1cmFGaWxlU3luYzsiXX0=