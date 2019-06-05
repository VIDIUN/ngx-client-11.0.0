/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SharepointExtensionIsVersionSupportedActionArgs() { }
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverMajor;
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverMinor;
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverBuild;
/**
 * Build request payload for service 'sharepointExtension' action 'isVersionSupported'.
 *
 * Usage: Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'sharepointExtension' action 'isVersionSupported'.
 *
 * Usage: Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
SharepointExtensionIsVersionSupportedAction = /** @class */ (function (_super) {
    tslib_1.__extends(SharepointExtensionIsVersionSupportedAction, _super);
    function SharepointExtensionIsVersionSupportedAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    SharepointExtensionIsVersionSupportedAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'kalturasharepointextension_sharepointextension' },
            action: { type: 'c', default: 'isVersionSupported' },
            serverMajor: { type: 'n' },
            serverMinor: { type: 'n' },
            serverBuild: { type: 'n' }
        });
        return result;
    };
    return SharepointExtensionIsVersionSupportedAction;
}(KalturaRequest));
/**
 * Build request payload for service 'sharepointExtension' action 'isVersionSupported'.
 *
 * Usage: Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { SharepointExtensionIsVersionSupportedAction };
if (false) {
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverMajor;
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverMinor;
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverBuild;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVwb2ludEV4dGVuc2lvbklzVmVyc2lvblN1cHBvcnRlZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2hhcmVwb2ludEV4dGVuc2lvbklzVmVyc2lvblN1cHBvcnRlZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQWlFLHVFQUF1QjtJQU1wRixxREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxrRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNoRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NEQTdDTDtFQW9CaUUsY0FBYyxFQTBCOUUsQ0FBQTs7Ozs7Ozs7O0FBMUJELHVEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVwb2ludEV4dGVuc2lvbklzVmVyc2lvblN1cHBvcnRlZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZXJ2ZXJNYWpvciA6IG51bWJlcjtcblx0c2VydmVyTWlub3IgOiBudW1iZXI7XG5cdHNlcnZlckJ1aWxkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2hhcmVwb2ludEV4dGVuc2lvbicgYWN0aW9uICdpc1ZlcnNpb25TdXBwb3J0ZWQnLlxuICpcbiAqIFVzYWdlOiBJcyB0aGlzIEthbHR1cmEtU2hhcmVwb2ludC1TZXJ2ZXItUGx1Z2luIHN1cHBvcnRzIG1pbmltdW0gdmVyc2lvbiBvZiAkbWFqb3IuJG1pbm9yLiRidWlsZCAod2hpY2ggaXMgcmVxdWlyZWQgYnkgdGhlIGV4dGVuc2lvbilcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBib29sZWFuXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFyZXBvaW50RXh0ZW5zaW9uSXNWZXJzaW9uU3VwcG9ydGVkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8Ym9vbGVhbj4ge1xuXG4gICAgc2VydmVyTWFqb3IgOiBudW1iZXI7XG5cdHNlcnZlck1pbm9yIDogbnVtYmVyO1xuXHRzZXJ2ZXJCdWlsZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTaGFyZXBvaW50RXh0ZW5zaW9uSXNWZXJzaW9uU3VwcG9ydGVkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdrYWx0dXJhc2hhcmVwb2ludGV4dGVuc2lvbl9zaGFyZXBvaW50ZXh0ZW5zaW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnaXNWZXJzaW9uU3VwcG9ydGVkJyB9LFxuXHRcdFx0XHRzZXJ2ZXJNYWpvciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZXJ2ZXJNaW5vciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZXJ2ZXJCdWlsZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=