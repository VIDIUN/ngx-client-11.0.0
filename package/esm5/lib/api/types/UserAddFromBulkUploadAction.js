/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadUserData } from './KalturaBulkUploadUserData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function UserAddFromBulkUploadActionArgs() { }
/** @type {?} */
UserAddFromBulkUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
UserAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/** @type {?|undefined} */
UserAddFromBulkUploadActionArgs.prototype.bulkUploadUserData;
/**
 * Build request payload for service 'user' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
UserAddFromBulkUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserAddFromBulkUploadAction, _super);
    function UserAddFromBulkUploadAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    UserAddFromBulkUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadJobData, subType: 'KalturaBulkUploadJobData' },
            bulkUploadUserData: { type: 'o', subTypeConstructor: KalturaBulkUploadUserData, subType: 'KalturaBulkUploadUserData' }
        });
        return result;
    };
    return UserAddFromBulkUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'user' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { UserAddFromBulkUploadAction };
if (false) {
    /** @type {?} */
    UserAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    UserAddFromBulkUploadAction.prototype.bulkUploadData;
    /** @type {?} */
    UserAddFromBulkUploadAction.prototype.bulkUploadUserData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjNGOzs7Ozs7OztBQUFBO0lBQWlELHVEQUF1QztJQU1wRixxQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3RELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDcEgsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQS9DTDtFQXNCaUQsb0JBQW9CLEVBMEJwRSxDQUFBOzs7Ozs7Ozs7QUExQkQsdUNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZCc7XG5cbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkVXNlckRhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkVXNlckRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YTtcblx0YnVsa1VwbG9hZFVzZXJEYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkVXNlckRhdGE7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2FkZEZyb21CdWxrVXBsb2FkJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQnVsa1VwbG9hZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGE7XG5cdGJ1bGtVcGxvYWRVc2VyRGF0YSA6IEthbHR1cmFCdWxrVXBsb2FkVXNlckRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrVXBsb2FkJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YScgfSxcblx0XHRcdFx0YnVsa1VwbG9hZFVzZXJEYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFVzZXJEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkVXNlckRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==