/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUserRoleArgs() { }
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.name;
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.description;
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.status;
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.permissionNames;
/** @type {?|undefined} */
KalturaUserRoleArgs.prototype.tags;
var KalturaUserRole = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserRole, _super);
    function KalturaUserRole(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserRole.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserRole' },
            id: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaUserRoleStatus, subType: 'KalturaUserRoleStatus' },
            partnerId: { type: 'n', readOnly: true },
            permissionNames: { type: 's' },
            tags: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true }
        });
        return result;
    };
    return KalturaUserRole;
}(KalturaObjectBase));
export { KalturaUserRole };
if (false) {
    /** @type {?} */
    KalturaUserRole.prototype.id;
    /** @type {?} */
    KalturaUserRole.prototype.name;
    /** @type {?} */
    KalturaUserRole.prototype.systemName;
    /** @type {?} */
    KalturaUserRole.prototype.description;
    /** @type {?} */
    KalturaUserRole.prototype.status;
    /** @type {?} */
    KalturaUserRole.prototype.partnerId;
    /** @type {?} */
    KalturaUserRole.prototype.permissionNames;
    /** @type {?} */
    KalturaUserRole.prototype.tags;
    /** @type {?} */
    KalturaUserRole.prototype.createdAt;
    /** @type {?} */
    KalturaUserRole.prototype.updatedAt;
}
typesMappingStorage['KalturaUserRole'] = KalturaUserRole;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJSb2xlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlclJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRixJQUFBO0lBQXFDLDJDQUFpQjtJQWFsRCx5QkFBWSxJQUEyQjtlQUVuQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQkFyREw7RUFlcUMsaUJBQWlCLEVBdUNyRCxDQUFBO0FBdkNELDJCQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlclJvbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyUm9sZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJSb2xlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYVVzZXJSb2xlU3RhdHVzO1xuXHRwZXJtaXNzaW9uTmFtZXM/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJSb2xlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhVXNlclJvbGVTdGF0dXM7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cGVybWlzc2lvbk5hbWVzIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXNlclJvbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJSb2xlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlclJvbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJSb2xlU3RhdHVzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlclJvbGUnXSA9IEthbHR1cmFVc2VyUm9sZTsiXX0=