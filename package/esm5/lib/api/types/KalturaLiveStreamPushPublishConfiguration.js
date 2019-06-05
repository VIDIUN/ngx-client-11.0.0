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
export function KalturaLiveStreamPushPublishConfigurationArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamPushPublishConfigurationArgs.prototype.publishUrl;
/** @type {?|undefined} */
KalturaLiveStreamPushPublishConfigurationArgs.prototype.backupPublishUrl;
/** @type {?|undefined} */
KalturaLiveStreamPushPublishConfigurationArgs.prototype.port;
var KalturaLiveStreamPushPublishConfiguration = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamPushPublishConfiguration, _super);
    function KalturaLiveStreamPushPublishConfiguration(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamPushPublishConfiguration.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamPushPublishConfiguration' },
            publishUrl: { type: 's' },
            backupPublishUrl: { type: 's' },
            port: { type: 's' }
        });
        return result;
    };
    return KalturaLiveStreamPushPublishConfiguration;
}(KalturaObjectBase));
export { KalturaLiveStreamPushPublishConfiguration };
if (false) {
    /** @type {?} */
    KalturaLiveStreamPushPublishConfiguration.prototype.publishUrl;
    /** @type {?} */
    KalturaLiveStreamPushPublishConfiguration.prototype.backupPublishUrl;
    /** @type {?} */
    KalturaLiveStreamPushPublishConfiguration.prototype.port;
}
typesMappingStorage['KalturaLiveStreamPushPublishConfiguration'] = KalturaLiveStreamPushPublishConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUErRCxxRUFBaUI7SUFNNUUsbURBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtZQUM5RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvREFuQ0w7RUFXK0QsaUJBQWlCLEVBeUIvRSxDQUFBO0FBekJELHFEQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcHVibGlzaFVybD8gOiBzdHJpbmc7XG5cdGJhY2t1cFB1Ymxpc2hVcmw/IDogc3RyaW5nO1xuXHRwb3J0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwdWJsaXNoVXJsIDogc3RyaW5nO1xuXHRiYWNrdXBQdWJsaXNoVXJsIDogc3RyaW5nO1xuXHRwb3J0IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0cHVibGlzaFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRiYWNrdXBQdWJsaXNoVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24nXSA9IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uOyJdfQ==