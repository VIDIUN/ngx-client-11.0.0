/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConstantXsltSyndicationFeed } from './KalturaConstantXsltSyndicationFeed';
/**
 * @record
 */
export function KalturaRokuSyndicationFeedArgs() { }
var KalturaRokuSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRokuSyndicationFeed, _super);
    function KalturaRokuSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRokuSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRokuSyndicationFeed' }
        });
        return result;
    };
    return KalturaRokuSyndicationFeed;
}(KalturaConstantXsltSyndicationFeed));
export { KalturaRokuSyndicationFeed };
typesMappingStorage['KalturaRokuSyndicationFeed'] = KalturaRokuSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJva3VTeW5kaWNhdGlvbkZlZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSb2t1U3luZGljYXRpb25GZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFPbEksSUFBQTtJQUFnRCxzREFBa0M7SUFJOUUsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUN0RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQTVCTDtFQVNnRCxrQ0FBa0MsRUFvQmpGLENBQUE7QUFwQkQsc0NBb0JDO0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uc3RhbnRYc2x0U3luZGljYXRpb25GZWVkLCBLYWx0dXJhQ29uc3RhbnRYc2x0U3luZGljYXRpb25GZWVkQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJva3VTeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFDb25zdGFudFhzbHRTeW5kaWNhdGlvbkZlZWRBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJva3VTeW5kaWNhdGlvbkZlZWQgZXh0ZW5kcyBLYWx0dXJhQ29uc3RhbnRYc2x0U3luZGljYXRpb25GZWVkIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUm9rdVN5bmRpY2F0aW9uRmVlZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUm9rdVN5bmRpY2F0aW9uRmVlZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJva3VTeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFSb2t1U3luZGljYXRpb25GZWVkOyJdfQ==