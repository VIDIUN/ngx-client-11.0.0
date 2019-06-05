/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaUserEntryFilter extends KalturaUserEntryBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaUserEntryFilter' },
            userIdEqualCurrent: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isAnonymous: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            privacyContextEqual: { type: 's' },
            privacyContextIn: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVUxRyxNQUFNLDZCQUE4QixTQUFRLDBCQUEwQjs7OztJQU9sRSxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3JILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5QmFzZUZpbHRlciwgS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJFbnRyeUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXJBcmdzIHtcbiAgICB1c2VySWRFcXVhbEN1cnJlbnQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aXNBbm9ueW1vdXM/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cHJpdmFjeUNvbnRleHRFcXVhbD8gOiBzdHJpbmc7XG5cdHByaXZhY3lDb250ZXh0SW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlckVudHJ5RmlsdGVyIGV4dGVuZHMgS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXIge1xuXG4gICAgdXNlcklkRXF1YWxDdXJyZW50IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aXNBbm9ueW1vdXMgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRwcml2YWN5Q29udGV4dEVxdWFsIDogc3RyaW5nO1xuXHRwcml2YWN5Q29udGV4dEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXNlckVudHJ5RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsQ3VycmVudCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0aXNBbm9ueW1vdXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHByaXZhY3lDb250ZXh0RXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHRJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlckVudHJ5RmlsdGVyJ10gPSBLYWx0dXJhVXNlckVudHJ5RmlsdGVyOyJdfQ==