/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStreamConfigurationArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.url;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.publishUrl;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.backupUrl;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.streamName;
var KalturaLiveStreamConfiguration = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamConfiguration, _super);
    function KalturaLiveStreamConfiguration(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamConfiguration.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamConfiguration' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            url: { type: 's' },
            publishUrl: { type: 's' },
            backupUrl: { type: 's' },
            streamName: { type: 's' }
        });
        return result;
    };
    return KalturaLiveStreamConfiguration;
}(KalturaObjectBase));
export { KalturaLiveStreamConfiguration };
if (false) {
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.protocol;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.url;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.publishUrl;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.backupUrl;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.streamName;
}
typesMappingStorage['KalturaLiveStreamConfiguration'] = KalturaLiveStreamConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsSUFBQTtJQUFvRCwwREFBaUI7SUFRakUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM3RyxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBMUNMO0VBY29ELGlCQUFpQixFQTZCcEUsQ0FBQTtBQTdCRCwwQ0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1Byb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHByb3RvY29sPyA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xuXHR1cmw/IDogc3RyaW5nO1xuXHRwdWJsaXNoVXJsPyA6IHN0cmluZztcblx0YmFja3VwVXJsPyA6IHN0cmluZztcblx0c3RyZWFtTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHByb3RvY29sIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHVybCA6IHN0cmluZztcblx0cHVibGlzaFVybCA6IHN0cmluZztcblx0YmFja3VwVXJsIDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja1Byb3RvY29sJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHVibGlzaFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRiYWNrdXBVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24nXSA9IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbjsiXX0=