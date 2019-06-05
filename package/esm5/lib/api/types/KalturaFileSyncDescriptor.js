/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFileSyncDescriptorArgs() { }
/** @type {?|undefined} */
KalturaFileSyncDescriptorArgs.prototype.fileSyncLocalPath;
/** @type {?|undefined} */
KalturaFileSyncDescriptorArgs.prototype.fileEncryptionKey;
/** @type {?|undefined} */
KalturaFileSyncDescriptorArgs.prototype.fileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaFileSyncDescriptorArgs.prototype.fileSyncObjectSubType;
var KalturaFileSyncDescriptor = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileSyncDescriptor, _super);
    function KalturaFileSyncDescriptor(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileSyncDescriptor.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileSyncDescriptor' },
            fileSyncLocalPath: { type: 's' },
            fileEncryptionKey: { type: 's' },
            fileSyncRemoteUrl: { type: 's' },
            fileSyncObjectSubType: { type: 'n' }
        });
        return result;
    };
    return KalturaFileSyncDescriptor;
}(KalturaObjectBase));
export { KalturaFileSyncDescriptor };
if (false) {
    /** @type {?} */
    KalturaFileSyncDescriptor.prototype.fileSyncLocalPath;
    /** @type {?} */
    KalturaFileSyncDescriptor.prototype.fileEncryptionKey;
    /** @type {?} */
    KalturaFileSyncDescriptor.prototype.fileSyncRemoteUrl;
    /** @type {?} */
    KalturaFileSyncDescriptor.prototype.fileSyncObjectSubType;
}
typesMappingStorage['KalturaFileSyncDescriptor'] = KalturaFileSyncDescriptor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUErQyxxREFBaUI7SUFPNUQsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0F0Q0w7RUFZK0MsaUJBQWlCLEVBMkIvRCxDQUFBO0FBM0JELHFDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZpbGVTeW5jTG9jYWxQYXRoPyA6IHN0cmluZztcblx0ZmlsZUVuY3J5cHRpb25LZXk/IDogc3RyaW5nO1xuXHRmaWxlU3luY1JlbW90ZVVybD8gOiBzdHJpbmc7XG5cdGZpbGVTeW5jT2JqZWN0U3ViVHlwZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3IgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBmaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0ZmlsZUVuY3J5cHRpb25LZXkgOiBzdHJpbmc7XG5cdGZpbGVTeW5jUmVtb3RlVXJsIDogc3RyaW5nO1xuXHRmaWxlU3luY09iamVjdFN1YlR5cGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvcicgfSxcblx0XHRcdFx0ZmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZUVuY3J5cHRpb25LZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVN5bmNSZW1vdGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVN5bmNPYmplY3RTdWJUeXBlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3InXSA9IEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3I7Il19