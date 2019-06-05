/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyPolicy } from './KalturaPlayReadyPolicy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyLicenseDetailsArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.policy;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.beginDate;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.expirationDate;
/** @type {?|undefined} */
KalturaPlayReadyLicenseDetailsArgs.prototype.removalDate;
var KalturaPlayReadyLicenseDetails = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyLicenseDetails, _super);
    function KalturaPlayReadyLicenseDetails(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyLicenseDetails.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyLicenseDetails' },
            policy: { type: 'o', subTypeConstructor: KalturaPlayReadyPolicy, subType: 'KalturaPlayReadyPolicy' },
            beginDate: { type: 'n' },
            expirationDate: { type: 'n' },
            removalDate: { type: 'n' }
        });
        return result;
    };
    return KalturaPlayReadyLicenseDetails;
}(KalturaObjectBase));
export { KalturaPlayReadyLicenseDetails };
if (false) {
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.policy;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.beginDate;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.expirationDate;
    /** @type {?} */
    KalturaPlayReadyLicenseDetails.prototype.removalDate;
}
typesMappingStorage['KalturaPlayReadyLicenseDetails'] = KalturaPlayReadyLicenseDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLElBQUE7SUFBb0QsMERBQWlCO0lBT2pFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0F2Q0w7RUFhb0QsaUJBQWlCLEVBMkJwRSxDQUFBO0FBM0JELDBDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5UmVhZHlQb2xpY3kgfSBmcm9tICcuL0thbHR1cmFQbGF5UmVhZHlQb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlsc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwb2xpY3k/IDogS2FsdHVyYVBsYXlSZWFkeVBvbGljeTtcblx0YmVnaW5EYXRlPyA6IG51bWJlcjtcblx0ZXhwaXJhdGlvbkRhdGU/IDogbnVtYmVyO1xuXHRyZW1vdmFsRGF0ZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHBvbGljeSA6IEthbHR1cmFQbGF5UmVhZHlQb2xpY3k7XG5cdGJlZ2luRGF0ZSA6IG51bWJlcjtcblx0ZXhwaXJhdGlvbkRhdGUgOiBudW1iZXI7XG5cdHJlbW92YWxEYXRlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzJyB9LFxuXHRcdFx0XHRwb2xpY3kgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlQb2xpY3ksIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeVBvbGljeScgfSxcblx0XHRcdFx0YmVnaW5EYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGV4cGlyYXRpb25EYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlbW92YWxEYXRlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscyddID0gS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzOyJdfQ==