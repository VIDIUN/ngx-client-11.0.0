/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBusinessProcessServerBaseFilter } from './KalturaBusinessProcessServerBaseFilter';
/**
 * @record
 */
export function KalturaBusinessProcessServerFilterArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessServerFilterArgs.prototype.currentDcOrExternal;
/** @type {?|undefined} */
KalturaBusinessProcessServerFilterArgs.prototype.currentDc;
var KalturaBusinessProcessServerFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessServerFilter, _super);
    function KalturaBusinessProcessServerFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessServerFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessServerFilter' },
            currentDcOrExternal: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            currentDc: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaBusinessProcessServerFilter;
}(KalturaBusinessProcessServerBaseFilter));
export { KalturaBusinessProcessServerFilter };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessServerFilter.prototype.currentDcOrExternal;
    /** @type {?} */
    KalturaBusinessProcessServerFilter.prototype.currentDc;
}
typesMappingStorage['KalturaBusinessProcessServerFilter'] = KalturaBusinessProcessServerFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7OztBQVE5SSxJQUFBO0lBQXdELDhEQUFzQztJQUsxRiw0Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDdEgsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDbkcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0FqQ0w7RUFXd0Qsc0NBQXNDLEVBdUI3RixDQUFBO0FBdkJELDhDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlciwgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzIHtcbiAgICBjdXJyZW50RGNPckV4dGVybmFsPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGN1cnJlbnREYz8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXIge1xuXG4gICAgY3VycmVudERjT3JFeHRlcm5hbCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGN1cnJlbnREYyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckZpbHRlcicgfSxcblx0XHRcdFx0Y3VycmVudERjT3JFeHRlcm5hbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0Y3VycmVudERjIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyJ10gPSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyRmlsdGVyOyJdfQ==