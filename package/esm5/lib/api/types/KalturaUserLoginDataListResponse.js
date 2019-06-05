/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserLoginData } from './KalturaUserLoginData';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaUserLoginDataListResponseArgs() { }
var KalturaUserLoginDataListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserLoginDataListResponse, _super);
    function KalturaUserLoginDataListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaUserLoginDataListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserLoginDataListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaUserLoginData, subType: 'KalturaUserLoginData' }
        });
        return result;
    };
    return KalturaUserLoginDataListResponse;
}(KalturaListResponse));
export { KalturaUserLoginDataListResponse };
if (false) {
    /** @type {?} */
    KalturaUserLoginDataListResponse.prototype.objects;
}
typesMappingStorage['KalturaUserLoginDataListResponse'] = KalturaUserLoginDataListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJMb2dpbkRhdGFMaXN0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyTG9naW5EYXRhTGlzdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFPckYsSUFBQTtJQUFzRCw0REFBbUI7SUFJckUsMENBQVksSUFBNEM7UUFBeEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1NBQzdHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBL0JMO0VBVXNELG1CQUFtQixFQXNCeEUsQ0FBQTtBQXRCRCw0Q0FzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckxvZ2luRGF0YSB9IGZyb20gJy4vS2FsdHVyYVVzZXJMb2dpbkRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUxpc3RSZXNwb25zZSwgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXN0UmVzcG9uc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyTG9naW5EYXRhTGlzdFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyTG9naW5EYXRhTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYVVzZXJMb2dpbkRhdGFbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJMb2dpbkRhdGFMaXN0UmVzcG9uc2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3RzID09PSAndW5kZWZpbmVkJykgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJMb2dpbkRhdGFMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJMb2dpbkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJMb2dpbkRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyTG9naW5EYXRhTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhVXNlckxvZ2luRGF0YUxpc3RSZXNwb25zZTsiXX0=