/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MetadataProfileUpdateDefinitionFromFileActionArgs() { }
/** @type {?} */
MetadataProfileUpdateDefinitionFromFileActionArgs.prototype.id;
/** @type {?} */
MetadataProfileUpdateDefinitionFromFileActionArgs.prototype.xsdFile;
/**
 * Build request payload for service 'metadataProfile' action 'updateDefinitionFromFile'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'updateDefinitionFromFile'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
MetadataProfileUpdateDefinitionFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileUpdateDefinitionFromFileAction, _super);
    function MetadataProfileUpdateDefinitionFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileUpdateDefinitionFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'updateDefinitionFromFile' },
            id: { type: 'n' },
            xsdFile: { type: 'f' }
        });
        return result;
    };
    return MetadataProfileUpdateDefinitionFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'metadataProfile' action 'updateDefinitionFromFile'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileUpdateDefinitionFromFileAction };
if (false) {
    /** @type {?} */
    MetadataProfileUpdateDefinitionFromFileAction.prototype.id;
    /** @type {?} */
    MetadataProfileUpdateDefinitionFromFileAction.prototype.xsdFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlVXBkYXRlRGVmaW5pdGlvbkZyb21GaWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVByb2ZpbGVVcGRhdGVEZWZpbml0aW9uRnJvbUZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGOzs7Ozs7OztBQUFBO0lBQW1FLHlFQUE0QztJQUszRyx1REFBWSxJQUF3RDtlQUVoRSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDO0tBQ2hJOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDMUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0QsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REExQ0w7RUFtQm1FLG9CQUFvQixFQXdCdEYsQ0FBQTs7Ozs7Ozs7O0FBeEJELHlEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUHJvZmlsZVVwZGF0ZURlZmluaXRpb25Gcm9tRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0eHNkRmlsZSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZXRhZGF0YVByb2ZpbGUnIGFjdGlvbiAndXBkYXRlRGVmaW5pdGlvbkZyb21GaWxlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFuIGV4aXN0aW5nIG1ldGFkYXRhIG9iamVjdCBkZWZpbml0aW9uIGZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVByb2ZpbGVVcGRhdGVEZWZpbml0aW9uRnJvbUZpbGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGFQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0eHNkRmlsZSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFQcm9maWxlVXBkYXRlRGVmaW5pdGlvbkZyb21GaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21ldGFkYXRhX21ldGFkYXRhcHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZURlZmluaXRpb25Gcm9tRmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0eHNkRmlsZSA6IHsgdHlwZSA6ICdmJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=