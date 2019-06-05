/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserBaseFilter } from './KalturaUserBaseFilter';
/**
 * @record
 */
export function KalturaUserFilterArgs() { }
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idOrScreenNameStartsWith;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.loginEnabledEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdsEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdsIn;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.firstNameOrLastNameStartsWith;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.permissionNamesMultiLikeOr;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.permissionNamesMultiLikeAnd;
export class KalturaUserFilter extends KalturaUserBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaUserFilter' },
            idOrScreenNameStartsWith: { type: 's' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            loginEnabledEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            roleIdEqual: { type: 's' },
            roleIdsEqual: { type: 's' },
            roleIdsIn: { type: 's' },
            firstNameOrLastNameStartsWith: { type: 's' },
            permissionNamesMultiLikeOr: { type: 's' },
            permissionNamesMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUserFilter.prototype.idOrScreenNameStartsWith;
    /** @type {?} */
    KalturaUserFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.idIn;
    /** @type {?} */
    KalturaUserFilter.prototype.loginEnabledEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdsEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdsIn;
    /** @type {?} */
    KalturaUserFilter.prototype.firstNameOrLastNameStartsWith;
    /** @type {?} */
    KalturaUserFilter.prototype.permissionNamesMultiLikeOr;
    /** @type {?} */
    KalturaUserFilter.prototype.permissionNamesMultiLikeAnd;
}
typesMappingStorage['KalturaUserFilter'] = KalturaUserFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IzRixNQUFNLHdCQUF5QixTQUFRLHFCQUFxQjs7OztJQWF4RCxZQUFZLElBQTZCO1FBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RSx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDcEgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsNkJBQTZCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckJhc2VGaWx0ZXIsIEthbHR1cmFVc2VyQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVc2VyQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFVc2VyQmFzZUZpbHRlckFyZ3Mge1xuICAgIGlkT3JTY3JlZW5OYW1lU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdGlkRXF1YWw/IDogc3RyaW5nO1xuXHRpZEluPyA6IHN0cmluZztcblx0bG9naW5FbmFibGVkRXF1YWw/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cm9sZUlkRXF1YWw/IDogc3RyaW5nO1xuXHRyb2xlSWRzRXF1YWw/IDogc3RyaW5nO1xuXHRyb2xlSWRzSW4/IDogc3RyaW5nO1xuXHRmaXJzdE5hbWVPckxhc3ROYW1lU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhVXNlckJhc2VGaWx0ZXIge1xuXG4gICAgaWRPclNjcmVlbk5hbWVTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHRsb2dpbkVuYWJsZWRFcXVhbCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJvbGVJZEVxdWFsIDogc3RyaW5nO1xuXHRyb2xlSWRzRXF1YWwgOiBzdHJpbmc7XG5cdHJvbGVJZHNJbiA6IHN0cmluZztcblx0Zmlyc3ROYW1lT3JMYXN0TmFtZVN0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyRmlsdGVyJyB9LFxuXHRcdFx0XHRpZE9yU2NyZWVuTmFtZVN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvZ2luRW5hYmxlZEVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRyb2xlSWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb2xlSWRzRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9sZUlkc0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpcnN0TmFtZU9yTGFzdE5hbWVTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25OYW1lc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlckZpbHRlciddID0gS2FsdHVyYVVzZXJGaWx0ZXI7Il19