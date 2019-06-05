/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttachmentAssetFilter } from './KalturaAttachmentAssetFilter';
/**
 * @record
 */
export function KalturaTranscriptAssetBaseFilterArgs() { }
var KalturaTranscriptAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTranscriptAssetBaseFilter, _super);
    function KalturaTranscriptAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTranscriptAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTranscriptAssetBaseFilter' }
        });
        return result;
    };
    return KalturaTranscriptAssetBaseFilter;
}(KalturaAttachmentAssetFilter));
export { KalturaTranscriptAssetBaseFilter };
typesMappingStorage['KalturaTranscriptAssetBaseFilter'] = KalturaTranscriptAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyYW5zY3JpcHRBc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUcmFuc2NyaXB0QXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBb0MsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFPaEgsSUFBQTtJQUFzRCw0REFBNEI7SUFJOUUsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTVCTDtFQVNzRCw0QkFBNEIsRUFvQmpGLENBQUE7QUFwQkQsNENBb0JDO0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudEFzc2V0RmlsdGVyLCBLYWx0dXJhQXR0YWNobWVudEFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUF0dGFjaG1lbnRBc3NldEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRyYW5zY3JpcHRBc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBdHRhY2htZW50QXNzZXRGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRyYW5zY3JpcHRBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXR0YWNobWVudEFzc2V0RmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVHJhbnNjcmlwdEFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHJhbnNjcmlwdEFzc2V0QmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRyYW5zY3JpcHRBc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFUcmFuc2NyaXB0QXNzZXRCYXNlRmlsdGVyOyJdfQ==