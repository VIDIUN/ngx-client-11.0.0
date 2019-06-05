/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaPermission = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPermission, _super);
    function KalturaPermission(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPermission.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaPermission;
}(KalturaObjectBase));
export { KalturaPermission };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xGLElBQUE7SUFBdUMsNkNBQWlCO0lBZ0JwRCwyQkFBWSxJQUE2QjtlQUVyQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3RILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBOURMO0VBa0J1QyxpQkFBaUIsRUE2Q3ZELENBQUE7QUE3Q0QsNkJBNkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGVybWlzc2lvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0ZnJpZW5kbHlOYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXM7XG5cdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lcz8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uSXRlbXNJZHM/IDogc3RyaW5nO1xuXHRwYXJ0bmVyR3JvdXA/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGVybWlzc2lvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSB0eXBlIDogS2FsdHVyYVBlcm1pc3Npb25UeXBlO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRmcmllbmRseU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhUGVybWlzc2lvblN0YXR1cztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRkZXBlbmRzT25QZXJtaXNzaW9uTmFtZXMgOiBzdHJpbmc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25JdGVtc0lkcyA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cGFydG5lckdyb3VwIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGVybWlzc2lvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGVybWlzc2lvbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGVybWlzc2lvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25UeXBlJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyaWVuZGx5TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGVybWlzc2lvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvblN0YXR1cycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbkl0ZW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJHcm91cCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGVybWlzc2lvbiddID0gS2FsdHVyYVBlcm1pc3Npb247Il19