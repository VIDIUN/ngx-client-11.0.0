/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor } from './KalturaFileSyncDescriptor';
/**
 * @record
 */
export function KalturaSourceFileSyncDescriptorArgs() { }
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.actualFileSyncLocalPath;
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaSourceFileSyncDescriptorArgs.prototype.assetParamsId;
var KalturaSourceFileSyncDescriptor = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSourceFileSyncDescriptor, _super);
    function KalturaSourceFileSyncDescriptor(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSourceFileSyncDescriptor.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSourceFileSyncDescriptor' },
            actualFileSyncLocalPath: { type: 's' },
            assetId: { type: 's' },
            assetParamsId: { type: 'n' }
        });
        return result;
    };
    return KalturaSourceFileSyncDescriptor;
}(KalturaFileSyncDescriptor));
export { KalturaSourceFileSyncDescriptor };
if (false) {
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.actualFileSyncLocalPath;
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.assetId;
    /** @type {?} */
    KalturaSourceFileSyncDescriptor.prototype.assetParamsId;
}
typesMappingStorage['KalturaSourceFileSyncDescriptor'] = KalturaSourceFileSyncDescriptor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7O0FBU3ZHLElBQUE7SUFBcUQsMkRBQXlCO0lBTTFFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQW5DTDtFQVdxRCx5QkFBeUIsRUF5QjdFLENBQUE7QUF6QkQsMkNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3IsIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3JBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU291cmNlRmlsZVN5bmNEZXNjcmlwdG9yQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yQXJncyB7XG4gICAgYWN0dWFsRmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3IgZXh0ZW5kcyBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yIHtcblxuICAgIGFjdHVhbEZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU291cmNlRmlsZVN5bmNEZXNjcmlwdG9yQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3InIH0sXG5cdFx0XHRcdGFjdHVhbEZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU291cmNlRmlsZVN5bmNEZXNjcmlwdG9yJ10gPSBLYWx0dXJhU291cmNlRmlsZVN5bmNEZXNjcmlwdG9yOyJdfQ==