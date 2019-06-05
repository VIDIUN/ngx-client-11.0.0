/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StorageProfileUpdateStatusActionArgs() { }
/** @type {?} */
StorageProfileUpdateStatusActionArgs.prototype.storageId;
/** @type {?} */
StorageProfileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'storageProfile' action 'updateStatus'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'storageProfile' action 'updateStatus'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
StorageProfileUpdateStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(StorageProfileUpdateStatusAction, _super);
    function StorageProfileUpdateStatusAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    StorageProfileUpdateStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'storageprofile' },
            action: { type: 'c', default: 'updateStatus' },
            storageId: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaStorageProfileStatus, subType: 'KalturaStorageProfileStatus' }
        });
        return result;
    };
    return StorageProfileUpdateStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'storageProfile' action 'updateStatus'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { StorageProfileUpdateStatusAction };
if (false) {
    /** @type {?} */
    StorageProfileUpdateStatusAction.prototype.storageId;
    /** @type {?} */
    StorageProfileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1N0b3JhZ2VQcm9maWxlVXBkYXRlU3RhdHVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQW9CO0lBS3RFLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ2hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBM0NMO0VBb0JzRCxjQUFjLEVBd0JuRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzdG9yYWdlSWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N0b3JhZ2VQcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZVN0YXR1cycuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3RvcmFnZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBzdG9yYWdlSWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTdG9yYWdlUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RvcmFnZXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN0b3JhZ2VJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=