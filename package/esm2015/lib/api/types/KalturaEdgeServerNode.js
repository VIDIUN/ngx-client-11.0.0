/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryServerNode } from './KalturaDeliveryServerNode';
/**
 * @record
 */
export function KalturaEdgeServerNodeArgs() { }
/** @type {?|undefined} */
KalturaEdgeServerNodeArgs.prototype.playbackDomain;
/** @type {?|undefined} */
KalturaEdgeServerNodeArgs.prototype.config;
export class KalturaEdgeServerNode extends KalturaDeliveryServerNode {
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
            objectType: { type: 'c', default: 'KalturaEdgeServerNode' },
            playbackDomain: { type: 's' },
            config: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEdgeServerNode.prototype.playbackDomain;
    /** @type {?} */
    KalturaEdgeServerNode.prototype.config;
}
typesMappingStorage['KalturaEdgeServerNode'] = KalturaEdgeServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRWRnZVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQVF2RyxNQUFNLDRCQUE2QixTQUFRLHlCQUF5Qjs7OztJQUtoRSxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGUsIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRWRnZVNlcnZlck5vZGVBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGVBcmdzIHtcbiAgICBwbGF5YmFja0RvbWFpbj8gOiBzdHJpbmc7XG5cdGNvbmZpZz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFZGdlU2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVNlcnZlck5vZGUge1xuXG4gICAgcGxheWJhY2tEb21haW4gOiBzdHJpbmc7XG5cdGNvbmZpZyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFZGdlU2VydmVyTm9kZScgfSxcblx0XHRcdFx0cGxheWJhY2tEb21haW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29uZmlnIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFZGdlU2VydmVyTm9kZSddID0gS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlOyJdfQ==