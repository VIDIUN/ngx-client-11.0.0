/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlServeRemoteEdgeServerActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlServeRemoteEdgeServerActionArgs.prototype.edgeServerIds;
var KalturaAccessControlServeRemoteEdgeServerAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlServeRemoteEdgeServerAction, _super);
    function KalturaAccessControlServeRemoteEdgeServerAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlServeRemoteEdgeServerAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlServeRemoteEdgeServerAction' },
            edgeServerIds: { type: 's' }
        });
        return result;
    };
    return KalturaAccessControlServeRemoteEdgeServerAction;
}(KalturaRuleAction));
export { KalturaAccessControlServeRemoteEdgeServerAction };
if (false) {
    /** @type {?} */
    KalturaAccessControlServeRemoteEdgeServerAction.prototype.edgeServerIds;
}
typesMappingStorage['KalturaAccessControlServeRemoteEdgeServerAction'] = KalturaAccessControlServeRemoteEdgeServerAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xTZXJ2ZVJlbW90ZUVkZ2VTZXJ2ZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxJQUFBO0lBQXFFLDJFQUFpQjtJQUlsRix5REFBWSxJQUEyRDtlQUVuRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ3BHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswREE3Qkw7RUFTcUUsaUJBQWlCLEVBcUJyRixDQUFBO0FBckJELDJEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpREFBaUQsQ0FBQyxHQUFHLCtDQUErQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uLCBLYWx0dXJhUnVsZUFjdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb25BcmdzIHtcbiAgICBlZGdlU2VydmVySWRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTZXJ2ZVJlbW90ZUVkZ2VTZXJ2ZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbiB7XG5cbiAgICBlZGdlU2VydmVySWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbicgfSxcblx0XHRcdFx0ZWRnZVNlcnZlcklkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbiddID0gS2FsdHVyYUFjY2Vzc0NvbnRyb2xTZXJ2ZVJlbW90ZUVkZ2VTZXJ2ZXJBY3Rpb247Il19