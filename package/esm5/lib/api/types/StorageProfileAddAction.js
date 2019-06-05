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
export function StorageProfileAddActionArgs() { }
/** @type {?} */
StorageProfileAddActionArgs.prototype.storageProfile;
/**
 * Build request payload for service 'storageProfile' action 'add'.
 *
 * Usage: Adds a storage profile to the Kaltura DB
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'storageProfile' action 'add'.
 *
 * Usage: Adds a storage profile to the Kaltura DB
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
StorageProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(StorageProfileAddAction, _super);
    function StorageProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaStorageProfile', responseConstructor: KalturaStorageProfile }) || this;
    }
    /**
     * @return {?}
     */
    StorageProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'storageprofile' },
            action: { type: 'c', default: 'add' },
            storageProfile: { type: 'o', subTypeConstructor: KalturaStorageProfile, subType: 'KalturaStorageProfile' }
        });
        return result;
    };
    return StorageProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'storageProfile' action 'add'.
 *
 * Usage: Adds a storage profile to the Kaltura DB
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
export { StorageProfileAddAction };
if (false) {
    /** @type {?} */
    StorageProfileAddAction.prototype.storageProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZVByb2ZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1N0b3JhZ2VQcm9maWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFxQztJQUk5RSxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDO0tBQzlIOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDaEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBdkNMO0VBa0I2QyxjQUFjLEVBc0IxRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsbUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZVByb2ZpbGVBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc3RvcmFnZVByb2ZpbGUgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzdG9yYWdlUHJvZmlsZScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGRzIGEgc3RvcmFnZSBwcm9maWxlIHRvIHRoZSBLYWx0dXJhIERCXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVN0b3JhZ2VQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTdG9yYWdlUHJvZmlsZT4ge1xuXG4gICAgc3RvcmFnZVByb2ZpbGUgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3RvcmFnZVByb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N0b3JhZ2Vwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRzdG9yYWdlUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19