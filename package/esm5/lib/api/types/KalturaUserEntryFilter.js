/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserEntryBaseFilter } from './KalturaUserEntryBaseFilter';
/**
 * @record
 */
export function KalturaUserEntryFilterArgs() { }
/** @type {?|undefined} */
KalturaUserEntryFilterArgs.prototype.userIdEqualCurrent;
/** @type {?|undefined} */
KalturaUserEntryFilterArgs.prototype.isAnonymous;
/** @type {?|undefined} */
KalturaUserEntryFilterArgs.prototype.privacyContextEqual;
/** @type {?|undefined} */
KalturaUserEntryFilterArgs.prototype.privacyContextIn;
var KalturaUserEntryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserEntryFilter, _super);
    function KalturaUserEntryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserEntryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserEntryFilter' },
            userIdEqualCurrent: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isAnonymous: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            privacyContextEqual: { type: 's' },
            privacyContextIn: { type: 's' }
        });
        return result;
    };
    return KalturaUserEntryFilter;
}(KalturaUserEntryBaseFilter));
export { KalturaUserEntryFilter };
if (false) {
    /** @type {?} */
    KalturaUserEntryFilter.prototype.userIdEqualCurrent;
    /** @type {?} */
    KalturaUserEntryFilter.prototype.isAnonymous;
    /** @type {?} */
    KalturaUserEntryFilter.prototype.privacyContextEqual;
    /** @type {?} */
    KalturaUserEntryFilter.prototype.privacyContextIn;
}
typesMappingStorage['KalturaUserEntryFilter'] = KalturaUserEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVMUcsSUFBQTtJQUE0QyxrREFBMEI7SUFPbEUsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3JILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F2Q0w7RUFhNEMsMEJBQTBCLEVBMkJyRSxDQUFBO0FBM0JELGtDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXIsIEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyRW50cnlGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyQXJncyB7XG4gICAgdXNlcklkRXF1YWxDdXJyZW50PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGlzQW5vbnltb3VzPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHByaXZhY3lDb250ZXh0RXF1YWw/IDogc3RyaW5nO1xuXHRwcml2YWN5Q29udGV4dEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJFbnRyeUZpbHRlciBleHRlbmRzIEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyIHtcblxuICAgIHVzZXJJZEVxdWFsQ3VycmVudCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGlzQW5vbnltb3VzIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cHJpdmFjeUNvbnRleHRFcXVhbCA6IHN0cmluZztcblx0cHJpdmFjeUNvbnRleHRJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJFbnRyeUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlckVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHR1c2VySWRFcXVhbEN1cnJlbnQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGlzQW5vbnltb3VzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRwcml2YWN5Q29udGV4dEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaXZhY3lDb250ZXh0SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJFbnRyeUZpbHRlciddID0gS2FsdHVyYVVzZXJFbnRyeUZpbHRlcjsiXX0=