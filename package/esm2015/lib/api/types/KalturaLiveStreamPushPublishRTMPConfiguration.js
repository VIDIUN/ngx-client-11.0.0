/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveStreamPushPublishRTMPConfiguration extends KalturaLiveStreamPushPublishConfiguration {
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
            objectType: { type: 'c', default: 'KalturaLiveStreamPushPublishRTMPConfiguration' },
            userId: { type: 's' },
            password: { type: 's' },
            streamName: { type: 's' },
            applicationName: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaFJUTVBDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoUlRNUENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdkosTUFBTSxvREFBcUQsU0FBUSx5Q0FBeUM7Ozs7SUFPeEcsWUFBWSxJQUF5RDtRQUVqRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbiwgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaFJUTVBDb25maWd1cmF0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbkFyZ3Mge1xuICAgIHVzZXJJZD8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0c3RyZWFtTmFtZT8gOiBzdHJpbmc7XG5cdGFwcGxpY2F0aW9uTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbiBleHRlbmRzIEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uIHtcblxuICAgIHVzZXJJZCA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWUgOiBzdHJpbmc7XG5cdGFwcGxpY2F0aW9uTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaFJUTVBDb25maWd1cmF0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0cmVhbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBwbGljYXRpb25OYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hSVE1QQ29uZmlndXJhdGlvbiddID0gS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaFJUTVBDb25maWd1cmF0aW9uOyJdfQ==