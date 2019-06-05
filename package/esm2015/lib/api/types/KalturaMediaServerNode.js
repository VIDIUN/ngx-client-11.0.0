/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaMediaServerNode extends KalturaDeliveryServerNode {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.mediaServerPortConfig === 'undefined')
            this.mediaServerPortConfig = [];
        if (typeof this.mediaServerPlaybackDomainConfig === 'undefined')
            this.mediaServerPlaybackDomainConfig = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaServerNode' },
            applicationName: { type: 's' },
            mediaServerPortConfig: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            mediaServerPlaybackDomainConfig: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMediaServerNode.prototype.applicationName;
    /** @type {?} */
    KalturaMediaServerNode.prototype.mediaServerPortConfig;
    /** @type {?} */
    KalturaMediaServerNode.prototype.mediaServerPlaybackDomainConfig;
}
typesMappingStorage['KalturaMediaServerNode'] = KalturaMediaServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhU2VydmVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhU2VydmVyTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7O0FBU3ZHLE1BQU0sNkJBQThCLFNBQVEseUJBQXlCOzs7O0lBTWpFLFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM3RixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQywrQkFBK0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsRUFBRSxDQUFDO0tBQ3hHOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3pHLCtCQUErQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZUFyZ3Mge1xuICAgIGFwcGxpY2F0aW9uTmFtZT8gOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVyUG9ydENvbmZpZz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhU2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGUge1xuXG4gICAgYXBwbGljYXRpb25OYW1lIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlclBvcnRDb25maWcgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0bWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWVkaWFTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWVkaWFTZXJ2ZXJQb3J0Q29uZmlnID09PSAndW5kZWZpbmVkJykgdGhpcy5tZWRpYVNlcnZlclBvcnRDb25maWcgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWVkaWFTZXJ2ZXJQbGF5YmFja0RvbWFpbkNvbmZpZyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdGFwcGxpY2F0aW9uTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVNlcnZlclBvcnRDb25maWcgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG1lZGlhU2VydmVyUGxheWJhY2tEb21haW5Db25maWcgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYVNlcnZlck5vZGUnXSA9IEthbHR1cmFNZWRpYVNlcnZlck5vZGU7Il19