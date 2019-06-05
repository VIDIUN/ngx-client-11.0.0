/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VirusScanProfileUpdateActionArgs() { }
/** @type {?} */
VirusScanProfileUpdateActionArgs.prototype.virusScanProfileId;
/** @type {?} */
VirusScanProfileUpdateActionArgs.prototype.virusScanProfile;
/**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
VirusScanProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(VirusScanProfileUpdateAction, _super);
    function VirusScanProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaVirusScanProfile', responseConstructor: KalturaVirusScanProfile }) || this;
    }
    /**
     * @return {?}
     */
    VirusScanProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'virusscan_virusscanprofile' },
            action: { type: 'c', default: 'update' },
            virusScanProfileId: { type: 'n' },
            virusScanProfile: { type: 'o', subTypeConstructor: KalturaVirusScanProfile, subType: 'KalturaVirusScanProfile' }
        });
        return result;
    };
    return VirusScanProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export { VirusScanProfileUpdateAction };
if (false) {
    /** @type {?} */
    VirusScanProfileUpdateAction.prototype.virusScanProfileId;
    /** @type {?} */
    VirusScanProfileUpdateAction.prototype.virusScanProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUF1QztJQUtyRixzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRyx1QkFBdUIsRUFBRyxDQUFDO0tBQ2xJOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDNUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBbUJrRCxjQUFjLEVBd0IvRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsd0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNTY2FuUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpcnVzU2NhblByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgdmlydXNTY2FuUHJvZmlsZUlkIDogbnVtYmVyO1xuXHR2aXJ1c1NjYW5Qcm9maWxlIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd2aXJ1c1NjYW5Qcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBleGlzaXRuZyB2aXJ1cyBzY2FuIHByb2ZpbGUsIGl0IGlzIHBvc3NpYmxlIHRvIHVwZGF0ZSB0aGUgdmlydXMgc2NhbiBwcm9maWxlIGlkIHRvb1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXJ1c1NjYW5Qcm9maWxlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVZpcnVzU2NhblByb2ZpbGU+IHtcblxuICAgIHZpcnVzU2NhblByb2ZpbGVJZCA6IG51bWJlcjtcblx0dmlydXNTY2FuUHJvZmlsZSA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFZpcnVzU2NhblByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd2aXJ1c3NjYW5fdmlydXNzY2FucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0dmlydXNTY2FuUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpcnVzU2NhblByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=