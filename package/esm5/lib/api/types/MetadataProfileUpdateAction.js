/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataProfileUpdateActionArgs() { }
/** @type {?} */
MetadataProfileUpdateActionArgs.prototype.id;
/** @type {?} */
MetadataProfileUpdateActionArgs.prototype.metadataProfile;
/** @type {?|undefined} */
MetadataProfileUpdateActionArgs.prototype.xsdData;
/** @type {?|undefined} */
MetadataProfileUpdateActionArgs.prototype.viewsData;
/**
 * Build request payload for service 'metadataProfile' action 'update'.
 *
 * Usage: Update an existing metadata object
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'update'.
 *
 * Usage: Update an existing metadata object
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
MetadataProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileUpdateAction, _super);
    function MetadataProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            metadataProfile: { type: 'o', subTypeConstructor: KalturaMetadataProfile, subType: 'KalturaMetadataProfile' },
            xsdData: { type: 's' },
            viewsData: { type: 's' }
        });
        return result;
    };
    return MetadataProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadataProfile' action 'update'.
 *
 * Usage: Update an existing metadata object
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileUpdateAction };
if (false) {
    /** @type {?} */
    MetadataProfileUpdateAction.prototype.id;
    /** @type {?} */
    MetadataProfileUpdateAction.prototype.metadataProfile;
    /** @type {?} */
    MetadataProfileUpdateAction.prototype.xsdData;
    /** @type {?} */
    MetadataProfileUpdateAction.prototype.viewsData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVByb2ZpbGVVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFOzs7Ozs7OztBQUFBO0lBQWlELHVEQUFzQztJQU9uRixxQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDO0tBQ2hJOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDMUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDakgsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBaERMO0VBcUJpRCxjQUFjLEVBNEI5RCxDQUFBOzs7Ozs7Ozs7QUE1QkQsdUNBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZSA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGU7XG5cdHhzZERhdGE/IDogc3RyaW5nO1xuXHR2aWV3c0RhdGE/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGFQcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBtZXRhZGF0YSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVByb2ZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGFQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZTtcblx0eHNkRGF0YSA6IHN0cmluZztcblx0dmlld3NEYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1ldGFkYXRhUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlJyB9LFxuXHRcdFx0XHR4c2REYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZpZXdzRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=