/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLimitFlavorsRestrictionType } from './KalturaLimitFlavorsRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaLimitFlavorsRestrictionArgs() { }
/** @type {?|undefined} */
KalturaLimitFlavorsRestrictionArgs.prototype.limitFlavorsRestrictionType;
/** @type {?|undefined} */
KalturaLimitFlavorsRestrictionArgs.prototype.flavorParamsIds;
export class KalturaLimitFlavorsRestriction extends KalturaBaseRestriction {
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
            objectType: { type: 'c', default: 'KalturaLimitFlavorsRestriction' },
            limitFlavorsRestrictionType: { type: 'en', subTypeConstructor: KalturaLimitFlavorsRestrictionType, subType: 'KalturaLimitFlavorsRestrictionType' },
            flavorParamsIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLimitFlavorsRestriction.prototype.limitFlavorsRestrictionType;
    /** @type {?} */
    KalturaLimitFlavorsRestriction.prototype.flavorParamsIds;
}
typesMappingStorage['KalturaLimitFlavorsRestriction'] = KalturaLimitFlavorsRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixNQUFNLHFDQUFzQyxTQUFRLHNCQUFzQjs7OztJQUt0RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3RKLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24sIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3RyaWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICBsaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGU/IDogS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZTtcblx0Zmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiB7XG5cbiAgICBsaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGUgOiBLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb25UeXBlO1xuXHRmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGltaXRGbGF2b3JzUmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdGxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uVHlwZScgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaW1pdEZsYXZvcnNSZXN0cmljdGlvbiddID0gS2FsdHVyYUxpbWl0Rmxhdm9yc1Jlc3RyaWN0aW9uOyJdfQ==