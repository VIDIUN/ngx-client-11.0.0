/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaFileSync = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileSync, _super);
    function KalturaFileSync(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileSync.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaFileSync;
}(KalturaObjectBase));
export { KalturaFileSync };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmlsZVN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQXFDLDJDQUFpQjtJQTRCbEQseUJBQVksSUFBMkI7ZUFFbkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDeEksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN0SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM3QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQkFsRkw7RUFjcUMsaUJBQWlCLEVBcUVyRCxDQUFBO0FBckVELDJCQXFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUZpbGVTeW5jU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY1R5cGUgfSBmcm9tICcuL0thbHR1cmFGaWxlU3luY1R5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlU3luY0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBzdGF0dXM/IDogS2FsdHVyYUZpbGVTeW5jU3RhdHVzO1xuXHRmaWxlUm9vdD8gOiBzdHJpbmc7XG5cdGZpbGVQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVTeW5jIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmlsZU9iamVjdFR5cGUgOiBLYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlO1xuXHRyZWFkb25seSBvYmplY3RJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgdmVyc2lvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgb2JqZWN0U3ViVHlwZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgZGMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG9yaWdpbmFsIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSByZWFkeUF0IDogbnVtYmVyO1xuXHRyZWFkb25seSBzeW5jVGltZSA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYUZpbGVTeW5jU3RhdHVzO1xuXHRyZWFkb25seSBmaWxlVHlwZSA6IEthbHR1cmFGaWxlU3luY1R5cGU7XG5cdHJlYWRvbmx5IGxpbmtlZElkIDogbnVtYmVyO1xuXHRyZWFkb25seSBsaW5rQ291bnQgOiBudW1iZXI7XG5cdGZpbGVSb290IDogc3RyaW5nO1xuXHRmaWxlUGF0aCA6IHN0cmluZztcblx0cmVhZG9ubHkgZmlsZVNpemUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGZpbGVVcmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpbGVDb250ZW50IDogc3RyaW5nO1xuXHRyZWFkb25seSBmaWxlRGlzY1NpemUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGlzQ3VycmVudERjIDogYm9vbGVhbjtcblx0cmVhZG9ubHkgaXNEaXIgOiBib29sZWFuO1xuXHRyZWFkb25seSBvcmlnaW5hbElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmlsZVN5bmNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVTeW5jJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlU3luY09iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG9iamVjdFN1YlR5cGUgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkYyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG9yaWdpbmFsIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVhZHlBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN5bmNUaW1lIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVTeW5jU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlU3luY1N0YXR1cycgfSxcblx0XHRcdFx0ZmlsZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlU3luY1R5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jVHlwZScgfSxcblx0XHRcdFx0bGlua2VkSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsaW5rQ291bnQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmaWxlUm9vdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmaWxlQ29udGVudCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVEaXNjU2l6ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzQ3VycmVudERjIDogeyB0eXBlIDogJ2InLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNEaXIgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRvcmlnaW5hbElkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVTeW5jJ10gPSBLYWx0dXJhRmlsZVN5bmM7Il19