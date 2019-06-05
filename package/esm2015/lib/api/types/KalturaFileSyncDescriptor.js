/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFileSyncDescriptor extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileSyncDescriptor' },
            fileSyncLocalPath: { type: 's' },
            fileEncryptionKey: { type: 's' },
            fileSyncRemoteUrl: { type: 's' },
            fileSyncObjectSubType: { type: 'n' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixNQUFNLGdDQUFpQyxTQUFRLGlCQUFpQjs7OztJQU81RCxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3JBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRmaWxlRW5jcnlwdGlvbktleT8gOiBzdHJpbmc7XG5cdGZpbGVTeW5jUmVtb3RlVXJsPyA6IHN0cmluZztcblx0ZmlsZVN5bmNPYmplY3RTdWJUeXBlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRmaWxlRW5jcnlwdGlvbktleSA6IHN0cmluZztcblx0ZmlsZVN5bmNSZW1vdGVVcmwgOiBzdHJpbmc7XG5cdGZpbGVTeW5jT2JqZWN0U3ViVHlwZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yJyB9LFxuXHRcdFx0XHRmaWxlU3luY0xvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlRW5jcnlwdGlvbktleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU3luY1JlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU3luY09iamVjdFN1YlR5cGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvciddID0gS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvcjsiXX0=