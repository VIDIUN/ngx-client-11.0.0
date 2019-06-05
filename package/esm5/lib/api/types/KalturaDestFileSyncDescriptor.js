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
export function KalturaDestFileSyncDescriptorArgs() { }
var KalturaDestFileSyncDescriptor = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDestFileSyncDescriptor, _super);
    function KalturaDestFileSyncDescriptor(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDestFileSyncDescriptor.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDestFileSyncDescriptor' }
        });
        return result;
    };
    return KalturaDestFileSyncDescriptor;
}(KalturaFileSyncDescriptor));
export { KalturaDestFileSyncDescriptor };
typesMappingStorage['KalturaDestFileSyncDescriptor'] = KalturaDestFileSyncDescriptor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFPdkcsSUFBQTtJQUFtRCx5REFBeUI7SUFJeEUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTVCTDtFQVNtRCx5QkFBeUIsRUFvQjNFLENBQUE7QUFwQkQseUNBb0JDO0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yLCBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbGVTeW5jRGVzY3JpcHRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3JBcmdzICBleHRlbmRzIEthbHR1cmFGaWxlU3luY0Rlc2NyaXB0b3JBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3IgZXh0ZW5kcyBLYWx0dXJhRmlsZVN5bmNEZXNjcmlwdG9yIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGVzdEZpbGVTeW5jRGVzY3JpcHRvckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVzdEZpbGVTeW5jRGVzY3JpcHRvcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3InXSA9IEthbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yOyJdfQ==