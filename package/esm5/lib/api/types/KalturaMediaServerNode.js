/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryServerNode } from './KalturaDeliveryServerNode';
/**
 * @record
 */
export function KalturaMediaServerNodeArgs() { }
/** @type {?|undefined} */
KalturaMediaServerNodeArgs.prototype.applicationName;
/** @type {?|undefined} */
KalturaMediaServerNodeArgs.prototype.mediaServerPortConfig;
/** @type {?|undefined} */
KalturaMediaServerNodeArgs.prototype.mediaServerPlaybackDomainConfig;
var KalturaMediaServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaServerNode, _super);
    function KalturaMediaServerNode(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.mediaServerPortConfig === 'undefined')
            _this.mediaServerPortConfig = [];
        if (typeof _this.mediaServerPlaybackDomainConfig === 'undefined')
            _this.mediaServerPlaybackDomainConfig = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaMediaServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaServerNode' },
            applicationName: { type: 's' },
            mediaServerPortConfig: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mediaServerPlaybackDomainConfig: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaMediaServerNode;
}(KalturaDeliveryServerNode));
export { KalturaMediaServerNode };
if (false) {
    /** @type {?} */
    KalturaMediaServerNode.prototype.applicationName;
    /** @type {?} */
    KalturaMediaServerNode.prototype.mediaServerPortConfig;
    /** @type {?} */
    KalturaMediaServerNode.prototype.mediaServerPlaybackDomainConfig;
}
typesMappingStorage['KalturaMediaServerNode'] = KalturaMediaServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhU2VydmVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhU2VydmVyTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7OztBQVN2RyxJQUFBO0lBQTRDLGtEQUF5QjtJQU1qRSxnQ0FBWSxJQUFrQztRQUE5QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM3RixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQywrQkFBK0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsK0JBQStCLEdBQUcsRUFBRSxDQUFDOztLQUN4Rzs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDekcsK0JBQStCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDMUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F0Q0w7RUFZNEMseUJBQXlCLEVBMkJwRSxDQUFBO0FBM0JELGtDQTJCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZUFyZ3Mge1xuICAgIGFwcGxpY2F0aW9uTmFtZT8gOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVyUG9ydENvbmZpZz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhU2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGUge1xuXG4gICAgYXBwbGljYXRpb25OYW1lIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlclBvcnRDb25maWcgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWVkaWFTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWVkaWFTZXJ2ZXJQb3J0Q29uZmlnID09PSAndW5kZWZpbmVkJykgdGhpcy5tZWRpYVNlcnZlclBvcnRDb25maWcgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdGFwcGxpY2F0aW9uTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVNlcnZlclBvcnRDb25maWcgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVyUGxheWJhY2tEb21haW5Db25maWcgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYVNlcnZlck5vZGUnXSA9IEthbHR1cmFNZWRpYVNlcnZlck5vZGU7Il19