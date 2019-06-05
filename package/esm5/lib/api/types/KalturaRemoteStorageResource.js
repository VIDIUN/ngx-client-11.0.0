/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlResource } from './KalturaUrlResource';
/**
 * @record
 */
export function KalturaRemoteStorageResourceArgs() { }
/** @type {?|undefined} */
KalturaRemoteStorageResourceArgs.prototype.storageProfileId;
var KalturaRemoteStorageResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRemoteStorageResource, _super);
    function KalturaRemoteStorageResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRemoteStorageResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRemoteStorageResource' },
            storageProfileId: { type: 'n' }
        });
        return result;
    };
    return KalturaRemoteStorageResource;
}(KalturaUrlResource));
export { KalturaRemoteStorageResource };
if (false) {
    /** @type {?} */
    KalturaRemoteStorageResource.prototype.storageProfileId;
}
typesMappingStorage['KalturaRemoteStorageResource'] = KalturaRemoteStorageResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7QUFPbEYsSUFBQTtJQUFrRCx3REFBa0I7SUFJaEUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0E3Qkw7RUFTa0Qsa0JBQWtCLEVBcUJuRSxDQUFBO0FBckJELHdDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcmxSZXNvdXJjZSwgS2FsdHVyYVVybFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYVVybFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsUmVzb3VyY2VBcmdzIHtcbiAgICBzdG9yYWdlUHJvZmlsZUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFVcmxSZXNvdXJjZSB7XG5cbiAgICBzdG9yYWdlUHJvZmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVtb3RlU3RvcmFnZVJlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZW1vdGVTdG9yYWdlUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHN0b3JhZ2VQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZSddID0gS2FsdHVyYVJlbW90ZVN0b3JhZ2VSZXNvdXJjZTsiXX0=