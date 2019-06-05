/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';
/**
 * @record
 */
export function KalturaKontikiStorageProfileArgs() { }
/** @type {?|undefined} */
KalturaKontikiStorageProfileArgs.prototype.serviceToken;
var KalturaKontikiStorageProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaKontikiStorageProfile, _super);
    function KalturaKontikiStorageProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaKontikiStorageProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaKontikiStorageProfile' },
            serviceToken: { type: 's' }
        });
        return result;
    };
    return KalturaKontikiStorageProfile;
}(KalturaStorageProfile));
export { KalturaKontikiStorageProfile };
if (false) {
    /** @type {?} */
    KalturaKontikiStorageProfile.prototype.serviceToken;
}
typesMappingStorage['KalturaKontikiStorageProfile'] = KalturaKontikiStorageProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtvbnRpa2lTdG9yYWdlUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUtvbnRpa2lTdG9yYWdlUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFPM0YsSUFBQTtJQUFrRCx3REFBcUI7SUFJbkUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBN0JMO0VBU2tELHFCQUFxQixFQXFCdEUsQ0FBQTtBQXJCRCx3Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGUsIEthbHR1cmFTdG9yYWdlUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUtvbnRpa2lTdG9yYWdlUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VQcm9maWxlQXJncyB7XG4gICAgc2VydmljZVRva2VuPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUtvbnRpa2lTdG9yYWdlUHJvZmlsZSBleHRlbmRzIEthbHR1cmFTdG9yYWdlUHJvZmlsZSB7XG5cbiAgICBzZXJ2aWNlVG9rZW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFLb250aWtpU3RvcmFnZVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUtvbnRpa2lTdG9yYWdlUHJvZmlsZScgfSxcblx0XHRcdFx0c2VydmljZVRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFLb250aWtpU3RvcmFnZVByb2ZpbGUnXSA9IEthbHR1cmFLb250aWtpU3RvcmFnZVByb2ZpbGU7Il19