/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserAgentRestrictionType } from './KalturaUserAgentRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaUserAgentRestrictionArgs() { }
/** @type {?|undefined} */
KalturaUserAgentRestrictionArgs.prototype.userAgentRestrictionType;
/** @type {?|undefined} */
KalturaUserAgentRestrictionArgs.prototype.userAgentRegexList;
export class KalturaUserAgentRestriction extends KalturaBaseRestriction {
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
            objectType: { type: 'c', default: 'KalturaUserAgentRestriction' },
            userAgentRestrictionType: { type: 'en', subTypeConstructor: KalturaUserAgentRestrictionType, subType: 'KalturaUserAgentRestrictionType' },
            userAgentRegexList: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUserAgentRestriction.prototype.userAgentRestrictionType;
    /** @type {?} */
    KalturaUserAgentRestriction.prototype.userAgentRegexList;
}
typesMappingStorage['KalturaUserAgentRestriction'] = KalturaUserAgentRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixNQUFNLGtDQUFtQyxTQUFRLHNCQUFzQjs7OztJQUtuRSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRix3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzdJLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiwgS2FsdHVyYUJhc2VSZXN0cmljdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXN0cmljdGlvbkFyZ3Mge1xuICAgIHVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZT8gOiBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25UeXBlO1xuXHR1c2VyQWdlbnRSZWdleExpc3Q/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb24gZXh0ZW5kcyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uIHtcblxuICAgIHVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZSA6IEthbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvblR5cGU7XG5cdHVzZXJBZ2VudFJlZ2V4TGlzdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvbicgfSxcblx0XHRcdFx0dXNlckFnZW50UmVzdHJpY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25UeXBlJyB9LFxuXHRcdFx0XHR1c2VyQWdlbnRSZWdleExpc3QgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uJ10gPSBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb247Il19