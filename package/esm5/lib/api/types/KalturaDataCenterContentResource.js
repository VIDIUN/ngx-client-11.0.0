/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaDataCenterContentResourceArgs() { }
var KalturaDataCenterContentResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDataCenterContentResource, _super);
    function KalturaDataCenterContentResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDataCenterContentResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDataCenterContentResource' }
        });
        return result;
    };
    return KalturaDataCenterContentResource;
}(KalturaContentResource));
export { KalturaDataCenterContentResource };
typesMappingStorage['KalturaDataCenterContentResource'] = KalturaDataCenterContentResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFPOUYsSUFBQTtJQUFzRCw0REFBc0I7SUFJeEUsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTVCTDtFQVNzRCxzQkFBc0IsRUFvQjNFLENBQUE7QUFwQkQsNENBb0JDO0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGVudFJlc291cmNlLCBLYWx0dXJhQ29udGVudFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhQ29udGVudFJlc291cmNlIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnXSA9IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlOyJdfQ==