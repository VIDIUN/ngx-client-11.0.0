/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamPushPublishConfiguration } from './KalturaLiveStreamPushPublishConfiguration';
/**
 * @record
 */
export function KalturaLiveStreamPushPublishRTMPConfigurationArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamPushPublishRTMPConfigurationArgs.prototype.userId;
/** @type {?|undefined} */
KalturaLiveStreamPushPublishRTMPConfigurationArgs.prototype.password;
/** @type {?|undefined} */
KalturaLiveStreamPushPublishRTMPConfigurationArgs.prototype.streamName;
/** @type {?|undefined} */
KalturaLiveStreamPushPublishRTMPConfigurationArgs.prototype.applicationName;
var KalturaLiveStreamPushPublishRTMPConfiguration = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamPushPublishRTMPConfiguration, _super);
    function KalturaLiveStreamPushPublishRTMPConfiguration(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamPushPublishRTMPConfiguration.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamPushPublishRTMPConfiguration' },
            userId: { type: 's' },
            password: { type: 's' },
            streamName: { type: 's' },
            applicationName: { type: 's' }
        });
        return result;
    };
    return KalturaLiveStreamPushPublishRTMPConfiguration;
}(KalturaLiveStreamPushPublishConfiguration));
export { KalturaLiveStreamPushPublishRTMPConfiguration };
if (false) {
    /** @type {?} */
    KalturaLiveStreamPushPublishRTMPConfiguration.prototype.userId;
    /** @type {?} */
    KalturaLiveStreamPushPublishRTMPConfiguration.prototype.password;
    /** @type {?} */
    KalturaLiveStreamPushPublishRTMPConfiguration.prototype.streamName;
    /** @type {?} */
    KalturaLiveStreamPushPublishRTMPConfiguration.prototype.applicationName;
}
typesMappingStorage['KalturaLiveStreamPushPublishRTMPConfiguration'] = KalturaLiveStreamPushPublishRTMPConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaFJUTVBDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoUlRNUENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFpRCxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXZKLElBQUE7SUFBbUUseUVBQXlDO0lBT3hHLHVEQUFZLElBQXlEO2VBRWpFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dEQXRDTDtFQVltRSx5Q0FBeUMsRUEyQjNHLENBQUE7QUEzQkQseURBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24sIEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BcmdzIHtcbiAgICB1c2VySWQ/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWU/IDogc3RyaW5nO1xuXHRhcHBsaWNhdGlvbk5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoUlRNUENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbiB7XG5cbiAgICB1c2VySWQgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lIDogc3RyaW5nO1xuXHRhcHBsaWNhdGlvbk5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoUlRNUENvbmZpZ3VyYXRpb24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFwcGxpY2F0aW9uTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoUlRNUENvbmZpZ3VyYXRpb24nXSA9IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbjsiXX0=