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
export function KalturaAccessControlDrmPolicyActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlDrmPolicyActionArgs.prototype.policyId;
var KalturaAccessControlDrmPolicyAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlDrmPolicyAction, _super);
    function KalturaAccessControlDrmPolicyAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlDrmPolicyAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlDrmPolicyAction' },
            policyId: { type: 'n' }
        });
        return result;
    };
    return KalturaAccessControlDrmPolicyAction;
}(KalturaRuleAction));
export { KalturaAccessControlDrmPolicyAction };
if (false) {
    /** @type {?} */
    KalturaAccessControlDrmPolicyAction.prototype.policyId;
}
typesMappingStorage['KalturaAccessControlDrmPolicyAction'] = KalturaAccessControlDrmPolicyAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xEcm1Qb2xpY3lBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sRHJtUG9saWN5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxJQUFBO0lBQXlELCtEQUFpQjtJQUl0RSw2Q0FBWSxJQUErQztlQUV2RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4Q0E3Qkw7RUFTeUQsaUJBQWlCLEVBcUJ6RSxDQUFBO0FBckJELCtDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uLCBLYWx0dXJhUnVsZUFjdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbERybVBvbGljeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb25BcmdzIHtcbiAgICBwb2xpY3lJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sRHJtUG9saWN5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb24ge1xuXG4gICAgcG9saWN5SWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sRHJtUG9saWN5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBY2Nlc3NDb250cm9sRHJtUG9saWN5QWN0aW9uJyB9LFxuXHRcdFx0XHRwb2xpY3lJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWNjZXNzQ29udHJvbERybVBvbGljeUFjdGlvbiddID0gS2FsdHVyYUFjY2Vzc0NvbnRyb2xEcm1Qb2xpY3lBY3Rpb247Il19