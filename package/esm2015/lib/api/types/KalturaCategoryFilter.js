/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryBaseFilter } from './KalturaCategoryBaseFilter';
/**
 * @record
 */
export function KalturaCategoryFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.membersIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.nameOrReferenceIdStartsWith;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.managerEqual;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.memberEqual;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.fullNameStartsWithIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.ancestorIdIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.idOrInheritedParentIdIn;
export class KalturaCategoryFilter extends KalturaCategoryBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaCategoryFilter' },
            freeText: { type: 's' },
            membersIn: { type: 's' },
            nameOrReferenceIdStartsWith: { type: 's' },
            managerEqual: { type: 's' },
            memberEqual: { type: 's' },
            fullNameStartsWithIn: { type: 's' },
            ancestorIdIn: { type: 's' },
            idOrInheritedParentIdIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryFilter.prototype.freeText;
    /** @type {?} */
    KalturaCategoryFilter.prototype.membersIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.nameOrReferenceIdStartsWith;
    /** @type {?} */
    KalturaCategoryFilter.prototype.managerEqual;
    /** @type {?} */
    KalturaCategoryFilter.prototype.memberEqual;
    /** @type {?} */
    KalturaCategoryFilter.prototype.fullNameStartsWithIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.ancestorIdIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.idOrInheritedParentIdIn;
}
typesMappingStorage['KalturaCategoryFilter'] = KalturaCategoryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN2RyxNQUFNLDRCQUE2QixTQUFRLHlCQUF5Qjs7OztJQVdoRSxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyLCBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyQXJncyB7XG4gICAgZnJlZVRleHQ/IDogc3RyaW5nO1xuXHRtZW1iZXJzSW4/IDogc3RyaW5nO1xuXHRuYW1lT3JSZWZlcmVuY2VJZFN0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRtYW5hZ2VyRXF1YWw/IDogc3RyaW5nO1xuXHRtZW1iZXJFcXVhbD8gOiBzdHJpbmc7XG5cdGZ1bGxOYW1lU3RhcnRzV2l0aEluPyA6IHN0cmluZztcblx0YW5jZXN0b3JJZEluPyA6IHN0cmluZztcblx0aWRPckluaGVyaXRlZFBhcmVudElkSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyIHtcblxuICAgIGZyZWVUZXh0IDogc3RyaW5nO1xuXHRtZW1iZXJzSW4gOiBzdHJpbmc7XG5cdG5hbWVPclJlZmVyZW5jZUlkU3RhcnRzV2l0aCA6IHN0cmluZztcblx0bWFuYWdlckVxdWFsIDogc3RyaW5nO1xuXHRtZW1iZXJFcXVhbCA6IHN0cmluZztcblx0ZnVsbE5hbWVTdGFydHNXaXRoSW4gOiBzdHJpbmc7XG5cdGFuY2VzdG9ySWRJbiA6IHN0cmluZztcblx0aWRPckluaGVyaXRlZFBhcmVudElkSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlGaWx0ZXInIH0sXG5cdFx0XHRcdGZyZWVUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lbWJlcnNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lT3JSZWZlcmVuY2VJZFN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWFuYWdlckVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lbWJlckVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxOYW1lU3RhcnRzV2l0aEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFuY2VzdG9ySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE9ySW5oZXJpdGVkUGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeUZpbHRlcjsiXX0=