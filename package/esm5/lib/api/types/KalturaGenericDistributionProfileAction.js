/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaGenericDistributionProfileActionArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.serverUrl;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.serverPath;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.username;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.password;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.ftpPassiveMode;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.httpFieldName;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.httpFileName;
var KalturaGenericDistributionProfileAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProfileAction, _super);
    function KalturaGenericDistributionProfileAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProfileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfileAction' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            serverUrl: { type: 's' },
            serverPath: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            ftpPassiveMode: { type: 'b' },
            httpFieldName: { type: 's' },
            httpFileName: { type: 's' }
        });
        return result;
    };
    return KalturaGenericDistributionProfileAction;
}(KalturaObjectBase));
export { KalturaGenericDistributionProfileAction };
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.protocol;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.serverUrl;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.serverPath;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.username;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.password;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.ftpPassiveMode;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.httpFieldName;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.httpFileName;
}
typesMappingStorage['KalturaGenericDistributionProfileAction'] = KalturaGenericDistributionProfileAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsSUFBQTtJQUE2RCxtRUFBaUI7SUFXMUUsaURBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNySCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBbkRMO0VBaUI2RCxpQkFBaUIsRUFtQzdFLENBQUE7QUFuQ0QsbURBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUNBQXlDLENBQUMsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHByb3RvY29sPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0c2VydmVyVXJsPyA6IHN0cmluZztcblx0c2VydmVyUGF0aD8gOiBzdHJpbmc7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRmdHBQYXNzaXZlTW9kZT8gOiBib29sZWFuO1xuXHRodHRwRmllbGROYW1lPyA6IHN0cmluZztcblx0aHR0cEZpbGVOYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcHJvdG9jb2wgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdHNlcnZlclVybCA6IHN0cmluZztcblx0c2VydmVyUGF0aCA6IHN0cmluZztcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRmdHBQYXNzaXZlTW9kZSA6IGJvb2xlYW47XG5cdGh0dHBGaWVsZE5hbWUgOiBzdHJpbmc7XG5cdGh0dHBGaWxlTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbicgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sJyB9LFxuXHRcdFx0XHRzZXJ2ZXJVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVyUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBQYXNzaXZlTW9kZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRodHRwRmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGh0dHBGaWxlTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24nXSA9IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjsiXX0=