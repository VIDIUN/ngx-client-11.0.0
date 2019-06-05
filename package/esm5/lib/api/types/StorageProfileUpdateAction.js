/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StorageProfileUpdateActionArgs() { }
/** @type {?} */
StorageProfileUpdateActionArgs.prototype.storageProfileId;
/** @type {?} */
StorageProfileUpdateActionArgs.prototype.storageProfile;
/**
 * Build request payload for service 'storageProfile' action 'update'.
 *
 * Usage: Update storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'storageProfile' action 'update'.
 *
 * Usage: Update storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
StorageProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(StorageProfileUpdateAction, _super);
    function StorageProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaStorageProfile', responseConstructor: KalturaStorageProfile }) || this;
    }
    /**
     * @return {?}
     */
    StorageProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'storageprofile' },
            action: { type: 'c', default: 'update' },
            storageProfileId: { type: 'n' },
            storageProfile: { type: 'o', subTypeConstructor: KalturaStorageProfile, subType: 'KalturaStorageProfile' }
        });
        return result;
    };
    return StorageProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'storageProfile' action 'update'.
 *
 * Usage: Update storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
export { StorageProfileUpdateAction };
if (false) {
    /** @type {?} */
    StorageProfileUpdateAction.prototype.storageProfileId;
    /** @type {?} */
    StorageProfileUpdateAction.prototype.storageProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZVByb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1N0b3JhZ2VQcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQXFDO0lBS2pGLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNoRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBMUNMO0VBbUJnRCxjQUFjLEVBd0I3RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsc0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZVByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc3RvcmFnZVByb2ZpbGVJZCA6IG51bWJlcjtcblx0c3RvcmFnZVByb2ZpbGUgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzdG9yYWdlUHJvZmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgc3RvcmFnZSBwcm9maWxlIGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVN0b3JhZ2VQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlUHJvZmlsZVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTdG9yYWdlUHJvZmlsZT4ge1xuXG4gICAgc3RvcmFnZVByb2ZpbGVJZCA6IG51bWJlcjtcblx0c3RvcmFnZVByb2ZpbGUgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3RvcmFnZVByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N0b3JhZ2Vwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRzdG9yYWdlUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0b3JhZ2VQcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=