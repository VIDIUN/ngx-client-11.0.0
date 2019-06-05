/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlLimitDeliveryProfilesActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlLimitDeliveryProfilesActionArgs.prototype.deliveryProfileIds;
/** @type {?|undefined} */
KalturaAccessControlLimitDeliveryProfilesActionArgs.prototype.isBlockedList;
export class KalturaAccessControlLimitDeliveryProfilesAction extends KalturaRuleAction {
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
            objectType: { type: 'c', default: 'KalturaAccessControlLimitDeliveryProfilesAction' },
            deliveryProfileIds: { type: 's' },
            isBlockedList: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlLimitDeliveryProfilesAction.prototype.deliveryProfileIds;
    /** @type {?} */
    KalturaAccessControlLimitDeliveryProfilesAction.prototype.isBlockedList;
}
typesMappingStorage['KalturaAccessControlLimitDeliveryProfilesAction'] = KalturaAccessControlLimitDeliveryProfilesAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsTUFBTSxzREFBdUQsU0FBUSxpQkFBaUI7Ozs7SUFLbEYsWUFBWSxJQUEyRDtRQUVuRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaURBQWlELEVBQUU7WUFDcEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaURBQWlELENBQUMsR0FBRywrQ0FBK0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUnVsZUFjdGlvbiwgS2FsdHVyYVJ1bGVBY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhUnVsZUFjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uQXJncyB7XG4gICAgZGVsaXZlcnlQcm9maWxlSWRzPyA6IHN0cmluZztcblx0aXNCbG9ja2VkTGlzdD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0RGVsaXZlcnlQcm9maWxlc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uIHtcblxuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkcyA6IHN0cmluZztcblx0aXNCbG9ja2VkTGlzdCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXREZWxpdmVyeVByb2ZpbGVzQWN0aW9uJyB9LFxuXHRcdFx0XHRkZWxpdmVyeVByb2ZpbGVJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNCbG9ja2VkTGlzdCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0RGVsaXZlcnlQcm9maWxlc0FjdGlvbiddID0gS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdERlbGl2ZXJ5UHJvZmlsZXNBY3Rpb247Il19