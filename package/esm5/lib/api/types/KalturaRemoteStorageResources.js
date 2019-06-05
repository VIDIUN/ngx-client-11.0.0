/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteStorageResource } from './KalturaRemoteStorageResource';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaRemoteStorageResourcesArgs() { }
/** @type {?|undefined} */
KalturaRemoteStorageResourcesArgs.prototype.resources;
var KalturaRemoteStorageResources = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRemoteStorageResources, _super);
    function KalturaRemoteStorageResources(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.resources === 'undefined')
            _this.resources = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaRemoteStorageResources.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRemoteStorageResources' },
            resources: { type: 'a', subTypeConstructor: KalturaRemoteStorageResource, subType: 'KalturaRemoteStorageResource' }
        });
        return result;
    };
    return KalturaRemoteStorageResources;
}(KalturaContentResource));
export { KalturaRemoteStorageResources };
if (false) {
    /** @type {?} */
    KalturaRemoteStorageResources.prototype.resources;
}
typesMappingStorage['KalturaRemoteStorageResources'] = KalturaRemoteStorageResources;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU85RixJQUFBO0lBQW1ELHlEQUFzQjtJQUlyRSx1Q0FBWSxJQUF5QztRQUFyRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztLQUNsRTs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQzlHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBL0JMO0VBVW1ELHNCQUFzQixFQXNCeEUsQ0FBQTtBQXRCRCx5Q0FzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlJztcbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlcz8gOiBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2VzIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB7XG5cbiAgICByZXNvdXJjZXMgOiBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2VzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVzb3VyY2VzID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXNvdXJjZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlcycgfSxcblx0XHRcdFx0cmVzb3VyY2VzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2VzJ10gPSBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlczsiXX0=