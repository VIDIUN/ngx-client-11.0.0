/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaPermissionStatus } from './KalturaPermissionStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPermissionArgs() { }
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.name;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.friendlyName;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.description;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.status;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.dependsOnPermissionNames;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.tags;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.permissionItemsIds;
/** @type {?|undefined} */
KalturaPermissionArgs.prototype.partnerGroup;
export class KalturaPermission extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaPermission' },
            id: { type: 'n', readOnly: true },
            type: { type: 'en', readOnly: true, subTypeConstructor: KalturaPermissionType, subType: 'KalturaPermissionType' },
            name: { type: 's' },
            friendlyName: { type: 's' },
            description: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaPermissionStatus, subType: 'KalturaPermissionStatus' },
            partnerId: { type: 'n', readOnly: true },
            dependsOnPermissionNames: { type: 's' },
            tags: { type: 's' },
            permissionItemsIds: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerGroup: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPermission.prototype.id;
    /** @type {?} */
    KalturaPermission.prototype.type;
    /** @type {?} */
    KalturaPermission.prototype.name;
    /** @type {?} */
    KalturaPermission.prototype.friendlyName;
    /** @type {?} */
    KalturaPermission.prototype.description;
    /** @type {?} */
    KalturaPermission.prototype.status;
    /** @type {?} */
    KalturaPermission.prototype.partnerId;
    /** @type {?} */
    KalturaPermission.prototype.dependsOnPermissionNames;
    /** @type {?} */
    KalturaPermission.prototype.tags;
    /** @type {?} */
    KalturaPermission.prototype.permissionItemsIds;
    /** @type {?} */
    KalturaPermission.prototype.createdAt;
    /** @type {?} */
    KalturaPermission.prototype.updatedAt;
    /** @type {?} */
    KalturaPermission.prototype.partnerGroup;
}
typesMappingStorage['KalturaPermission'] = KalturaPermission;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsTUFBTSx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUFnQnBELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3RILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBlcm1pc3Npb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdGZyaWVuZGx5TmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0c3RhdHVzPyA6IEthbHR1cmFQZXJtaXNzaW9uU3RhdHVzO1xuXHRkZXBlbmRzT25QZXJtaXNzaW9uTmFtZXM/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0cGVybWlzc2lvbkl0ZW1zSWRzPyA6IHN0cmluZztcblx0cGFydG5lckdyb3VwPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBlcm1pc3Npb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgdHlwZSA6IEthbHR1cmFQZXJtaXNzaW9uVHlwZTtcblx0bmFtZSA6IHN0cmluZztcblx0ZnJpZW5kbHlOYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0c3RhdHVzIDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXM7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uSXRlbXNJZHMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHBhcnRuZXJHcm91cCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBlcm1pc3Npb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBlcm1pc3Npb24nIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQZXJtaXNzaW9uVHlwZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmcmllbmRseU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25JdGVtc0lkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyR3JvdXAgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBlcm1pc3Npb24nXSA9IEthbHR1cmFQZXJtaXNzaW9uOyJdfQ==