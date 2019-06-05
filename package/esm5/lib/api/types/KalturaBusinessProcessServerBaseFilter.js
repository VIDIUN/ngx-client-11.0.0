/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBusinessProcessServerBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusNotEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.statusNotIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaBusinessProcessServerBaseFilterArgs.prototype.dcEqOrNull;
var KalturaBusinessProcessServerBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessServerBaseFilter, _super);
    function KalturaBusinessProcessServerBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessServerBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessServerBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessServerStatus, subType: 'KalturaBusinessProcessServerStatus' },
            statusNotEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessServerStatus, subType: 'KalturaBusinessProcessServerStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaBusinessProcessProvider, subType: 'KalturaBusinessProcessProvider' },
            typeIn: { type: 's' },
            dcEqual: { type: 'n' },
            dcEqOrNull: { type: 'n' }
        });
        return result;
    };
    return KalturaBusinessProcessServerBaseFilter;
}(KalturaFilter));
export { KalturaBusinessProcessServerBaseFilter };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusNotEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.statusNotIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaBusinessProcessServerBaseFilter.prototype.dcEqOrNull;
}
typesMappingStorage['KalturaBusinessProcessServerBaseFilter'] = KalturaBusinessProcessServerBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCbkUsSUFBQTtJQUE0RCxrRUFBYTtJQW9CckUsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3RJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3pJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUM1SCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQS9FTDtFQTJCNEQsYUFBYSxFQXFEeEUsQ0FBQTtBQXJERCxrREFxREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1Byb3ZpZGVyIH0gZnJvbSAnLi9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRpZE5vdEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzO1xuXHRzdGF0dXNOb3RFcXVhbD8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlcjtcblx0dHlwZUluPyA6IHN0cmluZztcblx0ZGNFcXVhbD8gOiBudW1iZXI7XG5cdGRjRXFPck51bGw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXM7XG5cdHN0YXR1c05vdEVxdWFsIDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXI7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0ZGNFcXVhbCA6IG51bWJlcjtcblx0ZGNFcU9yTnVsbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlclN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzTm90RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NQcm92aWRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzUHJvdmlkZXInIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkY0VxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRjRXFPck51bGwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXJCYXNlRmlsdGVyOyJdfQ==