/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
/**
 * @record
 */
export function KalturaQuizUserEntryArgs() { }
var KalturaQuizUserEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaQuizUserEntry, _super);
    function KalturaQuizUserEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaQuizUserEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuizUserEntry' },
            score: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaQuizUserEntry;
}(KalturaUserEntry));
export { KalturaQuizUserEntry };
if (false) {
    /** @type {?} */
    KalturaQuizUserEntry.prototype.score;
}
typesMappingStorage['KalturaQuizUserEntry'] = KalturaQuizUserEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1aXpVc2VyRW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFRdWl6VXNlckVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPNUUsSUFBQTtJQUEwQyxnREFBZ0I7SUFJdEQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE3Qkw7RUFTMEMsZ0JBQWdCLEVBcUJ6RCxDQUFBO0FBckJELGdDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnksIEthbHR1cmFVc2VyRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUXVpelVzZXJFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVzZXJFbnRyeUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUXVpelVzZXJFbnRyeSBleHRlbmRzIEthbHR1cmFVc2VyRW50cnkge1xuXG4gICAgcmVhZG9ubHkgc2NvcmUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFRdWl6VXNlckVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFRdWl6VXNlckVudHJ5JyB9LFxuXHRcdFx0XHRzY29yZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFRdWl6VXNlckVudHJ5J10gPSBLYWx0dXJhUXVpelVzZXJFbnRyeTsiXX0=