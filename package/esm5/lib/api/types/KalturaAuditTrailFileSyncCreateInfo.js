/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailFileSyncType } from './KalturaAuditTrailFileSyncType';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
/**
 * @record
 */
export function KalturaAuditTrailFileSyncCreateInfoArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.objectSubType;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.dc;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.original;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.fileType;
var KalturaAuditTrailFileSyncCreateInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailFileSyncCreateInfo, _super);
    function KalturaAuditTrailFileSyncCreateInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailFileSyncCreateInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailFileSyncCreateInfo' },
            version: { type: 's' },
            objectSubType: { type: 'n' },
            dc: { type: 'n' },
            original: { type: 'b' },
            fileType: { type: 'en', subTypeConstructor: KalturaAuditTrailFileSyncType, subType: 'KalturaAuditTrailFileSyncType' }
        });
        return result;
    };
    return KalturaAuditTrailFileSyncCreateInfo;
}(KalturaAuditTrailInfo));
export { KalturaAuditTrailFileSyncCreateInfo };
if (false) {
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.version;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.objectSubType;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.dc;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.original;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.fileType;
}
typesMappingStorage['KalturaAuditTrailFileSyncCreateInfo'] = KalturaAuditTrailFileSyncCreateInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzNGLElBQUE7SUFBeUQsK0RBQXFCO0lBUTFFLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQTFDTDtFQWN5RCxxQkFBcUIsRUE2QjdFLENBQUE7QUE3QkQsK0NBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY1R5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvLCBLYWx0dXJhQXVkaXRUcmFpbEluZm9BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbEluZm8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXVkaXRUcmFpbEluZm9BcmdzIHtcbiAgICB2ZXJzaW9uPyA6IHN0cmluZztcblx0b2JqZWN0U3ViVHlwZT8gOiBudW1iZXI7XG5cdGRjPyA6IG51bWJlcjtcblx0b3JpZ2luYWw/IDogYm9vbGVhbjtcblx0ZmlsZVR5cGU/IDogS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY1R5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvIGV4dGVuZHMgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvIHtcblxuICAgIHZlcnNpb24gOiBzdHJpbmc7XG5cdG9iamVjdFN1YlR5cGUgOiBudW1iZXI7XG5cdGRjIDogbnVtYmVyO1xuXHRvcmlnaW5hbCA6IGJvb2xlYW47XG5cdGZpbGVUeXBlIDogS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY1R5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdFN1YlR5cGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b3JpZ2luYWwgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZmlsZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm8nXSA9IEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvOyJdfQ==